const AWS = require('aws-sdk')
const db = new AWS.DynamoDB({
    region: 'us-east-2',
    apiVersion: '2012-08-10'
})

function map2TableName (lst) {
  return lst.map(
    name => ({
      TableName: name
    })
  )
}

function map2describe (p) {
  return p.map(
    params => db.describeTable(params).promise()
  )
}

const listedTables = db.listTables().promise().then(
  e => e.TableNames
).then(
  map2TableName
).then(
  map2describe
).then(
  // Promise.all.bind(Promise)
  lp => Promise.all(lp)
).then(console.log).catch(console.error)

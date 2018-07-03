const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({
  region: 'us-east-2',
  apiVersion: '2012-08-10'
})

const block = {
  S: 'conduction'
}

const TableName = 'sciencefit'

exports.handler = async Item => {
  const id = Date.now().toString()
  
  Item.block = block

  Item.element = {
    S: 'user' + '_' + id
  }
  
  await dynamodb.putItem({
    Item,
    TableName
  }).promise().then(console.log).catch(console.error)
  
  return id
}
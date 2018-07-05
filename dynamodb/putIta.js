const AWS = require('aws-sdk')
const db = new AWS.DynamoDB({
  region: 'us-east-2',
  apiVersion: '2012-08-10'
})

const TableName = 'sciencefit'
const Item = {
  block: {
    S: 'id_' + '1530813404264'
  },
  element: {
    S: 'version_' + String(Date.now())
  },
  role: {
    S: 'devop'
  },
  name: {
    S: 'itacirgabral'
  },
  password: {
    S: String(Math.random()).slice(2, 8)
  }
}
const ConditionExpression = 'attribute_not_exists(#b)'
const ExpressionAttributeNames = {
'#b': 'block'
}
// https://stackoverflow.com/questions/32833351/dynamodb-put-item-if-hash-or-hash-and-range-combination-doesnt-exist
const ReturnConsumedCapacity = 'TOTAL'
const ReturnItemCollectionMetrics = 'SIZE'

db.putItem({
  Item, 
  TableName, 
  ConditionExpression,
  ExpressionAttributeNames,
  ReturnConsumedCapacity,
  ReturnItemCollectionMetrics
}).promise().then(console.log).catch(console.error)

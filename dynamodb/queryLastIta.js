const AWS = require('aws-sdk')
const db = new AWS.DynamoDB({
    region: 'us-east-2',
    apiVersion: '2012-08-10'
})

const TableName = 'sciencefit'
const Limit = 1
const ScanIndexForward = false
const KeyConditionExpression = '#b = :id'
const ExpressionAttributeNames = {
  '#b': 'block'
}
const ExpressionAttributeValues = { 
  ':id':  {
      'S': 'id_1530813404264'
  }
}

db.query({
  TableName,
  Limit,
  ScanIndexForward,
  KeyConditionExpression,
  ExpressionAttributeNames,
  ExpressionAttributeValues
}).promise().then(console.log).catch(console.error)

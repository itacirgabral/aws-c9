const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({
  region: 'us-east-2',
  apiVersion: '2012-08-10'
})

const block = {
  S: 'condition'
}

const TableName = 'sciencefit'

exports.handler = async Key => {
    Key.block = block
    console.log(Key)
    const data = await dynamodb.getItem({Key, TableName}).promise()
    return data.Item
}
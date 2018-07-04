const AWS = require('aws-sdk')

AWS.config.apiVersions = {
  sts: '2011-06-15'
}

const sts = new AWS.STS()

 sts.getCallerIdentity().promise().then(console.dir).catch(console.error)

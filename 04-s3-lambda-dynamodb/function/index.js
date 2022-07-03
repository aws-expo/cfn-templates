const AWS = require('aws-sdk');

const s3 = new AWS.S3();
const dynamoDB = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});

const { TABLE_NAME, TARGET_BUCKET } = process.env;

exports.handler = async function(event, context) {
  console.log('Received event: ', JSON.stringify(event, null, 2));

  const { bucket, object } = event.Records[0].s3;

  const getObjectParams = {
    Bucket: bucket.name,
    Key: decodeURIComponent(object.key.replace(/\\+/g, ' ')),
  };

  const putItemParams = {
    TableName: TABLE_NAME,
    Item: {
      ImagePath: {
        S: object.key
      }
    },
    ReturnConsumedCapacity: 'TOTAL'
  };

  const putItemResponse = await dynamoDB.putItem(putItemParams).promise().catch(() => null)

  if (!putItemResponse) {
    console.log('Failed to put item in DynamoDB');
    return;
  }

  console.log('PutItem response: ', JSON.stringify(putItemResponse, null, 2));

  const getObjectResponse = await s3.getObject(getObjectParams).promise().catch((err) => {
    console.log('Failed to get object from S3: ', JSON.stringify(err, null, 2));
    return null;
  });

  if (!getObjectResponse) {
    console.log('Failed to get object from S3');
    return;
  }

  console.log('ETag of file: ', getObjectResponse.ETag);

  const putObjectResponse = await s3.putObject({
    Bucket: TARGET_BUCKET,
    Key: object.key,
    Body: getObjectResponse.Body,
    ContentType: getObjectResponse.ContentType,
    ContentLength: getObjectResponse.ContentLength
  }).promise().catch((err) => {
    console.log('Failed to put object from S3: ', JSON.stringify(err, null, 2));
    return null;
  });

  if (!putObjectResponse) {
    console.log('Failed to put object from S3');
    return;
  }

  console.log('Uploaded to target bucket');

  console.log(putObjectResponse.ETag);
  context.succeed(putObjectResponse.ETag);
};

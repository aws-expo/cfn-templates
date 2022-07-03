## cfn-templates

To generate CloudFormation file:

https://github.com/0x4447/0x4447-cli-node-grapes

To deploy cloudformation stack:

```
$ aws cloudformation deploy --template-file ./CloudFormation.json --stack-name my-stack --parameter-overrides BucketName=awesome
```

### Getting Started

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.html

### S3 Configuration
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html

### Lambda Configuration
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html

### Role Configuration
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html

### CodePipeline Configuration
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html

### DynamoDB Configuration
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html

## cfn-templates

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

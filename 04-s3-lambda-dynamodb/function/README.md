# Resources

- documentation for the CLI: https://docs.aws.amazon.com/cli/latest/reference/lambda/update-function-code.html
- documentation how to work with Lmabda and NodeJS: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html

## The whole flow

1. `npm install`
1. `zip -r code.zip .`
1. `aws lambda update-function-code --function-name $FUNCTION_NAME --zip-file fileb://./code.zip`
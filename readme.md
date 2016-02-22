# Email Activity Reporter
This repository contains the node js code for AWS Lambda function to handle the API calls for different Mandrill events.
Currently its been used to update the email subscriber's information if email sent to them is bouncing.

## Workflow
Workflow of the library:

1. Mandrill receives the bounce.
2. Mandrill sends a postback through a webhook to zapier.com. (Configured in mandrill)
3. Zapier is configured to receive the postback and its data. Thereafter it invokes the lambda function with the postback data.
4. This lambda function parses the data and updates the users which are bounced with the help of API calls.
5. Information about the executed lambda functions on every bounce can be found in cloud watch.

### Setup
- You need Grunt installed globally:

```sh
    $ npm install -g grunt
```
- Take the clone of the repository

- install npm packages
```sh
    $ npm install
```
- create .env file with the following settings

    *  KORTINGSCODE_API_URL  = URL
    *  FLIPIT_API_URL       = URL
    *  API_KEY              = API_KEY

- follow the gruntfile.js for various available test and deply command



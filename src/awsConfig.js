import AWS from "aws-sdk";

//configuracion de AWS
AWS.config.update({
    region:'us-east-1'
});

//configuracion de dynamoDB
const dynamoDB = new AWS.DynamoDB.DocumentClient();//instancia de la base de datos de dyanmoDB
const dynamoTableName = "productos-table";

//configuracion del servicio de mensajeria SNS
const sns = new AWS.SNS(); //instancia del servicio SNS
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:755234995471:NotificationsProducts";

export {dynamoDB, dynamoTableName, sns,SNS_TOPIC_ARN};
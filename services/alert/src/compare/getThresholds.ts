import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const getStockData = async (userId: string, ticker: string) => {
  const dynamodb = new DynamoDBClient({region: 'us-east-1'});
  const ddb = DynamoDBDocumentClient.from(dynamodb);
    const result = await ddb.send(
      new GetCommand({
        TableName: "users",
        Key: {
          userId,
          ticker
        },
      })
    );

return result.Item;
};
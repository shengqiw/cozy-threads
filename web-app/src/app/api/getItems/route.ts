import { shopItems } from "@/mockData/shopItems";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const filter = url.searchParams.get("filter");
  console.log("request filter", filter);
  /*
      Given more time I would have setup a dynamoDB table to store the shop items

        Pseudo code File for DB Service:

        import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
        import { 
        DynamoDBDocumentClient, 
        QueryCommand 
        } from "@aws-sdk/lib-dynamodb";

        const client = new DynamoDBClient({ region: "us-east-1" });
        const docClient = DynamoDBDocumentClient.from(client);

        const docClientParams = {
            TableName: "items",
            IndexName: "status-index",
            KeyConditionExpression: "#status = :status",
            FilterExpression: "#category = :category",
            ExpressionAttributeNames: {
                "#status": "status",
                "#category": "category"
            },
            ExpressionAttributeValues: {
                ":status": "available", 
                ":category": filter
            }
        }

        const response = await docClient.send(new QueryCommand(docClientParams));
        return response.Items;

    */

  const filteredItems = !filter
    ? shopItems
    : shopItems.filter((item) => item.category === filter);

  return Response.json({
    items: filteredItems,
  });
};

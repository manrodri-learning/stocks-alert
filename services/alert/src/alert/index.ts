import { v4 as uuidv4 } from 'uuid';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";


export interface Item {
    ticker: string; // ticker is unique
    price: number;
    earningsPerShare: number;
    priceToEarnings: number;
}

// create an Alert class
export class Alert {
  name: string;
  item: Item;
  // topicArn is an class attribute
  private topicArn: string = 'boohoo';
  public id: string | undefined = undefined
  // createAt is a timestamp
  public createdAt: number = Date.now()
  public updatedAt: number = Date.now()

  // create a method
  public update = () => {
    this.updatedAt = Date.now()
  }

  // create a constractor
   constructor(name: string, item: Item) {
    this.name = name;
    this.item = item;

  }

   json = () => {
    return {
        id: this.id,
        name: this.name,
        item: this.item,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        topicArn: this.topicArn,
        message: `price threshold reached!\n Price: ${this.item.price}`
    }
  }

  // create a method taht send alert.json to an sns topic
  public send = async () => {
    const client = new SNSClient({ region: "us-east-1" });
    const command = new PublishCommand({
        TopicArn: this.topicArn,
        Message: JSON.stringify(this.json()),
})
    const response = await client.send(command)
    console.debug('response', response)
    console.log('alert sent')

  }
}

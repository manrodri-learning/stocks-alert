import json
import yfinance as yf





def hello(event, context):
    msft = yf.Ticker("MSFT")

    # get all stock info
    # msft.info
    body = {
        "message": "Go Serverless v3.0! Your function executed successfully!",
        "input": msft.info,
    }

    return {"statusCode": 200, "body": json.dumps(body)}
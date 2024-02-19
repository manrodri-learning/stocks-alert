# stocks-alert

## Goal

An app that helps me to produce financial reports.

Day 1
- It takes a list of stocks to track data as input
- Stores financial data to a DB of the input stocks
- It can send alerts when some thresholds are reached

Day 2 

- It can generate financial reports


Data:

```json
User: {
    UserId: jhon@example.com,
    Stocks: [
        {
            ticker: 'foo', price: 23.23, e/s: 3.56, p/e: 67.16
        },
        ...
    ]
}
```

## Comparing data about stocks and sending notifications to the user

- A process that runs on schedule
- loops over the users' stocks
- compare current values to thresholds
- send alerts if a threshold has been reached


There are clearly two different parts that can be decopuled: 

1. Comparing stocks metrics to current values
2. Sending Alerts

### Sending Alerts

- I'll use AWS SNS as users will need to subscribe to the service (at least on day 1)
  - It is free and easy to implement
- I'll use Object orientation: Create an Alert class


import * as sns from "@aws-sdk/client-sns"
import { Item, Alert } from './index'


describe('Alert Class', ()   =>{
    const now = new Date(Date.UTC(2017, 1, 14)).valueOf()
    Date.now = jest.fn(() => now)

        const mockPublishCommand = jest.fn()
    // mock client-sns
    const snsMock = jest.spyOn(sns, 'PublishCommand')

     const item: Item = {
        ticker: 'AAPL', // ticker is unique
        price: 34.23,
        earningsPerShare: 3.23,
        priceToEarnings: 54.21
     }
      
     it('should create an alert', async () => {

        const alert = new Alert('Hello world!', item)
        expect(alert).toBeDefined()
    })

    it('json method', () => {
        const alert = new Alert('Hello world!', item)
        const expectedJson = {
            
            name: 'Hello world!',
            item,
            createdAt: now,
            updatedAt: now,
            topicArn: 'boohoo',

        }
        expect(alert.json()).toEqual(expectedJson)
    })

    it('should call mock when send method is called', async () => {
                const alert = new Alert('Hello world!', item)
        alert.send()
        expect(snsMock).toHaveBeenCalled()
    //    expect(sns.PublishCommand).toHaveBeenCalledWith({
    //         TopicArn: 'boohoo',
    //         Message: JSON.stringify(alert.json())
    //    })
    })
})

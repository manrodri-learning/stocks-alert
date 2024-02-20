// import {main} from './index'

describe('main', () => {
    const OLD_ENV = process.env;
    // const alertMock = jest.fn()

    beforeEach(() => {
        jest.resetModules() // Most important - it clears the cache
        process.env = { ...OLD_ENV }; // Make a copy
      });
    
      afterAll(() => {
        process.env = OLD_ENV; // Restore old environment
      });

    // const item = {
    //     ticker: 'APPL',
    //     price: 23.33,
    //     earningsPerShare: 1.34,
    //     priceToEarnings: 76.32
    // }


    test('will receive process.env variables', () => {
        // Set the variables
        process.env.NODE_ENV = 'dev';
        process.env.PROXY_PREFIX = '/new-prefix/';
        process.env.API_URL = 'https://new-api.com/';
        process.env.APP_PORT = '7080';
        process.env.USE_PROXY = 'false';
        
        // ... actual testing
        expect(process.env.API_URL).toEqual('https://new-api.com/')
      });

    // it('main should be defined',async () => {
    //    process.env.ITEM = "foo"
    //     await main()
    //     expect(main).toBeDefined()
    // })
})


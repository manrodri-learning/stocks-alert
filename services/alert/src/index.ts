import { Alert, Item  } from './alert/'


const item = JSON.parse(process.env.item!) as Item
const metricsToAlert = process.env.metricsToAlert!.split(',')


const alert = new Alert(`${item.ticker}-alert`, item)
alert.send()
.then(res => console.log(res))
.catch(err => console.error(err))
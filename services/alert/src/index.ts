import { Alert, Item  } from './alert/'

console.log(JSON.stringify(process.env.ITEM))
const item = JSON.parse(process.env.ITEM!) as Item

export const main =async () => {
    console.log(Alert.prototype)
    
    const alert = new Alert(`-alert`, item)
    try{
        const response = await alert.send()
    } catch(error: any){
        console.log(error)
        throw new Error(error)
    } 
}   

main()

// interface product {
//     name:string,
//     price:number,

// }

// function myPro(pt:product) {
//     console.log(pt.name)
//     console.log(pt.price)
// }


// myPro({name :"ghari shoph",price : 222})


interface data {
    name:string,
    details():string,
    discount(coponName:string,offPrice:number):number,
}

interface data {
    age : number,
}

interface admin extends data{
    role:string
}
const user : admin = {
    name:"",
    details:()=>{
        return "hello world"
    },
    discount:(name:"golden tiket",off:10)=>{
        return 110
    },
    age:32,
    role:"user"

}
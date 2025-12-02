
function addTwo(num: number): number {
    return num + 5
}
addTwo(2)
function getName(val: string) {
    return val.toUpperCase()
}

function getDetails(email: string, name: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isgood: boolean) => { }


// let getVal = (myval: number) => {
//     if (myval > 5) {
//         return true
//     }

//     return "chal haat"
// }

let heros = ["krish", "chota don", "bara don"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

let geterr = (errMsg: string): void => {
    console.log(errMsg)
    // return ""
}


let handleError = (err: string): never => {
    throw new Error(err)
}

loginUser("krish", "krish@00", false)
getDetails("cool", "don", true)
getName("mahesh")
export { }
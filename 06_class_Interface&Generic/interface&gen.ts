// =============>>>   Interface  -> its a template

// interface Bank {
//     branch: string
//     city: string
// }

// const user: Bank = {
//     branch : "state bank of india",
//     city : "dehli"
// }

// console.log(user.branch)


//----------------------------------

// interface Bank {
//     readonly branch: string
//     city: string
// }

// const user: Bank = {
//     branch : "state bank of india",
//     city : "kerla"
// }

// user.branch = "asia"
// user.city = "utterpardesh"

//---------------------->>   Add Value in interface

// interface Bank {
//     readonly branch: string
//     city: string
// }

// interface Bank {
//     dist: string
// }

// const user2: Bank = {
//     dist: "Uttrakhand",
//     branch: "tamil",
//     city: "mumbai"
// }

// ------------------>>  using function in interface

// interface sayhello {
//     namaste(): void
//     hello(): void
// }

// const greet: sayhello = {
//     namaste() {
//         console.log("namaste guru ji");
//     },
//     hello() {
//         console.log("hello everyone")
//     }
// }


// --------------->>  index signature In Interface

// interface gradeCard {
//     [sub: string]: number  // signature
// }

// const tom: gradeCard = {
//     math: 80,
//     chemistry: 70,
//     english: 85,
//     computer: 60,
//     physcis: 90,

// }



// ===============>>   Generics -> it is also a template but it reusable


function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("car")
wrapInArray(100000)
wrapInArray(true)
wrapInArray({ modle: "bmw M5" })


function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair(5, "m5")
pair("m4", 4)
pair("hero", "zero")


// =====================>>>   generics in Interface

interface somthing<S> {
    value: S
}

const tell: somthing<string> = {
    value: "hero"
}
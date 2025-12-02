"use strict";
// function printId(id: string | number ){
//     console.log(id)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// printId(123)
// printId("123")
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id);
    }
}
printId("mahesh");
printId(234);

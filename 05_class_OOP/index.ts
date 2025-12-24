//  -============>>>  public  -> access anywhere

// class room {
//     public name:string
//     floor:number
//     constructor(name:string,floor:number){
//         this.name = name;
//         this.floor = floor;
//     }
// }

// const room12 = new room("class 12th",2)


// -============>>>   protected -> access within the class & inherite class can use

// class room {
//     protected name:string
//     floor:number
//     constructor(name:string,floor:number){
//         this.name = name;
//         this.floor = floor;
//     }
// }

// const room12 = new room("class 12th",2)

// class college extends room {
//    getroomName(){
//     return this.name;
//    }
// }

// -============>>>    private -> only access within the class

// class room {
//     private name: string
//     #floor: number
//     constructor(name: string, floor: number) {
//         this.name = name;
//         this.#floor = floor;
//     }
//     getname(): string {
//         return this.name
//     }
//     getfloor(): number {
//         return this.#floor
//     }
// }

// -============>>> geter and seter

class room {
    private tom = "hero";
    get _tom() {
        return this.tom
    }

    set _tom(name:string){
         this.tom = name
    }
}

const room5 = new room()
room5._tom = "hero"
console.log(room5._tom)
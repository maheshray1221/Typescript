class User {
    email: string
    name: string
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}
const user1 = new User("mh.com", "mahesh")

console.log(user1.name)
console.log("hero")
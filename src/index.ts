type Role= "admin" | "user" | "superuser"

function redirect (role:Role): void {
    if(role === "admin"){
        console.log("this is admin")
        return
    }

    if(role === "user"){
        console.log("this is user")
        return
    }

    role
}


function hotel1 (order:{type:string, price:number, id:number}){
    console.log(order);
    
}


function hotel2 (order:{type:string; price:number; id:number}){
    console.log(order);
    
}


type Chai = {
    name:string;
    sugar?:number;
}

type Coffee = {
    type:string;
    size: "small" | "large";
}

type Order = Chai & Coffee

const cup: Order = {
    name:"newCup",
    type:"order",
    size:"small"
}


type Cpu = {
    id? : number;
    cores?:number;
    threads?:number
}

const makeOrder = (requirement:Cpu) => {
    console.log(requirement);
}

const logOrder1 = (id?:number) =>{
        //the property id is optional(but if it has id then it will be of type number, )
}

const logOrder2 = (id:number = 10 ) =>{
        //default value given if no value recieved etc.
}

const name:string[] = ["h","4"] //array of string
const number:number[] = [5,4] //array of number

const newlist: Array<string> = ["new", "new2"]
//here we can also add custom things


type obj = {name:string; age:number}
const newcustomlist: Array<obj> = [{name:"hi", age:5}]

const newlist2:obj[] = [{name:"hi", age:5}]

enum status1 {
    PENDING,
    SERVED,
    CANCELLED
}



enum status2 {
    PENDING = "100",
    SERVED = "101",
    CANCELLED = "102"
}

enum status3 {
    PENDING = 100,
    SERVED,
    CANCELLED
}





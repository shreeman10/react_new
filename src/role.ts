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


type Coffee = {
    type:string;
    size: "small" | "large";
}



type Cpu = {
    readonly id : number;
    cores:number;
    threads:number
}

const config:Cpu = {
    id:15,
    cores:4,
    threads:8,
}
config.cores = 6

console.log(config);



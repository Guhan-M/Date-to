class person{
constructor(name,age,area,work){
    this.name=name;
    this.age=age;
    this.area=area;
    this.work=work;
}
    getname(){
    return(`The name of the person ${this.name}`)
}
    getage(){
    return(`The age of the person ${this.age}`)
}
    getarea(){
        return(`The area of the person${this.area}`)
    }
    getwork(){
        return(`The person work  :${this.work} `)
    }
}
let fin=new person("Aravind",21,"Omr","software developer")
console.log(fin)
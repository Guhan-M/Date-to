class circle{
constructor(radius,color){
   this.double=radius;
   this.string=color;
   }
    getRadius(){
        return(`this radius of the circle is: ${this.double}`)
    }
    getcolor(){
        return(`The color of the circle is: ${this.string}`)
    }
    setradius(radi){
        return(this.double=radi);
    }
    setcolor(colo){
        return(this.string=colo);
    }
    getarea(){
        return(`Area of the circle: `)+(3.14*(this.double*this.double))
    }
    getcircumference(){
        return(`circumference of the circle: `)+((2)*(3.14)*(this.double))
    }

}
let fina=new circle(40,"red")
fina.setradius(50);
fina.setcolor("Yellow")

console.log(fina.getRadius())
console.log(fina.getcolor())
console.log(fina.getarea())
console.log(fina.getcircumference())
class uber{
constructor(Rate,distance,waitingtime){
this.Rate=Rate;
this.distance=distance;
this.waitingtime=waitingtime;
    }
getridedetails(){
    let price=(`The rate of kilometer is ${this.Rate} and your total distance is ${this.distance} KM and Waiting time period is ${this.waitingtime} Minutes `)
    return price;
}
    getpricedetails(){
        let Hr=(`Total ride amount is:`)+((this.Rate*this.distance)+(2*this.waitingtime))
        return Hr;
    }
    setdistance(dis){
        this.distance=dis;
    }
}

const cs=new uber(5,50,12);
cs.setdistance(100);
console.log(cs.getridedetails());
console.log(cs.getpricedetails()) 

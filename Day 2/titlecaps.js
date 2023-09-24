let arr=["guhan"].join(" ").split("")
let up=function(arr){
    let upp=arr[0].toUpperCase();
    let em=[];
    for(i=1;i<arr.length;i++){
    em+=arr[i]}
 return(arr=upp+em)
}
up(arr)
console.log(up(arr))

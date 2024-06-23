//for each
arr7=['deepa','suresh','raj']
arr7.forEach(print)//method objt invoke
function print(val){
    console.log(val.toUpperCase())
}
//arrow function
arr7.forEach(val=>console.log(val))//arrow function in one line execution
//omggggggggggggggggggggggg
//arr7.forEach(val,index,arr7)=>{arr7[index]=val.toUpperCase()}

//
greet('raj');
greet();
function greet(name="there"){
    console.log('hi',name)
}
greet('ram');
greet();
//recursion

//function calling itself
function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
    n*factorial(n-1)
}
console.log(factorial(5))
console.log(factorial);

let arr1=[5,6,7,8,8,9,8]
let findSum=function(arr1)
{
    let sum=0
    for(let val of arr1){
        sum += val
    }
    return sum
}
console.log(findSum(arr1));

let volume=function(l,b,h){
    return l*b*h
}
//arrow function
let volume1=(l,b,h)=>{return l*b*h}

let findSum1=(arr1)=>{ let sum=0
    for(let val of arr1){
        sum += val
    }
    return sum}
    console.log(findSum1(arr1))

    //u can give empty parathesis in case of (arr1)  ()

  // if only one line u can remoe return and paranthessi also

  let area1=r=>Math.PI*r*r
  console.log(area1(7))


  console.clear()
  //what ever number given it should be said sum of numbers
//rest operatoers
  let prod=function(...args){//for so many aguments it will store as array
  //console.log(args)
  let result=1//result should be defined
  for(let val of args)
     result*=val
 return result
  }
  console.log(prod(7,7,89,79))
//with out any arguments

  let prod2=function(){
    let result=1
    for(i=0;i<arguments.length;i++)
        result*=arguments[i]
    return result
    console.log(arguments)
  }
  console.log(prod2(6,7,8,8))
  
  //generators generate values one by one
  //infinete data can be genearated6

  //forecach

  arr3=['deepa','rkkpl','jrfj']
  arr3.forEach(print)//method invoke by object invoke
  function print(val)
  {
    console.log(val)
  }
//BIG DOUBT
/*
  arr5=['ece','it','cse']
  arr5.forEach(val=>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendchild(opt)
  });
  */
  //MAP REDUE FILTER
  /*map executes call back array for each array element
  and returns the new array*/
let priceUSD=[20,35,17]
let priceINR=priceUSD.map(x=>x*83)
console.log(priceINR)
//anotherb one
//map sends one one value to it and it do the task
priceINR=priceUSD.map(convert)
function convert(val){
    return val*83
}
console.log(priceINR)

const input=[{name:'john',age:15},
          {name:'sha',age:90},
           {name:'jao',age:89},
           {name:'jpoe',age:20}

]
//to get it seprate we can use map
const ages=input.map(x=>x.age)
console.log(ages);
const names=input.map(x=>x.name)
console.log(names);

//filter--returns new array by checking each value of orginal arr 
//using call back function

let cost=[35,67,89,89,1000]
//less than 100 should only come
let  lessThan100=cost.filter(/*callback*/x=>x<100)
console.log(lessThan100)
let greatthan=cost.filter(x=>x>100)
console.log(greatthan)

//REDUCE--executes reducesr callback and returns accumlated result
//cost=[35,234,12,34,54,123]
//let cartTotal=cost.reduce((/*call back function*/total,el)=>total+el)
/*we have to give paramters(total,el)
console.log(cartTotal)
/*flat method we can covert into 1d array
if i change it to reduce */

function x(){
  let a=7;
  console.log("a print");
   function y(){
    console.log(a);
   }
   y();
}
x();
//fucntional programming 

const radius=[3,34,5,6,6]
const area=function(radius){
  return Math.PI*radius*radius;
}
const circum=function(radius){
  return 2*Math.PI*radius;
}
const diameter=function(radius){
  return 2*radius;
}


const calucate=function(radius,logic)
{
  const output=[];
  for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]));
}
return output;
};
console.log(calucate(radius,area));
console.log(calucate(radius,circum));
console.log(calucate(radius,diameter));
//map function
const list=[6,7,8,9,6];

const output=list.map(function double(x){
  return x*x;
} );
console.log(output);
/*
const output1=list.map(x) => x * x;
console.log(output1);*/
//u should nt write like this
//u have to write like this

const output1=list.map(x=>x*x)
console.log("output==",output1);
function binary(x){
  return x.toString(2)
}
const out=list.map(binary);
console.log(out);

/*by arrow function*/

const out1=list.map(x =>x.toString(2));
console.log(out1);

//we can acces the elements in an array one by one
// and we can transform that array  into tuple or triple or binary or ur wish


/*filterhere u can filter thearray that u want from the array*/
const fil=list.filter(function great(x)
{
  if(x<8)
    {
     console.log(print);
     return x;
    }
    
})
console.log(fil)

//arrow function

const put=list.filter(x=>x>8);//arrow function
//just x an argument arrow function logic filter 
//of numbers than writing a function
console.log(put);
console.clear()

/*REDUCE*/
const arr9=[5,3,4,5,6]
function findSum5(arr9){
  let sum=0;
  for(let i=0;i<arr9.length;i++){
    sum+=arr9[i];
  }
  return sum;
}
console.log(findSum5(arr9));

//now by using reduce function

const res=arr9.reduce(function(acc,curr){
  acc=acc+curr;
  return acc;
});
console.log(res);

function findMax(arr9){
  let max=0;
  for(let i=0;i<arr9.length;i++){
    if(arr9[i]>max){
      max=arr9[i]
    }
  }
  return max;
}
console.log(findMax(arr9))

//reduce

const res1=arr9.reduce(function(max,curr){
  if(curr>max)
    max=curr;

  return max;
});
console.log(res1);


const cart=["shoes","lojjj","bhhbjdj"]
api.createOrder(cart,function(){
  api.proceedTopayment(function(){
    api.showOrder
  })
})


//promises
//////////////////////

const cart1=["shoes","pants","kurtas"]
createOrder(cart1);
proceedTopayment(orderId);





fetch()

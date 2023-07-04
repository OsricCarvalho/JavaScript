// let list = ["random", "random", "random"]
// console.log(list)

// console.log(list.length)

// list.pop()
// console.log(list)

// list.push("new word")
// console.log(list)

// list[0]= "swap"
// console.log(list)  

// list.reverse()
// console.log(list)

// const car = ["name", "model", "brand", "reg"]
// car[0] ="ford"
// console.log(car[0])
// console.log(car[1])

// let car1 = {make:"model3", brand:"tesla", reg:"we12CJW" }
// let car2 = {make:"model4", brand:"audi", reg:"QW12CJW" }
// let car3 = {make:"M5", brand:"BMW", reg:"JW15UWE" }
// let car4 = {make:"A5", brand:"Audi", reg:"JW15UWE" }

// console.log(car1.reg);
// console.log(car2.reg);
// console.log(car3.reg);
// console.log(car4.reg);

// car1.reg = "ggggg"
// console.log(car1.reg);

// car1.driver = "Andrew"
// car2.driver = "Andrew"
// car3.driver = "Andrew"
// car4.driver = "Andrew"

// console.log(car1.driver);

// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);

// counter = 0
// while (counter<1000){
//     console.log(counter)
//     counter++    
// }

// for (let i=0; i<=1000; i ++){
//     console.log(i)
// }

// counter = 1
// while (counter <=10)
// {
// count = 1
// while(count <=10) {      
//  console.log(count)
//  count ++
// } 
// counter ++
// }

// for (let i=0; i<=10; i ++){
//     for (let j =0; j<=10; j++){
//     console.log(j)
//     }
// }

// const numbers = [45, 4, 9, 16, 25];
// for (a in numbers) {
//     console.log (numbers)
//       }

// function square(g,fname,lname){
//         return g+fname+lname;
//         }
//         let output = square( "hello my name is ", "osric ", " cravalho")
//         console.log(output)

    // function Math (a,b,c)
    // {
                
    //     if (c === "Addition")
    //     {
    //      return a+b;
    //     }
    //     else if (c === "Multiplication")
    //     {
    //       return a*b;
    //     }
    //     else if (c === "Division")
    //     {
    //      return a/b;
    //     }
    //     else if (c === "Subtraction")
    //     {
    //     return a-b;
    //      }
                                                
    // }
    // let output = Math(1,2, "Addition");
    // console.log(output)

let x = 0;
let y = 1;
let output;

for (let i = 0 ; i<10; i++)
{
   
 output = x + y;
     x=y;
    y=output;       
    console.log(output)
}
          
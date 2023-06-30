// 1
//for (let a = 100; a <=200; a++){
//     console.log(a)
// }

//1
// let a = 100;
// while (a < 200) {
//   a++;
//   console.log(a);
// }



// for (let a = 100; a%2==0 )


// let a =100;

// 2
//while (a <= 200) {
//   if (a % 2 == 0) {
//     console.log("-");
//   } else {
//     console.log("*");
//   }
//   a++;
// }

//2 
//for (a=100; a<=200; a++)
// {
 
//     if (a%2==0){
//         console.log("-")
//     }

//     else {
//         console.log("*")
//     }
// }

// 3
//for (a = 1; a<=100; a++)
// {
//     console.log(a);
// }

// const d = new Date();
// let day = d.getDay();

//let dayWeek = 'Monday';
switch ("Monday") {
  case 1:
    console.log(` Monday`);
  case 2:
    console.log(` Tuesday`);
  case 3:
    console.log(` Wednesday`);
  case 4:
    console.log(` Thursday`);
  case 5:
    console.log(` Friday`);
    console.log("Its a weekday")
    break;

    case 6:
        console.log(` Saturday`);
        break;
    case 7:
         console.log(`Sunday`);
        break;
    
    default:
    console.error(`Excuse me?`);
    break;
}
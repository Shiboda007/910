
// let name = prompt("what is your name?").toUpperCase().trim()
// let age = prompt("how old are you?")
// let money = prompt("how much money do you have?")
// let people = prompt("How many people want to enter the club?")
// if(name[0] ==="A" && age >20 && age <=40 && money >100 && people < 10){
// alert('welcome');
// }
// else{
//     alert("go home");
// }

// let num = [1, 2, 3, 4, 5 ] 
// let all = +prompt (' ')
// if (num.length + all  <= 10) {
//      alert('Welcome')
//  } else { 
//      alert(' Go home')
// }
// let activeName = 'Alex'
// let activeAccount = 7777
// let activeMoney = 10000

// let nick = prompt('What is your name?')
// if (nick === activeName) {
//     let account = +prompt('Пожалуйста введите пароль!')
//     if (account === activeAccount) {
//         let money = +prompt('Сколько вы хотите обналичить?')
//         if (activeMoney >= money) {
//             alert("Welcome")
//         } else {
//             alert('Недостаточно средств!')
//         }
//     } else {
//         alert('Неверный пароль!')
//     }
// } else {
//     alert('Пользователь не найден!')
// }
// let end = prompt("Сколько cняли?")

// if(activeMoney - end){
//     alert(`У вас было ${activeMoney} У вас осталось ${activeMoney - end}`)
//     }


let numbers = [5,2,1,4,11,8,7,25, 37, 2,6,1];


// let isOdd = (num) => num % 2 !== 0;


// let odd = numbers.filter(isOdd);

// console.log(odd);


let even = (num) => num % 2 === 0;


let isEven = numbers.filter(even);

console.log(isEven);


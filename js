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
let userName = 'Alex'
let activeAccount = 7777
let activeMoney = 10000

let nick = prompt('What is your name?').toUpperCase().trim()
if (nick === userName) {
    let account = +prompt('Пожалуйста введите пароль!').trim()
    if (account === activeAccount) {
        let money = +prompt('Сколько вы хотите обналичить?').trim()
        if (activeMoney >= money) {
            alert("Welcome")
        } else {
            alert('Недостаточно средств!')
        }
    } else {
        alert('Неверный пароль!')
    }
} else {
    alert('Пользователь не найден!')
}

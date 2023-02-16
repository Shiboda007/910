let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader__items = document.querySelectorAll('.tabheader__items .tabheader__item')

function showTabs(n) {
    tabcontents.forEach(el => el.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

showTabs(0)


tabheader__items.forEach((item, idx) => {
    item.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))

        item.classList.add('tabheader__item_active')

        showTabs(idx)
    }
})

// kkal
let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman",
}


gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g') 

        userData.gender = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val
    }
})


actBtns.forEach(btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))    
        btn.classList.add('calculating__choose-item_active')

        let activeCount = btn.getAttribute('data-act') 

        let {active, gender, weight, height, age} = userData

        active = activeCount

        if(gender === 'woman') {
            let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

            resultView.innerHTML = Math.round(res * active)
        } else {
            let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age

            resultView.innerHTML = Math.round(res * active)
        }

    }
})

let deadline = 'February 2023 28 17:39'







function getTime(endtime) {

    const t = Date.parse(endtime) - Date.parse(new Date()),

      days = Math.round(t / (1000 * 60 * 60 * 24)),

      hours = Math.round((t / (1000 * 60 * 60)) % 24),

      minutes = Math.round((t / 1000 / 60) % 60),

      seconds = Math.round((t / 1000) % 60);




    return {

        t,

        days,

        hours,

        minutes,

        seconds

    }

}




function setTime(selector, endtime) {

    const timer = document.querySelector(selector),

        days = timer.querySelector('#days'),

        hours = timer.querySelector('#hours'),

        minutes = timer.querySelector('#minutes'),

        seconds = timer.querySelector('#seconds'),

        updateInt = setInterval(updateTime, 1000)







    function updateTime() {

        const t = getTime(endtime)




        days.innerHTML = t.days

        hours.innerHTML = t.hours

        minutes.innerHTML = t.minutes

        seconds.innerHTML = t.seconds




        if(t.t <= 0) {

            clearInterval(updateInt)

        }

    }




}




setTime('.timer',deadline)
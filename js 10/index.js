   let btnOn = document.querySelector('.on')
   let btnOff = document.querySelector('.off')
   let btnRnd = document.querySelector('.rnd')
   let btnReset = document.querySelector('.reset')
   let counterEl = document.querySelector('span')


function counter(action) {
    
   switch(action){
case 'ON':
    if(counterEl.innerHTML >= 15) return 
    counterEl.innerHTML++
break

case 'OFF':
    if(+counterEl.innerHTML === 0) return 
    counterEl.innerHTML--
break

case 'RND':
    counterEl.innerHTML = Math.floor(Math.random() * 15)
break

case 'RESET':
    counterEl.innerHTML = 0
break

default:
    console.log('ОШИБКА!');
break

   }
}

   btnOn.onclick = () => {
    counter('ON')
   }
   
   btnOff.onclick = () => {
    counter('OFF')
   }
   
   btnRnd.onclick = () => {
    counter('RND')
   }
   
   btnReset.onclick = () => {
    counter('RESET')
   }
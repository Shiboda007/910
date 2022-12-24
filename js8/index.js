// function maxName(...names) {
//     return names.reduce((a, b) => a.length > b.length ? a : b);
//   }
  
//   console.log(maxName('alex', 'samir', 'maximka'));



//В ручную создать функцию сорт с помощью циклов for of & while
function obratniySchet (numbers) {

    let num = []
        for(let i = 0; i < numbers.length; i++) {
         for(let j = i; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        num.push(numbers[i])
    }
    return num
    }
    console.log(obratniySchet([5, 2, 1, 4])); 

    


let arr = [
    {
        company: 'artel',
        budget: 1000,
        expenses: 500
    },
    {
        company: 'uztelecom',
        budget: 4000,
        expenses: 1700
    },
    {
        company: 'uzmotors',
        budget: 8000,
        expenses: 3500
    },
    {
        company: 'chopar',
        budget: 5000,
        expenses: 4000
    },
]

let max = arr.reduce((a,b) => {
    if (a.expenses > b.expenses) {
        return a
    } else { 
        return b
    }
})

let min = arr.reduce((a,b) => {
    if (a.expenses < b.expenses) {
        return a
    } else { 
        return b
    }
})


let total = arr.reduce((a,b) => {
    return a + b.expenses
}, 0)

let midle = total / arr.length

console.log(max.expenses);
console.log(min.expenses);
console.log(total);
console.log(midle);
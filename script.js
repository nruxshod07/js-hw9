let names = ['amir', 'zokir', 'ravshan', 'jamshud', 'alex', 'amir', 'amir']
let evenNamesCallBack = (name) => name.length % 2 === 0
let evenNames = names.filter(evenNamesCallBack)
let oddNamesCallBack = (name) => name.length % 2 !== 0
let oddNames = names.filter(oddNamesCallBack)
let arrLength = evenNames.length - oddNames.length
if (arrLength > 0) {
alert("Четных больше")
} else if (arrLength < 0) {
    alert("Нечетных больше")
} else (
    alert("оба равны")
)
let arr = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut au`tem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed:
            true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
    },w
    {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
    },
    {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
    },
    {
        "userId": 1,

        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
    },
    {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
    }, 

]

let a = {
    count: 0,
    arr: []
}

let aFilter = arr.filter((arrItem) => arrItem.completed === true)
a.count = a.count + aFilter.length
a.arr.push(aFilter)
console.log(a);

let b = {
    count: 0,
    arr: []
}

let bFilter = arr.filter((arrItem) => arrItem.completed === false)
b.count = b.count + bFilter.length
b.arr.push(bFilter)
console.log(b);

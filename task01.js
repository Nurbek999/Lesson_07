'use strict';

let allStudents = ['Вася', 'Саня', 'Аня', 'Гуля', 'Арман'];
let failedStudents = ['Саня','Гуля','Арман'];

const filter =  (arr1, arr2) => {
    return arr1.filter(i=>!arr2.includes(i))
    .concat(arr2.filter(i=>!arr1.includes(i)))
}


console.log('Поступившие студенты: ', filter(allStudents,failedStudents));
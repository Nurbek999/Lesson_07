'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, m) =>{
    for (const i in arr) {
        arr[i] = m + ' ' + arr[i];
    }
    return arr;
}

console.log('', addPrefix(names, 'Mr'));
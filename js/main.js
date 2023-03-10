'use strict';

/*
----------
Functions
----------
*/

function createCell(element1, element2) {
    const cell = document.createElement(element1);
    cell.classList.add(element2);
    return cell;
};

function numberValue(item, value) {
    return item.innerText = value
};

function appentToContainer(container, cell) {
    return container.append(cell);
};

function createStructure(container) {
    container.innerHTML = '';
    container.classList.replace('d-none', 'd-flex');

    const e = document.getElementById("difficult-select");
    let value = e.value;

    if (value === 'Easy') {
        for (let i = 1; i <= 100; i++) {
            const createdItem = createCell('div', 'cell');
            const container = document.getElementById('container');
            appentToContainer(container, createdItem);
            numberValue(createdItem, i);
        };
    };

    if (value === 'Medium') {
        for (let i = 1; i <= 81; i++) {
            const createdItem = createCell('div', 'cell-medium');
            const container = document.getElementById('container');
            appentToContainer(container, createdItem);
            numberValue(createdItem, i);
        };
    };

    if (value === 'Hard') {
        for (let i = 1; i <= 49; i++) {
            const createdItem = createCell('div', 'cell-hard');
            const container = document.getElementById('container');
            appentToContainer(container, createdItem);
            numberValue(createdItem, i);
        };
    };
    return;
};
 
//generatore di numeri
function generateRandomUniqueNumber (range, outputCount) {
    
    let arr = [];
    
    for (let i = 1; i <= range; i++) {
        arr.push(i);
    };

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    };

    return result;
};

/*
---------
Main
---------
*/

const button = document.querySelector('.start-button');

button.addEventListener('click', function () {
    const container = document.getElementById('container');
    createStructure(container);
    console.log(generateRandomUniqueNumber(49, 16));

    const cell = document.querySelectorAll('.cell,.cell-medium,.cell-hard');
    let arrayClickedCell = [];

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', function () {
            arrayClickedCell.push(numberValue(cell, i + 1));
            console.log(arrayClickedCell);
            if (arrayClickedCell === generateRandomUniqueNumber(49, 16)) {
                // console.log(arrayClickedCell);
                cell[i].classList.add('bomb-cell');
            } else {
                cell[i].classList.add('clicked-cell');
            };
        });
    };
    console.log(arrayClickedCell);
    generateRandomUniqueNumber(49, 16);
});
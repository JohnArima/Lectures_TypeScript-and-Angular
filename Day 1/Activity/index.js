"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDirectory = exports.addDirectory = void 0;
var list = [];
const addDirectory = (d1, d2, d3) => {
    let newDirectory = { city: d1, country: d2, population: d3 };
    list.push(newDirectory);
    (0, exports.showDirectory)();
};
exports.addDirectory = addDirectory;
const showDirectory = () => {
    const tableBody = document.getElementById('table');
    let dataHtml = '';
    list.forEach((data) => {
        dataHtml += '<tr><td>' + data.city + '</td><td>' + data.country + '</td><td>' + data.population + '</td></tr>';
        tableBody.innerHTML = dataHtml;
    });
};
exports.showDirectory = showDirectory;
//Test 2
var isbn = ["1", "1", "1", "2", "2", "2", "3", "3", "3", "9", "X"];
var total1 = isbn[0] * 1
    + isbn[1] * 2
    + isbn[2] * 3
    + isbn[3] * 4
    + isbn[4] * 5
    + isbn[5] * 6
    + isbn[6] * 7
    + isbn[7] * 8
    + isbn[8] * 9
    + isbn[9] * 10;
var total2 = total1 % 11;
console.log(total2);
if (isbn[0] == 'X' || isbn[1] == 'X' || isbn[2] == 'X' || isbn[3] == 'X' || isbn[4] == 'X'
    || isbn[5] == 'X' || isbn[6] == 'X' || isbn[7] == 'X' || isbn[8] == 'X' || isbn.length != 10) {
    console.log("False");
}
else {
    console.log("True");
}
//Test 3
//Test 4
var array = ["false", "1", "0", "1", "2", "0", "1", "3", "a"];
let n = array.length;
console.log("All the elements");
console.log(array);
toEnd(array, n);
console.log("All zero element/s moved to the end");
for (let i = 0; i < n; i++)
    console.log(array[i] + ", ");
function toEnd(array, n) {
    let x = 0;
    for (let i = 0; i < n; i++)
        if (array[i] != 0) {
            array[x++] = array[i];
        }
    while (x < n) {
        array[x++] = 0;
    }
}

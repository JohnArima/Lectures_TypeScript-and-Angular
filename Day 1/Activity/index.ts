//Test 1
interface directory {
    city: string;
    country: string;
    population: number;
}

var list: directory[] = [];
export const addDirectory = (d1: string, d2: string, d3: number) => {
    let newDirectory: directory = { city: d1, country: d2, population: d3 }
    list.push(newDirectory);
    showDirectory();
}

export const showDirectory = () => {
    const tableBody = document.getElementById('table') as HTMLTableElement;
    let dataHtml = '';
    list.forEach((data: directory) => {
        dataHtml += '<tr><td>' + data.city + '</td><td>' + data.country + '</td><td>' + data.population + '</td></tr>';
        tableBody.innerHTML = dataHtml;
    })
}



//Test 2
var isbn: any [] = ["1","1","1","2","2","2","3","3","3","9","X"];
    var total1: any = isbn[0] * 1
                    +isbn[1] * 2
                    +isbn[2] * 3
                    +isbn[3] * 4
                    +isbn[4] * 5
                    +isbn[5] * 6
                    +isbn[6] * 7
                    +isbn[7] * 8
                    +isbn[8] * 9
                    +isbn[9] * 10
    var total2: any = total1 % 11
    console.log(total2)
    if(isbn[0] == 'X' || isbn[1] == 'X' || isbn[2] == 'X' || isbn[3] == 'X' || isbn[4] == 'X' 
    || isbn[5] == 'X' || isbn[6] == 'X' || isbn[7] == 'X' || isbn[8] == 'X' || isbn.length != 10){
        console.log("False")
    }
    else{
            console.log("True")
        
    }
    
//Test 3



//Test 4

var array: string[] = ["false","1","0","1","2","0","1","3","a"];
let n: number = array.length;
console.log("All the elements");
console.log(array);
toEnd(array,n);
    console.log("All zero element/s moved to the end")
    for(let i = 0; i <n; i++)
        console.log(array[i] + ", ");

function toEnd(array: string[] | number[], n: number) {
    let x = 0;
    for(let i = 0; i < n; i++)
        if(array[i] != 0){
            array[x++] = array[i]   
        }
    while(x < n) {
        array[x++] = 0;
    }
        
}

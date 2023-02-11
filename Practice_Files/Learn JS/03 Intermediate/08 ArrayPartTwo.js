var isEven = (element) => { //its called an arrow function and works the same normal function declaration.
    // if(element % 2 === 0){
    //     return true;
    // }     
    // return false;

    return element % 2 === 0;
};

console.log(isEven(5));

var result = [2, 4, 6, 8].every(isEven); //this checks every component of the array with the reference function or generally called 'callback fn.'
console.log(result);

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0)); //every((e) => {return e % 2 === 0}) proper single line callback function.
console.log(result);
var num1 = 7;
var num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

var answer = num1 > num2;

console.log(answer);
if (answer == true) {
    console.log("the number value: " + num1 + "  is greater than number value:  " + num2);
} else {
    console.log("the number value: " + num2 + "  is greater than number value:  " + num1);
}

var sellPrice = 199;
var listPrice = 799;
var discount = ((listPrice - sellPrice) / listPrice) * 100;
console.log("discounted percentage is:" + discount);

displayDiscountPercentage = Math.round(discount);

console.log(displayDiscountPercentage + "%off");


console.log(typeof answer);
console.log(typeof displayDiscountPercentage);
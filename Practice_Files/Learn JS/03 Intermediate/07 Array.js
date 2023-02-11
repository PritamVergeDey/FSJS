var countries = ["India", "USA", "Japan", "Russia", "Europe"];

var states = new Array("West Bengal", "Jharkhand", "Assam", "Mumbai", "Delhi");

//console.log(states);
//console.log(states[0]);
//console.log(countries.length);
states[1] = "Karnatak";
//console.log(states);

var user = ["Pritam", "Dey.pritam@", 26, 2, true];
//console.log(user);
user.pop(); //to remove value from the end of the array.
//console.log(user);
user.push(false); //to add value at the end of the array.
//console.log(user);
user.unshift("NEW VALUE"); //TO ADD VALUE AT THE FRONT OF THE ARRAY.
//console.log(user);
user.shift(); //to remove value from the front of the array.
console.log(user);

console.log(user.indexOf(2));
console.log(user.indexOf("newlyy"));
console.log(Array.from("3161613354"));
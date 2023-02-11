var testArray = [2, 3, 8, 5, 4, 6, 1, 7, 9];

console.log(testArray.fill("p.d", 3, 6));
//fills the array with the string value from position of the 1st to 2nd parameter value in the array.

const myNumber = [25, 61, 15, 98, 46, 15, 36, 9, 64, 34];
console.log(myNumber);
const result = myNumber.filter((num) => num < 36);
//filters the array relayed by the condition given result[arrow/callback fn].

console.log(result);

var users = ["Pritam", "soumik", "kousik", "gourav", "rakesh", "rahul", "bumba"];

console.log(users.slice(2, 4));
//this slices the array into the fraction starting the first parameter included to the 2nd parameter bt excluding the position of the 2nd one.

users.splice(3, 2, "bodmas", "chele");
//this 1st param is startin position, 2nd param is the count to remove values and lastly can integrate as many string values as yu like, does'nt have a boundary.
console.log(users);
const myStates = [
    "West Bengal",
    "Assam",
    "Bihar",
    "Jharkhand",
    1947,
    "Tamilnadu",
    "Maharastra"
];

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);

}

while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
}
let i = 20;
do {
    console.log(myStates[i]);
    i++;

} while (i < myStates.length);
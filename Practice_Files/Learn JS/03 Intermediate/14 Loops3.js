const names = [
    "Youtube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
];

for (const n of names) {
    console.log(n);
} //exclusively used for arrays
const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "FAcebook",
    lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
} //exclusively used for objects
var user = {
    firstName: "Pritam",
    lastName: "Dey",
    role: "Admin",
    loginCount: 20,
    googleSignedIn: true,
};

var mobilePhone = {
    name: "iPhone 12",
    modelNum: "IPOS942AKJ",
    memory: "256 GB",
    RAM: "16 GB",
    CPU: "A2 Bionic Chip",
    battery: 5000,
    color: "Rose Gold",
    camera: 100 + "MPX",
};
console.log(user.firstName); //ideal method
console.log(user["lastName"]); //not ideal method
console.log(user);
console.log(user.loginCount);
user.loginCount = 30;
console.log(user.loginCount);
console.table(user);

console.log(mobilePhone.camera);
console.log(mobilePhone);
console.table(mobilePhone);
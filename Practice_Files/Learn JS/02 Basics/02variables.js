const uid = "abc123";

var firstName = "PRITAM";
var lastName = "DEY";
var state = "West Bengal";
var country = "INDIA"
var email = "kooldogs@";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

//alert
//fullName = prompt("Enter your name");
console.log(uid);
console.log(email);
console.log("Full NAme Is:" + firstName, lastName);

console.log(`
    with unique id: ${uid}
    user is: ${firstName} ${lastName}
    and his email is: ${email}
    and uses the password: ${password}
    his course count is: ${courseCount}
    is Logged In From Google: ${isLoggedInFromGoogle}
    is Logged In From Facebook: ${isLoggedInFromFacebook}
    his residence state is: ${state};
    his nationalty is: ${country}

` //interpolation
);
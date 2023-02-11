// Allow user to acess course if he is:
// logged in from google
// logged in from email
// logged in from facebook

var email = true;
var facebook = true;
var google = false;

// if (email) {
//     console.log("E login success");
// }
// if (facebook) {
//     console.log("F login success");
// }
// if (google) {
//     console.log("G login success");
// } else {
//     console.log("not logged in");
// }

if (email || facebook || google) {
    console.log("login successful");
} else {
    console.log("not logged in");
}
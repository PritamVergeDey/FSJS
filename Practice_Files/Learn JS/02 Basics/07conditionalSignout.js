// show user a signout button if he is authenticated.
// other wise show him option to login/signup

var authenticated = true;

// if (authenticated) {
//     console.log("show signout button");
// } else {
//     console.log("show login option");
// }
function option() {
    return (authenticated ? console.log("SignOut Button") : console.log("Login"));
    //using ternary operator
}
option();
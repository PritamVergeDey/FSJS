//USer is only allowed to make purchase when he is:
//logged in
// email verified
// card info valid
// if anyone is missing, stop purchase
var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged in success");
//     if (isEmailVerified) {
//         console.log("email is verified");
//         if (cardInfo) {
//             console.log("you can make purchase");

//         }
//     }
// }
if (isEmailVerified && isLoggedIn && cardInfo) {
    console.log("allow user to make purchase");

} else {
    console.log("you are not allowed to do thAT");
}
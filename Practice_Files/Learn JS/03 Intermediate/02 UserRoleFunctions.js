/* 
Define a function that can answer the role of A user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - gets access to consume content
other - trial user

Input: getUserRole(name, role)
*/

//var getUserRole = function(name, role){THis is also another valid method of declaring functions};
function getUserRole(name, role) {

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; //this is not neccessary
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is test prep with access to create/delete tests`;
            break;
        case "user":
            return `${name} is user with access to consume content`;
            break;

        default:
            return `${name} is a trial user`
            break;
    }
}


console.log(getUserRole("Pritam", "subadmin"));

var getRole = getUserRole("Pallab", "testprep");

console.log(getRole);
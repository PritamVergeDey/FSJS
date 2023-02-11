var user = {
    firstName: "Pritam",
    lastName: "Dey",
    role: "Admin",
    loginCount: 20,
    googleSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
    info: function() {
        return `The users first name ${this.firstName} last name ${this.lastName} has the role of ${this.role}.
        His log in count is ${this.loginCount}, has logged in from google that is ${this.googleSignedIn},
        has access to ${this.courseList.length} courses, that is ${this.courseList}`;
    },
};
//var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
console.log(user.info());
 console.log(this);

 var user = {
     firstName: "Pritam",
     courseCount: 5,
     getCourseCount: function() {
         console.log("Line 7", this);

         function sayHello() {
             console.log("hello");
             console.log("line 10", this);
         }
         sayHello(); //regular function call
     },
 };
 user.getCourseCount(); //object funtion call
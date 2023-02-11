var name = "Pritam";

console.log("Line no 3", name);

function sayName() {
    var name = "Mr. P";
    console.log("Line no 7", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "Mr. PD";
        console.log("LIne No 12", name);
    }
}

sayName();


// var a = 11 // 12, 13, 12, 13
// var eq1 = ++a + ++a - --a + a - a++ + a-- + ++a
// //        12    13    12    12  12    13    13
// //            25    13    25  13   26    39
// //                     Ans = 39

// console.log(eq1)



// var Name = prompt("What's your name")
// var Email = prompt("What's your Email Address")
// var Age = prompt("What's your Age")
// var Gender = prompt("What's your Gender")


// document.writeln("<ul>")
// document.writeln("<li> Name: " + Name + "</li>")
// document.writeln("<li> Email: " + Email + "</li>" )
// document.writeln("<li> Age: " + Age + "</li>")
// document.writeln("<li> Gender: " + Gender + "</li>")
// document.writeln("</ul>")

// alert("Welcome" + " " + Name )

// var num1 = +prompt("Enter Num1")
// var num2 = +prompt("Enter Num2")

// var res = num1 + num2

// document.writeln("Result:" + res)


// var age = 20

// if(age == 20){
//     console.log("Allow")
// }else{
//     console.log("Not Allow")
// }

var userage = +prompt("Enter your Age")

if(userage >= 18){
    document.writeln("Allow")
}else{
    document.writeln("Not Allow")
}
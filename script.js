var laptops = ["Lenovo ThickPad Edge", "H.P Model-QCWB335","DELL E-24", "Ausu X541UA", "Lenovo IdeaPad", "H.P Inspiron 3565", "Acer Predator 21x", "H.PPavillion x360", "Ausu VivoBook Pro", "MacBook Air", "iBall Inspiron", "Sumsung CoolPad", "HP Elitebook 1030GB"];
var students = ["Annu","Kanika","Savita","Lalita","Rani","Khushboo", "Pooja", "Ankita", "Harjeet", "Priyanka","Priya", "Neha", "Isha", "Seema", "Aditi", "Sweeta", "Komal", "Pragya", "Susmita"];
var color = ["pink", "crimson","apricot","lemon","magenta", "pear", "rose","virdian", "salmon", "sapphire", "raspberry", "periwinkle", "peach ", "orange-red", "olive","ocher", "gold"]

 document.getElementById('lapi').innerHTML=laptops[0];
 document.getElementById('student').innerHTML=students[0];

// function next() {
// var a = Math.floor(Math.random()*(laptops.length));
// var b = Math.floor(Math.random()*(students.length));
// document.getElementByClass("lapi").innerHTML = laptops[a];
// document.getElementByClass("student").innerHTML = students[b];

// }
// function new() {
// 	var random_laptop = Math.floor(Math.random() + (laptops.length));
// 	var student_name = Math.floor(Math.random() + (students.length));
// 	document.getElementByClass("lapi").innerHTML = laptops[random_laptop];
// 	document.getElementByClass("student").innerHTML = students[student_name];



// }

function next() {
var random_laptop = Math.floor(Math.random()* laptops.length);
var student_name = Math.floor(Math.random()* students.length);
var diff_color = Math.floor(Math.random()* color.length);


document.getElementById('lapi').innerHTML = laptops[random_laptop];
document.getElementById('student').innerHTML = students[student_name];
document.getElementById('right_box').style.backgroundColor = color[diff_color];
  
}
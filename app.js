var students = ["Ali", "Fatima", "Hassan", "Ayesha", "Bilal"];
students.push("Irfan","Hassan")
console.log(students);


var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.pop()
console.log(fruits);

var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
cities.shift()
console.log(cities);

var colors = ["Red", "Blue", "Green", "Yellow", "Black"];
colors.unshift("Magenta", "Turquoise")
console.log(colors);

var fiveStudentsNames = ["Ali", "Fatima", "Hassan", "Ayesha", "Bilal"];
fiveStudentsNames.push("Zainab", "Usman", "Maryam")
console.log(fiveStudentsNames);
fiveStudentsNames.pop()
console.log(fiveStudentsNames);


var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];
var NewName=names.slice(1,3)
console.log(NewName);
var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];
var newName=names.slice(0,3)
console.log(newName);

var baltistanTownsNames = ["Skardu", "Khaplu", "Shigar", "Kharmang", "Rondu"];
var NewCities=baltistanTownsNames.slice(-2)
console.log(NewCities);

var baltistanTownsNames = ["Skardu", "Khaplu", "Kharmang", "Shigar", "Rondu"];
console.log(baltistanTownsNames);

baltistanTownsNames.splice(2,2)
console.log(baltistanTownsNames);

var iraniCitiesNames = ["Tehran", "Mashhad", "Isfahan", "Shiraz", "Tabriz"];
iraniCitiesNames.splice(1,0,"Hamadan")
console.log(iraniCitiesNames);











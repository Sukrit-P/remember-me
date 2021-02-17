//https://youtu.be/IY-P1qOXYB8
"use strict";

console.log("hello");
document.getElementById("text").innerHTML = "getElementById to html"
// document.write("write: พิมข้อความขึ้นหน้าเว็บ")
// window.alert("window alert")

//var btn =document.querySelector("#id");   //เอา ค่าใน แท็กมา

var x=5,y=6,z=x+y;
console.log(z); // x += y   -   x = x + y

function myFunction(val1 ,val2) {
    return val1 * val2;
}
console.log("test-function: " + myFunction(2 ,3));

function changeBg() {
    document.body.style.backgroundColor = "red";
}

//? Object
var myCar = {
    brand: "Ford",
    color: "black",
    model: "1",
    all: function() {
        return this.brand + " " + myCar.color;    // this. หรือ myCar. ก็ได้
    }
};

var { brand, color, model} = myCar;          //โชว์ แต่ละ val แบบย่อ     //เลือกแสดง brand,model ได้เลย      https://youtu.be/cSfj00AiXQ4 25:36​ Object literal shorthand
console.log(brand, color, model);

console.log("Object var : " + myCar["brand"]);  //myCar.brand   
console.log("function-Object in var: " + myCar.all());
//เพิ่ม ตัวแปลลงใน Object
let VName = "V-Name"
let VLast = "V-Last"
// let VUser = {            //วิธีเดิม
//     VName: VName,
//     VLast: VLast
// }
let VUser = {               //แบบย่อ
    VName, VLast
}
/*  
var myCollection = {
  data: {
    1:{Name:"John Smiths", "AMT_STD":"1.99"},
    2:{Name:"Carlsberg", "AMT_STD":"1.99"},
    3:{Name:"Samuel Adams", "AMT_STD":"1.99"}
  }
}
! insertion
myCollection.data[4]={Name:"Fosters", "AMT_STD":"1.99" }
!updating 
myCollection.data[2]["AMT_STD"]="2.00"
!retrieving data
myCollection.data[1];//the full record
myCollection.data[1].Name;//just the name
myCollection.data[1]["AMT_STD"];//similar to the previous but can use more complex keys/names
!delete 
delete myCollection.data[2];
*/

//? event
function displayDate() { //HTML :Click Me
    document.getElementById("showDate").innerHTML = Date();
}

// var c = "length: ";
// console.log(c.length);

//? Array 
var myArr = ["BMW", "Ford", "Honda"];                      //? Array Literal
var myArr2 = new Array("BMW", "Ford", "Honda");            //? Array Constructor

var [showcar1, showcar2, showcar3] = myArr;                 //โชว์ แต่ละ val แบบย่อ  //เลือกแสดง showcar1, ,showcar3 ต้องมี , ,      https://youtu.be/cSfj00AiXQ4 25:36​ Object literal shorthand
console.log(showcar1, showcar2, showcar3);

document.getElementById("Array").innerHTML = myArr.join(" - ");          // toString()
myArr.pop();
console.log(myArr);
// myArr.pop(); ลบตัวสุดท้าย /  .push("Str"); เพิ่ม  /  .shift(); ลบตัวหน้าสุด / .unshift("Str"); เพิ่มข้อมูลหน้าสุด
delete myArr[0]; //ลบให้เป็นค่าว่าง
console.log(myArr);
var v = ["0","1","2","3","4"];
v.splice(3, 0, "5", "6","7"); // 2, ตำแหน่ง / 0, ลบออก  /"val" เพิ่มค่าลงไป
console.log(v); //TODO [ "0", "1", "2", "5", "6", "7", "3", "4" ]
v.splice(1, 2); 
console.log(v); //TODO [ "0", "5", "6", "7", "3", "4" ]   / "1","2"  ลบออกไ
var v2 = v.concat(["8", "9"]);                  //ต่อ array
console.log(v2); //TODO [ "0", "5", "6", "7", "3", "4", "8", "9" ]

var arr1 = ["val1", "val2"];
var arr2 = ["val3", "val4", "val5"];
var arr3 = ["val6"];
var concatArr = arr1.concat(arr2, arr3);        //ต่อ array
console.log(concatArr);
var newArr1 = concatArr.slice(3); //นับตำแหน่งที่เลือก
var newArr2 = concatArr.slice(1,3); //ขอบเขตตำแหน่งที่เลือก
console.log(newArr1);
console.log(newArr2);

//? array model  http://marcuscode.com/lang/javascript/array-methods
let continents = [
    "Asia", "Africa", "North America"
];
continents.forEach(function(value, index) {             // .forEach วน array
    console.log(value, index);
});
//?
let languages = ["Ruby", "GO", "PHP", "JavaScript", "Python"];         //  .indexOf  ดูว่า ค่านั้นอยู่ตำแหน่งที่เท่าไหร่  /.includes true,false
console.log(languages.indexOf("JavaScript"));   // 3
console.log(languages.indexOf("TypeScript"));   // -1 (No exist)



//? Math
Math.round(4.1);    // ปัดทศนิยม
Math.ceil(4.1);    // ปัดทศนิยม ขึ้นที่งหมด
Math.floor(4.9);     // ปัดทศนิยม ทิ้งทั้งหมด
Math.pow(2, 5);     //ยกกำลัง
Math.sqrt(64);      //หาค่า รูท
Math.abs(-4.5);     //ทำให้ไม่ติดลบ
Math.random();

switch(new Date().getDay()) {
    case 0:
        console.log("วันหยุด เสาร์");
        break;
    case 6:
        console.log("วันหยุด อาทิตย์");
        break;
    default:
        console.log("วันปกติ");
}

//? for in loop
var myCar2 = {
    brand: "Ford",
    color: "black",
    model: 1
};
for(var x in myCar2) {
    console.log(myCar2[x]);
}
//? for in of
var myArr = ["BMW", "Ford", "Honda"];  
for(var x of myArr){
    console.log(x);
}
var myStrForOf = "ABcDeF"
for(var x of myStrForOf){
    console.log(x);
}

// var let-กำหนดค่าใหม่ได้แต่ประกาศใหม่ไม่ได้ const-กำหนดค่าใหม่และประกาศใหม่ไม่ได้
// let a = x;
// let a = x;  ประกาศใหม่
//     a = x;  กำหนดค่าใหม่

var js = "Js";
console.log(`Hi ${js} is \` pls`)   // alt+9+6

//? arrow function /ย่อ function
var arrow = function() {
    return "Hi arrow 1 function";
}
var arrow2 = () => {                        //ย่อ function
    return "Hi arrow 2 function";
}
var arrow3 = () => "Hi arrow 3 function";   //ย่อ function
var arrowNum = (val, val2=50) => "Hi  " + val + val2;
console.log(arrowNum("arrow function"))
//? arrow function Object
var arrowNum2 = (TheNum) => ({TheNum:TheNum, a:10});


//? class
class myClass {
    constructor(name) {
        this.myname = name ;                    // name ที่ได้เก็บไว้ใน this.myname
    }

    fullName = (Hi) => Hi + " My name is " + this.myname;
    fullName2(Hi) {
        return Hi + " My name2 is " + this.myname;
    }

    static hello(){
        return "hello!";
    }
}
var theName = new myClass("class");

console.log(theName.fullName("Hi"));
console.log(myClass.hello()); //static

// class แม่ ลูก
class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return " I have a " + this.carname;
    }
}
class Model extends Car {
    constructor(brand, model) {         //val 2 ตัว
        super(brand);                   //เรียก constructor main class
        this.model = model;
    }

    show() {
        return this.present() + ", it's a " + this.model;    //this.present() คือการนำ car.present() มาใช้งาน
    }
}

var myCar = new Model("Ford", "Mustang"); //val 2 ตัว
console.log(myCar.show());

// %o หรือ %O  แสดงผลObject , %d แสดงผลตัวเลข, %i แสดงเลขจำนวนเต็ม, %s แสดง text, %f แสดงผลตัวเลขทศนิยม
console.log("%d + %d = %d", 3, 5, 3 + 5);

//? Rest Operator
const addZip = (ZipName, ZipLast, ... city) => {
    return ZipName + " " + ZipLast + " " + city;
}
console.log(addZip("NameA", "LastA", "cityA", "cityB", "cityC"));
//? บวกเลขใน array
const addNumber = (first,... Number) => {
    return Number.reduce((first, current)=>{   // current ค่าต่างๆที่ Array อ่านมา
        return first+current                    // ตัวประมวลผลบอกเลข
    })
}
console.log(addNumber(10,20,30,40));

//? Spread Operator จากข้อมูลต้นทางกระจายไปยังปลายทาง
//Array
let Fruit = ["มะม่วง", "แตงโม"]
let NewFruit = [...Fruit,"ส้มโอ", "มังคุด"]
console.log(NewFruit); //TODO [ "มะม่วง", "แตงโม", "ส้มโอ", "มังคุด" ]
//Object
let Product = {name:"ทุเรียน", price:200};
let NewProduct = {...Product, category:"ผลไม้"}
let NewProduct2 = {...NewProduct, price:500}    //เปลี่ยนค่าใน Object
console.log(NewProduct2);

//? เปลี่ยนชื่อ Computed Property Name
let CName = "Cake"
let CMenu = {
    [CName]:CName+"ส้ม" , [CName+"ชนิด"]:"ผลส้ม" 
}
console.log(CMenu); //TODO Object { Cake: "Cakeส้ม", "Cakeชนิด": "ผลส้ม" }



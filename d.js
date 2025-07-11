//გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let a=87;
let b=65;
console.log(a+b);
//გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks, დაბეჭდეთ student ის სახელი
let student={
    firstname:"tamari",
    lastname:"go girl",
    age:20,
    email:"123@gmail.com",
    marks: [1,2, 3, 4, 5]
};
console.log(student.firstname);


//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
let m=45;
let n= 23;
if (m>n){ 
    console.log(m+n)}
    else {console.log (n)}
//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
let studentname="tamari";
console.log ("Rise and shine, " + studentname + " !");

//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა,
//  დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი
//  არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (
// ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
let salary= 1000;
let bonus
if (salary>=2000) {console.log (bonus=0)}
else{bonus=salary*0.1;}
console.log(bonus)


//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
let A=23;
let B=a/2;
let c=a+b;
console.log(c);

//gამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
let phones=["iphone", "Samsung", "Pixel","huawei","xiaomi"];
console.log(phones);

//დაბეჭდეთ phones მასივის პირველი და ბოლო ელემენტი ( ცალ-ცალკე console.log ეგში)
console.log(phones[0]);
console.log(phones[phones.length-1]);


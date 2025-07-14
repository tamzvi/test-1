//Დაბეჭდეთ რიცხვები 2 დან 8 მდე
 for(let i=2; i<=8;i++){
    console.log(i);
 }

// 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for(let i=5;i<=35;i+=4){
    console.log(i);
}
//დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

let product=1;
for (let i=3;i<=8;i++){
    product *=i;
}
console.log ("i", product);

// Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და 
// დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
const person= {
    firstname:"tamari",
      lastname:"test",
      age:20,
};
console.log(person.firstname, person.lastname);

//  დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
for (let key in person) {
  console.log(person[key]);
}

    
//დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
const fruits=["Apple", "Banana", "Orange"];
for(let fruit of fruits){
    console.log(fruit);

}
// დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("grapers");
console.log(fruits);

//დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი


let sum = 0;

for (let i = 1; i <= 34; i++) {
  sum += i;
}

console.log("Sum from 1 to 34 is:", sum);

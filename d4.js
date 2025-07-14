 // დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
 
 function checkmore (m,n) {
    if (m>n) return m
    else if(m<n) return n
    else return 0
    }
    console.log(checkmore (5,10))


///2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function getsum (a,b){
    return(a+b);
}
console.log (getsum(5,8))

//დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function firstname(){
    console.log("tamar zviadauri")
}
firstname();
// დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ
//  ბეჭდავთ)
function fullname( firstname,lastname){
    return firstname+"" +lastname;
}
console.log(fullname("tamar","zviadauri"));

//. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი 
// ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით 
// რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function multiply(n){ 
    let result = 1 
    for (let i = 1; i <= n; i++) { 
        result *= result * i
    }
    return result 
}
console.log(multiply(5))

//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores 
// (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი 
// შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 
const student ={
    firstname:"tamar",
    lastname:"zviadauri",
    age:30,
    scores:[4,7,5,3,2],
    fullname: function(){
        return this.function+""+this.lastname
    }
};

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)


console.log(student.fullname())

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function getssum(scores){
    let sum=0;
    for(let i=0;i<scores.length; i++){
        sum +=scores(i);

}
return sum
}
console.log(getsum(student.scores))

//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი



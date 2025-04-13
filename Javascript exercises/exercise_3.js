// Q.1- Create a program that takes a year as input and checks if it is a leap year or not
// let year=prompt("Enter year: ")
// if (year%4==0 && year%100!=0 || year%400==0 ){
//     console.log(`${year} is a leap year`)
// }
// else{
//     console.log(`${year} is not a leap year`)
// }




// Q.2- Given a list of integers, find all the even numbers and store them in a new list
// let a=[2,3,4,5,6,7,8]
// let myList=[]
// for (let i=0;i<a.length;i++){
//     if (a[i]%2===0){
//         myList=a[i]
//         console.log(myList)
//     }
// }




// Q.3- Create a program that generates the Fibonacci sequence up to a given number of terms
// let number=prompt("Enter number upto which you want to print fibonacci series: ");
// let num1=0
// let num2=1
// let num3
// console.log(`The fobonacci series upto ${number} numbers are- `)
// console.log(num1)
// console.log(num2)
// for (let i=2;i<number;i++){
//     num3=num1+num2
//     console.log(num3)
//     num1=num2
//     num2=num3
// }




// Q.4- Given a list of names, print all names starting with the letter 'A'
// let mylist = ["mukesh", "Abhishek", "rAmesh", "suresh", "Abhinav", "anand"]
// for (let i = 0; i < mylist.length; i++) {
//   if (mylist[i].startsWith("A",0)) {
//     console.log(`The names starting with letter 'A' are : ${mylist[i]}`)
//   }
// }




// Q.5- Implement a program that prints the multiplication table of a given number
// let number = prompt("Enter number for which you want to see the table")
// number = Number.parseInt(number)
// for (let i = 1; i <= 10; i++) {
//   console.log(number + "*" + i + "=" + number * i)
// }




// Q.6- Write a program that calculates the factorial of a given number
// let number = prompt("Enter number for which you want to see the factorial")
// number = Number.parseInt(number)
// let factorial = 1
// for (let i = 1; i <= number; i++) {
//   factorial = factorial * i
// }
// console.log(`The factorial of ${number} is ${factorial}`)





// Q.7- Create a loop that prints all prime numbers between 1 and 50
// let number=prompt("Enter number: ")
// for (let i=0; i<=number;i++){
//     let count=0
//     for (let j=0; j<=i;j++){
//         if (i%j==0){
//         count++
//     }
// }
// if (count==2){
//     console.log(`${i} is a prime number`)
    
// }}




// Q.8- Given a list of words, count the number of words with more than five characters
// let a = ["mukesh", "ramesh", "suresh", "amol", "rahul", "rakesh", "raman", "rajat", "rajiv",]
// let count = 0
// for (let i = 0; i < a.length; i++) {
//   if (a[i].length > 5) {
//     count++
//   }
// }
// console.log(`The number of words with more than five characters are ${count}`)



// Q.9- Calculate the sum of digits of a given number
// let number=prompt("Enter number: ")
// let sum=0
// while(number>0){
//     let digit=Number.parseInt(number%10)
//     //console.log(digit)
//     sum=sum+digit
//     number=Number.parseInt(number/10)
// }
// console.log(sum)
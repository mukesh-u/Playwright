// Q.1- Given a list of numbers, find the sum and average'
// let num=[10,20,20,50]
// var sum=0
// var avg=0
// for (let i=0;i<num.length;i++){
//     sum=sum+num[i]
// }
// avg=sum/num.length
// console.log(`sum is ${sum}`)
// console.log(`avg is :${avg}`)



// Q.2- Create a program that takes a temperature in Celsius and converts it to Kelvin'
// let celsius=24
// kelvin=celsius+273.15
// console.log(`The temparature in kelvin is ${kelvin}`)



// Q.3- Create a function to reverse a given string'
// let rev=""
// function reverse(str){
//     for (let i=str.length-1;i>=0;i--){
//         rev=rev+str[i]
//     }
//     return rev
// }
// console.log(reverse("mukesh"))



// Q.4- Given a list of names, concatenate them into a single string separated by spaces'
// const names=["mukesh", "sneha", "akshda"]
// const newName=names.join(" ")
// console.log(typeof newName)



// Q.5- Write a program to check if a given string is a pangram (contains all letters of the alphabet)'
// let str="The quic brown fox jumps over the lazy dog"
// let newStr=str.toLowerCase()
// let alphabet="abcdefghijklmnopqrstuvwxyz"
// let ispanagram=true
// for (let i of alphabet){
//     if (!newStr.includes(i)){
//         ispanagram=false
//         break
//     }
// }
// if (ispanagram){
//     console.log("Its a panagram")
// }
// else{
//     console.log("It's not panagram")
// }




// Q.6- Calculate the area and circumference of a circle given its radius'
// let r=5
// let pi=3.14
// let area=pi*r*r
// let circumference=2*pi*r
// console.log(`Area of circle is ${area}`)
// console.log(`Circumference of circle is ${circumference}`)



// Q.7- Implement a program that converts a given number of minutes into hours and minutes'
// let minutes=65
// let hour=minutes/60
// let newMinutes=minutes%60
// console.log(`The hour is ${Math.floor(hour)}`)
// console.log(`The remaining minutes are ${newMinutes}`)




// Q.8- Create a function to count the number of vowels in a given string'
// const str="mUkeshu"
// const vowels="a,e,i,o,u"
// const strLower=str.toLowerCase()
// let count=0

// function countVowels(str){
//     for (let i of strLower){
//         if (vowels.includes(i)){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels(str))




// Q.9- Write a program to check if a number is prime.
// let number=prompt("Enter number: ")
// let count=0
// for (let i=0; i<=number;i++){
//     if (number%i==0){
//         count++
//     }
// }
// if (number==0 || number==1 || number==2){
//     console.log(`${number} is neither prime nor composite`)
// }
// else if (count==2){
//     console.log(`${number} is a prime number`)
// }
// else{
//     console.log(`${number} is not a prime number`)
// }


// Q.10- Pangram example
// const string = "The five boxing wizards jump quickly";
// const stringLower = string.toLowerCase()
// const unique = new Set(stringLower.match(/[a-z]/g))
// function isPangram(string){
//     if (unique.size!==26){
//         console.log("its not a pangram")
//     }
//     else{
//         console.log("its a pangram")
//     }
// }
// console.log(isPangram(string))
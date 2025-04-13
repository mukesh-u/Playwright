// Q.1- Write a function to check if a given string is a palindrome-
// let str="kodak"
// function isPalindrome(str){
//     let i=0
//     let j=str.length-1
    
//     while(i<=j){
//     if (str[i]==str[j]){
//         i++
//         j--
//     }
//     else{
//         return false
//     }
// }
// return true
// }
// if (isPalindrome(str)){
//     console.log("Its a palindrome")
// }
// else{
//     console.log("Its not a palindrome")
// }




// Q.2- Create a function to find the square of each element in a given lis
// let num1=[2,3,4,5]
// let num2=[]
// function findSquare(){
//   for (let i=0;i<num1.length;i++){
//     num2.push(num1[i]*num1[i])
//   }
//   return num2
// }

// let result=findSquare()
// console.log(`The square of ${num1} are ${result}`)

// #############Another way using recursion#########################

// let num=[1,2,3,4,5]
// let a=num.map(findSquare)

// function findSquare(num){
//   return num*num
// }
// console.log(a)



// Q.3- Write a function to check if a number is even or odd and return "Even" or "Odd" accordingly-
// let num=prompt("Enter number: ")

// function isEvenOdd(){
//   if (num%2==0){
//     return "Even"
//   }
//   else{
//     return "Odd"
//   }
// }

// let result=isEvenOdd()
// console.log(`The number is ${result}`)




// Q.4- Calculate the area of a triangle given its base and height using a function-
// let base=prompt("Enter base: ")
// let height=prompt("Enter height: ")

// function areaOfTriangle(){
//   return base*height
// }

// let result=areaOfTriangle()
// console.log(`Area of triangle is ${result}`)




// Q.5- Create a function that takes a list of strings and returns the list sorted alphabetically-
// let str=["mukesh","sneha","akshda","rishabh","aakash"]

// function sortedList(){
  
//   for (let i=0;i<str.length;i++){
    
//     for (let j=0;j<i;j++){
      
//       if (str[j]>str[i]){
        
//         let temp=str[j]
//         str[j]=str[i]
//         str[i]=temp
//       }
//     }
//   }
//   return str
// }

// let result=sortedList()
// console.log(`Sorted list is: ${result}`)





// Q.6- Write a function that takes two lists and returns their intersection (common elements)-
// let num1=[1,2,3,4,5,6]
// let num2=[5,6,7,8,9,1]

// function intersection(){
//   let commonElements=[]
//   for (let i=0;i<num1.length;i++){
//     for (let j=0;j<num2.length;j++){
//       if (num1[i]==num2[j]){
//         commonElements.push(num1[i])
//       }
//     }
//   }
//   return commonElements
// }

// let result=intersection()
// console.log(`Common elements in both the list are: ${result}`)




// Q.7- Implement a function that returns the factorial of a given number using recursion-
// function factorial(num){
//     if (num==0){
//       return 1
//     }
//     else{
//       return num *factorial(num-1)
//     }
//   }
  
// let result=factorial(0)
// console.log(result)
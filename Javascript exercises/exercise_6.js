// Q.1- Given two lists of numbers, concatenate them into a single list
// let num1=[1,2,3,4,5]
// let num2=[6,7,8,9,10]
// let num3=[]
// num3=num1.concat(num2)
// console.log(num3)



// Q.2- Write a program that finds the largest and smallest elements in a list
// let num1 = [3, 4, 5,7,90,1,33,1080,650,23]
// let smallest = num1[0]
// let largest = num1[0]

// function findSmallestLargest() {
//     for (let i = 0; i < num1.length; i++) {
//         if (num1[i] > largest) {
//             largest = num1[i]
//         }
//         else if  (num1[i]<smallest){
//             smallest=num1[i]
//         }
//     }
//     return {largest,smallest}
// }
// let result=findSmallestLargest()
// console.log(result)



// Q.3- Implement a function that takes a list of numbers and returns a new list with the squared values
// let num=[1,2,3,4,5]
// const square=num.map((n)=>{
//     return n*n
// })
// console.log(square)



// Q.4- Create a program that finds the common elements between two lists and stores them in a new list
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




// Q.5- Given a list of words, find the word with the maximum length and its length
// let words = ["mukesh", "sandeep", "shravan", "prince", "satyaprakash"]
// let maxLength = 0
// let maxWord = ""

// function findMaxLengthWord() {
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length
//             maxWord = words[i]
//         }
//     }
//     return {
//         maxLength,
//         maxWord
//     }
// }
// let result = findMaxLengthWord()
// console.log(result)



// Q.6- Given a list of names, remove all duplicate names and print the unique names
// let names = ["mukesh", "ramesh", "suresh", "mukesh"]
// let set = new Set(names)
// console.log(set)

/////////// Alternate approach ////////////
// let names=["mukesh", "ramesh","suresh","mukesh","suresh"]
// let unique_names=[]
// let seen={}

// for (let i=0;i<names.length;i++){
//     if (!seen[names[i]]){
//         unique_names.push(names[i])
//         seen[names[i]]=true
//     }
// }
// console.log(unique_names)





// Q.7- Create a function that takes a list of strings and returns the list sorted by the length of the strings
// let names=["mukesh","ram","ajay","sneha"]
// for (let i=0;i<names.length;i++){
//     for (let j=i+1;j<names.length;j++){
//         if (names[i].length>names[j].length){
//             let temp=names[j]
//             names[j]=names[i]
//             names[i]=temp
//         }
//     }
// }
// console.log(names)

///////////// Another approach /////////////////
// let names = ["mukesh", "ram", "ajay", "sneha"]
// names.sort((a, b) => a.length - b.length)
// console.log(names)





// Q.8- Write a program that checks if a given list is sorted in ascending order
// let originalNums=[1,5,8,2,6,20,17]

// let nums=[]
// nums=[...originalNums]
// console.log(nums)

// let sortedNums=[]
// sortedNums=nums.sort(function(a,b){return a-b})
// console.log(sortedNums)

// if (originalNums==sortedNums){
//     console.log("Given list is sorted in ascending order")
// }
// else{
//     console.log("Given list is not sorted in ascending order")
// }




// Q.9- Implement a function that takes two lists and returns their union (all unique elements from both lists)

// let a1=[1,2,3,4]
// let a2=[4,5,6,2]

// let union=[]

// for (let i=0;i<a1.length;i++){
//     if (!union.includes(a1[i])){
//         union.push(a1[i])
//     }
// }

// for (let i=0;i<a2.length;i++){
//     if (!union.includes(a2[i])){
//         union.push(a2[i])
//     }
// }

// console.log(union)


////////////   another approach  /////////////
// let a1=[1,2,3,4]
// let a2=[4,5,6,2]

// let union = new Set([...a1, ...a2])
// console.log(union)



// Q.1- Given a list of words, concatenate them into a single string separated by spaces'
// let names=["mukesh","ramesh","suresh"]

// for (let i=0;i<names.length;i++){
//     result=names.join(" ")
// }
// console.log(result)




// Q.2- Create a function to reverse a given string'
// let str=prompt("Enter string: ")

// function reverse(str){
//     let reversed_string=""
    
//     for (let i=str.length-1;i>=0;i--){
//         reversed_string+=str[i]
//     }
//     return reversed_string
// }

// let result=reverse(str)
// console.log(`The reverse of ${str} is ${result}`)




// Q.3- Write a program that takes a sentence as input and counts the number of words in it'
// let sentence="mukesh plays cricket"
// let str=sentence.split(" ")
// console.log(str.length)




// Q.4- Given a string, write a function to remove all vowels from it and return the modified string'
// let str = "mukesh plays cricket"

// function removeVowels(str) {
//     let vowels = "AEIOUaeiou"
//     let output = ""
//     for (let i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             output += str[i]
//         }
//     }
//     return output
// }

// let result = removeVowels(str)
// console.log(result)




// Q.5- Write a program to find the length of the longest word in a sentence
// let sentence="cricket plays venugopaliyer mukesh dgffhggjk"

// let longest=0

// function longestWord(){
//     let words=sentence.split(" ")
//     console.log(words)
//     for (let i=0;i<words.length;i++){
//         if (words[i].length>longest){
//             longest=words[i].length
//         }
//     }
//     return longest
// }

// let result=longestWord()
// console.log(`The longest length is ${result}`)




// Q.6- Create a function that takes a sentence as input and returns the sentence in reverse order'
// let str="mukesh plays cricket"
// let newStr=""
// function reverse(str){
//     for (let i=str.length-1;i>=0;i--){
//         newStr+=str[i]
//     }
//     return newStr
// }

// let result=reverse(str)
// console.log(`The reverse of string is ${result}`)




// Q.7- Given a list of names, count the number of names that start with a vowel'
// let names = ["mukesh", "ramesh", "suresh", "aniket", "Ishika", "kajal"]
// let vowel = "aeiouAEIOU"
// let count = 0

// function countVowelWords() {
//     for (let i = 0; i < names.length; i++) {
//         if (vowel.includes(names[i][0])) {
//             count++
//             console.log(names[i])
//         }
//     }
//     return count
// }

// let result = countVowelWords()
// console.log(`The count of vowels in the list are ${result}`)





// Q.8- Write a function to remove all duplicate characters from a given string'
// let str="muuuukeesh"
// let set=new Set()

// function removeDuplicates(){
//     for (let i=0; i<str.length;i++){
//         set.add(str[i])
//     }
//     return set
// }

// let result=removeDuplicates()
// console.log(result)





// Q.9- Implement a program that takes a sentence and a word as input and checks if the word is present in the sentence.
// let sentence = "mukesh plays cricket"
// let word = "plays"

// function checkWordInSentence(word,sentence) {
    
//     if (word.trim()===""){
//         return "Invalid word..."
//     }
    
//     if (sentence.includes(word)) {
//         return "Word is present in sentence"
//     }
    
//     else {
//         return "Word is not present in sentence"
//     }
// }

// let result = checkWordInSentence(word,sentence)
// console.log(result)



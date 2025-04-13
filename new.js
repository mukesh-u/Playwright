//const tinderUser = new Object();

const tinderUser =  {};
tinderUser.id=123456;
tinderUser.name="John";
tinderUser.isLoggedin=false;
// console.log(tinderUser);


const regularUser = {
    email: "muks@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Mukesh",
            lastName: "Upadhyay"
        }
    },
};

//console.log(regularUser.fullname.userfullname);


const obj1={
    a:1,
    b:2
}

const obj2={
    c:3,
    d:4
}

//const obj3= Object.assign({}, obj1,obj2);
// console.log(obj3);
const obj3= {...obj1,...obj2};
console.log(obj3);

// Create a variable called password and set it’s value to a string of your choice.
// Write a conditional statement that checks if the password meets the following constraints:
// At least 10 characters long
// Contains at least one letter and one number
// If the password meets the constraint, console log a success message.
// If the password fails the constraint, console log a failure message.
// Test out your conditional by changing the value of your password variable and running your file!

// const password = `abcde123453`;

// if(password.length === 10){
//     console.log(`password accepted!`);
// }
// else{
//     console.log(`password failed!`)
// }

const password = `ABCDefgh123@#$`;
//var validated = true;
//validator to check for constrains
//(?=.*\d) checks for at least one digit
//(?=.*[a-z]) checks for at least one lower case
//(?=.*[A-Z]) checks for at least one upper case
//[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{10,20} checks for especial characters, and at least 10 characters no more 20 
var validator =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{10,20}$/   

//valid password passing constrains
if(password.match(validator)){
    console.log(`Valid password!`)
}
else{
    console.log(`Failed password!`)
}

//invalid password less than 10
pass1 = `ABc12!`
if(pass1.match(validator)){
    console.log(`Valid password!`)
}
else{
    console.log(`Failed password!`)
}

//invalid password more than 20
pass1 = `ABCDEfghij123456789!@#`
if(pass1.match(validator)){
    console.log(`Valid password!`)
}
else{
    console.log(`Failed password!`)
}

//invalid password no lower case
pass1 = `ABCDEFG12345!`
if(pass1.match(validator)){
    console.log(`Valid password!`)
}
else{
    console.log(`Failed password!`)
}

//invalid password no upper case
pass1 = `abcdefghi12345!`
if(pass1.match(validator)){
    console.log(`Valid password!`)
}
else{
    console.log(`Failed password!`)
}

       
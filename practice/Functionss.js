//Function declaration without using var
let a=3,b=4;
function add()
{
    console.log(a+b);
}
add();

//Function with return value
let amt=1000,deb=500;
function sub()
{
    return(amt-deb);
}
console.log(sub());

//Function with 
let name="Shashank";
function welcome(a)
{
    return text="Welcome "+ name;
}
console.log(welcome(a));

//Function with
let card="K";
function pref(x)
{
    if(x=="K")
    return 13;
}
console.log(pref(card));
console.log(pref(card)*4)

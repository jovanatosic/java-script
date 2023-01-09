/*let greetingText = "Hi I'm Max!!!!";
let numberAge = 32;
alert(greetingText);
alert(greetingText);
greetingText = "Hi, I am really Max!";
alert(greetingText);
alert(numberAge);*/

let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = { 
    title: "Developer", 
    place: "New York", 
    salary: 50000 
};

let totalAdultYears;

function calculateAdultYears(userAge){
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);
/*let jobTitle = 'Developer';
let jobPlace = 'New York';
let jobSalary = 50000;*/

/*alert(hobbies[0]);
alert(job.title);*/
let person = {
    name: 'Max',
    greet(){
        console.log("Hello!");
    }
};

person.greet();

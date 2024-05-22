var person={
    firstname:'dilsha',
    lastname:'basheer',
    age:23,
    owncar:false

};
console.log(person) //to print entire details in person
//dot method to access
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.owncar);

//bracket method to access
console.log(person['firstname']);
console.log(person['lastname']);
console.log(person['age']);
console.log(person['owncar']);

//create new object
var people={
    Firstname:'anshad',
    Lastname:'muhammed',
    age:24,
    friends:['nihal','mejo'],
    address:{
        homename:'cheeniparambil',
        state:'kerala',
        city:{
            cityname:'wayanad',
            area:'manadhavady'
        }

    }


};
//console.log(people)
console.log('friends',people.friends);
console.log(people.address.city.cityname)
console.log(people.address)
//add new property
people.gender='male';
console.log(people)
//delete a property
delete people.age;
console.log(people)
//add new property
people.address.city.pincode=673571;
console.log(people)
people.games=['football','basketball']
console.log(people)
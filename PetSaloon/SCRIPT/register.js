console.log("Register Page!");

let SaloonRegister = {
    name: "The Pet Saloon",
    address: {

        street: "Pet Drive",
        number: "55555",
        zip: "12345",
        state: "CA",
        city: "Los Angeles"
    },
    hours: {
        open: "9:00 am",
        close: "10:00 pm"
    },
    pets:[]
}

//Create a pet constuctor
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
}
//Create three pets using the constructor
let Scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", 555 + " - " + 555 + " - " + 5555);
let Scrappy = new Pet("Scrappy", 20, "Male", "Rottwieler", "Grooming", "Shaggy", 111 + " - " + 111 + " - " + 1111);
let Yoshi = new Pet("Yoshi", 2, "Male", "Husky", "Training", "David", 333 + " - " + 333 + " - " + 3333);
SaloonRegister.pets.push(Scrappy,Scooby, Yoshi);
//get the values from the input
let petName = document.getElementById("petName");
let petAge = document.getElementById("petAge");
let petGender = document.getElementById("petGender");
let petBreed = document.getElementById("petBreed");
let petService = document.getElementById("petService");
let petOwner = document.getElementById("petOwner");
let ownerPhone = document.getElementById("phone");
function register(){
    console.log(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,ownerPhone.value)
    //create a constructor using the values from the input
    let newDog = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,ownerPhone.value)
    //push it into the array
    SaloonRegister.pets.push(newDog);
    //display the pet on the console
    console.log(SaloonRegister.pets);
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
    createTable();
    //clear inputs
    clear();
}

function clear(){
     petName.value = "";
     petAge.value = "";
     petGender.value = "";
     petBreed.value = "";
     petService.value = "";
     petOwner.value = "";
     ownerPhone.value = "";
}

function createTable(){
    let tbody = document.getElementById('tbody');
    let th = "<tr><th>Pet Name:</th><th>Age:</th></th><th>Gender:</th></th><th>Breed:</th></th><th>Service:</th></th><th>Owner:</th></th><th>Phone:</th></tr>";
    tbody.innerHTML = th
    let td;
    for (let i = 0; i < SaloonRegister.pets.length; i++) {

        td = "<tr class='petRow'><td>" + SaloonRegister.pets[i].name +"</td><td>" + SaloonRegister.pets[i].age + "</td><td>" + SaloonRegister.pets[i].gender + "</td><td>" + SaloonRegister.pets[i].breed + "</td><td>" + SaloonRegister.pets[i].service + "</td><td>" + SaloonRegister.pets[i].owner + "</td><td>" + SaloonRegister.pets[i].phone + "</td></tr>";
        tbody.innerHTML += td;
    }

    
}




//simpleDisplay();

// alert(`Number of pets: ${saloon.pets.length}`)


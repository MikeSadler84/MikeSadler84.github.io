
//A function for displaying the pet information 

function display(){

var pets = salon.pets;
const petSection = document.querySelector("#pets-section");
var text="";
for(var i=0;i<pets.length;i++){
    console.log(pets[i]);
    text += 
        `<div class="pet-info">
            <h2> ${pets[i].petName} </h2>
            <p> Age: ${pets[i].age} </p>
            <p> Breed: ${pets[i].breed} </p>
            <p> Type: ${pets[i].type} </p>
            <p> Gender: ${pets[i].gender} </p>
            <p> Service: ${pets[i].service} </p>
            <p> Owner: ${pets[i].ownerName} </p>
            <p> Contact: ${pets[i].contactPhone} </p>
        </div>`;
}

petSection.innerHTML= text;
};

display();

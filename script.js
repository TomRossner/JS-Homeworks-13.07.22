// Ball
const ball = document.getElementById("ball");
ball.style.cssText = `width: 10rem;
height: 10rem;
border: none;
border-radius: 50%;
background: radial-gradient(circle, rgba(251,85,63,1) 0%, rgba(252,222,70,1) 100%);`;

// Personal Info
const personalInfo = {
  "name": "Tom",
  "lastName": "Rossner",
  "age": 24,
  "phoneNumber": "0584844789"
}

const list = document.getElementById("list");
const liOne = document.createElement("li");
liOne.appendChild(document.createTextNode("Name: " + personalInfo.name));
list.appendChild(liOne);

const liTwo = document.createElement("li");
liTwo.appendChild(document.createTextNode("Last Name: " + personalInfo.lastName));
list.appendChild(liTwo);

const liThree = document.createElement("li");
liThree.appendChild(document.createTextNode("Age: " + personalInfo.age));
list.appendChild(liThree);

const liFour = document.createElement("li");
liFour.appendChild(document.createTextNode("Phone Number: " + personalInfo.phoneNumber));
list.appendChild(liFour);

// Car Details
const cardProperties = {
    "title": "Jeep",
    "price": 200_000,
    "hand": 2,
    "km": 100_403,
    "year": 2014
  }

const cardElement = document.getElementById('card');

cardElement.innerHTML = `<div class="card-body">
  <h5 class="card-title">`+ cardProperties.title +`</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">`+ cardProperties.price +`₪</li>
  <li class="list-group-item">`+ cardProperties.hand +`nd Hand</li>
  <li class="list-group-item">`+ cardProperties.km +` km</li>
</ul>`;
cardElement.classList.add("bg-danger");
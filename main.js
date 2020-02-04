const arrayOfStudents = [];

let objId = 0;

const hideJumbo = () => {
    document.getElementById('myJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};

const createIdForObject = (obj) => {
   if (obj.id == null) {
       obj.id = 'student' + objId++
   }
   return obj.id;
};

const generateStudent = () => {
    let student = document.getElementById('firstYearsName').value;
    let arrOfHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    let randomHouse = arrOfHouses[Math.floor(Math.random() * arrOfHouses.length)];
    arrayOfStudents.push(person = {name: student, house: randomHouse});
    createIdForObject(person);
    console.log(arrayOfStudents);
    studentPrinter(arrayOfStudents);
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    document.getElementById('firstYearsName').value = "";
};

const studentPrinter = (sortedStudents) => {
    let domString = '';
        for(let i = 0; i < sortedStudents.length; i++){
          domString += '  <div id="cardMargin" class="col-sm-6 col-lg-4">';
          if(sortedStudents[i].house === 'Gryffindor'){
            domString += '        <div class="card text-center bg-light mb-3">';
          }
          else if (sortedStudents[i].house === 'Hufflepuff'){
            domString += '        <div class="card text-center bg-warning mb-3">';
          } 
          else if (sortedStudents[i].house === 'Ravenclaw'){
            domString += '        <div class="card text-center bg-success mb-3">';
          } 
          else if (sortedStudents[i].house === 'Slytherin'){
            domString += '        <div class="card text-center text-white bg-dark mb-3">';
          };
          
          domString += '      <div class="card-body>'
          domString += `            <h5 class="card-title">${sortedStudents[i].name}</h5>`;
          domString += `            <p class="card-text">${sortedStudents[i].house}</p>`;
          domString += `            <button type="button" id="${sortedStudents[i].id}" class="expelButton" class="btn btn-light">Expel</button>`;
          domString += '         </div>';
          domString += '      </div>';
          domString += '   </div>';
        };
    printToDom('allStudents', domString);
    activateExpel();
};

const expelStudent = (e) => {
    console.log(e);
    console.log(e.target.id);
    for (let i = 0; i < arrayOfStudents.length; i++){
        if (e.target.id === arrayOfStudents[i].id){
        arrayOfStudents.splice(i, 1);
        };
    };
    studentPrinter(arrayOfStudents);
    console.log(arrayOfStudents);
};

const activateExpel = () => {
    let getButton = document.getElementsByClassName("expelButton");
    for (let i = 0; i < getButton.length; i++){
        getButton[i].addEventListener('click', expelStudent)
    };
};

const event = () => {
    document.getElementById('startSorting').addEventListener('click', hideJumbo);
    document.getElementById('sortButton').addEventListener('click', generateStudent);
};

const init = () => {
    event();
};

init();
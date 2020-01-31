const arrayOfStudents = [];

const hideJumbo = () => {
    document.getElementById('myJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};
document.getElementById('startSorting').addEventListener('click', hideJumbo);



let objId = 0;

const createIdForObject = (obj) => {
   if (obj.id == null) {
       obj.id = objId++
   }
   return obj.id;
}
 
const generateStudent = () => {
    document.getElementById('studentForm').reset;
    let student = document.getElementById('firstYearsName').value;
    let arrOfHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    let randomHouse = arrOfHouses[Math.floor(Math.random() * arrOfHouses.length)];

    arrayOfStudents.push(person = {name: student, house: randomHouse});
    createIdForObject(person);
    console.log(arrayOfStudents);
    studentPrinter(arrayOfStudents);
    

};


document.getElementById('sortButton').addEventListener('click', generateStudent);


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};
const studentPrinter = (sortedStudents) => {
    let domString = '';
        for(let i = 0; i< sortedStudents.length; i++){
          domString += '<div class="row">'
          domString += '  <div class="col-sm-6">';
          domString += '      <div class="card text-center">'
          domString += '        <div class="card-body">';
          domString += `            <h5 class="card-title">${sortedStudents[i].name}</h5>`;
          domString += `            <p class="card-text">${sortedStudents[i].house}</p>`;
          domString += `            <button type="button" id="${sortedStudents[i].id}" class="btn btn-light">Expel</button>`
          domString += '         </div>';
          domString += '      </div>';
          domString += '   </div>';
          domString += '</div>'
        };
        
    console.log(domString);
    printToDom('allStudents', domString);

   let getbutton = document.getElementsByClassName("btn btn-light")[0]
   getbutton.addEventListener('click', expelStudent);
   console.log(getbutton);

};

const expelStudent = () => {
    console.log('clicked')
    arrayOfStudents.splice(0, 1)
    document.getElementById('allStudents').classList.add('invisible');
}
const arrayOfStudents = [];

const hideJumbo = () => {
    document.getElementById('myJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};
document.getElementById('startSorting').addEventListener('click', hideJumbo);

const makeId = () => {
    let length = 4;
    let result  = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;  
 };
 
// const choseHouse = () => {
//    let arrOfHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
//    let randomHouse = arrOfHouses[Math.floor(Math.random() * arrOfHouses.length)];
//    return randomHouse;
// };

const generateStudent = () => {
    let student = document.getElementById('firstYearsName').value;
    let arrOfHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    let randomHouse = arrOfHouses[Math.floor(Math.random() * arrOfHouses.length)];

    arrayOfStudents.push({name: student, randomId: makeId(), house: randomHouse});

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
          domString += '<div class="col-md-6 col-lg-4 card-separation">'
          domString += '<div class="card">';
          domString += '  <div class="card-body">';
          domString += `    <h5 class="card-title">${sortedStudents[i].name}</h5>`;
          domString += `    <p class="card-text">${sortedStudents[i].house}</p>`;
          domString += `<button type="button" id="${sortedStudents[i].id}" class="btn btn-light">Expel</button>`
          domString += '  </div>';
          domString += '</div>';
          domString += '</div>';
        };
    console.log(domString);
    printToDom('allStudents', domString);
};

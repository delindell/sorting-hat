console.log('hello')

const arrOfStudents = [
];

const arrOfHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

const hideJumbo = () => {
    document.getElementById('myJumbo').classList.add('invisible')
    document.getElementById('studentName').classList.remove('invisible')
}

document.getElementById('startSorting').addEventListener('click', hideJumbo);

const choseHouse = () => {
    let randomHouse = arrOfHouses[Math.floor(Math.random() * arrOfHouses.length)];
    return randomHouse;
}

const makeId = () => {
    let length = 4;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;  
}
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };
  const studentPrinter = () => {
    let domString = '';
    for(let i = 0; i< arrOfStudents.length; i++){
      domString += '<div class="col-md-6 col-lg-4 card-separation">'
      domString += '<div class="card">';
      domString += '  <div class="card-body">';
      domString += `    <h5 class="card-title">${arrOfStudents[i].name}</h5>`;
      domString += `    <p class="card-text">${arrOfStudents[i].house}</p>`;
      domString += `<button type="button" id="${arrOfStudents[i].randomId}" class="btn btn-light">Expel</button>`
      domString += '  </div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('studentCards', domString);
}


const sortStudent = () => {
    
    let student = document.getElementById('firstYearsName').value;
 //   document.getElementById('studentName').reset;
    arrOfStudents.push({name: student, house: choseHouse(), randomId: makeId()});
    console.log(arrOfStudents)
    studentPrinter();
}

document.getElementById('sortButton').addEventListener('click', sortStudent)
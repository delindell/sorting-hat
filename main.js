console.log('hello')

const arrOfStudents = [


]

const hideJumbo = () => {
    document.getElementById('myJumbo').classList.add('invisible')
    document.getElementById('studentName').classList.remove('invisible')
}

document.getElementById('startSorting').addEventListener('click', hideJumbo);

const sortStudent = () => {
    
    let student = document.getElementById('firstYearsName').value
    document.getElementById('studentName').classList.add('invisible')
    console.log(student)
    arrOfStudents.push({name: student})
    console.log(arrOfStudents)
}

document.getElementById('sortButton').addEventListener('click', sortStudent)
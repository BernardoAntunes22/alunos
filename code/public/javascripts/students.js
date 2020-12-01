const students = [
    {
        name: 'John Smith',
        number: 201,
        id: 12
    },
    {
        name: 'Mary Jane',
        number: 512,
        id: 31
    },
    {
        name: 'Jane Dow',
        number: 45,
        id: 3
    }
];


function createCards() {
    let main = document.getElementById('students');
    for (let idx in students) {
        main.innerHTML += makeCard(idx);
    }
}

function showGrades(idxstudents) {
    sessionStorage.setItem('studentName', students[idxstudents].name);
    sessionStorage.setItem('studentId', idxstudents);
    window.location = 'studentGrades.html';
}


function makeCard(idxstudents) {
    return `<div class="grade-card" onclick="showGrades(${idxstudents})">
        <h2>
            ${students[idxstudents].name}
        </h2>
        <p>
            Number: ${students[idxstudents].number}
        </p>
        
    </div>`;
}

window.onload = () => {
    createCards();

}
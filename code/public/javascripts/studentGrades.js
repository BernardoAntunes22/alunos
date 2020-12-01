let nameStudent;
let studentName;
let studentId;

const allGrades = [
  [
      {
          name: 'Mathematics',
          grade: 6.4,
          semester: '3rd Semester',
          ects: 6
      },
      {
          name: 'Literature',
          grade: 13.7,
          semester: '2nd Semester',
          ects: 6
      },
      {
          name: 'Laws',
          grade: 15.5,
          semester: '1st Semester',
          ects: 3
      },
      {
          name: 'Informatics',
          grade: 16.3,
          semester: '1st Semester',
          ects: 6
      },
      {
          name: 'Cooking',
          grade: 5.4,
          semester: '2nd Semester',
          ects: 3
      },
  ],
  [
      {
          name: 'Mathematics',
          grade: 18.5,
          semester: '3rd Semester',
          ects: 6
      },
      {
          name: 'Literature',
          grade: 11.4,
          semester: '2nd Semester',
          ects: 6
      },
      {
          name: 'Laws',
          grade: 6.6,
          semester: '1st Semester',
          ects: 3
      },
      {
        name: 'Cooking',
        grade: 6.4,
        semester: '2nd Semester',
        ects: 3
    },
  ],
  [
      {
          name: 'Mathematics',
          grade: 14.3,
          semester: '3rd Semester',
          ects: 6
      },
      {
          name: 'Literature',
          grade: 10.8,
          semester: '2nd Semester',
          ects: 6
      },
  ],
];





window.onload = () => {
  nameStudent = sessionStorage.getItem("studentName");
  studentId = sessionStorage.getItem("studentId");
  createCards();
  document.getElementById("student").innerHTML = nameStudent += " grades";
  let exameGrades = getSum();
  let failedGrades = getFailedGrades();
  let finishedGrades = getFinishedGrades();
  showAverage(exameGrades, failedGrades, finishedGrades);
  showFailed(failedGrades);
  showFinished(finishedGrades);

};

function showAverage(exameGrades, failedGrades, finishedGrades) {
  let average = exameGrades / (failedGrades + finishedGrades);
  document.getElementById("summaryText").innerHTML = `Average: ${average}`;
}

function getSum() {
  let sum = 0;
  for (let grade of allGrades[studentId])
      sum += grade.grade;
  return sum;

}

function showFailed(failedGrades) {
  document.getElementById("summary").innerHTML += `<p> Failed Grades: ${failedGrades} </p>`;
}

function getFailedGrades() {
  let failedGrades = 0;
  for (let grade of allGrades[studentId])
      if (grade.grade < 9.5)
          failedGrades++;
  return failedGrades;
}

function showFinished(finishedGrades) {
  document.getElementById("summary").innerHTML += `<p> Finished Grades: ${finishedGrades} </p>`;
}

function getFinishedGrades() {
  let finishedGrades = 0;
  for (let grade of allGrades[studentId])
      if (grade.grade >= 9.5)
          finishedGrades++;
  return finishedGrades;
}

function createCards() {
  let main = document.getElementById('grades');
  for (let idx in allGrades[studentId]) {
      main.innerHTML += makeCard(idx);
  }
}

function showGrades(idxGrades) {
  sessionStorage.setItem('gradeGread', idxGrades);
  sessionStorage.setItem('studentName', allGrades[studentId][idxGrades].name);
  window.location = 'studentGrades.html';
}

function makeCard(idxGrades) {
  return `<div class="grade-card ${allGrades[studentId][idxGrades].grade < 9.5 ? "failed" : ""}" onclick="showGrades(${idxGrades})">
      <h2>
          ${allGrades[studentId][idxGrades].name}
      </h2>
      <p>
          Grade: ${allGrades[studentId][idxGrades].grade}
      </p>
      <p>
          Semester: ${allGrades[studentId][idxGrades].semester}
      </p>
      <p>
          ECTS: ${allGrades[studentId][idxGrades].ects}
      </p>
      
  </div>`;
}

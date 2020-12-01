const students = [
  {
    name: "Nicolas Gaitan",
    number: 2020458,
  },
  {
    name: "Max Verstappen",
    number: 2020245,
  },
  {
    name: "Olajide Olatunji",
    number: 2020745,
  },
  {
    name: "Peter Parker",
    number: 2020457,
  },
  {
    name: "Bruce Wayne",
    number: 2020547,
  },
];

const units = [
  {
    name: "Mathematics",
    semester: "3rd Semester",
    ects: 6,
  },
  {
    name: "Literature",
    semester: "2nd Semester",
    ects: 6,
  },
  {
    name: "Laws",
    semester: "1st Semester",
    ects: 3,
  },
  {
    name: "Informatics",
    semester: "1st Semester",
    ects: 6,
  },
  {
    name: "Cooking",
    semester: "2nd Semester",
    ects: 3,
  },
];

function reset() {
  gForm.reset();
}

function calculate() {
  let values = {};
  if (validate(values)) {
    let finalGrade =
      projectG.value * projectP.value + testG.value * testP.value;
    Math.ceil(finalGrade);
    let student = students[sName.value];
    let unit = units[uName.value];
    output.innerHTML = `Student ${student.name} with number ${student.number} obtained ${finalGrade} on the ${unit.name} unit (${unit.ects} ECTS) of the ${unit.semester}.`;
    
    let grade = {"proj": {"grade": values.projectG, "percentage": values.projectP},
                "test": {"grade": values.testG, "percentage": values.testP},
                "student": {"name": student.name, "number": student.number},
                "unit": {"name": unit.name, "semester": unit.semester, "ects": unit.ects}};
    
    sessionStorage.setItem("grade", JSON.stringify(grade));
    window.location = "gradeConfirmation.html"
}
}

function validate(values) {
    projectError.classList.add("hidden");
    sumPercError.classList.add("hidden");
    testError.classList.add("hidden");


  if (projectP.value != "" || projectG.value != "") {
    if (parseFloat(projectG.value) >= 0 && parseFloat(projectG.value) <= 20) {
      values.projectP = projectP.value;
      values.projectG = projectG.value;

    } else {
      projectError.classList.remove("hidden");
      return false;
    }
  } else {
    projectError.classList.remove("hidden");
    return false;
  }

  if (testP.value != "" || testG != "") {
    if (parseFloat(testG.value) >= 0 && parseFloat(testG.value) <= 20) {
      values.testP = testP.value;
      values.testG = testG.value;

    } else {
      testError.classList.remove("hidden");
      return false;
    }
  } else {
    testError.classList.remove("hidden");
    return false;
  }

  if (parseFloat(values.testP) + parseFloat(values.projectP) == 1) {

    return true;
  } else {
    sumPercError.classList.remove("hidden");
    return false;
  }
}

let sName;
let uName;
let projectG;
let projectP;
let testG;
let testP;
let output;
let gForm;
let sumPercError;
let testError;
let projectError;

window.onload = () => {
  sName = document.getElementById("sname");
  uName = document.getElementById("uname");
  projectG = document.getElementById("projectg");
  projectP = document.getElementById("projectp");
  testG = document.getElementById("testg");
  testP = document.getElementById("testp");
  output = document.getElementById("output");
  gForm = document.getElementById("gForm");
  sumPercError = document.getElementById("sumPercError");
  testError = document.getElementById("testError");
  projectError = document.getElementById("projectError");

  fillSelectStudents();
  fillSelectUnits();
};

function fillSelectStudents() {
  for (let student of students)
    sName.innerHTML += `<option value="${students.indexOf(student)}"> ${
      student.name
    } </option>`;
}

function fillSelectUnits() {
  for (let unit of units)
    uName.innerHTML += `<option value="${units.indexOf(unit)}"> ${
      unit.name
    } </option>`;
}

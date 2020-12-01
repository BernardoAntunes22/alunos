window.onload  = () => {
    let grade =JSON.parse( sessionStorage.getItem('grade'));


    document.getElementById('studentNameTitle').innerHTML = grade.student.name;
    document.getElementById('studentName').innerHTML = grade.student.name;
    document.getElementById('unitName').innerHTML = grade.unit.name;
    document.getElementById('projectGrade').innerHTML = grade.proj.grade;
    document.getElementById('testGrade').innerHTML = grade.test.grade;
    document.getElementById('finalGrade').innerHTML = grade.proj.grade * grade.proj.percentage + grade.test.grade * grade.test.percentage;
    document.getElementById('projectPercentage').innerHTML = grade.proj.percentage;
    document.getElementById('testPercentage').innerHTML = grade.test.percentage;
    document.getElementById('testGrade').innerHTML = grade.test.grade;

}


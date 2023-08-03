
function calculateGrades() {
    var totalProblems = document.getElementById('totalProblems').value;
    var missedProblems = document.getElementById('missedProblems').value || 0;
    var gradeTable = document.getElementById('gradeTable');
    var finalGradeElement = document.getElementById('finalGrade');

    // Validate total problems
    if (totalProblems <= 0) {
        alert("Please enter a valid total number of problems.");
        return;
    }

    // Clear previous data
    gradeTable.innerHTML = '';

    // Add table header
    var header = gradeTable.insertRow();
    header.insertCell(0).innerHTML = 'Number Correct';
    header.insertCell(1).innerHTML = 'Number Missed';
    header.insertCell(2).innerHTML = 'Grade';

    // Define the grade scale
    var gradeScale = [
        { min: 100, max: 100, grade: 'A+' },
        { min: 94, max: 99, grade: 'A' },
        { min: 90, max: 93, grade: 'A-' },
        { min: 87, max: 89, grade: 'B+' },
        { min: 84, max: 86, grade: 'B' },
        { min: 80, max: 83, grade: 'B-' },
        { min: 77, max: 79, grade: 'C+' },
        { min: 74, max: 76, grade: 'C' },
        { min: 70, max: 73, grade: 'C-' },
        { min: 67, max: 69, grade: 'D+' },
        { min: 64, max: 66, grade: 'D' },
        { min: 60, max: 63, grade: 'D-' },
        { min: 50, max: 59, grade: 'F' },
    ];

    // Calculate and add rows for each grade
    gradeScale.forEach(function (item) {
        var row = gradeTable.insertRow();
        var correct = Math.ceil((item.min / 100) * totalProblems);
        var missed = totalProblems - correct;
        row.insertCell(0).innerHTML = correct;
        row.insertCell(1).innerHTML = missed;
        row.insertCell(2).innerHTML = item.grade;

        // If missed problems entered, calculate the final grade
        if (missedProblems >= 0 && missedProblems <= missed) {
            finalGradeElement.innerHTML = 'Final Grade: ' + item.grade;
        }
    });
}

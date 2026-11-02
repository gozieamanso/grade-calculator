const resultForm = document.querySelector('#resultForm');

const nameInput = document.querySelector('#nameInput');
const mathsInput = document.querySelector('#mathsInput');
const englishInput = document.querySelector('#englishInput');
const computerInput = document.querySelector('#computerInput');

const resultBox = document.querySelector('#resultBox');

// results
const nameResult = document.querySelector('#nameResult');
const mathsResult = document.querySelector('#mathsResult');
const engResult = document.querySelector('#engResult');
const compResult= document.querySelector('#compResult');

const totalResult = document.querySelector('#totalResult');
const average = document.querySelector('#average');
const gradeDisplay = document.querySelector('#gradeDisplay');
const remarkDisplay = document.querySelector('#remarkDisplay')

function calculate(event){
    event.preventDefault();

    const mathVal = Number(mathsInput.value);
    const engVal = Number(englishInput.value);
    const compVal = Number(computerInput.value);

    // calculations
    const totalScore = mathVal + engVal + compVal;
    const averageScore = totalScore / 3;


    // result display
    nameResult.textContent = `Name: ${nameInput.value}`
    mathsResult.textContent = `Mathematics score: ${mathVal}`
    engResult.textContent = `English score: ${engVal}`
    compResult.textContent = `Computer score: ${compVal}`

    totalResult.textContent = `Your total score is:  ${totalScore.toFixed(0)}/300`;
    average.textContent = `Your average score is:  ${averageScore.toFixed(2)}%`;

    // condition
    let grade;
    let remark;

    if(averageScore >= 70){
        grade = 'A';
        remark = 'Excellent';
    }
    else if(averageScore >= 60){
        grade = 'B';
        remark = 'Very Good';
    }
    else if(averageScore >=50){
        grade = 'C';
        remark = 'Good';
    }
    else if(averageScore >=45){
        grade = 'D';
        remark = 'Fair';
    }
    else if(averageScore >=40){
        grade = 'E';
        remark = 'Pass';
    }
    else{
        grade = 'F';
        remark = 'Fail';
    }

    gradeDisplay.textContent = `Your grade is: ${grade}`
    remarkDisplay.textContent = remark;
    resultBox.classList.remove('hidden');
}

resultForm.addEventListener('submit', calculate)
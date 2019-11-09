const questions = [
    {
        number: 1,
        title: 'Question one?',
        options: ['one', 'two','three'],
        answer: 'one'
    },
    {
        number: 2,
        title: 'Question two?',
        options: ['one', 'two','three'],
        answer: 'one'
    },
    {
        number: 3,
        title: 'Question 3?',
        options: ['5', '6','4'],
        answer: '5'
    },
    {
        number: 4,
        title: 'Question 4?',
        options: ['1', '2','3'],
        answer: '2'
    },
    {
        number: 5,
        title: 'Question 5',
        options: ['1', '2','3'],
        answer: '1'
    },
    {
        number: 6,
        title: 'Question 6',
        options: ['1', '2','3'],
        answer: '2'
    },
    {
        number: 7,
        title: 'Question 7',
        options: ['1', '2','3'],
        answer: '3'
    },
    {
        number: 8,
        title: 'question 8?',
        options: ['1', '2','3'],
        answer: '1'
    },
    {
        number: 9,
        title: 'Question 9 ?',
        options: ['1', '2','3'],
        answer: '3'
    }, 
    {
        number: 10,
        title: 'question 10',
        options: ['1', '2','3'],
        answer: '2'
    }, 

]
const answersBuffer = [];

function showResult(id) {
    var answer = $(`#question-${id}-options input:radio:checked`).val()
    var questionId = parseInt(id) - 1;
    if (answer == questions[questionId].answer) {
        document.getElementById(`result-${id}`).innerHTML= 'Correct!';
        answersBuffer[questionId] = true;
    }
    else {
        document.getElementById(`result-${id}`).innerHTML= 'Oops! That is not quite right!';
        answersBuffer[questionId] = false;
    }
}

function printH1s() {
    document.getElementById('startbutton').innerHTML="RESET";
    const divForH1 = document.getElementById('meantForH1');
    
    // clear the div firsst
    divForH1.innerHTML = '';

    for(const question of questions){
        answersBuffer[question.number - 1] = false;
        const optionsWrapperId = `question-${question.number}-options`
        divForH1.innerHTML += `
            <div>
                <p class="lead">${question.title}</p>

                <div id='${optionsWrapperId}'></div>
                <button id='${question.number}' onclick="showResult(this.id)"  type="button" class="btn btn-outline-info">Check</button> 
                <p id='result-${question.number}'>RESULTS: </p>
            </div>
        `;

        const optionsWrapper = document.getElementById(optionsWrapperId);
        for(const option of question.options) {
            optionsWrapper.innerHTML += `
            <label class="btn btn-secondary">
                <input type="radio" name="${question.number}" id="q1a" autocomplete="off" checked value="${option}"> ${option}
            </label>
            `
        }

    

    }

    divForH1.innerHTML += `
            <div>
                <button id='finish' onclick="finish()" type="button" class="btn btn-outline-danger">Finish</button> 
                <p id="finishbtn">Press finish to calculate results</p>

            </div>
            
        `;
}


function finish() {
    //calculate correct ans
    let numberOfCorrectAns = 0
    for(const answer of answersBuffer){
      if(answer === true ) {
        numberOfCorrectAns += 1 
      }  
    }
    document.getElementById('finishbtn').innerHTML= 'You got ' + numberOfCorrectAns + '/10. '  + outputMessage(numberOfCorrectAns);

}

function outputMessage(score) {
    if (score >= 10) {
        return "WOW! Well done!"
    }
    else if (score >= 5) {
        return "Good Job"
    }
    else if (score >= 0) {
        return "Try Again"
    }
    else {
        return ""
    }
}


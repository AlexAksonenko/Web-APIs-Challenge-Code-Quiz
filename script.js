

let page = 0;

let score = 0;

let timerCount = 60;

let timer;

function onTimer() {
    const placeholder = document.querySelector('.timer_sec');
    console.log('Called')
    timerCount--;
    if (!timerCount) {
        document.querySelector(`.q${page}`).style.display = 'none';
        page = 3;
        onNextClick();
        placeholder.innerText = 'Timeout!'
        return;
    }
    placeholder.innerText = timerCount;
    startTimer();
}

function startTimer() {
    timer = setTimeout(onTimer, 1000);
}

function onNextClick(event) {

    const value = event?.currentTarget?.innerText;


    let isCorrect = false;

    if (page === 0) {
        startTimer()
    } else if (page === 3) {
        if (timer) clearTimeout(timer);
    }

    if (page === 1 && value === 'Script') {
        isCorrect = true;
        score += 10;
    } else if (page === 2 && value === 'Both the <head> section and the <body> section are correct') { 
        isCorrect = true;
        score += 10;
    } else if (page === 3 && value === 'function myFunction()') { 
        isCorrect = true;
        score += 10;
    }

    const prevPage = document.querySelector(`.q${page}`);
    page++;
    const nextPage = document.querySelector(`.q${page}`);

    const result = prevPage.querySelector('.result');

    if (result) { 
        result.innerText = isCorrect ? 'Correct' : 'Wrong'; 
        result.style.display = 'block'
    }

    

    setTimeout(() => {
        prevPage.style.display = 'none';
        nextPage.style.display = 'block';

        if (page === 4) {
            const finalResult = document.querySelectorAll('.q_result');
            finalResult.forEach(el => el.innerText = score);
        }

        if (page === 5) {
            const input = document.querySelector('input.name');
            const placeholder =  document.querySelector('span.name');
            placeholder.innerText = input.value
        }

    }, result ? 3000 : 0)
}



const nextButtons = document.querySelectorAll('.start');

for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', onNextClick)
}









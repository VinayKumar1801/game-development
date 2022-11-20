const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffleQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {

        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '10', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'Capital of India?',
        answers: [
            { text: 'Mumbai', correct: false },
            { text: 'Kolkata', correct: false },
            { text: 'Delhi', correct: true },
            { text: 'Chennai', correct: false }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [
            { text: 'Kinda', correct: false },
            { text: 'YES!!!', correct: true },
            { text: 'Um no', correct: false },
            { text: 'IDK', correct: false }
        ]
    },
    {
        question: 'Fire temple is the place of worship of which of the following religion?',
        answers: [
            { text: 'Taoism', correct: false },
            { text: 'Judaism', correct: false },
            { text: 'Zoroastrianism (Parsi Religion)', correct: true },
            { text: 'Shintoism', correct: false },
        ]
    },
    {
        question: 'Friction can be reduced by changing from',
        answers: [
            { text: 'sliding to rolling', correct: true },
            { text: 'rolling to sliding', correct: false },
            { text: 'potential energy to kinetic energy', correct: false },
            { text: 'dynamic to static', correct: false },
        ]
    },
    {
        question: 'Gravity setting chambers are used in industries to remove',
        answers: [
            { text: 'SOx', correct: false },
            { text: 'NOx', correct: false },
            { text: 'suspended particulate matter', correct: true },
            { text: 'CO', correct: false },
        ]
    },
    {
        question: 'Each year World Red Cross and Red Crescent Day is celebrated on',
        answers: [
            { text: 'June 8', correct: false },
            { text: 'May 18', correct: false },
            { text: 'June 18', correct: false },
            { text: 'May 8', correct: true },
        ]
    },
    {
        question: 'First China War was fought between',
        answers: [
            { text: 'China and France', correct: false },
            { text: 'China and Egypt', correct: false },
            { text: 'China and Greek', correct: false },
            { text: 'China and Britain', correct: true },
        ]
    },
    {
        question: 'Gulf cooperation council was originally formed by',
        answers: [
            { text: 'Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and United Arab Emirates', correct: true },
            { text: 'Second World Nations', correct: false },
            { text: 'Third World Nations', correct: false },
            { text: 'Fourth World Nations', correct: false },
        ]
    },
    {
        question: '	First Afghan War took place in',
        answers: [
            { text: '1839', correct: true },
            { text: '1843', correct: false },
            { text: '1833', correct: false },
            { text: '1848', correct: false },
        ]
    },
    {
        question: 'Golf player Vijay Singh belongs to which country?',
        answers: [
            { text: 'USA', correct: false },
            { text: 'Fiji', correct: true },
            { text: 'India', correct: false },
            { text: 'UK', correct: false },
        ]
    },
    {
        question: '	Exposure to sunlight helps a person improve his health because',
        answers: [
            { text: 'the infrared light kills bacteria in the body', correct: false },
            { text: 'resistance power increases', correct: false },
            { text: 'the pigment cells in the skin get stimulated and produce a healthy tan', correct: false },
            { text: 'the ultraviolet rays convert skin oil into Vitamin D', correct: true },
        ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [
            { text: 'developed the telescope', correct: false },
            { text: 'discovered four satellites of Jupiter', correct: false },
            { text: 'discovered that the movement of pendulum produces a regular time measurement', correct: false },
            { text: 'All of the above', correct: true },
        ]
    },
    {
        question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        answers: [
            { text: '1968', correct: false },
            { text: '1058', correct: false },
            { text: '1967', correct: true },
            { text: '1922', correct: false },
        ]
    },
    {
        question: 'Epsom (England) is the place associated with',
        answers: [
            { text: 'Horse racing', correct: true },
            { text: 'Polo', correct: false },
            { text: 'Shooting', correct: false },
            { text: 'Snooker', correct: false },
        ]
    },
    {
        question: 'Fastest shorthand writer was',
        answers: [
            { text: 'Dr. G. D. Bist', correct: true },
            { text: 'J.R.D. Tata', correct: false },
            { text: 'J.M. Tagore', correct: false },
            { text: 'Khudada Khan', correct: false },
        ]
    },
    {
        question: 'FFC stands for',
        answers: [
            { text: 'Foreign Finance Corporation', correct: false },
            { text: 'Film Finance Corporation', correct: true },
            { text: 'Federation of Football Council', correct: false },
            { text: 'None of the above', correct: false },
        ]
    },
    {
        question: 'Hitler party which came into power in 1933 is known as',
        answers: [
            { text: 'Labour Party', correct: false },
            { text: 'Ku-Klux-Klan', correct: false },
            { text: 'Nazi Party', correct: true },
            { text: 'Democratic Party', correct: false },
        ]
    },
    {
        question: 'For which of the following disciplines is Nobel Prize awarded?',
        answers: [
            { text: 'Physics and Chemistry', correct: false },
            { text: 'Physiology or Medicine', correct: false },
            { text: 'Literature, Peace and Economics', correct: false },
            { text: 'All of the above', correct: true },
        ]
    },
    {
        question: 'Garampani sanctuary is located at',
        answers: [
            { text: 'Junagarh, Gujarat', correct: false },
            { text: 'Diphu, Assam', correct: true },
            { text: 'Kohima, Nagaland', correct: false },
            { text: 'Gangtok, Sikkim', correct: false },
        ]
    },
    {
        question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Africa', correct: true },
            { text: 'Europe', correct: false },
            { text: 'Australia', correct: false },
        ]
    },
    {
        question: 'Entomology is the science that studies',
        answers: [
            { text: 'Behavior of human beings', correct: false },
            { text: 'Insects', correct: true },
            { text: 'The origin and history of technical and scientific terms', correct: false },
            { text: 'The formation of rocks', correct: false },
        ]
    },
    {
        question: 'Grand Central Terminal, Park Avenue, New York is the worlds',
        answers: [
            { text: 'largest railway station', correct: true },
            { text: 'highest railway station', correct: false },
            { text: 'longest railway station', correct: false },
            { text: 'None of the above', correct: false },
        ]
    }
]
export class Question {
    static create(question) {
        return fetch('https://jsauthorization-a7728-default-rtdb.firebaseio.com/questions.json', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify(question)
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            })
            .then(addToLocalStorage)
            .then(Question.renderList)
    }
    static renderList(){
        const  questions = getQuestionFromLocalStorage()

        const html = questions.length 
        ? questions.map(toCard).join('') 
        : `<div class="mui--text-headline">Вы пока ничего не спрашивали</div>`

        const list = document.getElementById('list')

        list.innerHTML = html
    }
}

function toCard(question){
    return ` 
    <div class="mui--text-black-54">
        ${new Date(question.date).toLocaleDateString()}
        ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div>${question.text}</div>
    <br>
    `
}

function addToLocalStorage(question) {
    const all = getQuestionFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}
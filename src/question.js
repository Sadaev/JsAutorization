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
                console.log(response)
            })
    }
}
export function getAuthForm() {
    return `
        <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email" required>
                <label for="email">Email</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" id="password" required>
                <label for="password">Пароль</label>
            </div>
            <button
            type="submit" 
            class="mui-btn mui-btn--raised mui-btn--primary"
            >
            Войти
            </button>
        </form>
    `
}

export function authWithEmailAndPassword(email, password){
    const apiKey ='AIzaSyD8p9OCEI7dNL_HsVljShanJTHr9jDfsYM'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
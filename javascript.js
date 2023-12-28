window.onload = function () {

    const form = document.querySelector('#form')
    const submitButton = document.querySelector('#submit')
    form.addEventListener('submit', (e) => {
        submitButton.disabled = true
        e.preventDefault()
        window.location.href = window.location.href = 'success.html'
    })

}
console.log("Hello World");
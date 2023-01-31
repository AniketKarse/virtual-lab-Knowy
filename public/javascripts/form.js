
const form = document.querySelector("#myForm")
const Url = '/users/sendForm'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    var formData = new FormData(form)
    var formDataJson = JSON.stringify(Object.fromEntries(formData))

    console.log(formDataJson)
    
    fetch(Url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: formDataJson
    }).then((response) => {
        alert(response)
    }).catch((e) => {
        // alert(e)
    })

})
const chatArea = document.querySelector("#chatArea");

// This function append chats to the chat area
function appendChat(data) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('card');

    if(typeof data.teacherName === "undefined"){
        data.teacherName = '--'
    }

    if(typeof data.answer === "undefined"){
        data.answer = 'Your Question is under review'
    }

    let markup = `
            <div class="card-header" id="studentName">
            <h6 style="margin: 0px;">${data.studentName} <span
                    class="badge
                    bg-success">${data.subject}</span></h6>
            </div>
            <div class="card-body">
                <h5 class="card-title" id="chat_question">${data.question}</h5>
                <p class="card-text" id="chat_answer">${data.answer}</p>
                <hr>
                <small>${data.teacherName}</small>
            </div>

    `
    mainDiv.innerHTML = markup
    chatArea.appendChild(mainDiv)
}

window.addEventListener('load', () => {
        
        const loading = document.getElementById("loading")
        loading.innerHTML = "LOADING..."

        fetch("https://virtuallab-chat-api.onrender.com/chat/getAllChats")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                loading.style.display = "none"
                let chatArrayLength = data.length
                while (chatArrayLength--) {
                    appendChat(data[chatArrayLength])
                }
            });

})


// Send Chat to database
const questionForm = document.getElementById("questionForm")

questionForm.addEventListener('submit',  (e) => {
    e.preventDefault()

    var questionFormData = Object.fromEntries(new FormData(questionForm))
    questionFormData.studentName = JSON.parse(localStorage.getItem('user')).name
    console.log(questionFormData)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(questionFormData)
    }

     fetch('https://virtuallab-chat-api.onrender.com/chat/createChat', options)
        .then(res => res.json())
        .then()




})

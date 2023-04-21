const chatArea = document.querySelector("#chatArea");

// This function append chats to the chat area
function appendChat(data) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('card');

    let markup = `
            <div class="card-header" id="studentName">
            <h6 style="margin: 0px;">Shreyash Talole <span
                    class="badge
                    bg-success">${data.subject}</span></h6>
            </div>
            <div class="card-body">
                <h5 class="card-title" id="chat_question">What do you
                    think
                    the meaning of life is?</h5>
                <p class="card-text" id="chat_answer">Your question is
                    under
                    review</p>
            </div>

    `
    mainDiv.innerHTML = markup
    chatArea.appendChild(mainDiv)
}

fetch("https://virtuallab-chat-api.onrender.com/chat/getAllChats")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        let chatArrayLength = data.length
        while (chatArrayLength--) {
            appendChat(data[chatArrayLength])
        }
    });


// Send Chat to database
const questionForm = document.getElementById("questionForm")

questionForm.addEventListener('submit', (e) => {
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

    // fetch('https://virtuallab-chat-api.onrender.com/chat/createChat', options)
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     })

    fetch('https://virtuallab-chat-api.onrender.com/chat/createChat', options)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })




})

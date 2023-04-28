
// This function redirect the teacher to student progress and show the progress accordingly
function showStudentProgressByRedirecting(id){
    // alert(id)
    showStudentProgress()
    let studentSearchForm_input = document.getElementById("studentSearchForm_input")
    let studentSearchForm_button = document.getElementById("studentSearchForm_button")

    studentSearchForm_input.value = id
    studentSearchForm_button.click()
}


const SAVE_STORAGE_NAME = "auto_save_input_text"
const ID_INPUT_TEXT = "inputText"

recoverLostText()

// recover lost text
function recoverLostText(){
    let text = sessionStorage.getItem(SAVE_STORAGE_NAME)
    if (text){
        let input_text = document.getElementById(ID_INPUT_TEXT)
        input_text.value = text
    }
}

// save data every time there is a change in the textArea
document.getElementById(ID_INPUT_TEXT).addEventListener('input', (e) => {
    console.log(e)
    try {
        sessionStorage.setItem(SAVE_STORAGE_NAME, e.target.value)
    } catch (error) {
        console.error(error)
    }
}, false)





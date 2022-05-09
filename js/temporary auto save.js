const SAVE_STORAGE_NAME = "auto_save_input_text"
const ID_INPUT_TEXT = "inputText"

// save data every time there is a change in the textArea
document.getElementById(ID_INPUT_TEXT).addEventListener('input', (e) => {
    try {
        sessionStorage.setItem(SAVE_STORAGE_NAME, e.target.value)
    } catch (error) {
        console.error(error)
    }
}, false)

// recover lost text
window.addEventListener('DOMContentLoaded', (e) => {
    let text = sessionStorage.getItem(SAVE_STORAGE_NAME)
    console.log("texto encontrado",text)
    if (text){
        let input_text = document.getElementById(ID_INPUT_TEXT)
        input_text.value = text
        console.log("entró")
    }
})

let IN_TEXT = "inputText"
let ID_SEARCH_BUTT = "searchButton"
let ID_LIST_CONT = "listContainer"

function displayWords() {
    let input_words_list = document.getElementById(IN_TEXT).value
    let input_words_array = getWordsByFrequecy(corpus, input_words_list);
    let div_container_list = document.getElementById(ID_LIST_CONT)
    let ol_list_init = "<ol>"
    let ol_list_end = "</ol>"
    let ol_list_center = ""
    let number_words = input_words_array.length

    if (number_words > 0) {
        for (let i = 0; i < number_words; i++) {
            ol_list_center = ol_list_center + "<li>" + input_words_array[i] + "</li>"
        }
    }
    div_container_list.innerHTML = ol_list_init + ol_list_center + ol_list_end
}


document.getElementById(ID_SEARCH_BUTT).addEventListener('click', displayWords);




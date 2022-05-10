let IN_TEXT = "inputText"
let ID_SEARCH_BUTT = "searchButton"
let ID_LIST_CONT = "listContainer"
let div_init = '<div class="col-xs-6 col-sm-4 col-md-3 col-xl-2 text-white d-flex justify-content-between">'
let p_init = '<p>'
let BUTTON = '<button type="submit" class="btn btn-secondary btn-sm mb-4 mr-4" id="searchButton">x</button>'
function displayWords() {
    let input_words_list = document.getElementById(IN_TEXT).value
    let input_words_array = getWordsByFrequecy(corpus, input_words_list);
    let div_container_list = document.getElementById(ID_LIST_CONT)
    let div_list_init = div_init + p_init
    let div_list_center = ""
    let div_list_end = "</p>" + BUTTON + "</div>"
    let number_words = input_words_array.length
    if (number_words > 0) {
        for (let i = 0; i < number_words; i++) {
            div_list_center = div_list_center + div_list_init + `${i + 1}. ` + input_words_array[i] + div_list_end
        }
    }
    div_container_list.innerHTML = div_list_center
}


document.getElementById(ID_SEARCH_BUTT).addEventListener('click', displayWords);




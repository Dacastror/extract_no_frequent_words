let IN_TEXT = "inputText"
let ID_SEARCH_BUTT = "searchButton"
let ID_LIST_CONT = "listContainer"
let ID_LIST_CONT_2 = "listContainer2"
let ID_LIST_CONT_3 = "listContainer3"

function displayWords() {
    let input_words_list = document.getElementById(IN_TEXT).value
    let input_words_array = getWordsByFrequecy(corpus, input_words_list);
    let div_container_list = document.getElementById(ID_LIST_CONT)
    let div_container_list2 = document.getElementById(ID_LIST_CONT_2)
    let div_container_list3 = document.getElementById(ID_LIST_CONT_3)
    let ol_list_init = '<ul class="card-columns" style="column-count: 3;">'
    let ol_list_end = "</ul>"
    let ol_list_center = ""
    let ol_list_center_2 = ""
    let ol_list_center_3 = ""
    let number_words = input_words_array.length
    let number_words_frac = Math.round(number_words / 3)

    if (number_words > 0) {
        for (let i = 0; i < number_words; i++) {
            if (i <= number_words_frac) {
                ol_list_center = ol_list_center + "<li>" + `${i + 1}. ` + input_words_array[i] + "</li>"
            } else if (i <= 2 * number_words_frac) {
                ol_list_center_2 = ol_list_center_2 + "<li>" + `${i + 1}. ` + input_words_array[i] + "</li>"
            } else {
                ol_list_center_3 = ol_list_center_3 + "<li>" + `${i + 1}. ` + input_words_array[i] + "</li>"
            }
        }
    }
    div_container_list.innerHTML = ol_list_init + ol_list_center + ol_list_end
    div_container_list2.innerHTML = ol_list_init + ol_list_center_2 + ol_list_end
    div_container_list3.innerHTML = ol_list_init + ol_list_center_3 + ol_list_end
}


document.getElementById(ID_SEARCH_BUTT).addEventListener('click', displayWords);




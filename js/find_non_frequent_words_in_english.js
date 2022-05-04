
// se debe ejecutar esta función al hacer clic en el botón que permite 
// ejecutar la busqueda de palabras no frecuentes
function orderedWords(){ 
    const text_area = document.getElementById("text_input")
    const input_text = text_area.value
    ordered_words = getWordsByFrequecy(corpus, input_text)
    console.log(ordered_words)
}

function getWordsByFrequecy(corpus, input_string){
    var input_words_list = cleanInput(input_string)

    var pares = []; var word = ""
    for(var i = 0; i < input_words_list.length; i++){
        word = input_words_list[i]
        pares.push([word, corpus.indexOf(word)])
    }

    pares.sort(function(first, second) {
        return second[1] - first[1];
    });

    sorted_words = []
    for(var i=0; i<pares.length; i++){
        sorted_words.push(pares[i][0])
    }

    return sorted_words
}

function cleanInput(string){
    var new_str = string.toLowerCase()
    new_str = new_str.replace(/\n/g, " ")
    new_str = new_str.replace(/can('|‘|’)t/g, "can not ")
    new_str = new_str.replace(/i('|‘|’)m/g, " i am ")
    new_str = new_str.replace(/n('|‘|’)t/g, " not ")
    new_str = new_str.replace(/('|‘|’)t/g, " not ")
    new_str = new_str.replace(/('|‘|’)(ll|re|ve|d|s)/g, " ")
    new_str = new_str.replace(/ - /g," ")
    new_str = new_str.replace(/[^\p{L} -]/gu, " ") // remover caracteres que no son letras
    new_str = new_str.replace(/  +/g," ")
    new_str = new_str.trim()
    var array = new_str.split(" ")
    array = [...new Set(array)] // remover palabras repetidas
    return array
}

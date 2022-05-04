
// se debe ejecutar esta función al hacer clic en el botón que permite 
// ejecutar la busqueda de palabras no frecuentes
function orderedWords(){ 
    const text_area = document.getElementById("text_input")
    const input_text = text_area.value
    ordered_words = getWordsByFrequecy(corpus, input_text)
    //console.log(ordered_words)
}

function getWordsByFrequecy(corpus, input_string){
    var input_words_list = cleanInput(input_string)
    var pairs = pairsWordIndex(corpus, input_words_list)
    return sortWords(pairs)
}

function cleanInput(string){
    var new_str = string + " "
    new_str = new_str.toLowerCase()
    new_str = new_str.replace(/-\n/g, "")
    new_str = new_str.replace(/\n-/g, " ")
    new_str = new_str.replace(/\n/g, " ")
    new_str = new_str.replace(/can('|‘|’)t[^\p{L}]/gu, "can not ")
    new_str = new_str.replace(/i('|‘|’)m[^\p{L}]/gu, " i am ")
    new_str = new_str.replace(/n('|‘|’)t[^\p{L}]/gu, " not ")
    new_str = new_str.replace(/('|‘|’)t[^\p{L}]/gu, " not ")
    new_str = new_str.replace(/('|‘|’)(ll|re|ve|d|s)[^\p{L}]/gu, " ")
    new_str = new_str.replace(/[^\p{L} -]/gu, " ") // remover caracteres que no son letras
    new_str = new_str.replace(/ -/g," ")
    new_str = new_str.replace(/  +/g," ")

    new_str = new_str.trim()
    var array = new_str.split(" ")
    array = [...new Set(array)] // remover palabras repetidas
    return array
}

function pairsWordIndex(corpus, input_words_list){
    var pairs = []; var word = ""; var indice;
    for(var i = 0; i < input_words_list.length; i++){
        word = input_words_list[i]
        indice = corpus.indexOf(word)
        if (indice > -1){
            pairs.push([word, corpus.indexOf(word)])
        }
    }
    return pairs
}

function sortWords(pairs){
    pairs.sort(function(first, second) {
        return second[1] - first[1];
    });

    console.log(pairs)

    sorted_words = []
    for(var i=0; i<pairs.length; i++){
        sorted_words.push(pairs[i][0])
    }
    return sorted_words
}
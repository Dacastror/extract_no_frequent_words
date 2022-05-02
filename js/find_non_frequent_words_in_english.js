
// se debe ejecutar esta función al hacer clic en el botón que permite 
// ejecutar la busqueda de palabras no frecuentes
function palabrasOrdenadas(){ 
    var input_text = document.getElementById("text_input").value
    getWordsByFrequecy(corpus, input_text)
}

function getWordsByFrequecy(corpus, input_string){
    var clean_input = limpiarInput(input_string)
    var array_input = clean_input.split(" ")

    // ***** falta realizar *****

}

function limpiarInput(string){
    string = string.toLowerCase()

    // ***** falta realizar *****

    return string
}
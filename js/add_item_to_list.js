var x = document.createElement("LI");
x.classList.add("list-group-item", "text-white")
function displayWords() {
    let inputText = document.getElementById('inputText').value
    console.log(inputText)
    let inputTextArray = inputText.split(" ")
    console.log(inputTextArray[0])
    if (inputTextArray.length > 0) {
        for (let i = 0; i < inputTextArray.length; i++) {
            var t = document.createTextNode(inputTextArray[i]);
            x.appendChild(t);
            document.getElementById("wordsList").appendChild(x);
            console.log(inputTextArray[i])
        }
    }
}


document.getElementById('searchButton').addEventListener('click', displayWords);




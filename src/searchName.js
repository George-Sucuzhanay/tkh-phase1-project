let query = document.getElementById('searchText').value
const queryButton = document.getElementById("queryButton");
// const affrimWithQuery = `https://cors-anywhere.herokuapp.com/https://api.fisenko.net/v1/authors/en/${id}/quotes?query=&limit=1&offset=0`
let inputVal = "";
if (queryButton) {
    inputVal = queryButton.value;
}
// comment testing
const urlWithQuery = `https://cors-anywhere.herokuapp.com/https://api.fisenko.net/v1/authors/en?query="${query}"&limit=50&offset=0 `

queryButton.addEventListener("click", function(event){
event.preventDefault()

fetch(urlWithQuery, {
    headers: {
        Accept: "application/json",
        
    }
    })
    .then((resp) => {
        resp.json()
        console.log(resp.id)
        
    })
    .then(result => {      
    console.log(result)
    console.log("searchName", result)
    const { id } = result
    const pTag = document.getElementById("inspiration-quote")
    pTag.innerText = id
    })
    .catch(function(error) {
        console.error("Error Retrieving", error)
    });
});
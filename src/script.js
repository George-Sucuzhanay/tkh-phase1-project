// using cors anywhere demo server
// https://cors-anywhere.herokuapp.com/
// need to enable it first by going to the link above
const url = 'https://cors-anywhere.herokuapp.com/https://www.affirmations.dev';
var headers = {}
// The fetch() method returns a promise. If the promise returned is resolve, the function within the then() method is executed. That function contains the code for handling the data received from the API.
fetch(url, {
  headers: {
    Accept: "application/json"
  }
})
.then((resp) => resp.json())
.then(result => {
    const { affirmation } = result
    const pTag = document.getElementById("inspiration-quote")
    pTag.innerText = affirmation
})
.catch(function(error) {
    console.error("Error Retrieving", error)
});

// api calls
// https://www.affirmations.dev/ => return random affirmations
// https://api.fisenko.net/v1/authors/en?query="Steve Jobs"&limit=50&offset=0   => return Jobs's ID
// https://api.fisenko.net/v1/quotes/en/random/ => get random famous quotes
// https://api.fisenko.net/v1/authors/en/6153b7d49e8e5ae3eb230a5b/quotes?query=&limit=1&offset=0 => returns Job's famous quote object
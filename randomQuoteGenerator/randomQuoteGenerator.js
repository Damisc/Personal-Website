function getNewRandomQuote() {
    fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        const quoteText = data[0].q
        const quoteAuthor = data[0].a

        document.getElementById("random-quote-text").innerHTML = quoteText
        document.getElementById("random-quote-author").innerHTML = quoteAuthor
    })
    .catch(error => {
        // Handles errors
        alert("There was a problem loading a new quote.");
    })
}

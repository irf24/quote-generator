const apiUrl = "https://type.fit/api/quotes";
let quotes = [];

function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote["text"];
  document.getElementById("author").innerText = quote["author"];
}

async function getQuotes() {
  try {
    const response = await fetch(apiUrl);
    quotes = await response.json();
    showQuote();
  } catch (err) {
    //   err handling
  }
}

getQuotes();

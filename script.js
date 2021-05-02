const apiUrl = "https://type.fit/api/quotes";
let query = "";

let quotes = [];

function showQuote() {
  const quoteText = document.getElementById("quote");
  const author = document.getElementById("author");
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  quoteText.textContent = quote.text;

  if (!quote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = quote.author;
  }

  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
    author.classList.add("author-small");
  } else {
    quoteText.classList.remove("long-quote");
    author.classList.remove("author-small");
  }
  query = quote.text + " - " + quote.author;
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

function tweetQuote() {
  twitterUrl = `https://twitter.com/intent/tweet?text=${query}`;
  window.open(twitterUrl, "_blank");
}

getQuotes();

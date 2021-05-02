const apiUrl = "https://type.fit/api/quotes";
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");

let quotes = [];

// show loading animation
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// show quote
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function showQuote() {
  loading();

  // get a random quote
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

  complete();
}

// get quote from API
async function getQuotes() {
  loading();
  try {
    const response = await fetch(apiUrl);
    quotes = await response.json();
    showQuote();
  } catch (err) {
    //   err handling
  }
}

// tweet quote
function tweetQuote() {
  twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

// onload
getQuotes();

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` :an array of objects
***/
quotes = [
  {
    quote: "We accept the love we think we deserve.",
    source: "Stephen Chbosky",
    citation: "The Perks of Being a Wallflower",
    year: 1999,
    tags: "#love"
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "Believe in your infinite potential. Your only limitations are those you set upon yourself.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston S. Churchill"
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde"
  }
];

/***
 * `randValue` function
 *    returns random value using user input
***/
const randValue = (value) => Math.floor(Math.random() * value);

/***
 * `getRandomQuote` function
 *    returns random object from quotes array
***/
const getRandomQuote = () => quotes[randValue(quotes.length)];

/***
 * `printQuote` function
 *    returns full html string displaying a random quote
***/
function printQuote() {
  let randQuote = getRandomQuote();
  let html = `
    <p class="quote"> ${randQuote.quote} </p>
    <p class="source"> ${randQuote.source}
    `;

  for (let prop in randQuote) {
    if (prop != 'quote' && prop != 'source') {
        html += `<span class="${prop}"> ${(randQuote[prop])} </span>`
    }
  }

  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;
  return html;
}

/***
 * `randRGB` function
 *    returns full html string displaying a random quote
***/
const randRGB = (value) => `rgb( ${value(256)}, ${value(256)}, ${value(256)} )`;

// Refresh to random quote and background color every 5 seconds 
setInterval(function () {
  printQuote();
  document.querySelector('body').style.backgroundColor = randRGB(randValue);
}, 5000);

  /***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);


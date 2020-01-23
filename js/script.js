/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//contains an array of objects containing highly inaccurate quotes
var quotes = [
      {
          quote: "The purpose of life, is a life of purpose.",
          source: "Tarek itani",
      },
      {
          quote: "In all cities, the better classes - the business men - are the sources of corruption, but they are so rarely pursued and caught that we do not fully realize whence the trouble comes.",
          source: "Lincoln Steffens",
          year: "1866",
          citation: "www.webmd.com"
      },
      {
          quote: "Everyone has noticed how hard it is to turn our thoughts to God when everything is going well with us... While what we call 'our own life' remains agreeable, we will not surrender it to Him. What, then, can God do in our interests but make 'our own life' less agreeable to us, and take away the plausible sources of false happiness?",
          source: "C. S. Lewis",
          year: "1963"
      },
      {
          quote: "Cast the ring into mordor and destroy it.",
          source: "Aragorn",
          year: "2004"
      },
      {
          quote: "That which God said to the rose, and caused it to laugh in full-blown beauty, He said to my heart, and made it a hundred times more beautiful.",
          source: "Rumi",
          year: "1700"
      }
];

/***
 * `getRandomQuote` function
***/
//returns a random quote from the the array
function getRandomQuote(){
 var randomQuote = Math.floor(Math.random()*quotes.length);
  return quotes[randomQuote]
};
/***
 * `printQuote` function
***/
//creates a variable that stores the object, the object propertys are then called to output
//the values in the webpage within the message variabl
//uses document.getElementById method to replace the HTML within elementID "quote-box"
function printQuote(){
  var pullQuote = getRandomQuote();
  message = '';
  message += '<p class="quote">' + pullQuote.quote + '</p>';
  message +='<p class="source">'+ pullQuote.source;
  if(pullQuote.year){
    message += '<span class="year">'+ pullQuote.year + '</span>';
  };
  if(pullQuote.citation){
    message += '<span class="citation">'+ pullQuote.citation + '</span';
  }
  message += '</p>'
  document.getElementById("quote-box").innerHTML = message;
};
//running the print quote function once because it wont display initially, until someone clicks.
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!! 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
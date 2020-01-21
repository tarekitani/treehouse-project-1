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
var quotes = [
      {
          quote: "The purpose of life, is a life of purpose.",
          source: "Tarek itani",
          year: 2007
      },
      {
          quote: "In all cities, the better classes - the business men - are the sources of corruption, but they are so rarely pursued and caught that we do not fully realize whence the trouble comes.",
          source: "Lincoln Steffens",
          year: 1866
      },
      {
          quote: "Everyone has noticed how hard it is to turn our thoughts to God when everything is going well with us... While what we call 'our own life' remains agreeable, we will not surrender it to Him. What, then, can God do in our interests but make 'our own life' less agreeable to us, and take away the plausible sources of false happiness?",
          source: "C. S. Lewis",
          year: 1963
      },
      {
          quote: "Cast the ring into mordor and destroy it.",
          source: "Aragorn",
          year: 2004
      }
];
document.getElementById(quotes[0]);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
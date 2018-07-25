/*
{"quoteText":"A gem cannot be polished without friction, nor a man perfected without trials. ", "quoteAuthor":"Chinese Proverb", "senderName":"", "senderLink":"", "quoteLink":"https://forismatic.com/en/f3c3641b00/"}
*/


var quotes = [
    {content : "Anyone who has never made a mistake has never tried anythging new.", source : "Albert Einstein"},
    {content : "Motivation comes from working on things we care about.", source : "Sheryl Sandberg"},
    {content : "No matter what people tell you, words and ideas can change the world.", source : "Robin Willinams"},
    {content : "You get what you give", source : "Jennifer Lopez"},
    {content : "Nothing is impossible. The word itselg says \"I'm possible\"", source : "Aundrey Hepburn"},
    {content : "Don't wait. The time wil never be just right.", source : "Napoleon Hill"},
    {content : "Stay close to anytging that makes you glad you are alive.", source : "Hafez"},
    {content : "Passion is the genesis of genius.", source : "Galileo Galilei"},
    {content : "To win big, sometimes you have to take big risks", source : "Bill Gates"},
    {content : "If you get up in the morning and think the future is going to be better, it is a bright day.", source : "Elon Musk"},
    {content : "Try not to become a man of success, but rather try to become a man of value.", source : "Albert Einstein"},
    {content : "All truths are eassy to understand once they are discovered. The ot is to discover them.", source : "Galileo Galilei"},
    {content : "Stay foolish, stay hungry.", source : "Steve Jobs"}
]

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);

    var quoteContent = quotes[randomNumber].content;
    var quoteSource = quotes[randomNumber].source;

    document.getElementById('content').innerHTML=quoteContent;
    document.getElementById('source').innerHTML=quoteSource;
    
   $('tweetlink').attr("href","https://twitter.com/intent/tweet?text?"+quoteContent+" "+quoteSource);

    
}
getQuote();


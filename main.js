$(document).ready(function(){
    var quoteVar = '';
    var authorVar = '';
    $('.btn-outline-secondary').click(function(){
        $.getJSON('https://talaikis.com/api/quotes/random/', function(json){
            quoteVar = json.quote;
            authorVar = json.author;
            $('#quote').html("\"" + json.quote + "\"");
            $('#author').html("-" + json.author);
        });
    });
    $('.btn-outline-primary').click(function(){
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + "\"" + quoteVar + "\"" + " -" + authorVar);
    });
});
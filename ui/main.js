//Code of Counter
var button=ducument.getElementbyid('counter'); // Select our button

//When the button is clicked, let us attach a function to it which should 
//first make a request to the counter end pt, capture response and store it in a var.
//The var should be rendered in the correct span. Let's do this(pt 5) first
var counter=0;
var onclick=function() {
counter=counter+1;
var span=document.getElementbyId("count");
span.innerHTML=counter.tostring();
}
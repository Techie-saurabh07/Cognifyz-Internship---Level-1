var now = new Date();
var hours = now.getHours();

var greetingMessage = "";
if (hours < 12) 
{
    greetingMessage = "Good morning!";
} 

else if (hours < 18) 
{
    greetingMessage = "Good afternoon!";
} 

else
{
    greetingMessage = "Good evening!";
}

alert(greetingMessage);

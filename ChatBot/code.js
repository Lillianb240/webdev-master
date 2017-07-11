//The sample application will utilize Javascript for DOM manipulation and a simple form for input/output actions

//Array of quotes to choose from as a message
var quotes = [
"The last book that I read was The Call of the Wild.",
"One of my favorite songs would be Walls Could Talk by Halsey.",
"My favortie place to travel to would be Orlando, Fl *-*",
"The only type of music I don't listen to is country music.",
"My favorite book is The Color Purple.",
"The first place I ever traveled to was Texas.",
"An artist I frequently listen to is BTS >.~",
"I often travel to my mother's home in Mississippi or my dad's home in Alabama",
"I hate being told what to read >.<",
"I would like to travel the world one day ~.~",
"Most times, I'm reading on my phone",
"We don't talk anymore",
"'Cause I'm at an all time low",
"You don't know my heart the way you know my face",
"I just wanna be yours",
"You can't wake up this is not a dream",
"To all the under dogs in the world. A day may come when we lose. But it is not today. Today we fight",
"Wanted to be a better brother, better son",
]

//Create variables that represent the DOM elements
var botText = document.getElementById('botText');
var userText = document.getElementById('userText');
var sendMessage = document.getElementById('send');
var messageText = document.getElementById('message');
var conversation = document.getElementById('conversation');

//Miscellaneous test code to access the text displayed in the messages
/*
botText.innerText = 'javascript rules';
userText.innerText = 'yea buddy';
*/

//Create variables that are representations of the User and Bot generated messages
var newMessage = userText.cloneNode();
var newPrompt = botText.cloneNode();

//Hide the original HTML message bubbles
botText.hidden = userText.hidden = true;

//Add Send Button functionality for the click event
sendMessage.addEventListener('click', function() {
    //if there is nothing typed in, don't send a message
    if (!messageText.value) {
        return;
    }

    //New message process
    newMessage = newMessage.cloneNode(); //Make a fresh copy of the message bubble WITHOUT the text. if cloneNode(true), the text is also copied
    newMessage.innerText = messageText.value; //set the text in the message to match the input entered by the user
    messageText.value = ''; //empty out the input box
    conversation.appendChild(newMessage); //add the new message bubble to the chat screen
    newMessage.scrollIntoView(); //scroll down to show the new message

    //prepare bot to respond after 3 seconds
    setTimeout(function() {
        
        //make a new copy of the bot message element
        newPrompt = newPrompt.cloneNode();
        
        if (newMessage.innerText.toLowerCase().includes('Snap') ,('Crackle'),('Pop') ) { //if the user typed in Snap/snap/sNaP, show a new quote
            
            newPrompt.innerText = quotes[Math.floor(Math.random() * quotes.length)]; //set the message to include a quote

        } else if (newMessage.innerText.toLowerCase().includes('quit')) { //if the user typed in quit, say goodbye and close the window
            
            alert('Hope to see you again soon');
            window.close();

        } else { //if the user typed in something else, reply with HUH
            
            newPrompt.innerText = 'HHUUHHHHH?!?';

        }
        
        conversation.appendChild(newPrompt); //add the message to the conversation
        newPrompt.scrollIntoView(); //scroll down to show it
    }, 2500) //set the time delay for the reply to 3 seconds. Written in milliseconds
});

//Allow the enter key to send the messages to the bot
messageText.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) { 
        sendMessage.click();
    }
})

//when the page loads, send the initial greetings from the bot
window.addEventListener('load', function() {
    //New message process
    newPrompt = newPrompt.cloneNode();
    newPrompt.innerText = "Annyeonghaseyo! This is not Lillian, but a bot to tell you about her ^_^";
    conversation.appendChild(newPrompt);
    newPrompt.scrollIntoView();

    //delay the follow up instructional message
    setTimeout(function() {
        newPrompt = newPrompt.cloneNode();
        newPrompt.innerText = "Reply with 'Snap','Crackle', or 'Pop' to find out about Lillian (^_^)";
        conversation.appendChild(newPrompt);
        newPrompt.scrollIntoView();
    }, 2000);

});
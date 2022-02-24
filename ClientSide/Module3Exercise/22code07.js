// define the functions
function printCard() {
   var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
   var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
   var address_line = "<strong>Address: </strong>" + this.address + "<br>\n";
   var phone_line = "<strong>Phone: </strong>" + this.phone + "<hr>\n";
   var Notes_line = "<strong>Notes: </strong>" + this.Notes + "<hr>\n";

   document.write(name_line, email_line, address_line, phone_line,Notes_line);
}

function Card(name,email,address,phone,Notes) {
   this.name = name;
   this.email = email;
   this.address = address;
   this.phone = phone;
   this.printCard = printCard;
   this.Notes = Notes;
}

// Create the objects
var sue = new Card("Sue Suthers", 
                   "sue@suthers.com", 
                   "123 Elm Street, Yourtown ST 99999", 
                   "555-555-9876",
                   "Very intelligent worker");
var fred = new Card("Fred Fanboy", 
                    "fred@fanboy.com", 
                    "233 Oak Lane, Sometown ST 99399", 
                    "555-555-4444",
                    "Gets the job done quickly and correctly");
var jimbo = new Card("Jimbo Jones", 
                     "jimbo@jones.com", 
                     "233 Walnut Circle, Anotherville ST 88999", 
                     "555-555-1344",
                     "Respectful and hard worker");

// Now print them
sue.printCard();
fred.printCard();
jimbo.printCard();

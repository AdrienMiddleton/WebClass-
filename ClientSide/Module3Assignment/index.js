let count = 0; // Shared state that both functions can see

$("#add").click(function (){
    count++;
    $("#time").text(count);
});

$("#lower").click(function(){ // "#lower" not #lower
    count--;
    $("#time").text(count)
});

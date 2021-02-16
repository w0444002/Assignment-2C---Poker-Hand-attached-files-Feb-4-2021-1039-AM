(function (){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {response.json()
    return response.json() 
    
     .then (response => {console.log(response); 
         return response;
    })
    .then(json => {
         
            // json.cards.forEach(cards => {
            // json.cards.forEach((cards) => {
            // console.log(cards);
            // });
          
        return json;
        //document.getElementById(json).src = URL.createObjectURL(json);
    })
    
    .then (response => {console.log(response.deck_id)
        //new deck_id = response.deck_id;
        return response.deck_id;
    })
    // .then(response => {  var card = new { path: "cards"}
    // console.log(card);
    
    //var cardSuit= cards[suit];
    //    for(let i = 0; i < card.cards.length; i++) {
    //        card += cards.value[i];
           
    //    }
    // console.log(cards);
        //return card;
        //document.getElementById('card1');
    })
    
    .catch(err => alert(err))

})();


        // var cards = [];
        // var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
        // var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


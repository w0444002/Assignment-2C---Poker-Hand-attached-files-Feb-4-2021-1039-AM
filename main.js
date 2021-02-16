(function (){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {response.json()
        console.log(response.json);
    //return response.json(); 
      })
    // .then (response => {
    //     console.log(response)
        //return response;
    //})
    .then (response => {
        response.deck_id
        //new deck_id = response.deck_id;
        var id = new deck_id;
        console.log(id);
        return response.deck_id;
    })
    .then(json => {
        return json;
    })
    .catch(err => alert(err))

})();
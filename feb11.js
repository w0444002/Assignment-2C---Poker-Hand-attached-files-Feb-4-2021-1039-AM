(function (){
    fetch(`http://universities.hipolabs.com/search`)
        .then(response => response.json())
        .then(function(json) {
            console.log(json)

            json.reduce(function(total, university){

tally[university.country] 
= (tally[university.country == undfeined])? 1 : tally[university.country] + 1

        },10);
    });
//             const filtered = json.filter(function(university){
//                 return university.country === "Canada" && university.name.includes("Community College")
//             });
//         console.log(filtered)
//         filtered.filter(function(university){

//             return university.name.includes("Cummunity College");
//         });
// }});
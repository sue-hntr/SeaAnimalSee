///////// create functions and global variables first ////////////
var seaAnimalArray = ["jellyfish", "seahorse", "octopus", "star fish"];
var seaAnimal = "";



//show all items in the array as buttons
function renderButtons(seaAnimalArr) {
    console.log("renderbuttons");
// Loop through the array of movies, then generate buttons for each movie in the array
    for (var i = 0; i < seaAnimalArr.length; i++){
        var x  = $("<button>");
        x.addClass("seaAnimal");
        x.attr("data-name", seaAnimalArr[i]);
        x.text(seaAnimalArr[i]);
        $("#animals_view").append(x);
    }  // close for i
} //close function renderButtons
 
function add_seaAnimal(){
    //****//
    //test contents of seaAnimalArray in memory by outputing whole array
    //due to problems with add_seaAnimal
        x=0;
        while (x <seaAnimalArray.length ){
            console.log(seaAnimalArray[x]);
            x++;
       }
    // Delete the content inside the animals-view div prior to adding new gifs
    // (this is necessary otherwise you will have repeat buttons)
        $("#animals_view").empty();
    // Write code to add the new animal into the seaAnimalsArray
    // The renderButtons function is called, rendering the list of Sea Animal buttons
        var seaAnimal = $("#animal_input").val().trim();
        seaAnimalArray.push(seaAnimal);
        renderButtons(seaAnimalArray);
    }
    


//grabs img data-name and searches it on giphy
function searchTermGiphy(queryURL){   
    console.log("searchTermGiphy");
    $("#images").empty();
   
    //ajax request that send get request to URL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    // Object of an Array of Objects
    //once there is a reponse what happens
      .then(function(response) {
        var imageObj = response.data;
        var x = 0;
        while(x < 10){
          //JSON object URL information  
            var imageAnimateUrl = (imageObj[x]["images"]["original"]["url"]);
            var imageStillUrl = (imageObj[x]["images"]["original_still"]["url"]);
            var ratingImage = (imageObj[x]["rating"]);
          //create div container to keep each item together
            var gifDiv = $('<div>');

          //create an IMG tag to begin displaying still image
            var animalImage = $("<img>");
          //pull the unique URL info and insert a alt attribute for sea animal image 
            animalImage.attr('src', imageStillUrl);
            animalImage.attr('data-still', imageStillUrl);
            animalImage.attr('data-animate', imageAnimateUrl);
            animalImage.attr('data-state', "still")
            animalImage.addClass('gif');
            // animalImage.attr("alt", "sea animal image");
          //create the code for the captions tag  
            var imageCaption = $('<p>').text("^ rating: " + ratingImage);
            
            gifDiv.prepend(animalImage);
            gifDiv.append(imageCaption);
        //attach the cat images to the images ID
            $("#images").prepend(gifDiv);
        //attach the rating text to the rating id
            x++;
        } //close while
      }); //close .then
    } // close function search     



// Function for adding a new array item and a dynamically created new button
///////// create event handlers with on doc ready last ////////////
///////// Search Giphy and Add 10 Gifs with Text at Bottom ////////////
$(document).ready(function(){
    var seaAnimalArray = ["jellyfish", "seahorse", "octopus", "star fish"];
    renderButtons(seaAnimalArray);

    // set click event on the document until an element with the class .seaAnimal appears 
    $(document).on("click",'.seaAnimal', function(event) {
        event.preventDefault();
        console.log("sea animal on click");
        $("#images").empty();
          //put URL into a variable to grab gif with 'data-name' in search
          var giphyURLApi = "https://api.giphy.com/v1/gifs/search?api_key=3zXCEbPoYOdjO9AcwJIkjuf5zi3OnxO5";
          var searchIt = $(this).data('name');
          console.log(searchIt);
          var searchTerm = "&q=" + searchIt + "&limit=10"; 
          var queryURL = giphyURLApi + searchTerm;
          console.log(queryURL);
        searchTermGiphy(queryURL);
    }); 

    // This click events adds new items to the array and renders the new array buttons
 $("#add_seaAnimal").on("click", function(event) {
        event.preventDefault();
        add_seaAnimal(seaAnimal);
    });
});

// We need the line below to add click events on the dynamically created elements 
//document on click is necessary for dynamically created elements
$(document).on('click','.gif',function(){
     // Change the src of the img from still to animate
     var animate = $(this).data('animate')
     $(this).attr('src',animate)
})

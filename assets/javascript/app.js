
///////// Search Giphy and Add 10 Gifs with Text at Bottom ////////////
// $(document).ready(function(){
  $(".seaAnimal").on("click", function(event) {
    event.preventDefault();
    // console.log($(this));
    console.log("testing");
    $("#images").empty();
      //put URL into a variable to grab gif with 'data-name' in search
      var giphyURLApi = "https://api.giphy.com/v1/gifs/search?api_key=3zXCEbPoYOdjO9AcwJIkjuf5zi3OnxO5";
      var searchIt = $(this).data('name');
      var searchTerm = "&q=" + searchIt + "&limit=10"; 
      var queryURL = giphyURLApi + searchTerm;
   
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
  }); //close button
  
// }); //close doc ready 


/////THIS CODE WORKS PERFECTLY FOR ONE IMAGE. DO NOT DELETE UNTIL READY ////////
// $(document).ready(function(){
//   $(".seaAnimal").on("click", function(event) {
//     event.preventDefault();
//     // console.log($(this));
//     console.log("testing");
//       //put URL into a variable to grab gif with 'data-name' in search
//       var giphyURLApi = "https://api.giphy.com/v1/gifs/search?api_key=3zXCEbPoYOdjO9AcwJIkjuf5zi3OnxO5";
//       var searchIt = $(this).data('name');
//       var searchTerm = "&q=" + searchIt + "&limit=10"; 
//       var queryURL = giphyURLApi + searchTerm;
   
//     //ajax request that send get request to URL
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
// // Object of an Array of Objects
//     //once there is a reponse what happens
//       .then(function(response) {
//         var imageObj = response.data;
//   //put loop here when ready
//       //JSON object URL information  
//         var imageAnimateUrl = (imageObj[1]["images"]["original"]["url"]);
//         var imageStillUrl = (imageObj[1]["images"]["original_still"]["url"]);
//         var ratingImage = (imageObj[1]["rating"]);
//       //create an IMG tag to begin displaying still image 
//         var animalImage = $("<img>");
//       //pull the unique URL info and insert a alt attribute for sea animal image 
//         animalImage.attr('src', imageStillUrl);
//         animalImage.attr("alt", "sea animal image");
//       //create the code for the captions tag  
//         var imageCaption = $('<p>');
//         imageCaption.html("rating: " + ratingImage);
//     //attach the cat images to the images ID
//         $("#images").prepend(animalImage);
//     //attach the rating text to the rating id
//         $('#rating').prepend(imageCaption);
//       }); //close then
//   }); //close button
// }); //close doc ready

///////// Stop & Start Gifs ////////////
$("<img>").on("click", function() {
  var state1 = $(this).data('state');
  console.log(state1); 
});

  // var state = $(this).attr('data-state');
  // console.log(state);
//   if (state ==="still"){
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } else{
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });

///////// Add Button ////////////
    
        // Initial array of sea Animals
        var seaAnimalArray = ["jellyfish", "seahorse", "octopus", "star fish"];

        // Function for displaying movie data
        function renderButtons() {

        // Delete the content inside the movies-view div prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)

        // Loop through the array of movies, then generate buttons for each movie in the array
            for (var i = 0; i < seaAnimalArray.length; i++){
                var x  = $("<button>");
    
                x.addClass("seaAnimal");
                x.attr("data-name", seaAnimalArray[i]);
                x.text(seaAnimalArray[i]);
                $("#animals_view").append(x);
            }  // close for i
        } //close function renderButtons

    // This function handles events where the add movie button is clicked
    $("#add_seaAnimal").on("click", function(event) {
      // event.preventDefault() prevents submit button from trying to send a form.
      // Using a submit button instead of a regular button allows the user to hit
      // "Enter" instead of clicking the button if desired
      event.preventDefault();

      // Write code to grab the text the user types into the input field
      $("#animals_view").empty();
       var seaAnimal = $("#animal_input").val().trim();
       
       seaAnimalArray.push(seaAnimal);
      // Write code to add the new movie into the movies array

      // The renderButtons function is called, rendering the list of movie buttons
      renderButtons();
    });

    // Calling the renderButtons function to display the initial list of movies
    renderButtons();
  

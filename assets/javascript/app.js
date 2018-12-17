///////// Search Giphy ////////////    


///////// Add 10 Gifs with Text at Bottom ////////////
$(document).ready(function(){
  
  $(".seaAnimal").on("click", function(event) {
    event.preventDefault();
    // console.log($(this));
    console.log("testing");
      //put URL into a variable to grab gif with 'data-name' in search
      var giphyURLApi = "https://api.giphy.com/v1/gifs/search?api_key=3zXCEbPoYOdjO9AcwJIkjuf5zi3OnxO5";
      
      var searchIt = $(this).data('name');
      // var searchTerm = "&q=" + searchIt;
     var searchTerm = "&q=" + searchIt + "&limit=10"; 
      console.log(searchTerm);
      var queryURL = giphyURLApi + searchTerm;
      console.log(queryURL);

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=sJwaRrAUbqPzIBggUpsrUDnCrFgqTRQR&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });


    //ajax request that send get request to URL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
// Object of an Array of Objects
    //once there is a reponse what happens
      .then(function(response) {
        var myObj = response.data;
        var myObj2 = (myObj[1]["images"]["original"]["url"]);
        // console.log(typeof myObj);

        // console.log(JSON.stringify(myObj[1]["images"]["original"]["url"]));
        // var myObj2 = []
        // var z = JSON.stringify("z: " + response);
        // var o = response.data[0].url;
        // console.log("array " + o);
        // var e = JSON.stringify("e: " + response.data);
        // console.log(response);
        // console.log(e);
      //from the JSON response pull the IMG information


        // var z = JSON.stringify(response.data[0].url);
        // var b = "" + z + "";
        // var c = JSON.stringify(b);
        // console.log("b " + b);
        // var d = JSON.stringify(imageUrl);
        // console.log(d);
        // console.log(typeof response);  
       

      

        // myObj = {
        //   "name":"John",
        //   "age":30,
        //   "cars": {
        //     "car1":"Ford",
        //     "car2":"BMW",
        //     "car3":"Fiat"
        //   }
        //  }
// x = myObj.cars.car2;
// // or:
// x = myObj.cars["car2"];










        //create an IMG tag to begin displaying image 
        var animalImage = $("<img>");

        //pull the unique URL info and insert a alt attribute for cat image 
        animalImage.attr('src', myObj2);
        // animalImage.attr("alt", "sea animal image");
        console.log(JSON.stringify(animalImage));

        //attach the cat images to the images ID
        $("#images").prepend(animalImage);
      
      }); //close then
    
  }); //close button

}); //close doc ready

///////// Stop & Start Gifs ////////////



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
  
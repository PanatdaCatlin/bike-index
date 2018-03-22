import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './../.env';
import $ from 'jquery';
import { Bike } from './../js/Bike.js';

$(document).ready(function() {

  $("#bike-info").submit(function(event){
    event.preventDefault();

    let location = $("#stolen-location").val();
    let color = $("#bike-color").val();
    let manufacture = $("#bike-manufacture").val();
    let date = $("#bike-date").val();

    $('#stolen-location').val("");
    $("#bike-color").val("");
    $("#bike-manufacture").val("");
    $("#bike-date").val("");

    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=100&manufacturer=${manufacture}&location=${location}&distance=10&stolenness=proximity&access_token=process.env.API_KEY`).then(function(response) {
      console.log(response);

      for(let i = 0; i < response.bikes.length; i++){
        console.log(response.bikes[i].stolen_location);
        for(let j = 0; j < response.bikes[i].frame_colors.length; j++){
          console.log(response.bikes[i].frame_colors);
          if(color === response.bikes[i].frame_colors[j] || color === ""){
            console.log(color);

            $('#bike-results').append(`<img src=${response.bikes[i].thumb}>`+"<br><strong>Location:</strong> " +  response.bikes[i].stolen_location  + '<br>' + "<strong>Color:</strong> " + response.bikes[i].frame_colors +'<br>' + "<strong>Manufacture:</strong> " +  response.bikes[i].manufacturer_name + '<br>'+ "<strong>Date Stolen:</strong> " + Date(response.bikes[i].date_stolen)  + '<hr>');

            $("#bike-requested-info").hide();
            $("#bike-results").show();
            $("#bike").show();
          }
        }

      }
    })
    .fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    })
  })
});

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


    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacture}&location=${location}&distance=25&stolenness=proximity&access_token=process.env.API_KEY`).then(function(response) {

      for(let i = 0; i < response.bikes.length; i++){
        for(let j = 0; j < response.bikes[i].frame_colors.length; j++){
          if(color === response.bikes[i].frame_colors[j] || color === ""){

            $('#bike-results').append(`<img src=${response.bikes[i].thumb}>`+"<br><strong>Location:</strong> " +  response.bikes[i].stolen_location  + '<br>' + "<strong>Color:</strong> " + response.bikes[i].frame_colors +'<br>' + "<strong>Manufacture:</strong> " +  response.bikes[i].manufacturer_name + '<br>'+ "<strong>Date Stolen:</strong> " + Date(response.bikes[i].date_stolen)  + '<hr>');

            $("#selected-color").text(color);
            $("#selected-manufacturer").text(manufacture);
            $(".selected-city").text(location);

            $("#bike-requested-info").hide();
            $("#bike-results").show();
            $("#bike").show();
            $("#map").show();
          }
        }
      }
    })
    .fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    })
  })
});

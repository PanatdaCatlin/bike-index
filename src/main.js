import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './../.env';
import $ from 'jquery';

$(document).ready(function() {

      $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=&distance=10&stolenness=proximity&access_token=` + process.nev.API_KEY).then(function(response) {
        console.log(response);

        $('#location').text(response.main.location);

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });

      $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=&distance=10&stolenness=proximity&access_token=` + process.nev.API_KEY).then(function(response) {
        console.log(response);

        $('#color').text(response.main.color);

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });

      $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=&distance=10&stolenness=proximity&access_token=` + process.nev.API_KEY).then(function(response) {
        console.log(response);

        $('#manufacture').text(response.main.manufacture);

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });

      $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=&distance=10&stolenness=proximity&access_token=` + process.nev.API_KEY).then(function(response) {
        console.log(response);

        $('#date').text(response.main.date);

      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
      $("#bike-info").submit(function(event){
        event.preventDefault();

        let location = $("#bike-location").val());
       let color = $("#bike-color").val();
       let manufacture = $("#bike-manufacture").val();
       let date = $("#bike-date").val();

       $("#bike-requested-info").show();
     })
    })
    });

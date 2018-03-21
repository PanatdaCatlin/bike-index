import { Bike } from './../js/Bike.js';

describe ('bikeIndex', function(){
  let newBike = new Bike("Seattle, WA","blue","Hyper","2018-03-20");

it('should return correct input of search', function() {
    expect(newBike.location).toEqual("Seattle, WA");
    expect(newBike.color).toEqual("blue");
    expect(newBike.manufacture).toEqual("Hyper");
    expect(newBike.date).toEqual("2018-03-20");
  });
});
// beforeEach(function(){
// newBike.location = "Seattle, WA";
// newBike.color = "blue";
// newBike.manufacture = "Hyper";
// newBike.date = "2018-03-20";
// });

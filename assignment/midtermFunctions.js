/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

var dataset = "http://data-phl.opendata.arcgis.com/datasets/df8dc18412494e5abbb021e2f33057b2_0.geojson";
//parse Geojson file to array
var  parseData =  JSON.parse(dataset);

//filter out the junk data
var myFilter = function(feature){
  return true;
};

//style selected features of the dataset
var myStyle = function(feature){
  return {};
};
//select features from the dataset bease on some criteria
var selectFeature = function(dataset){
  return {};
};

//display or hide elements in the CSS
var showResults = function() {
  $('#intro').hide();
  // => <div id="results">
  $('#results').show();
};

//click to show the info of the feature
var clickFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    console.log(layer.feature);
    showResults();
  });
};
//add markers to the map
var addMarkers = function(){};

//click for next slide
var nextslide = function(){};

//click for previous slide
var previousslide = function(){};

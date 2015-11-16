var wordnik1 = 'http://api.wordnik.com:80/v4/word.json/'
var wordnik2 = '/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false';
var api_key  = '&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';

function setup() {
  noCanvas();

  var word = chrome.extension.getBackgroundPage().word;
  var url = wordnik1 + word + wordnik2 + api_key;

  loadJSON(url, gotData);

  function gotData(data) {
    var p = select('#definition');
    if (data[0]) {
      p.html(data[0].text);
    } else {
      p.html('Something went wrong.');
    }
  }

}


var loadData = function(){
  var consulta = $("#consulta").val();
  console.log(consulta);

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.googleapis.com/youtube/v3/search?q="+consulta+"&part=snippet&orderby=viewCount&key=AIzaSyBNAYMMa5WbTtP1SEN9MZv1jAZu1YWIa9U",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "1dd7bd2e-6e3f-9cc2-7262-711bbcefb9a8"
  }
}

$.ajax(settings).done(function (response) {
  var data = response.items[0].snippet.title;
  var thumb = response.items[0].snippet.thumbnails.high.url;
  console.log(data);
  console.log(thumb);
});
}

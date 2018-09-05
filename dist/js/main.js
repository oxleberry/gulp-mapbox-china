$(document).ready(function(){L.mapbox.accessToken="pk.eyJ1Ijoib3hsZWJlcnJ5IiwiYSI6ImNqZTV2emg2MzBjZ3UzM21ucWJqZmRoeWgifQ.d_UCOJiycSO8iWfCJ7bhfg";var a=document.getElementById("popUp"),e=L.mapbox.map("map","mapbox.light").setView([35.5,113.5],4),o=L.mapbox.featureLayer().addTo(e);function t(){a.innerHTML="<h2>China, fun facts on amazing places to travels!</h2><h3>Its modern face is dazzling, but China is no one-trick pony. The world's oldest continuous civilisation isn't all smoked glass and brushed aluminium and while you won't be tripping over artefacts – three decades of round-the-clock development and rash town planning have taken their toll – rich seams of antiquity await. Serve it all up according to taste: collapsing sections of the Great Wall, temple-topped mountains, villages that time forgot, languorous water towns, sublime Buddhist grottoes and ancient desert forts. Pack a well-made pair of travelling shoes and remember the words of Laotzu: 'a journey of a thousand miles begins with a single step'.</h3><h3 class='markerText'>Click a marker on the map to see photos from each location</h3><small><a class='tutorial' href='https://www.mapbox.com/mapbox.js/example/v1.0.0/marker-tooltips-outside-map/'>Adapted from Mapbox GL JS tutorial</a></small>",i()}function i(){var e=$("#popUp").position();$("html, body").animate({scrollTop:e.top},800)}o.setGeoJSON(geoJson),setTimeout(function(){document.getElementById("instructions").className="class opacity"},2e3),setTimeout(function(){document.getElementById("instructions").className="class hide"},4e3),o.on("click",function(e){e.layer.closePopup(),$("#popUp").hide();var o=e.layer.feature,t="<h2>"+o.properties.title+"</h2><h3>"+o.properties.description+'</h3><img src="'+o.properties.image1+'" /><img src="'+o.properties.image2+'" />';a.innerHTML=t,$("#popUp").fadeIn(800),i()}),e.on("click",t),t()}),console.log("CONCAT GULP TEST");
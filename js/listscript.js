locations = [];

function processJSON(json) {
  var parkings = json.result.records;

  for (i = 0; i < parkings.length; i++) {

    var address = parkings[i].garageCode.toString();
    var left_spaces = parkings[i].totalSpaces - parkings[i].vehicleCount;
    var left = left_spaces.toString();
    var total = parkings[i].totalSpaces.toString();
    //SHOW ONLY PARKINGS WITH AVAILABLE SPACES
    if (left_spaces > 0) {
      locations.push([left, address, total]);
    }
  }

}


$(document).ready(function() {

  for (i = 0; i < locations.length; i++) {

    var newNode = document.createElement('div');
    newNode.className = 'list_panel';

    var div = document.getElementById('content').appendChild(newNode);
    var content = document.createElement('div');

    content.innerHTML = '<div id="bold">' + locations[i][1] + '</div>' + '<div> Free:' + locations[i][0] + '</div>' +
      '<div> Total:' + locations[i][2] + '<div id="info"><div id="bold"> ' + randomRange(17, 33) + 'kr. </div><div>' + randomRange(0.1, 18) +
      ' KM</div></div></div></div><canvas id="' + locations[i][1] + '"></canvas>';
    div.appendChild(content);
  
    // advanced math stuff :D
    var diff = locations[i][2] - locations[i][0];

    var data = [

      {
        value: diff,
        label: 'OCCUPIED',
        color: '#D18177'
      }, {
        value: locations[i][0],
        label: 'FREE',
        color: '#79A845'
      }
    ];
    var context = document.getElementById(locations[i][1]).getContext('2d');
    var skillsChart = new Chart(context).Pie(data);

  }

  //document.getElementsByClassName("list_panel").onclick = function() {
  //  location.href = "../parking-aarhus/reserve.html";
  //};
  var $lp = document.getElementsByClassName('list_panel');

  function myPopup() {
  //jQuery call to conver to html object 
  var data = this.textContent;
  var res = data.split(" ");
  sessionStorage.setItem('data', res);
    location.href="../aarhus-parking/reserve.html";
  
  }

  // Assign a click event handler to every element:
  for (var i = 0; i < $lp.length; i++) {
      
    $lp[i].onclick = myPopup;
  }

  function randomRange(min, max) {
    return~~ (Math.random() * (max - min + 1)) + min
  }


});
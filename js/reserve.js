$(document).ready(function() {
var wordList = sessionStorage.getItem('data');

    var newNode = document.createElement('div');
    var d = wordList.split(",");
    var div = document.getElementById('heading');
    var c = document.createElement('label');

    c.innerHTML = '<div id="bold">' + d[0] + '</div><label id="lbl_name">08:00am - 20:00pm</label>';
    div.appendChild(c);


    var g2 = document.getElementById('pie').getContext('2d');

      var dat = [

      {
        value: 40,
        label: 'OCCUPIED',
        color: '#D18177'
      }, {
        value: 70,
        label: 'FREE',
        color: '#8CE168'
      }
    ];
  
    var skillsChart = new Chart(g2).Pie(dat);
  
  
    
    

    var div = document.getElementById('panel_info').appendChild(newNode);
    var content = document.createElement('label');
    content.innerHTML ='<div id="bold">Price:' + d[3] + '</div>' + '<div>'+ d[1] + '</div>' +
      '<div>' + d[2] + '</div><div>Distance:'+d[4]+' KM</div><div id="right">'+'<input type="button" id="btn_details_reserve" value="Reserve"/><label id="lbl_hand">'+
     '<input type="checkbox" checked="true" id="chbox"></input>Handicapped</label></div>';

    div.appendChild(content);



  


  function randomRange(min, max) {
    return~~ (Math.random() * (max - min + 1)) + min
  }
});

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#cmn-toggle-4').addEventListener('change', changeHandler);
});

function changeHandler(){
   if( document.getElementById('cmn-toggle-4').checked){

    document.getElementById('pie').style.display = "none";
    document.getElementById('bars').style.display = "";
  var bars = document.getElementById('bars').getContext('2d');
    
    var data = {
        labels: ["12:00h", "13:00h", "14:00h", "15:00h", "16:00h", "17:00h", "18:00h"],
        datasets: [
            {
                label: "Free",
                fillColor: "#8CE168",
                strokeColor: "#8CE168",
                highlightFill: "#8CE168",
                highlightStroke: "#8CE168",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Occupied",
                fillColor: "#DD5C4B",
                strokeColor: "#DD5C4B",
                highlightFill: "#DD5C4B",
                highlightStroke: "#DD5C4B",
                data: [28, 48, 40, 19, 34, 27, 22]
            }
        ]
    };

    var barsChart = new Chart(bars).Bar(data);

   }
   else{
    
    document.getElementById('bars').style.display = "none";
    document.getElementById('pie').style.display = "";
    var wordList = sessionStorage.getItem('data');

    var g2 = document.getElementById('pie').getContext('2d');

      var dat = [

      {
        value: 40,
        label: 'OCCUPIED',
        color: '#D18177'
      }, {
        value: 70,
        label: 'FREE',
        color: '#8CE168'
      }
    ];
  
    var skillsChart = new Chart(g2).Pie(dat);
   }
}


`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  
`use strict`;
document.onmousemove=getCursorPos;
        
        function getCursorPos(a)
        {
        var posx = a.clientX;
        var posy = a.clientY;
        var lat = document.getElementById("lat").innerHTML=""+ (posy-575)*-1;
        var long = document.getElementById("long").innerHTML=""+ posx-1026;
        } 

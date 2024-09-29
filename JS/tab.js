
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
  
    // Hide all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the class "active" from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("-active", "");
    }
  
    // Show the current tab's content
    document.getElementById(cityName).style.display = "block";
    
    // Add "active" class to the clicked button
    evt.currentTarget.className += "-active";
  }
  

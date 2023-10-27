
  type="text/javascript"
		function openCity(evt, cityName) {
		    var i, tabcontent, tablinks;
		    tabcontent = document.getElementsByClassName("tabcontent");
		    for (i = 0; i < tabcontent.length; i++) {
		        tabcontent[i].style.display = "none";
		    }
		    tablinks = document.getElementsByClassName("tablinks");
		    for (i = 0; i < tablinks.length; i++) {
		        tablinks[i].className = tablinks[i].className.replace(" active", "");
		    }
		    document.getElementById(cityName).style.display = "block";
		    evt.currentTarget.className += " active";

			const username=ducument.getElementById("name").value;
		    const email=ducument.getElementById("email").value;
		    const password=ducument.getElementById("password").value;
		    const password_confirm=ducument.getElementById("confirm_password").value;

			
		}
		document.getElementById("defaultOpen").click()
		
		
		
		;
		
		
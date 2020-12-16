

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-angle-up"></div>

	<!-- JavaScripts
	============================================= -->
	<script src="js/jquery.js"></script>
	<script src="js/plugins.min.js"></script>
	<script src="js/jquery.marquee.min.js"></script>
	<script src="js/marquesina.js"></script>
	<!-- <script src="https://maps.google.com/maps/api/js?key=YOUR-API-KEY"></script> -->

	<!-- Footer Scripts
	============================================= -->
	<script src="js/functions.js"></script>

	<script>
		$('#noticia').hide();
		$( document ).ready(function() {
			setTimeout(function (){
				$('#noticia').marquee();
				$('#noticia').show();
  		  console.log( "ready!" );
			}, 500);
						
		});

		  
		  </script>
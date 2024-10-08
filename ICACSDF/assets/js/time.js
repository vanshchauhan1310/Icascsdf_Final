<script type="text/javascript">
    // Set the date for the countdown
    var countDownDate = new Date("April 11, 2025 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="timer"
        document.getElementById("timer").innerHTML =  days +"d" + " : " + hours +"h" + " : " + minutes + "m" + " : " + seconds + "s";
       
		// If the countdown is finished, display some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
</script>
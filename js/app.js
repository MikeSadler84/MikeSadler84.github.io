$(function(){
    "use strict";
    // delete the header, nav and footers
    //add main tag on index.html
    //create app.js add click events and the load()
    $("#register").on("click", function(){
        $("main").load("../register.html");
    });
    $("#about").on("click", function(){
        $("main").load("../about.html");
    });
    $("#services").on("click", function(){
        $("main").load("../services.html");
    });
});

document.getElementById("info").innerHTML=`
<p class="footer-info"> The Fashion Pet<br> 777-777-7777<br> 202 South Lane, Springfield<br> Copyright &copy Mike Sadler 2020</p>`;
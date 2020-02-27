$(document).ready(function(){
    $("#whatwedo1").click(function(){
        $("#imgs1").toggle();
        $("#text1").toggle();
    });

            $("#whatwedo2").click(function(){
                $("#imgs2").toggle();
                $("#text2").toggle();
            });
                $("#whatwedo3").click(function(){
                    $("#imgs3").toggle();
                    $("#text3").toggle();
                });

   
}); 


$(document).ready(function(){
document.getElementById("form").addEventListener("submit", popmess);
function popmess(){
    alert("We have received your message. Thank you")
};
});
$(document).ready(function () { 
    $(".addCar").click(function () { 
        var name = $("#nameInput").val(); 
        var shortDesc = $("#shortDesc").val(); 
        var techDesc = $("#techDesc").val();

        var carHtml = "<div class='car'><h3>"+name+"</h3><h4>"+shortDesc+"</h4><h4 class='hide'>"+techDesc+"</h4><button class='delete'>delete</button></div>"; 
        
        /* Add car */
        $(".cars").append(carHtml); 
        var carsHtml = $(".cars").html(); 
        localStorage.setItem('cars', carsHtml); 
        }); 

        /* Show detal info about current car */
        $("body").on("click", ".car :first-child", function(){ 
            $(this).parent(".car").find(":nth-child(3)").toggle(); 

        }); 

        /* Delete car */
        $("body").on("click", ".delete", function () { 
            $(this).parent(".car").remove(); 
            var carsHtml = $(".cars").html(); 
            localStorage.setItem('cars', carsHtml); 
        }); 

        /* Get data from local storeage */
        if (localStorage.getItem('cars')) { 
            $('.cars').html(localStorage.getItem('cars')); 
        }

    /* page scroll*/
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
});



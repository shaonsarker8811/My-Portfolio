$(document).ready(function(){




    $("#open").click(function(){
      $("#open").hide(0,function (){
        $("#close").show(0,function () {
          $("#navlist").slideDown(1000);
        })
        
      })

      
    });


    
    $("#close").click(function(){
      $("#close").hide(0,function (){
        $("#open").show(0,function () {
          $("#navlist").slideUp(400);
        })
        
      })

      
    });

    $("#plus1").click(function(){
      $("#plus1").hide(0,function (){
        $("#minus1").show(0,function () {
          $("#drop1").slideDown(700);
        })
        
      })

      
    });


    $("#minus1").click(function(){
      $("#minus1").hide(0,function (){
        $("#plus1").show(0,function () {
          $("#drop1").slideUp(500);
        })
        
      })

      
    });
    $("#plus2").click(function(){
      $("#plus2").hide(0,function (){
        $("#minus2").show(0,function () {
          $("#drop2").slideDown(600);
        })
        
      })

      
    });


    $("#minus2").click(function(){
      $("#minus2").hide(0,function (){
        $("#plus2").show(0,function () {
          $("#drop2").slideUp(400);
        })
        
      })

      
    });
    $("#plus3").click(function(){
      $("#plus3").hide(0,function (){
        $("#minus3").show(0,function () {
          $("#drop3").slideDown(400);
        })
        
      })

      
    });


    $("#minus3").click(function(){
      $("#minus3").hide(0,function (){
        $("#plus3").show(0,function () {
          $("#drop3").slideUp(300);
        })
        
      })

      
    });
    $("#plus4").click(function(){
      $("#plus4").hide(0,function (){
        $("#minus4").show(0,function () {
          $("#drop4").slideDown(300);
        })
        
      })

      
    });


    $("#minus4").click(function(){
      $("#minus4").hide(0,function (){
        $("#plus4").show(0,function () {
          $("#drop4").slideUp(250);
        })
        
      })

      
    });




  });

  var slideIndex = 0;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  } 
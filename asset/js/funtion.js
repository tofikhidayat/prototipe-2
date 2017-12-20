var myVar;

function onloadFunction() {
    myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}




	function navbarclose() {
	document.getElementById('navbar').style.display="none";
	}

	function navbaropen() {
	document.getElementById('navbar').style.display="block";
	}

	function onsubmit() {
					var form = document.form;
				    var chapta = eval(form.chapta.value);
				    var email = eval(form.email.value.length);
				    var name = eval(form.name.value.length);
				    var textarea = eval(form.textarea.value.length);
				    var message =document.getElementById("message").value;
			        var chapta = eval(form.chapta.value);
						if (chapta != 20 || name < 5 || email < 5 || textarea < 10) {
						alert(",sdjhk");
					}
					else
					{
					alert("qwert");	

					}
					
				}

  $(function(){
    
    $('#portofolio').masonry({
      columnWidth: 100,
      isAnimated: true
    });
    
  });



	$(window).scroll(function() {
    if ($(this).scrollTop() > 2500 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

	
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".banner").offset().top},"1000");return false})})




	function oncloseme() {
		document.getElementById('popup').style.display="none";
		// body...
	}







function myonclick() {
					var form = document.form;
				    var email = document.getElementById("email").value.length;
				    var name = document.getElementById("name").value.length;
				    var message =document.getElementById("message").value;
						

					if ( name < 5 || email < 5 || message < 10) {
						alert("please complete");

					}
					else
					{
						alert("the message has been sent to me");	

					}


					
				}



				//loader


				$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});









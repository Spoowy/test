jQuery(document).ready(function() {

    if (qi('login')) {
        setTimeout(function() { $("#email").attr('autocomplete', 'on'); }, 500),
        $(document).on('keypress', '#email', function(e){ if(e.which == 10 || e.which == 13) { qs("button.submit").click();}});
        $(document).on('keypress', "#password", function(e){ if(e.which == 10 || e.which == 13) { qs("button.submit").click();}});
    }

});

function load_pass_checker() {
    qs('button.submit').disabled = "disabled";
    
    $(document).on('keypress', "#password", function(e){ if(e.which == 10 || e.which == 13) { qi("password_confirm").select();}});
    $(document).on('keypress', "#password_confirm", function(e){ if(e.which == 10 || e.which == 13) { qs("button.submit").click();}});
    
    jQuery.loadScript = function (url, callback) {
	jQuery.ajax({
	    url: url,
	    dataType: 'script',
	    success: callback,
	    async: true
	});
    }
    
    $.loadScript('js/password_rating.js', function(){
	var strength = {
	    0: "Worst",
	    1: "Bad",
	    2: "Weak",
	    3: "Good",
	    4: "Strong"
	}
	
	var password = qi('password');
	var password2 = qi('password_confirm');
	var text = qi('password_strength_text');
	
	password.addEventListener('input', function() {
	    var val = password.value;
	    var result = zxcvbn(val);
	    
	    // Update the text indicator
	    if (val !== "") {
		$(text).removeAttr("class");
		$(text).addClass("strength-" + result.score);
		text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + ".</strong>" + " <span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span>";
	    }

	    if (result.score >= 3) qs("button.submit").disabled = false;
	    else qs("button.submit").disabled = "disabled";
	});
    });
}		 

<!DOCTYPE html>
<html>
    
    <head>
    <title>Contact Us | OHI International</title>
    <meta name="description" content="OHI incorporates a global family of brands, including The Orthotic Group (TOG), Langer Biomechanics, Arizona Foot Orthotics, Apex Footwear and Australian Orthotic Group as the global leader in technologies and treatment options for conditions associated with the lower extremities.
" />
<?php include 'includes/header.php';?>


        <script>
$(document).ready(function() {
    var $sub = $("#_subject");
    $("#subject").on("input", function() {
        $sub.val("Contact Form - " + $(this).val());
    });
});
</script>

<section class="hero about">
	<img src="/images/ohi-western-europe.jpg" />
</section>
<section class="wrapper">
	<div class="container">
        <div class="row">
			<header class="major">
				<h2><span>Contact Us</span></h2>
			</header>
            <div class="12u">
				<form id="contact-form" action="https://liveformhq.com/form/c88c5594-ec76-4260-8655-09ac1b61b65b" method="POST" accept-charset="utf-8">
                    <input type="hidden" value="http://www.ohiinternational.com/thanks.html" name="_redirect" />
                    <input type="hidden" value="General Contact Form" name="type" />
					<div><span class="asterisk">*</span> indicates required</div>
                    
					<label for="name">Name <span class="asterisk">*</span></label>
					<input type="text" name="name" required>
                    
                    <label for="practiceName">Practice Name</label>
					<input type="text" name="practiceName">
                    
					<label for="replyto">Email <span class="asterisk">*</span></label>
				    <input type="email" name="replyto" pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}" class="small" required />
                    
					<label for="subject">Subject <span class="asterisk">*</span></label>
					<input type="text" id="subject" name="subject" required>

					<label for="message">Message <span class="asterisk">*</span></label>
					<textarea name="message" class="required" required></textarea>
                    
					<input type="hidden" name="_redirect" value="http://www.ohiinternational.com/thanks.html" />
                    <input type="hidden" name="phone" value="N/A" />
					<div class="g-recaptcha" data-sitekey="6LeLp5QUAAAAAHG0zhVWLRdVayWAaRjeq3iVCG6c"></div>
                    <div id="recaptcha-error" class="error">ERROR: Please check the reCAPTCHA box and click Submit again</div>
                    <button id="submit-form" type="submit" class="button space-up">Contact Us</button>
				</form>
            </div>
        </div>
    </div>
</section>
<?php include 'includes/footer.php';?>

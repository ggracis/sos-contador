<!-- Contacto
					============================================= -->
    <section id="contacto" class="page-section pt-0">
        <div class="container clearfix">

            <div class="mx-auto topmargin" style="max-width: 850px;">

                <div class="form-widget">

                    <div class="form-result"></div>

                    <form class="row mb-0" id="template-contactform" name="template-contactform" action="include/form.php" method="post">

                        <div class="form-process">
                            <div class="css3-spinner">
                                <div class="css3-spinner-scale-ripple">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="sm-form-control border-form-control required" placeholder="Name" />
                        </div>
                        <div class="col-md-6 mb-4">
                            <input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email sm-form-control border-form-control" placeholder="Email Address" />
                        </div>

                        <div class="w-100"></div>

                        <div class="col-md-4 mb-4">
                            <input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" class="sm-form-control border-form-control" placeholder="Phone" />
                        </div>

                        <div class="col-md-8 mb-4">
                            <input type="text" id="template-contactform-subject" name="subject" value="" class="required sm-form-control border-form-control" placeholder="Subject" />
                        </div>

                        <div class="w-100"></div>

                        <div class="col-12 mb-4">
                            <textarea class="required sm-form-control border-form-control" id="template-contactform-message" name="template-contactform-message" rows="7" cols="30" placeholder="Your Message"></textarea>
                        </div>

                        <div class="col-12 center mb-4">
                            <button class="button button-border button-circle font-weight-medium ml-0 topmargin-sm" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
                            <br>
                            <small style="display: block; font-size: 13px; margin-top: 15px;">We'll do our best to get back to you within 6-8 working hours.</small>
                        </div>

                        <div class="w-100"></div>

                        <div class="col-12 d-none">
                            <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
                        </div>

                        <input type="hidden" name="prefix" value="template-contactform-">

                    </form>

                </div>

            </div>

        </div>

                
    </section>
<!-- #Contacto end -->
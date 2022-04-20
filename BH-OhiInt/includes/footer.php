       <!-- Footer -->
       <footer id="footer">
        <div class="container">
            <div class="row">
                <h4>Locations</h4>
            </div>
            <div class="row collapse-at-2">
                <div class="3u footer-col">
                    <h5>Western Europe</h5>
                    <p>133 Moneymore Rd.<br/>
                    Cookstown, Co. Tyrone<br/>
                    BT80 9UU<br/>
                    028 867 47074</p>
                </div>
                <div class="3u footer-col">
                    <h5>Global Headquarters</h5>
                    <p>Orthotic Holdings, Inc.<br/>
                    Mesa, AZ</p>
                </div>
            </div>
            <ul class="copyright">
                <li>&copy; OHI International. All rights reserved.</li>
            </ul>
        </div>
    </footer>
    
    <script>
        $("#contact-form").submit(function(event) {
           var recaptcha = $("#g-recaptcha-response").val();
           if (recaptcha === "") {
              event.preventDefault();
              $("#recaptcha-error").css('display', 'block');
           }
        });
    </script>
            
            <script src="/slick/slick.min.js" type="text/javascript" charset="utf-8"></script>
            <script src="/js/hero-slider.js"></script>
            <script src="/js/news-items.js"></script>
        </body>
    
    </html>
    
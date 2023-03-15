const template = document.createElement("template");

template.innerHTML = `


<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/fontawesome-all.css">
<link rel="stylesheet" href="assets/css/flaticon.css">
<link rel="stylesheet" href="assets/css/animate.css">
<link rel="stylesheet" href="assets/css/video.min.css">
<link rel="stylesheet" href="assets/css/slick-theme.css">
<link rel="stylesheet" href="assets/css/slick.css">
<link rel="stylesheet" href="assets/css/nice-select.css">
<link rel="stylesheet" href="assets/css/rs6.css">
<link rel="stylesheet" href="assets/css/global.css">
<link rel="stylesheet" href="assets/css/style.css">

<footer id="in-footer" class="in-footer-section">
<div class="container">
    <div class="in-footer-widget-wrapper">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="in-footer-widget">
                    <div class="logo-widget">
                        <div class="brand-logo">
                            <a href="404.html"><img src="assets/img/logo/logo-2.png" alt=""></a>
                        </div>
                        <div class="footer-text">
                            Thank you for considering Fortitude Insurance Brokers. Contact us today for personalized insurance solutions to protect your assets and provide peace of mind.
                        </div>
                        <div class="footer-social d-flex">
                            <a href="404.html"><i class="fab fa-facebook-f"></i></a>
                            <a href="404.html"><i class="fab fa-instagram"></i></a>
                            <a href="404.html"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="in-footer-widget">
                    <div class="contact-widget headline">
                        <h3 class="widget-title">Contact info</h3>
                        <div class="contact-info">
                            <div class="info-item d-flex align-items-center">
                                <div class="inner-icon d-flex align-items-center justify-content-center">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="inner-text">
                                3B, Alhaja Agbeke Str, Lekki, Lagos State.
                                </div>
                            </div>
                            <div class="info-item d-flex align-items-center">
                                <div class="inner-icon d-flex align-items-center justify-content-center">
                                    <i class="fal fa-envelope-open-text"></i>
                                </div>
                                <div class="inner-text">
                                    info@fortitudeinsurancebrokers.com
                                    +234 805 617 7035 +234 908 233 3305
                                </div>
                            </div>
                            <div class="info-item d-flex align-items-center">
                                <div class="inner-icon d-flex align-items-center justify-content-center">
                                    <i class="fal fa-phone-plus"></i>
                                </div>
                                <div class="inner-text">
                                    Mon – Sat: 8 am – 5 pm,
                                    Sunday: CLOSED
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="in-footer-widget">
                    <div class="menu-widget headline ul-li-block">
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="in-footer-widget">
                    <div class="newslatter-widget headline ul-li-block">
                        <h3 class="widget-title">Subscribe newsletter</h3>
                        <form action="#" method="get">
                            <input type="email" name="email" placeholder="Email">
                            <button type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="in-footer-copyright-area d-flex justify-content-end">
        <div class="in-footer-copyright-text">
            <div class="inner-text d-flex justify-content-end">
                Copyright ©2023Fortitude
            </div>
        </div>
    </div>
</div>
</footer>		

`

class footer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

export default footer;
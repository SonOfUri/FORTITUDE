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

<header id="in-header" class="in-header-section header-style-one">
<div class="in-header-top-content-area">
    <div class="container">
        <div class="header-top-content d-flex justify-content-between align-items-center">
            <div class="brand-logo">
                <a href="#"><img src="assets/img/logo/logo-1.png" alt=""></a>
            </div>
            <div class="header-top-cta d-flex align-items-center">
                <div class="cta-info-item position-relative d-flex align-items-center">
                    <div class="inner-icon">
                        <i class="fal fa-map-marker-alt"></i>
                    </div>
                    <div class="inner-text headline">
                        <h4>Contact us</h4>
                        <span>25/2 Norda, Ukrain</span>
                    </div>
                </div>
                <div class="cta-info-item position-relative d-flex align-items-center">
                    <div class="inner-icon">
                        <i class="fal fa-envelope-open-text"></i>
                    </div>
                    <div class="inner-text headline">
                        <h4>Email us</h4>
                        <span>info@Fortitude.com</span>
                    </div>
                </div>
                <div class="cta-info-item position-relative d-flex align-items-center">
                    <div class="inner-icon">
                        <i class="fal fa-phone-plus"></i>
                    </div>
                    <div class="inner-text headline">
                        <h4>Free Call</h4>
                        <span>(+02) - 23456789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="in-header-main-menu-wrapper">
    <div class="container">
        <div class="in-header-main-menu-content d-flex align-items-center justify-content-between">
            <div class="sticky-logo">
                <a href="#"><img src="assets/img/logo/logo-2.png" alt=""></a>
            </div>
            <nav class="in-main-navigation-area clearfix ul-li">
                <ul id="main-nav" class="nav navbar-nav clearfix">
                    <li >
                        <a href="index.html">Home</a>
                    </li>
                    <li><a target="_blank" href="about.html">About Us</a></li>
                    <li >
                        <a href="service.html">Services</a>
                    </li>
                    <li >
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
                        <a href="faq.html">FAQ</a>
                    </li>
                </ul>
            </nav>
            <div class="in-header-search-cta-btn d-flex align-items-center">
                <div class="in-header-search">
                    <button class="search-btn"><i class="fal fa-search"></i></button>
                </div>
                <div class="in-header-cta-btn">
                    <a href="contact.html">Get A Quote</a>
                </div>
            </div>
        </div>
        <div class="mobile_menu position-relative">
            <div class="mobile_menu_button open_mobile_menu">
                <i class="fal fa-bars"></i>
            </div>
            <div class="mobile_menu_wrap">
                <div class="mobile_menu_overlay open_mobile_menu"></div>
                <div class="mobile_menu_content">
                    <div class="mobile_menu_close open_mobile_menu">
                        <i class="fal fa-times"></i>
                    </div>
                    <div class="m-brand-logo">
                        <a  href="!#"><img src="assets/img/logo/logo-1.png" alt=""></a>
                    </div>
                    <div class="in-m-search">
                        <form action="#">
                            <input type="text" name="search" placeholder="Search..">
                            <button type="submit"><i class="far fa-search"></i></button>
                        </form>
                    </div>
                    <nav class="mobile-main-navigation  clearfix ul-li">
                        <ul id="m-main-nav" class="nav navbar-nav clearfix">
                            <li class="dropdown in-megamenu">
                                <a href="!#">Home</a>
                                <ul class="dropdown-menu clearfix">
                                    <li>
                                        <div class="in-megamenu-content">
                                            <div class="in-megamenu-item-wrap">
                                                <div class="row justify-content-center">
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm1.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-1.html">View Now</a></a>
                                                                </div>
                                                            </div>
                                                            <h3>Home One</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm2.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-2.html">View Now</a>
                                                                </div>
                                                            </div>
                                                            <h3>Home Two</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm3.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-3.html">View Now</a>
                                                                </div>
                                                            </div>
                                                            <h3>Home Three</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm4.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-4.html">View Now</a>
                                                                </div>
                                                            </div>
                                                            <h3>Home Four</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm5.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-5.html">View Now</a>
                                                                </div>
                                                            </div>
                                                            <h3>Home Five</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm6.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-6.html">View Now</a>
                                                                </div>
                                                            </div>
                                                            <h3>Home Six</h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="in-megamenu-item position-relative">
                                                            <div class="in-megamenu-item-btn position-relative">
                                                                <img src="assets/img/gallery/dm7.jpg" alt="">
                                                                <div class="in-menu-btn-grp text-center">
                                                                    <a target="_blank" href="index-7.html">View Now</a>
                                                                </div>
                                                            </div>
                                                            <h3>Home Seven</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a target="_blank" href="about.html">About Us</a></li>
                            <li class="dropdown">
                                <a href="!#">Shop</a>
                                <ul class="dropdown-menu clearfix">
                                    <li><a target="_blank" href="shop.html">Shop Page </a></li>
                                    <li><a target="_blank" href="shop-single.html">Shop Details</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="!#">Pages</a>
                                <ul class="dropdown-menu clearfix">
                                    <li><a target="_blank" href="service.html">Services</a></li>
                                    <li><a target="_blank" href="service-2.html">Service Page 2</a></li>
                                    <li class="dropdown">
                                        <a href="service-single.html">Services Details</a>
                                        <ul class="dropdown-menu clearfix">
                                            <li><a target="_blank" href="service-single.html">Life Insurence</a></li>
                                            <li><a target="_blank" href="service-single.html">Health Insurence</a></li>
                                            <li><a target="_blank" href="service-single.html">Car Insurence</a></li>
                                            <li><a target="_blank" href="service-single.html">Home Insurence</a></li>
                                            <li><a target="_blank" href="service-single.html">Credit Insurence</a></li>
                                            <li><a target="_blank" href="service-single.html">Transport Insurence</a></li>
                                            <li><a target="_blank" href="service-single.html">Energy Insurence</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="!#">Testimonial</a>
                                        <ul class="dropdown-menu clearfix">
                                            <li><a target="_blank" href="testimonial.html">Testimonial</a></li>
                                            <li><a target="_blank" href="testimonial-carousel.html">Testimonial Carousel</a></li>

                                        </ul>
                                    </li>
                                    <li><a target="_blank" href="team.html">Team Page</a></li>
                                    <li><a target="_blank" href="team-single.html">Team Details</a></li>
                                    <li><a target="_blank" href="faq.html">FAQ Page</a></li>
                                    <li><a target="_blank"  href="pricing.html">Pricing Page</a></li>
                                    <li><a target="_blank" href="contact.html">Contact Page</a></li>
                                    <li><a target="_blank" href="insurance-calculator.html">Insurence Calculator</a></li>
                                    <li><a target="_blank" href="404.html">404</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="" href="!#">Blog</a>
                                <ul class="dropdown-menu clearfix">
                                    <li><a target="_blank" href="blog-list.html">News </a></li>
                                    <li><a target="_blank" href="blog-grid.html">News Grid</a></li>
                                    <li><a target="_blank" href="blog-list-2.html">News List</a></li>
                                    <li><a target="_blank" href="blog-slider.html">News Slider</a></li>
                                    <li><a target="_blank" href="blog-single.html">News Details</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="" href="!#">Portfolio</a>
                                <ul class="dropdown-menu clearfix">
                                    <li><a target="_blank" href="portfolio-slide.html">Portfolio Slide </a></li>
                                    <li><a target="_blank" href="portfolio-grid.html">Portfolio Grid</a></li>
                                    <li><a target="_blank" href="portfolio-masonry.html">Porfolio Masonry</a></li>
                                    <li><a target="_blank" href="portfolio-single.html">Portfolio Details</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- /Mobile-Menu -->
        </div>
    </div>
</div>
</header>
`

class topNav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

export default topNav;
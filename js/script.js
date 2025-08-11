const API_BASE_Url = "https://tsb11623-5000.inc1.devtunnels.ms";
const UserId = "6879c898fbe4bc33b8acafe5";

async function fetchHeaderFooter() {
  try {
    const res = await fetch(`${API_BASE_Url}/api/site/website?userId=${UserId}`);
    if (!res.ok) throw new Error("Failed to fetch content");

    const data = await res.json();
    const headerFooterData = data.updateFooter[data.updateFooter.length - 1];
  

    if (!headerFooterData) {
      console.warn("No change data found");
      return;
    }

    const headerElement = document.getElementById("header");
    const whychooseElement = document.getElementById("whychooseElement")
    const footerElement = document.getElementById("footer");
    const fabContainer = document.getElementById("fabContainer");

    if (!headerElement || !footerElement || !fabContainer) {
      console.error("Missing header, footer, or fabContainer element in HTML.");
      return;
    }

    // ======== HEADER ============
    headerElement.innerHTML = ` 
      <div class="miniheader d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <a target="_blank" href="${headerFooterData.addressurl}"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${headerFooterData.address || "Your Address"}</a>
            </div>
            <div class="col-auto">
              <a target="_blank" href="tel:+91${headerFooterData.mobile || "0000000000"}"><i class="fa-solid fa-phone" aria-hidden="true"></i> +91 ${headerFooterData.mobile || "0000000000"}</a>
            </div>
            <div class="col-auto">
              <a target="_blank" href="mailto:${headerFooterData.email || "yourmail@gmail.com"}"><i class="fa-solid fa-envelope" aria-hidden="true"></i>${headerFooterData.email || "yourmail@gmail.com"}</a>
            </div>
          </div>
        </div>
      </div>

        <div id="main-header">
            <nav class="mynavbar bg-light py-3">
              <div class="container header">
                <a class="brandLogo" id="logo-input" href="index.html">
                  <img src="${API_BASE_Url}/uploads/${headerFooterData.headerLogo}" alt="Brand Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu ms-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close"><span class="close-btn">+</span></button>
                  </li>
                  <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
                  <li class="navLi"><a href="about.html" class="navLink">About</a></li>
                  <li class="navLi">
                    <a href="#" class="navLink">Services <span class="toggleSub">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd" stroke-width="0.5" stroke="currentColor"></path></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi">
                        <a href="service1.html" class="navLink">${headerFooterData.headerProduct1 || "Product 1"}</a>
                      </li>
                      <li class="navLi">
                        <a href="service2.html" class="navLink">${headerFooterData.headerProduct2 || "Product 2"}</a>
                      </li>
                      <li class="navLi">
                        <a href="service3.html" class="navLink">${headerFooterData.headerProduct3 || "Product 3"}</a>
                      </li>
                      <li class="navLi">
                        <a href="service4.html" class="navLink">${headerFooterData.headerProduct4 || "Product 4"}</a>
                      </li>
                      <li class="navLi">
                        <a href="service5.html" class="navLink">${headerFooterData.headerProduct5 || "Product 5"}</a>
                      </li>
                    </ul>
                  </li>
                  <li class="navLi"><a href="contactUs.html" class="navLink">Contact</a></li>
                </ul>
    
              </div>
            </nav>
        </div>`;

    // ======== FOOTER ============
    footerElement.innerHTML =
      `<div class="container">
        <div class="row">
          <!-- Company Info -->
          <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
            <a class="footer-brand" href="index.html">
              <img src="${API_BASE_Url}/uploads/${headerFooterData.footerLogo}" alt="Unique pest control logo">
            </a>
            <p class="mb-0">
             ${headerFooterData.description || "In Corporated in the year 2013, in Vadodara (Gujarat, India), we “Varni Digital Pvt. Ltd.” is the renowned manufacturer and supplier of an enhanced quality product."}
            </p>
          </div>

          <!-- Explore Links -->
          <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
            <h5 class="secH">Explore</h5>
            <ul>
              <li>
                <a href="index.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>Home</a>
              </li>
              <li>
                <a href="about.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>About</a>
              </li>
              <li>
                <a href="contactUs.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>Contact Us</a>
              </li>
              <li>
                <a href="termiteTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>Termites Treatment</a>
              </li>
              <li>
                <a href="cockroachTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>Cockroaches control</a>
              </li>
          
              
            </ul>
          </div>

          <div class="col-sm-6 col-lg-auto exploreLinks">
            <h5 class="secH">Quick Links</h5>
            <ul>
            <li>
                <a href="termiteTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>${headerFooterData.footerProduct1 || "product1"}</a>
              </li>
              <li>
                <a href="cockroachTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>${headerFooterData.footerProduct2 || "product2"}</a>
              </li>
              <li>
                <a href="rodentTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>${headerFooterData.footerProduct3 || "product3"}</a>
              </li>
              <li>
                <a href="woodBorerTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>${headerFooterData.footerProduct4 || "product4"}</a>
              </li>
              <li>
                <a href="bedbugTreatment.html"><i class="fa-solid fa-caret-right" aria-hidden="true"></i>${headerFooterData.footerProduct5 || "product5"}</a>
              </li>
              
             
              
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-3 col-sm-6">
            <h5 class="secH">Reach Us</h5>

            <ul class="contact-info">
              <li>
                <a target="_blank" class="locationLink" href="${headerFooterData.addressurl}"><i class="fa-solid fa-location-dot" aria-hidden="true"></i>${headerFooterData.address || "Your Address"}</a>
              </li>
              <li>
                <a href="tel:+91${headerFooterData.mobile || "0000000000"}"><i class="fa-solid fa-mobile-screen-button" aria-hidden="true"></i> +91 ${headerFooterData.mobile || "0000000000"}</a>
              </li>
              <li>
                <a href="mailto:${headerFooterData.email || "yourmail@gmail.com"}"><i class="fa-solid fa-envelope" aria-hidden="true"></i>${headerFooterData.email || "yourmail@gmail.com"}</a>
              </li>
            </ul>
            <div class="social-icons mt-3">
              <a class="facebook" href="#"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
              <a class="instagram" href="#"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
              <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://web.whatsapp.com/send?phone=9924408987">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div class="f-bottom copyrightSection">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center"> copyright © <span class="year"></span> - All Rights Reserved by ${headerFooterData.copyright || "Your company Name "} || Developed & Maintained by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;


    // ===========Why choose US============

    whychooseElement.innerHTML =

      `<div class="container">
      <h2 class="secH">Why Choose Us ?</h2>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="p-1 extra">
            <div class="cardVerticle text-center">
              <div class="squareImg">
                <img loading="lazy" src="image/asset 18.png"  alt=" Expertise and Experience icon" />
              </div>
              <h2 class="fourthH">${headerFooterData.whychooseTitle1}</h2>
              <p>
                 ${headerFooterData.whychooseDesc1}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="p-1 extra">
            <div class="cardVerticle text-center">
              <div class="squareImg">
                <img loading="lazy" src="image/asset 19.png"  alt=" Quality Assurance icon" />
              </div>
              <h2 class="fourthH" >${headerFooterData.whychooseTitle2}</h2>
              <p>
                ${headerFooterData.whychooseDesc2}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="p-1 extra">
            <div class="cardVerticle text-center">
              <div class="squareImg">
                <img loading="lazy" src="image/asset 20.png"  alt=" Customer Satisfaction icon" />
              </div>
              <h2 class="fourthH" >${headerFooterData.whychooseTitle3}</h2>
              <p >
               ${headerFooterData.whychooseDesc3}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="p-1 extra">
            <div class="cardVerticle text-center">
              <div class="squareImg">
                <img loading="lazy" src="image/asset 21.png" alt=" Tailored Solutions icon" />
              </div>
              <h2 class="fourthH" >${headerFooterData.whychooseTitle4}</h2>
              <p >
                ${headerFooterData.whychooseDesc4}
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>`

    testimonialElement.innerHTML =
      `<div class="container">
        <h2 class="secH">Testimonials</h2>

        <div id="ca2" class="owl-carousel owl-theme text-center">
          <div class="item">

            <div class="testimonialCard">
              <h2 class="Ratings_title therdH">${headerFooterData.testimonialDesc1 || "⭐⭐⭐⭐⭐  Exceptional service! Our pest problem was handled swiftly and professionally. Highly recommend Unique Pest Control!"}</h2>
              <p class="fifthH">${headerFooterData.testimonialClient1 || "Supply Chain Engineer"}</p>
            </div>

          </div>
          <div class="item">

            <div class="testimonialCard">
              <h2 class="Ratings_title therdH"> ${headerFooterData.testimonialDesc2 || "⭐⭐⭐⭐⭐ Quick, effective, and affordable! The team at Unique Pest Control is our go-to for all pest issues."}</h2>
              <p class="fifthH"> ${headerFooterData.testimonialClient2 || "Manufacturing Unit"}</p>
            </div>

          </div>
          <div class="item">

            <div class="testimonialCard">
              <h2 class="Ratings_title therdH">  ${headerFooterData.testimonialDesc3 || "⭐⭐⭐⭐⭐ Unique Pest Control delivered outstanding results. No more pests, and their eco-friendly approach was a big plus!"}</h2>
              <p class="fifthH"> ${headerFooterData.testimonialClient3 || "Retail Client"}</p>
            </div>

          </div>
          <div class="item">

            <div class="testimonialCard">
              <h2 class="Ratings_title therdH">  ${headerFooterData.testimonialDesc4 || "⭐⭐⭐⭐⭐ Professional and thorough. Unique Pest Control exceeded our expectations—our home is now completely pest-free!"}</h2>
              <p class="fifthH"> ${headerFooterData.testimonialClient4 || "Client Since 2007"}</p>
            </div>

          </div>
        </div>
        <div class="hrBorder"></div>
      </div>
      
      `

         $("#ca2").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        dotsEach: 1,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__slideInUp',
        navSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag:false,
        touchDrag:false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

    // ======== FAB ============
    fabContainer.innerHTML =
      ` <!-- whatsapp FAB icon -->
    <div class="fab-container">
      <a class="set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=9924408987">
        <svg xmlns="http://www.w3.org/2000/svg" width="59.54px" height="60px" viewBox="0 0 256 258">
          <defs>
            <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#1faf38"></stop>
              <stop offset="100%" stop-color="#60d669"></stop>
            </linearGradient>
            <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#f9f9f9"></stop>
              <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path>
          <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path>
          <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path>
        </svg>
      </a>
    </div>`;

    highlightActiveLink();
    initHeaderBehavior();
    initMobileNavToggle();

  } catch (err) {
    console.error("Error loading content:", err);
  }
}

// === Highlight active nav item ===
function highlightActiveLink() {
  const current = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  document.querySelectorAll(".navLink").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.closest(".dropdownList")?.closest(".navLi")?.querySelector(".navLink")?.classList.add("active");
    }
  });
}

// === Sticky Header on Scroll ===
function initHeaderBehavior() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  const handleScroll = () => {
    if (!header || !belowContent) return;
    const scrollTop = window.pageYOffset;
    const stickyStart = header.offsetTop + header.offsetHeight + 5;
    const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

    if (scrollTop > stickyStart) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");
    } else if (scrollTop < resetPoint) {
      header.classList.remove("sticky-header", "visible");
      header.classList.add("headerAnimate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
}

// === Mobile Nav Toggle ===
function initMobileNavToggle() {
  const toggleBtn = document.querySelector(".navToggle");
  const navMenu = document.querySelector(".navMenu");
  const closeBtn = document.querySelector(".btn-nav-close");

  toggleBtn?.addEventListener("click", () => navMenu?.classList.toggle("active"));
  closeBtn?.addEventListener("click", () => navMenu?.classList.remove("active"));

  document.querySelectorAll(".toggleSub").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const submenu = toggle.closest(".navLi").querySelector(".dropdownList");
      document.querySelectorAll(".dropdownList.open").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("open");
      });
      submenu?.classList.toggle("open");
    });
  });
}

// === Trigger content load after DOM ready ===
document.addEventListener("DOMContentLoaded", () => {
  fetchHeaderFooter(); // <<< The missing call added here
});


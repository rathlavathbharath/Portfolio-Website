$(document).ready(function(){

    //about section functions
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function () {
            var tabname = this.getAttribute("data-tab");
            openTab(tabname);
        });
    }

    function openTab(tabname) {
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-link");
        }
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove("active-tab");
        }

        var tabLink = document.querySelector("[data-tab='" + tabname + "']");
        var tabContent = document.getElementById(tabname);

        if (tabLink && tabContent) {
            tabLink.classList.add("active-link");
            tabContent.classList.add("active-tab");
        } else {
            console.error("Tab not found: " + tabname);
        }
    }
    
    
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", "Problem Solver", "Web Developer", "Tech Enthusiast", "Quick Learner"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer", "Problem Solver", "Web Developer", "Tech Enthusiast", "Quick Learner"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // GitHub redirection
    const project1 = document.getElementById("project1");
    const project2 = document.getElementById("project2");
    const project3 = document.getElementById("project3");

    project1.addEventListener("click", function () {
        window.location.href = "https://github.com/rathlavathbharath/Intelligent-Surveillance-Support-System";
    });

    project2.addEventListener("click", function () {
        window.location.href = "https://github.com/rathlavathbharath/Job-Portal";
    });

    project3.addEventListener("click", function () {
        window.location.href = "https://github.com/rathlavathbharath/Hangman-Game";
    });

    project4.addEventListener("click", function () {
        window.location.href = "https://github.com/rathlavathbharath/Portfolio-Website";
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Fancybox initialization
    $("[data-fancybox]").fancybox({
        protect: true // Enable protection against downloading the image
    });

});
/*------------------------------------------------------------------
 * Theme Name: Chetak Enterprises Ltd. Responsive Template
 * Theme URI: http://www.brandio.io/envato/spacehost
 * Author: Brandio
 * Author URI: http://www.brandio.io/
 * Description: A Bootstrap Responsive HTML5 Template
 * Version: 1.0
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2017 Brandio.
 -------------------------------------------------------------------*/

"use strict";

// Add Slider functionality to the #testimonials section in the home page.
var testimonialsSlider = $("#testimonials-slider","#testimonials");
// testimonialsSlider.slick({
//     dots: false,
//     arrows: true,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1
// });
// Add Slider functionality to the testimonials in the "Sign in" and "Sign out" pages.
var miniTestimonialsSlider = $(".mini-testimonials-slider","#form-section");
// miniTestimonialsSlider.slick({
//     dots: true,
//     arrows: false,
//     infinite: false,
//     autoplay: true,
//     speed: 200
// });
// Add Slider functionality to the info-slider in the about page.
var infoSlider = $(".info-slider","#page-head");
// infoSlider.slick({
//     dots: true,
//     arrows: false,
//     infinite: false,
//     autoplay: true,
//     speed: 200
// });

$(document).ready(function(){
  // $(".directors-list").owlCarousel({
  //   items:4,
  //   nav:true
  // });

});

$(window).on("load", function() {


    // Counter slider functions in "CUSTOM HOSTING PLAN" section on the homepage
    // var cPlan = $('#c-plan');
    // cPlan.slider({
    //     tooltip: 'always'
    // });
    // cPlan.on("slide", function(e) {
    //     $('.slider .tooltip-up','#custom-plan').text(e.value/20);
    // });
    // cPlan.value = cPlan.data("slider-value");
    // $('.slider .tooltip','#custom-plan').append('<div class="tooltip-up"></div>');
    // $('.slider .tooltip-up','#custom-plan').text(cPlan.value/20);
    // $('.slider .tooltip-inner','#custom-plan').attr("data-unit",cPlan.data("unit"));
    // $('.slider .tooltip-up','#custom-plan').attr("data-currency",cPlan.data("currency"));

    // Features Section click function
    var featureIconHolder = $(".feature-icon-holder", "#features-links-holder");

    featureIconHolder.on("click",function(){
        featureIconHolder.removeClass("opened");
        $(this).addClass("opened");
        $(".show-details","#features-holder").removeClass("show-details");
        $(".feature-d"+$(this).data("id"), "#features-holder").addClass("show-details");
    });

    // Fix #features-holder height in features section
    var featuresHolder = $("#features-holder");
    var featuresLinksHolder = $("#features-links-holder");
    var featureBox = $(".show-details","#features-holder");

    featuresHolder.css("height",featureBox.height()+120);
    featuresLinksHolder.css("height",featureBox.height()+120);

    // Fix #features-holder height in features section
    $(window).on("resize",function() {
        featuresHolder.css("height",featureBox.height()+120);
        featuresLinksHolder.css("height",featureBox.height()+120);
        return false;
    });

    // Apps Section hover function
    var appHolder = $(".app-icon-holder", "#apps");

    appHolder.on("mouseover",function(){
        appHolder.removeClass("opened");
        $(this).addClass("opened");
        $(".show-details", "#apps").removeClass("show-details");
        $(".app-details"+$(this).data("id"), "#apps").addClass("show-details");
    });

    // More Info Section hover function
    var infoLink = $(".info-link", "#more-info");

    infoLink.on("mouseover",function(){
        infoLink.removeClass("opened");
        $(this).addClass("opened");
        $(".show-details", "#more-info").removeClass("show-details");
        $(".info-d"+$(this).data("id"), "#more-info").addClass("show-details");
    });

    $(".arrow-icon").click(function() {
      window.location.href="about.html";
    })


    var directors= [
      {
        name:"Hukmi Chand Jain",
        din:"853578",
        desc:["Shri Hukmi Chand Jain S/o Shri Lal Chand Jain aged 62 years is a graduate and started his carrier in 1975 by joining M/s Champa Lal Jain & Co. and worked with the said firm for a period of 15 years. During the year 1990-91, he joined M/s Chetak Enterprises as working partner and after conversion of firm into Private Limited Company, he is positioned as Director of the Company."],
        url:"images/directors/hcj.jpg",
        designation:"Managing Director"
      },
      {
        name:"Manohar Lal Anjana",
        din:"1054568",
        desc:["S/o Late Shri Bheru Lal Anjana aged 57 years is a graduate and started his carrier in 1976 as an agriculturist. During the year 1990-91 he had joined M/s Chetak Enterprises as partner and now continuing as Director of the Company"],
        url:"images/directors/mla.jpg",
        designation:"Joint Managing Director"
      },
      {
        name:"Neeraj Vijay",
        din:"05333864",
        blockquote:"“A highly creative, energetic Sr. management leader with more than two decades of progressive experience in different sectors in construction field. Expert in understanding and delivering business concepts in flashy and unforgettable manner. A proven track record of setting benchmarks in construction of National Highways and State Highways.”",
        desc:[
          "Mr. Neeraj Vijay started his footsteps of his career in Dec 1990 as an officer at MP state services during which he devised strategies to enable promotion of industries in MP, handled approval and exemptions & promotion of industries.",

          "Later in Feb 1993 he joined MP state industrial development corporation where he was responsible for leading development of industrial complexes as well as establishing & managing new PPP-based businesses. Here he developed various effective policies including industrial promotion policy and single window clearance in industrial sector. He pioneered PPP Projects in the country by developing not only the first toll road of the country – Rau Pithampur Road, but also the first BOT water supply Project namely Dewas Industrial Water Supply Project.",

          "From Nov 2000 to Mar 2006 besides State Industrial Development Corporation (MPSIDC) he handled additional charge of MP Road Development Corporation (MPRDC). During his tenure at MPRDC he handled projects worth INR 170 bn, managed 137 projects and planned to establish medical colleges in MP & Real estate Projects under PPP mode. Collaborated with National Highway Authority of India (NHAI) and developed 8 National Highway projects.",
          "After his immense contribution to State, he joined as Country Head – Roads, Gammon Infra Projects Ltd. in Feb 2012. During his tenure as a Country Head, he spearheading the roads division of company, owning a portfolio of over INR 140 bn & steered the entire project management cycle for 14 live road projects, which required managing all operations of 14 Special Purpose Vehicles (SPVs) and supervise a loan portfolio of INR 80bn.",
          "In 2013 he stepped into the shoes of developer and became an entrepreneur by venturing business into Africa, M/s. Chetak Zambia Ltd. At that time, Chetak Zambia Ltd. was the first Indian company to enter & bag a contract in Zambia. In 2016, he partnered with Chetak Enterprises Ltd. in all future projects and took charge of leading the company from front by becoming a whole time Director."
        ],
        url:"images/directors/nv.jpg",
        designation:"Whole Time Director"
      },
      {
        name:"Udai Lal Anjana",
        din:"1424424",
        desc:["S/o late Shri Bheru Lal Anjana, aged 64 years, a commerce graduate, Director of the company, started his carrier in 1974 as a small entrepreneur engaged in Agro Business. In 1990-91 he started business of construction and was mainly engaged in the execution of the work of various government & semi government departments on contract basis under the name of M/s. Chetak Enterprises, a partnership firm along with Sh. Manohar Lal Anjana & Puran Mal Anjana. In March 2000, M/s. Chetak Enterprises was converted into a Private Limited Company known as M/s Chetak Enterprises Private Limited and consequent to change of name on conversion to Limited Company from Private Limited Company, the name of Company is known as “Chetak Enterprises Limited” from 04th July’2007. Apart from this he is a public figure in the region and in past has served as Member of Parliament from Chittorgarh District and a Member of Legislative Assembly in Rajasthan having been elected as MLA from Nimbahera."],
        url:"images/directors/ula.jpg",
        designation:"Director"
      },
      {
        name:"Puran Mal Anjana",
        din:"1969378",
        desc:["Shri Puran Mal Anjana is aged 47 years, a commerce graduate, started his career in 1990. In 1990-91 he joined M/s. Chetak Enterprises, along with Sh. Manohar Lal Anjana & Udai Lal Anjana and is now continuing as director in CEL"],
        url:"images/directors/pma.jpg",
        designation:"Director"
      },
      {
        name:"Deepak Sharma",
        din:"01621933",
        desc:[],
        url:"images/directors/ds.jpg",
        designation:"Director"
      },
      {
        name:"Vishal Bohra",
        din:"01686244",
        desc:[],
        url:"images/directors/vb.jpg",
        designation:"Director"
      },
      {
        name:"Beena Anjana",
        din:"7145933",
        desc:[],
        url:"images/directors/ba.jpg",
        designation:"Director"
      }
    ]

    for (var key in directors){
      var director = directors[key];

      var template = "<div data-key=\""+key+"\" class=\"item clearfix\"><figure><img src=\""+director.url+"\"></figure><h4>"+director.name+"</h4><p><strong>"+director.designation+"</strong></p><p>DIN: "+director.din+"</p></div>";

      $(".directors-list").append(template);


    }

    $(".directors-info article").append("<h2>"+directors[0].name+"</h2>");
    $(".directors-info article").append("<p>"+directors[0].designation+"</p>");
    $(".directors-info article").append("<p>DIN: "+directors[0].din+"</p>");
    if(directors[0].blockquote){
      $(".directors-info article").append("<p class=\"blockquote\">"+directors[0].blockquote+ "</p>");
    }
    if(directors[0].desc.length > 0){
      for(var key in directors[0].desc){
        var desc = directors[0].desc[0];
        $(".directors-info article").append("<p>"+desc+"<p>");
      }
    }

    $(".directors-list .item").on("click", function(){

      $(".directors-info article").html("");
      var key = $(this).attr("data-key");
      $(".directors-info article").append("<h2>"+directors[key].name+"</h2>");
      $(".directors-info article").append("<p>"+directors[key].designation+"</p>");
      $(".directors-info article").append("<p>DIN: "+directors[key].din+"</p>");
      if(directors[key].blockquote){
        $(".directors-info article").append("<p class=\"blockquote\">"+directors[key].blockquote+ "</p>");
      }
      if(directors[key].desc.length > 0){
        for(var key1 in directors[key].desc){
          var desc = directors[key].desc[key1];
          $(".directors-info article").append("<p>"+desc+"<p>");
        }
      }
    })


});

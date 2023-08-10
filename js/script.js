// =============== Colorful Loading Screen ===============
function hideLoading() {
   $(".loading").fadeOut(1000, function () {
      $("body").css("overflow-y", "auto");
   });
}
window.onload = hideLoading;

$(document).ready(function () {

   // =============== ParticlesJS Config ===============
   particlesJS("particles-js", {
      "particles": {
         "number": {
            "value": 40,
            "density": {
               "enable": true,
               "value_area": 700
            }
         },
         "color": {
            "value": "#ffffff"
         },
         "shape": {
            "type": "circle",
            "stroke": {
               "width": 0,
               "color": "#000000"
            },
            "polygon": {
               "nb_sides": 5
            },
         },
         "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
            }
         },
         "size": {
            "value": 3,
            "random": true,
            "anim": {
               "enable": false,
               "speed": 40,
               "size_min": 0.1,
               "sync": false
            }
         },
         "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
         },
         "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
            }
         }
      },
      "interactivity": {
         "detect_on": "canvas",
         "events": {
            "onhover": {
               "enable": false,
               "mode": "grab"
            },
            "onclick": {
               "enable": false,
               "mode": "push"
            },
            "resize": true
         },
         "modes": {
            "grab": {
               "distance": 140,
               "line_linked": {
                  "opacity": 1
               }
            },
            "bubble": {
               "distance": 400,
               "size": 40,
               "duration": 2,
               "opacity": 8,
               "speed": 3
            },
            "repulse": {
               "distance": 200,
               "duration": 0.4
            },
            "push": {
               "particles_nb": 4
            },
            "remove": {
               "particles_nb": 2
            }
         }
      },
      "retina_detect": true
   });

   // =============== Page Load Main Function ===============
   function pageLoad(section) {
      $("section").hide();
      $(".hand-load").show();
      setTimeout(function () {
         $(".hand-load").hide();
      }, 1000);
      setTimeout(function () {
         $(section).fadeIn(1000);
      }, 500);
   }
   // =============== Load Page On Click ===============
   $(".home-btn").click(function () {
      pageLoad("#home");
   });
   $(".skills-btn").click(function () {
      pageLoad("#skills");
   });
   $(".career-btn").click(function () {
      pageLoad("#career");
   });
   $(".projects-btn").click(function () {
      pageLoad("#projects");
   });
   $(".certificates-btn").click(function () {
      pageLoad("#certificates");
   });
   $(".testimonials-btn").click(function () {
      pageLoad("#testimonials");
   });
   $(".hobbies-btn").click(function () {
      pageLoad("#hobbies");
   });
   $(".contact-btn").click(function () {
      pageLoad("#contact");
   });

   // =============== Sidebar ===============
   var bodyHeight = $(document).height();
   $(".sidebar").height(bodyHeight);

	// =============== Responsive Sidebar ===============
   $(".responsive-sidebar .show").click(function(){
      $(".responsive-sidebar .sidebar-background").fadeIn();
      $(".responsive-sidebar .links").fadeIn();
   });
   $(".responsive-sidebar .hide").click(function(){
      $(".responsive-sidebar .links").fadeOut();
      $(".responsive-sidebar .sidebar-background").fadeOut();
   });
   $(".responsive-sidebar .links .link").click(function(){
      $(".responsive-sidebar .links").hide();
      $(".responsive-sidebar .sidebar-background").hide();
   });


   $(".sidebar .show-btn").click(function(){
      $(".sidebar .links .link span").show();
      $(this).hide();
      $(".sidebar .hide-btn").show();
   });
   $(".sidebar .hide-btn").click(function(){
      $(".sidebar .links .link span").hide();
      $(this).hide();
      $(".sidebar .show-btn").show();
   });
	$(".sidebar .links .link span").click(function(){
		$(".sidebar .links .link span").hide();
		$(".sidebar .hide-btn").hide();
		$(".sidebar .show-btn").show();
	});

   // =============== Home Page ===============
   if ($("#home").length > 0) {
		//Show Title Without Delay
		setTimeout(function () {
			var typed = new Typed("#home .title", {
				strings: ["Welcome to my Website"],
				typeSpeed: 35,
				loop: false,
				showCursor: false,
			});
      }, 1000);
		//Then Show Quote Below Title
      setTimeout(function () {
			var typed = new Typed("#home .quote", {
				strings: ["I am John,"],
				typeSpeed: 30,
				loop: false,
				showCursor: false,
			});
      }, 2200);
		setTimeout(function () {
			var typed = new Typed("#home .add-quote", {
				strings: ["Full Stack Developer", "Web Designer", "Graphic Designer", "Web Developer"],
				typeSpeed: 50,
				loop: true,
			});
      }, 2600);
		//Then Show Line After
		setTimeout(function () {
			$("#home .main-hr").animate({
         	width: "500px"
      	});
      }, 3000);
		//At last Show The Content of The Page by fading Out
      setTimeout(function () {
			$("#home .description").fadeIn(1000);
      }, 3200);
   }

   // =============== Career Page Milestone Effect ===============
   $(document).ready(function () {
      handle();
   });

   const configsDefault = {
      dataAttrTabName: 'data-tab-to',
      dataAttrTabContentName: 'data-tab-content',
      dataAttrTabDefaultActive: 'data-tab-default-active'
   }

   const handle = (configs = configsDefault) => {
      const {
         dataAttrTabName = configsDefault.dataAttrTabName,
            dataAttrTabContentName = configsDefault.dataAttrTabContentName,
            dataAttrTabDefaultActive = configsDefault.dataAttrTabDefaultActive
      } = configs

      const tabItems = $(`*[${dataAttrTabName}]`)
      const tabContents = $(`*[${dataAttrTabContentName}]`)

      //Actions
      const addActive = el => el.addClass('active')
      const removeActive = el => el.removeClass('active')
      const addCurrent = el => el.addClass('current')
      const removeCurrent = el => el.removeClass('current')
      const loopAction = func => targets =>
         targets.each((index, el) => {
            func($(el))
         })
      const loopActionActive = (value) => targets => {
         return targets.each((index, el) => {
            const tab = $(el)
            const targetName = tab.attr(dataAttrTabName)
            if (Number(value) > Number(targetName)) {
               addActive(tab)
            } else {
               removeActive(tab)
            }
         })
      }

      //Handle clicked
      const handleClickTab = (tab, tabItems, tabContents) => {
         loopAction(removeCurrent)(tabItems)
         loopAction(removeActive)(tabContents)
         const targetName = tab.attr(dataAttrTabName)
         const targets = $(`*[${dataAttrTabContentName}='${targetName}']`)
         loopActionActive(targetName)(tabItems)
         addCurrent(tab)
         loopAction(addActive)(targets)
         anime({
            targets: targets[0],
            translateY: [200, 0],
            duration: 3000
         });
      }

      //First call
      tabItems.each((index, el) => {
         const tab = $(el)
         const isDefautlActive = tab.attr(dataAttrTabDefaultActive)

         tab.click(function () {
            handleClickTab(tab, tabItems, tabContents)
         })

         if (isDefautlActive !== undefined) {
            handleClickTab(tab, tabItems, tabContents)
         }
      })
   }

   // =============== Main Carousel ===============
   $('.my-carousel').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         },
         1170: {
            items: 3
         }
      }
   });

});
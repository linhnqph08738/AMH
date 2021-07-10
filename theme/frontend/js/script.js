var DETAIL = (function() {
    var detail = function() {
        if ($(".item_detail").length > 0) {
            $(".item_detail").first().addClass("active");

            $(".item_detail").click(function() {
                if (!$(this).hasClass("active")) {
                    $(".item_detail.active").removeClass("active");
                    $(this).addClass("active");
                }
            });
        }
    };
    var loadEffectWow = function() {
        if ($(window).width() > 991) {
            wow = new WOW();
            wow.init();
        }
    };
    return {
        _: function() {
            detail();
            loadEffectWow();
        },
    };
})();
var SLIDESHOW = (function() {
    var slideGruop = function() {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2.5,
            spaceBetween: 30,
            loop: true,
            loopFillGroupWithBlank: true,
            breakpoints: {
                1025: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                },
                425: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
            },
        });
    };
    var slideBanner = function() {
        function doAnimations(elems) {
            var animEndEv = "webkitAnimationEnd animationend";
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data("animation");
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        if ($(".swiper-baner").length > 0) {
            if ($(".swiper-baner").find(".swiper-slide").length >= 2) {
                var swiperBanner = new Swiper(".swiper-baner", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    // loop: true,

                    pagination: {
                        el: ".swiper-btn",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    },
                    autoplay: {
                        delay: 8000,
                    },
                    cssMode: true,
                    mousewheel: true,
                    keyboard: true,
                });
            }
            var firstElments = $(".swiper-baner")
                .find(".swiper-slide")
                .first()
                .find("[data-animation ^= 'animated']");
            doAnimations(firstElments);
            swiperBanner.on("slideChange", function() {
                var slideItems = $(".swiper-baner").find(".swiper-slide");
                var active = swiperBanner.activeIndex;
                var aniElm = $(slideItems[active]).find(
                    "[data-animation ^= 'animated']"
                );
                doAnimations(aniElm);
            });
            $(".swiper-baner").mouseenter(function() {
                swiperBanner.autoplay.stop();
            });
            $(".swiper-baner").mouseleave(function() {
                swiperBanner.autoplay.start();
            });
        }
    };
    var talkmeSlide = function() {
        if ($(".talk-we_slide").length > 0) {
            var slidetalkWe = new Swiper(".talk-we_slide", {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: ".btn-talk",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    376: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            });
        }
    };
    var slideCustom = function() {
        if ($(".slide_custom").length > 0) {
            var swiper = new Swiper(".slide_custom", {
                slidesPerView: 1,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                allowTouchMove: false,
            });
        }
        if ($(".slide_img").length > 0) {
            var swiper2 = new Swiper(".slide_img", {
                navigation: {
                    nextEl: ".slide_custom .swiper-button-next",
                    prevEl: ".slide_custom .swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }
    };
    var slideNews = function() {
        if ($(".mySlidel").length > 0) {
            var swiper = new Swiper(".mySlidel", {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                // loopFillGroupWithBlank: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    426: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                navigation: {
                    nextEl: ".btn-next",
                    prevEl: ".btn-prev",
                },
                autoplay: {
                    delay: 3000,
                },
            });
        }
    };
    var slideProject = function() {
        if ($(".mySlidelProject").length > 0) {
            var mySlidelProject = new Swiper(".mySlidelProject", {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                // loopFillGroupWithBlank: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    426: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
                navigation: {
                    nextEl: ".mySlidelProject .project_next",
                    prevEl: ".mySlidelProject .project_prev",
                },
                autoplay: {
                    delay: 3000,
                },
            });
        }
    };
    var slidePartner = function() {
        if ($(".mySwiper_partner").length > 0) {
            var mySlidelPartner = new Swiper(".mySwiper_partner", {
                autoplay: true,
                speed: 500,
                loop: false,
                autoplay: {
                    delay: 3000,
                },
                slidesPerView: 3,
                slidesPerColumnFill: "row",
                grabCursor: true,
                slidesPerColumn: 3,
                slidesPerGroup: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".partner-pagination",
                    clickable: true,
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 6,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    414: {
                        slidesPerView: 3,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    375: {
                        slidesPerView: 2,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        slidesPerColumnFill: "row",
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                },
            });
        }
    };
    return {
        _: function() {
            slideGruop();
            slideCustom();
            slideBanner();
            slideNews();
            slideProject();
            slidePartner();
            talkmeSlide();
        },
    };
})();
var WEBS = (function() {
    var backTop = function() {
        var backTop = $(".back-to-top");
        $(window).scroll(function(event) {
            if ($(this).scrollTop() > 500) {
                backTop.show(200);
            } else {
                backTop.hide(200);
            }
        });
        backTop.click(function(event) {
            $("html,body").animate({ scrollTop: 0 }, 300);
        });
    };
    var scrollHeader = function() {
        if ($(".header").length > 0) {
            var header = $(".header").height();
            var height = $(this).scrollTop();
            $(window).scroll(function() {
                var header = $(".header").height();
                var height = $(this).scrollTop();
                if (height > header) {
                    $(".header").addClass("fixed");
                } else {
                    $(".header").removeClass("fixed");
                }
            });
            if (height > header) {
                $(".header").addClass("fixed");
            } else {
                $(".header").removeClass("fixed");
            }
        }
    };
    return {
        _: function() {
            backTop();
            scrollHeader();
        },
    };
})();
var MENU = (function() {
    var menu = function() {
        if ($(document).width() <= 991) {
            $(".menu").find("ul>li>ul").hide();
            $(".menu")
                .find("ul li")
                .each(function() {
                    if ($(this).find("ul>li").length > 0) {
                        $(this).prepend(
                            '<span class="show-menu__products"><i class="fa fa-angle-down"></i></span>'
                        );
                        $(this).addClass("active");
                    }
                });
        }
        $(".menu")
            .find("li span")
            .click(function(event) {
                var ul = $(this).nextAll("ul");
                if (ul.is(":hidden") === true) {
                    ul.slideDown(200);
                } else {
                    ul.slideUp(200);
                }
            });
    };
    var openMenuMobile = function() {
        if ($(".nav-menu").length > 0) {
            $(".show_menu").click(function() {
                $(".header-body").addClass("active");
                $("body").addClass("overflow-hidden");
                $(".nav-menu").toggleClass("nav_active");
                $(".menu_container").toggleClass("active");
                $(".nav-menu").toggleClass("col_active");
                $(".bg-menu").toggleClass("active");
                $(".bg-menu").addClass("smooth");
                $(".nav-menu").addClass("smooth");
                $(".header-body").addClass("smooth");
            });
        }
    };
    var closeMenuMobile = function() {
        if ($(".nav-menu").length > 0) {
            $(".bg-menu").click(function() {
                $("body").removeClass("overflow-hidden");
                $(".nav-menu").removeClass("nav_active");
                $(".menu_container").removeClass("active");
                $(".nav-menu").removeClass("col_active");
                $(".bg-menu").removeClass("active");
                $(".header-body").removeClass("active");
            });
        }
    };
    var activeMenu = function() {
        var url = window.location.pathname;
        urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
        if (urlRegExp != "/$/") {
            $(".menu>ul>li>a").each(function() {
                if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
                    $(this).addClass("active");
                    $(this).parents(".menu>ul>li").children("a").addClass("active");
                }
            });
        }
    };
    return {
        _: function() {
            activeMenu();
            menu();
            openMenuMobile();
            closeMenuMobile();
        },
    };
})();
var PRO = (function() {
    var getProperty = function(argument) {
        if ($(".btn_active").length > 0) {
            $(".btn_active").click(function(event) {
                event.preventDefault();

                if (!$(this).hasClass("active")) {
                    $(".btn_active.active").removeClass("active");
                    $(this).addClass("active");
                }

                var id = $(this).data("id");
                var href = $(this).attr("href");
                $.ajax({
                        url: href,
                        type: "GET",
                        data: { id: id },
                    })
                    .done(function(data) {
                        $(".list_data").html(data);
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });
            });
        }
    };
    var getPropertyfsirt = function(argument) {
        if ($(".btn_active").length > 0) {
            $(".btn_active").first().addClass("active");
            var id = $(".nav-pills li").first().find(".btn_active").data("id");
            var href = $(".nav-pills li").first().find(".btn_active").attr("href");
            $.ajax({
                    url: href,
                    type: "GET",
                    data: { id: id },
                })
                .done(function(data) {
                    $(".list_data").html(data);
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
        }
    };
    return {
        _: function() {
            getProperty();
            getPropertyfsirt();
        },
    };
})();
$(document).ready(function() {
    $.ajaxSetup({
        data: {
            csrf_tech5s_name: $('meta[name="csrf-token"]').attr("content"),
        },
    });
    success = function(json) {
        console.log(1);
        if (json.code == 200) {
            toastr.success(json.message);
            setTimeout(function() {
                window.location.reload();
            }, 800);
        } else {
            toastr.error(json.message);
        }
    };
    PRO._();
    MENU._();
    SLIDESHOW._();
    WEBS._();
    DETAIL._();
});
// map

var iframe =
    '<iframe src="' +
    $(".map").attr("data-map") +
    '" style="border:0;" allowfullscreen="" width="100%" class="bd" loading="lazy"></iframe>';
$(".map").html(iframe);
// 



$('.mumber').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});
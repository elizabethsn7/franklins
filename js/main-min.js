$(window).scroll(function(){$(".navbar").offset().top>100?($("#custom-nav").addClass("affix"),$(".navbar-fixed-top").addClass("top-nav-collapse"),$(".navbar-brand img").attr("src","img/franklinsHomeLogoBlack.png")):($("#custom-nav").removeClass("affix"),$(".navbar-fixed-top").removeClass("top-nav-collapse"),$(".navbar-brand img").attr("src","img/franklinsHomeLogoWhite.png"))});
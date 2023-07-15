var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
  particlesJS("particles-js",{
    "particles":{
//--シェイプの設定----------
      "number":{
        "value":50,
        "density":{
          "enable":false
        }
      },
      "shape":{
        "type":"polygon",
        "stroke":{
          "width":1,
          "color":"#4169e1"
        },
        "polygon": {
          "nb_sides":6
        }
      },
      "color":{
        "value":"#4169e1"
      },
      "opacity":{
        "value":0,
        "random":false,
        "anim":{
          "enable":false
        }
      },
      "size":{
        "value":40,
        "random":true,
        "anim":{
          "enable":false
        }
      },
//--------------------

//--線の設定----------
      "line_linked":{
        "enable":false
      },
//--------------------

//--動きの設定----------
      "move":{
        "speed":5,
        "straight":false,
        "direction":"top",
        "out_mode":"out"
      }
    },
//--------------------
    "interactivity":{
      "detect_on":"canvas",
      "events":{
//--マウスオーバー時の処理----------
        "onhover":{
          "enable":true,
          "mode":"bubble"
        },
//--------------------

//--クリック時の処理----------
        "onclick":{
          "enable":false
        }
//--------------------
      },
      "modes":{
//--シェイプが膨らむ----------
        "bubble":{
          "distance":400,
          "size":70,
          "opacity":8,
          "duration":2,
          "speed":3
        }
//--------------------
      }
    },
    "retina_detect":true,
    "resize":true
  }
);
} else {
  particlesJS("particles-js",{
    "particles":{
//--シェイプの設定----------
      "number":{
        "value":120,
        "density":{
          "enable":false
        }
      },
      "shape":{
        "type":"polygon",
        "stroke":{
          "width":1,
          "color":"#4169e1"
        },
        "polygon": {
          "nb_sides":6
        }
      },
      "color":{
        "value":"#4169e1"
      },
      "opacity":{
        "value":0,
        "random":false,
        "anim":{
          "enable":false
        }
      },
      "size":{
        "value":40,
        "random":true,
        "anim":{
          "enable":false
        }
      },
//--------------------

//--線の設定----------
      "line_linked":{
        "enable":false
      },
//--------------------

//--動きの設定----------
      "move":{
        "speed":5,
        "straight":false,
        "direction":"top",
        "out_mode":"out"
      }
    },
//--------------------
    "interactivity":{
      "detect_on":"canvas",
      "events":{
//--マウスオーバー時の処理----------
        "onhover":{
          "enable":true,
          "mode":"bubble"
        },
//--------------------

//--クリック時の処理----------
        "onclick":{
          "enable":false
        }
//--------------------
      },
      "modes":{
//--シェイプが膨らむ----------
        "bubble":{
          "distance":400,
          "size":70,
          "opacity":8,
          "duration":2,
          "speed":3
        }
//--------------------
      }
    },
    "retina_detect":true,
    "resize":true
  }
);
}

function EachTextAnimeControl() {
  $('.textAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

$(window).scroll(function () {
  EachTextAnimeControl();
});

$(window).on('load', function () {
  var element = $(".textAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();
});


$(window).scroll(function() {
  $('.fadein-1').each(function() {
      var mainHeight = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > mainHeight - windowHeight) {
          $(this).css('opacity', '1');
          $(this).css('transform', 'translateY(0)');
      }
  });
});

$(window).scroll(function() {
  $('.fadein-4').each(function() {
      var mainHeight = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > mainHeight - windowHeight) {
          $(this).css('opacity', '0.4');
          $(this).css('transform', 'translateY(0)');
      }
  });
});

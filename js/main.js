$('.main-slider__wrp').owlCarousel({
      nav: true,
      dots: true,
      items: 1,
      autoplay: true,
      slideSpeed: 700,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      loop: true,
      navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"]
});
$('.hot__cnt').owlCarousel({
      nav: true,
      dots: false,
      items: 3,
      loop: false,
      navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 3
        }
      }
});

$('.key__cnt-wrp').owlCarousel({
      nav: false,
      dots: true,
      items: 1,
      loop: true,
});
$('.adj__cnt').owlCarousel({
      nav: false,
      dots: true,
      items: 3,
      center: true,
      loop: true,
      // navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1,
            nav: true,
            navText: ["<img src='img/slider__prev.svg'>", "<img src='img/slider__next.svg'>"]
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 3
        }
      }
});
//Tabs
$(document).ready(function () {
$(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").show();
    $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
            var thisLi = $(this);
            var numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
    });
});


//Мобильное меню
// $('.header__hamburger').on('click', function() {
//   $(this).toggleClass('active','slow');
//   $('.header__bot-wrp').toggleClass('active');
//   $('body').toggleClass('fixed');
// });
// if (screen.width <= 768) {
//   window.onload = function(){
//       $('.main-nav__link-wrp_sub .main-nav__link').on('click', function(e){
//         e.preventDefault();
//         $(this).parent().toggleClass('active','slow');
//       });
//   };
// };
  
// Закрываем AjaxForm popup после успешной отправки
$(document).on('af_complete', function(event,res) {
  if(res.success) parent.$.fancybox.close();
});

//Карта
  var data_obj = {
    'ch':  ['<span></span>'], // Chukotka Autonomous Okrug
    'ka':  ['<span></span>'], // Kamchatka Krai
    'ma':  ['<span></span>'], // Magadan Oblast
    'sa':  ['<span></span>'], // Sakha Republic
    'am':  ['<span></span>'], // Amur Oblast
    'pr':  ['<span></span>'], // Primorsky Krai
    'eu':  ['<span></span>'], // Jewish Autonomous Oblast
    'ha':  ['<span></span>'], // Khabarovsk Krai
    'sh':  ['<span></span>'], // Sakhalin Oblast
    'om':  ['<span></span>'], // Omsk Oblast
    'nv':  ['<span></span>'], // Novosibirsk Oblast
    'al':  ['<span></span>'], // Altai Krai
    'lt':  ['<span></span>'], // Altai Republic
    'tv':  ['<span></span>'], // Tuva Republic
    'hk':  ['<span></span>'], // Republic of Khakassia
    'km':  ['<span></span>'], // Kemerovo Oblast
    'tm':  ['<span></span>'], // Tomsk Oblast
    'zb':  ['<span></span>'], // Zabaykalsky Krai
    'br':  ['<span></span>'], // Buryat Republic
    'ir':  ['<span></span>'], // Irkutsk Oblast
    'kr':  ['<span></span>'], // Krasnoyarsk Krai
    'ya':  ['<span></span>'], // Yamalo-Nenets Autonomous Okrug
    'ht':  ['<span></span>'], // Khanty–Mansi Autonomous Okrug
    'tu':  ['<span></span>'], // Tyumen Oblast
    'ku':  ['<span></span>'], // Kurgan Oblast
    'cl':  ['<span></span>'], // Chelyabinsk Oblast
    'sv':  ['<span></span>'], // Sverdlovsk Oblast
    'ar':  ['<span></span>'], // Arkhangelsk Oblast
    'ne':  ['<span></span>'], // Nenets Autonomous Okrug
    'ko':  ['<span></span>'], // Komi Republic
    'mu':  ['<span></span>'], // Murmansk Oblast
    'vo':  ['<span></span>'], // Vologda Oblast
    'no':  ['<span></span>'], // Novgorod Oblast
    'ps':  ['<span></span>'], // Pskov Oblast
    'le':  ['<span></span>'], // Leningrad Oblast
    'kl':  ['<span></span>'], // Republic of Karelia
    'kn':  ['<span></span>'], // Kaliningrad Oblast
    'da':  ['<span></span>'], // Republic of Dagestan
    'st':  ['<span></span>'], // Stavropol Krai
    'so':  ['<span></span>'], // Republic of North Ossetia–Alania
    'kb':  ['<span></span>'], // Kabardino-Balkar Republic
    'kh':  ['<span></span>'], // Karachay–Cherkess Republic
    'cc':  ['<span></span>'], // Chechen Republic
    'in':  ['<span></span>'], // Republic of Ingushetia
    'ad':  ['<span></span>'], // Republic of Adygea
    'ks':  ['<span></span>'], // Krasnodar Krai
    'ro':  ['<span></span>'], // Rostov Oblast
    'kk':  ['<span></span>'], // Republic of Kalmykia
    'as':  ['<span></span>'], // Astrakhan Oblast
    'vl':  ['<span></span>'], // Volgograd Oblast
    'tr':  ['<span></span>'], // Tver Oblast
    'sm':  ['<span></span>'], // Smolensk Oblast
    'bn':  ['<span></span>'], // Bryansk Oblast
    'ky':  ['<span></span>'], // Kursk Oblast
    'bl':  ['<span></span>'], // Belgorod Oblast
    'pr':  ['<span></span>'], // Oryol Oblast
    'kj':  ['<span></span>'], // Kaluga Oblast
    'tl':  ['<span></span>'], // Tula Oblast
    'lp':  ['<span></span>'], // Lipetsk Oblast
    'mc':  ['<span></span>'], // Moscow Oblast
    'rz':  ['<span></span>'], // Ryazan Oblast
    'tb':  ['<span></span>'], // Tambov Oblast
    'vm':  ['<span></span>'], // Vladimir Oblast
    'iv':  ['<span></span>'], // Ivanovo Oblast
    'yr':  ['<span></span>'], // Yaroslavl Oblast
    'kt':  ['<span></span>'], // Kostroma Oblast
    'nn':  ['<span></span>'], // Nizhny Novgorod Oblast
    'mr':  ['<span></span>'], // Republic of Mordovia
    'pz':  ['<span></span>'], // Penza Oblast
    'sr':  ['<span></span>'], // Saratov Oblast
    'ss':  ['<span></span>'], // Samara Oblast
    'ob':  ['<span></span>'], // Orenburg Oblast
    'bs':  ['<span></span>'], // Republic of Bashkortostan
    'ul':  ['<span></span>'], // Ulyanovsk Oblast
    'cu':  ['<span></span>'], // Chuvash Republic
    'ta':  ['<span></span>'], // Republic of Tatarstan
    'ml':  ['<span></span>'], // Mari El Republic
    'ud':  ['<span></span>'], // Udmurt Republic
    'ki':  ['<span></span>'], // Kirov Oblast
    'pe':  ['<span></span>'], // Perm Krai
    'vn':  ['<span></span>'], // Voronezh Oblast
  };  
  colorRegion  = '#2E71A7'; // Цвет всех регионов
  focusRegion  = '#EE414F'; // Цвет подсветки регионов при наведении на объекты из списка
  selectRegion  = '#2E71A7'; // Цвет изначально подсвеченных регионов 
  highlighted_states  = {};  
  // Массив подсвечиваемых регионов, указанных в массиве data_obj
  for(iso in data_obj){
      highlighted_states[iso]  = selectRegion;
  } 
  $('#vmap').vectorMap({
      map: 'russia',
      backgroundColor: 'transparent',
      borderColor:  '#fff',
      borderWidth:  0.95,
      color: colorRegion,
      colors:  highlighted_states,
      hoverColors: focusRegion,
      hoverOpacity: null,
      enableZoom: true,
      showTooltip: true,
      //  Отображаем объекты если они есть
      onLabelShow:  function(event, label, code){
          name  = label.text();
          if(data_obj[code]){
              list_obj  = '<ul>';
              for(ob  in data_obj[code]){
                  list_obj  += '<li>'+data_obj[code][ob]+'</li>';
              }
              list_obj  += '</ul>';
          }else{
              list_obj  = '';
          }                                                             
          label.html(name  + list_obj);
          list_obj  = '';
      }
  });
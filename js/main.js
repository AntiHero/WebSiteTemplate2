const advantagesAnim = () => {
  /* Timeline */
  let tl = new TimelineMax({ onUpdate: updatePercentage, yoyo: true });

  let tween1 = TweenMax.staggerTo(
    ".advantages-item",
    1,
    {
      opacity: 1
    },
    0.6
  );

  tl.insert(tween1);

  /* Controller */
  const controller = new ScrollMagic.Controller();

  /* Scene with params */
  const scene = new ScrollMagic.Scene({
    triggerElement: ".advantages__inner",
    triggerHook: 1,
    duration: 0
  })
    .setTween(tl)
    .addTo(controller);

  function updatePercentage() {
    tl.progress();
  }

  scene.on("enter", function() {
    tl.timeScale(1);
  });

  scene.on("leave", function() {
    tl.timeScale(5);
  });
};

const servicesAnim = () => {
  /* Timeline */
  let tl = new TimelineMax({ onUpdate: updatePercentage, yoyo: true });

  let tween1 = TweenMax.staggerFromTo(
    ".services__item",
    1,
    {opacity: .4}, {opacity: 1},
  );

  tl.insert(tween1);

  /* Controller */
  const controller = new ScrollMagic.Controller();

  /* Scene with params */
  const scene = new ScrollMagic.Scene({
    triggerElement: ".services__items",
    triggerHook: .8,
    duration: 0,
  })
    .setTween(tl)
    .addTo(controller);

  function updatePercentage() {
    tl.progress();
  }

  scene.on("enter", function() {
    tl.timeScale(1);
  });

  scene.on("leave", function() {
    tl.timeScale(3);
  });
}

$(window).on("load", () => {
  $(".slider__inner, .news__slider-inner").slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    infinite: false,
  });

  // $(".news__slider-inner").slick({
  //   prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  //   nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  //   infinite: false,
  //   speed: 300,
  //   fade: true,
  //   cssEase: "linear"
  // });

  $("select").styler();

  $('.header__btn-menu').on('click', function() {
    $('.menu ul').slideToggle();
    
  });

  advantagesAnim();

  servicesAnim();
});

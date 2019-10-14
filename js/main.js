$(window).on("load", () => {
  $(".slider__inner").slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    infinite: false
  });

  $("select").styler();

  advantagesAnim();
});

const advantagesAnim = () => {
  /* Timeline */
  let tl = new TimelineMax({ onUpdate: updatePercentage, yoyo: true });

  /* First step */

  let tween1 = TweenMax.staggerTo(
    ".advantages-item",
    1,
    {
      opacity: 1,
      ease: Power4.easeIn
    },
    0.2
  );

  tl.insert(tween1);

  /* Controller */
  const controller = new ScrollMagic.Controller();

  /* Scene with params */
  const scene = new ScrollMagic.Scene({
    triggerElement: ".advantages",
    triggerHook: 1,
    duration: 0
  }).setTween(tl);

  function updatePercentage() {
    tl.progress();
  }

  scene.addTo(controller);
};

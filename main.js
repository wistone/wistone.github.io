window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'G-39824124-1');

Fancybox.bind("[data-fancybox]", {
  loop: true,
  buttons: ["close"],
  animationEffect: "zoom",
  transitionEffect: "zoom",
  dragToClose: false,
  autoFocus: false,
  placeFocusBack: false,
  on: {
    ready: (fancybox) => {
      console.log(`Fancybox ${fancybox.id} is ready!`);
    }
  }
});

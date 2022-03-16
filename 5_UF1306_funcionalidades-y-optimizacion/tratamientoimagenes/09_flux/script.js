var x = $(document);
x.ready(inicia);

function inicia() {
  if (!flux.browser.supportsTransitions) {
    alert("Su navegador no es compatible.");
  }
  window.f = new flux.slider("#slider", {
    autoplay: false,
    pagination: false,
    controls: true,
    transitions: ["bars3d", "tiles3d", "blinds3d"],
  });
}

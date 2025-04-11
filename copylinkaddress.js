let popSoundUrl = chrome.runtime.getURL("sounds/pop.mp3");
let popSoundAudio = new Audio(popSoundUrl);

function getAbsoluteURL(url) {
  var link = document.createElement("a");
  link.href = url;
  return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
}

window.onkeydown = function (event) {
  var hoveredLink = $("a:hover");
  if (hoveredLink.length) {
    if (event.key == "x") {
      navigator.clipboard.writeText(hoveredLink.text());
    } else if (event.key == "z") {
      var hoveredHrefAttr = hoveredLink.attr("href");
      navigator.clipboard.writeText(getAbsoluteURL(hoveredHrefAttr));
    } else {
      return;
    }
    popSoundAudio.play();
  }
};

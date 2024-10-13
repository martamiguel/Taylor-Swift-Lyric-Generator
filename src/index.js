function lyricGenerator(event) {
  event.preventDefault();

  new Typewriter("#lyric", {
    strings: "I think I've seen this film before",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let lyricGeneratorElement = document.querySelector("#lyric-generator-form");
lyricGeneratorElement.addEventListener("submit", lyricGenerator);

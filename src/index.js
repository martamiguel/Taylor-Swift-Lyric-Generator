function displayLyrics(response) {
  new Typewriter("#lyric", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function lyricGenerator(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9oeccb282a6tfca4c57f460307a943b0";
  let context =
    "You are a Taylor Swift expert and you know all of her songs. Your mission is to find and display one existing Taylor Swift song. Display 4 lines only. Separate each line with a <br />. Make sure to follow the user instructions. Display only the lyrics. Include the name of the song at the end in a <strong> element. Make sure it's an existing song from Taylor Swift discography. Your answer should include only one song, do not mix lyrics from different songs.";
  let prompt = `User instructions: Please find one existing Taylor Swift lyric that includes the word ${instructionsInput.value}. The part of the song displayed should include the following word: ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let lyricElement = document.querySelector("#lyric");
  lyricElement.classList.remove("hidden");
  lyricElement.innerHTML = `<div class="generating">✨ Generating a Taylor Swift lyric about ${instructionsInput.value} ✨</div>`;

  axios.get(apiUrl).then(displayLyrics);
}

let lyricGeneratorElement = document.querySelector("#lyric-generator-form");
lyricGeneratorElement.addEventListener("submit", lyricGenerator);

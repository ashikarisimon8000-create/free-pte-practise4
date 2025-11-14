const bank = {
  readAloud: ["Sample Read Aloud text."],
  repeatSentence: ["Sample repeat sentence prompt."]
};

function loadPrompt(mod){
  const arr = bank[mod];
  const p = arr[Math.floor(Math.random()*arr.length)];
  document.getElementById('promptBox').innerText = p;
}

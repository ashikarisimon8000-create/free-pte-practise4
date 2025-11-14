const bank = {
  readAloud: [
    "Technology has been rapidly changing the way people communicate around the world.",
    "Global warming continues to influence weather patterns in multiple regions.",
    "The university library will be closed this weekend for maintenance.",
    "Renewable energy sources are becoming more affordable each year.",
    "Online education has gained popularity due to its flexibility.",
    "Public transportation reduces pollution and traffic congestion."
  ],

  repeatSentence: [
    "Please submit your assignment before the end of the week.",
    "The lecture will begin at ten in the morning.",
    "Your application has been approved by the committee.",
    "New regulations will be introduced next semester.",
    "Students must register for the workshop in advance."
  ],

  describeImage: [
    "A bar chart compares monthly sales from January to June, with June having the highest value.",
    "A line graph shows a steady increase in temperature over a ten-year period.",
    "A pie chart illustrates market share distribution among five major companies.",
    "A table summarizes the annual expenses of a family, with rent being the largest cost.",
    "A map highlights population density in different regions of the country."
  ],

  swt: [
    "Technology has significantly improved communication, but it has also created challenges related to privacy and security.",
    "Climate change is causing rising sea levels, unpredictable weather patterns, and threats to biodiversity.",
    "Remote working has increased productivity for many people but has blurred the boundaries between personal and professional life.",
    "Public transport investments help reduce traffic congestion and lower carbon emissions."
  ],

  essay: [
    "Do the advantages of online learning outweigh its disadvantages?",
    "Should governments invest more in public transportation?",
    "Is technology making people less social?",
    "Should higher education be free for everyone?",
    "Do social media platforms bring more harm than good?"
  ],

  wfd: [
    "The results of the experiment were published in the scientific journal.",
    "Students are required to submit their essays by Friday.",
    "The library will be closed during the holiday period.",
    "New regulations will be implemented next semester.",
    "Your final report must be submitted electronically."
  ]
};

function loadPrompt(mod) {
  const arr = bank[mod];
  if (!arr) return;

  const p = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("promptBox").innerText = p;
}

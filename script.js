const hairImg = document.querySelector(".hair");
const earsImg = document.querySelector(".ears");
const eyesImg = document.querySelector(".eyes");
const mouthImg = document.querySelector(".mouth");
const neckImg = document.querySelector(".neck");
const legImg = document.querySelector(".leg");
const accessoriesImg = document.querySelector(".acc");
const bgImg = document.querySelector(".bg");

const categoryButtons = document.querySelectorAll(
  ".accessorise-categories button"
);
const styleContainers = document.querySelectorAll(".style-options > div");

const styleHairDiv = document.querySelector(".style-hair-buttons");
const styleEarsDiv = document.querySelector(".style-ears-buttons");
const styleEyesDiv = document.querySelector(".style-eyes-buttons");
const styleMouthDiv = document.querySelector(".style-mouth-buttons");
const styleNeckDiv = document.querySelector(".style-neck-buttons");
const styleLegDiv = document.querySelector(".style-leg-buttons");
const styleAccDiv = document.querySelector(".style-acc-buttons");
const styleBgDiv = document.querySelector(".style-bg-buttons");

const randomButton = document.getElementById("random-button");
const downloadButton = document.getElementById("download-button");

const hair = [
  {
    text: "Default",
    src: "assets/hair/hair_default.png",
  },
  {
    text: "Bang",
    src: "assets/hair/hair_bang.png",
  },
  {
    text: "Curls",
    src: "assets/hair/hair_curls.png",
  },
  {
    text: "Elegant",
    src: "assets/hair/hair_elegant.png",
  },
  {
    text: "Fancy",
    src: "assets/hair/hair_fancy.png",
  },
  {
    text: "Short",
    src: "assets/hair/hair_short.png",
  },
];
const ears = [
  {
    text: "Default",
    src: "assets/ears/ears_default.png",
  },
  {
    text: "Tilt-backward",
    src: "assets/ears/ears_tilt-backward.png",
  },
  {
    text: "Tilt-forward",
    src: "assets/ears/ears_tilt-forward.png",
  },
];
const accessories = [
  {
    text: "Headphone",
    src: "assets/accessories/accessories_headphone.png",
  },
  {
    text: "Earings",
    src: "assets/accessories/accessories_earings.png",
  },
  {
    text: "Flower",
    src: "assets/accessories/accessories_flower.png",
  },
  {
    text: "Glasses",
    src: "assets/accessories/accessories_glasses.png",
  },
];
const eyes = [
  {
    text: "Default",
    src: "assets/eyes/eyes_default.png",
  },
  {
    text: "Angry",
    src: "assets/eyes/eyes_angry.png",
  },
  {
    text: "Naughty",
    src: "assets/eyes/eyes_naughty.png",
  },
  {
    text: "Panda",
    src: "assets/eyes/eyes_panda.png",
  },
  {
    text: "Smart",
    src: "assets/eyes/eyes_smart.png",
  },
  {
    text: "Star",
    src: "assets/eyes/eyes_star.png",
  },
];
const mouth = [
  {
    text: "Default",
    src: "assets/mouth/mouth_default.png",
  },
  {
    text: "Astonished",
    src: "assets/mouth/mouth_astonished.png",
  },
  {
    text: "Eating",
    src: "assets/mouth/mouth_eating.png",
  },
  {
    text: "Laugh",
    src: "assets/mouth/mouth_laugh.png",
  },
  {
    text: "Tongue",
    src: "assets/mouth/mouth_tongue.png",
  },
];
const neck = [
  {
    text: "Default",
    src: "assets/neck/neck_default.png",
  },
  {
    text: "Bend-backward",
    src: "assets/neck/neck_bend-backward.png",
  },
  {
    text: "Bend-forward",
    src: "assets/neck/neck_bend-forward.png",
  },
  {
    text: "Thick",
    src: "assets/neck/neck_thick.png",
  },
];
const leg = [
  {
    text: "Default",
    src: "assets/leg/leg_default.png",
  },
  {
    text: "Bubble-tea",
    src: "assets/leg/leg_bubble-tea.png",
  },
  {
    text: "Cookie",
    src: "assets/leg/leg_cookie.png",
  },
  {
    text: "Game-console",
    src: "assets/leg/leg_game-console.png",
  },
  {
    text: "Tilt-backward",
    src: "assets/leg/leg_tilt-backward.png",
  },
  {
    text: "Tilt-forward",
    src: "assets/leg/leg_tilt-forward.png",
  },
];
const background = [
  {
    text: "Blue 50",
    src: "assets/backgrounds/bg_blue50.png",
  },
  {
    text: "Blue 60",
    src: "assets/backgrounds/bg_blue60.png",
  },
  {
    text: "Blue 70",
    src: "assets/backgrounds/bg_blue70.png",
  },
  {
    text: "Dark-blue 30",
    src: "assets/backgrounds/bg_darkblue30.png",
  },
  {
    text: "Dark-blue 50",
    src: "assets/backgrounds/bg_darkblue50.png",
  },
  {
    text: "Dark-blue 70",
    src: "assets/backgrounds/bg_darkblue70.png",
  },
  {
    text: "Green 50",
    src: "assets/backgrounds/bg_green50.png",
  },
  {
    text: "Green 60",
    src: "assets/backgrounds/bg_green60.png",
  },
  {
    text: "Green 70",
    src: "assets/backgrounds/bg_green70.png",
  },
  {
    text: "Grey 40",
    src: "assets/backgrounds/bg_grey40.png",
  },
  {
    text: "Grey 70",
    src: "assets/backgrounds/bg_grey70.png",
  },
  {
    text: "Grey 80",
    src: "assets/backgrounds/bg_grey80.png",
  },
  {
    text: "Red 50",
    src: "assets/backgrounds/bg_red50.png",
  },
  {
    text: "Red 60",
    src: "assets/backgrounds/bg_red60.png",
  },
  {
    text: "Red 70",
    src: "assets/backgrounds/bg_red70.png",
  },
  {
    text: "Yellow 50",
    src: "assets/backgrounds/bg_yellow50.png",
  },
  {
    text: "Yellow 60",
    src: "assets/backgrounds/bg_yellow60.png",
  },
  {
    text: "Yellow 70",
    src: "assets/backgrounds/bg_yellow70.png",
  },
];

function updateImage(imgSrc) {
  if (imgSrc.includes("hair")) {
    hairImg.src = imgSrc;
  } else if (imgSrc.includes("ears")) {
    earsImg.src = imgSrc;
  } else if (imgSrc.includes("eyes")) {
    eyesImg.src = imgSrc;
  } else if (imgSrc.includes("mouth")) {
    mouthImg.src = imgSrc;
  } else if (imgSrc.includes("accessories")) {
    accessoriesImg.src = imgSrc;
  } else if (imgSrc.includes("neck")) {
    neckImg.src = imgSrc;
  } else if (imgSrc.includes("leg")) {
    legImg.src = imgSrc;
  } else if (imgSrc.includes("bg_")) {
    bgImg.src = imgSrc;
  }
}

function setActiveBtn(buttonList, targetBtn) {
  buttonList.forEach((btn) => btn.classList.remove("active"));
  targetBtn.classList.add("active");
}

function hideAllStyleMenus() {
  styleContainers.forEach((container) => {
    container.style.display = "none";
  });
}

function linkButtons(buttonContainer, dataArray, updateFunction) {
  const buttons = buttonContainer.querySelectorAll("button");

  buttons.forEach((button, index) => {
    if (dataArray[index]) {
      const imagePath = dataArray[index].src;
      button.addEventListener("click", (e) => {
        updateFunction(imagePath);
        setActiveBtn(buttons, e.target);
      });
    }
  });
}

function generateRandomAlpaca() {
  updateImage(hair[Math.floor(Math.random() * hair.length)].src);
  updateImage(ears[Math.floor(Math.random() * ears.length)].src);
  updateImage(accessories[Math.floor(Math.random() * accessories.length)].src);
  updateImage(eyes[Math.floor(Math.random() * eyes.length)].src);
  updateImage(mouth[Math.floor(Math.random() * mouth.length)].src);
  updateImage(neck[Math.floor(Math.random() * neck.length)].src);
  updateImage(leg[Math.floor(Math.random() * leg.length)].src);
  updateImage(background[Math.floor(Math.random() * background.length)].src);
}

function downloadImage() {
  const imageContainer = document.querySelector(".img-preview");

  html2canvas(imageContainer).then(function (canvas) {
    const fileName = "alpaca.png";
    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// Event listeners
window.addEventListener("DOMContentLoaded", () => {
  // Link all style buttons to their functions
  linkButtons(styleHairDiv, hair, updateImage);
  linkButtons(styleEarsDiv, ears, updateImage);
  linkButtons(styleEyesDiv, eyes, updateImage);
  linkButtons(styleMouthDiv, mouth, updateImage);
  linkButtons(styleNeckDiv, neck, updateImage);
  linkButtons(styleLegDiv, leg, updateImage);
  linkButtons(styleAccDiv, accessories, updateImage);
  linkButtons(styleBgDiv, background, updateImage);

  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      setActiveBtn(categoryButtons, e.target);
      hideAllStyleMenus();

      const category = e.target.textContent;
      if (category === "Hair") {
        styleHairDiv.style.display = "block";
      } else if (category === "Ears") {
        styleEarsDiv.style.display = "block";
      } else if (category === "Eyes") {
        styleEyesDiv.style.display = "block";
      } else if (category === "Mouth") {
        styleMouthDiv.style.display = "block";
      } else if (category === "Neck") {
        styleNeckDiv.style.display = "block";
      } else if (category === "Leg") {
        styleLegDiv.style.display = "block";
      } else if (category === "Accessories") {
        styleAccDiv.style.display = "block";
      } else if (category === "Background") {
        styleBgDiv.style.display = "block";
      }
    });
  });

  // Random button
  randomButton.addEventListener("click", generateRandomAlpaca);

  // Download button
  downloadButton.addEventListener("click", downloadImage);

  // Display Hair Category on page load
  categoryButtons[0].click();
  styleHairDiv.querySelector("button").classList.add("active");
});

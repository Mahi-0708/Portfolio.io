function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0px)";
  }
  function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
  }
  
  // Typewriter Effect
  const texts = [" WEB DEVELOPER", "DESIGNER", "UI/UX DEVELOPER"];
  let speed = 100;
  const textElements = document.querySelector(".typewriter-text");
  let textIndex = 0;
  let charIndex = 0;
  
  function typeWriter() {
    if (charIndex < texts[textIndex].length) {
      textElements.innerHTML += texts[textIndex].charAt(charIndex++);
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }
  
  function eraseText() {
    if (textElements.innerHTML.length > 0) {
      textElements.innerHTML = textElements.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }
  
  window.onload = typeWriter;
  
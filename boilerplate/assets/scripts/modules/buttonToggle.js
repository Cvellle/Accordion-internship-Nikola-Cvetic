function buttonToggle() {
  const buttonTitles = [...document.querySelectorAll(".button-block > h4")]; 
  const buttonBlocks = [...document.querySelectorAll(".button-block")]; 

  const toggleContent = (e) => {
    // targeted elements
      let parent = e.currentTarget.parentElement; 
      let targetedTextContent = e.currentTarget.nextElementSibling;
      let targetedImage = e.currentTarget.lastChild;

    // toggle actions
    // 1. dynamicly adds max-height    
    if (!parent.classList.contains('button-block--open')) {
      parent.classList.add('button-block--open');
      targetedImage.classList.add('button-image--rotated');
      targetedTextContent.style.maxHeight = parent.scrollHeight + 'px';
    }
    else {
      parent.classList.remove('button-block--open');
      targetedImage.classList.remove('button-image--rotated');
      targetedTextContent.style.maxHeight = '0px';
    }
    // 2. bold text
    buttonBlocks.forEach(el => el.classList.remove('button-title--active'));
    
    e.currentTarget.classList.toggle('button-title--active');
  }
  // add event listeners
  buttonTitles.forEach(el => el.addEventListener('click', toggleContent));

}

// module invoked on load
window.addEventListener("load", buttonToggle);

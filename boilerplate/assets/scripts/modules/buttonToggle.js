function buttonToggle() {
  const buttonTitles = [...document.querySelectorAll(".button-block > h4")]; 
  const buttonBlocks = [...document.querySelectorAll(".button-block")]; 

  const toggleContent = (e) => {
    // targeted elements

    // toggle actions
    // 1. dynamicly adds max-height

    let targetedTextContent = null;
    let parent = null;
    let targetedImage = null;

    if (!e.target.classList.contains('button-title')) {
      parent = e.target.parentElement.parentElement; 
      targetedTextContent = e.target.parentElement.nextElementSibling;
      targetedImage = e.target;
    } else {
      parent = e.target.parentElement; 
      targetedTextContent = e.target.nextElementSibling;
      targetedImage = e.target.lastChild;
    }
    
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
    
    e.target.classList.toggle('button-title--active');
  }
  // add event listeners
  buttonTitles.forEach(el => el.addEventListener('click', toggleContent));

}

// module invoked on load
window.addEventListener("load", buttonToggle);

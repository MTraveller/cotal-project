export const handleKeypress = (e) => {
  const htmlFor = e.target.firstChild.htmlFor;

  if (e.keyCode === 32 || e.keyCode === 13) {
    return document.getElementById(htmlFor).click();
  }
};

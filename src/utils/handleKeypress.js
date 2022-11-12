export const handleKeypress = (e) => {
  const htmlFor = e.target.firstChild.htmlFor;

  const link = htmlFor ? `` : e.target.firstChild.href;

  if (e.code === `Space` || e.code === `Enter` || e.type === `click`) {
    if (htmlFor) {
      return document.activeElement.firstChild.click();
    } else if (e.target.type === `button`) {
      return window.open(link, `_blank`);
    }
  }
};

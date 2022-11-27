export const removeLoader = (...button) => {
  if (button[0].id === `form-submit`) {
    button[0].removeAttribute(`disabled`, ``);
    button[0].classList.toggle(`hidden`);
    button[0].classList.toggle(`hidden`);
  } else if (button[0] === `trigger`) {
    button[1].removeAttribute(`disabled`, ``);
    button[1].firstChild.classList.toggle(`hidden`);
    button[1].lastChild.classList.toggle(`hidden`);
  } else {
    button[0].removeAttribute(`disabled`, ``);
    button[0].firstChild.classList.toggle(`hidden`);
    button[1].lastChild.classList.toggle(`hidden`);
    button[1].firstChild.classList.toggle(`hidden`);
  }
};

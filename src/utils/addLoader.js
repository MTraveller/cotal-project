export const addLoader = (...button) => {
  button[0].setAttribute(`disabled`, ``);
  button[0].firstChild.classList.toggle(`hidden`);
  button[1].lastChild.classList.toggle(`hidden`);
  button[1].firstChild.classList.toggle(`hidden`);

  return;
};

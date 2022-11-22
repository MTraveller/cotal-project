export const displayLoader = ({ currentTarget: button }) => {
  button.setAttribute(`disabled`, ``);
  button.childNodes[0].classList.toggle(`hidden`);
  button.childNodes[1].classList.toggle(`hidden`);
};

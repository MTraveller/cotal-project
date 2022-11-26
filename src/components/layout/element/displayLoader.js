export const displayLoader = (e) => {
  let button = e.currentTarget;
  if (!button) button = document.querySelector(`#${e}`);

  const disabled = Array.from(button.attributes).filter(
    (attr) => attr.name === `disabled`
  );

  disabled
    ? button.removeAttribute(`disabled`)
    : button.setAttribute(`disabled`, ``);

  try {
    button.childNodes[0].classList.toggle(`hidden`);
    button.childNodes[1].classList.toggle(`hidden`);
  } catch {
    button.childNodes[1].classList.toggle(`hidden`);
    button.childNodes[0].classList.toggle(`hidden`);
  }
};

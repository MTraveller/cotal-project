export const displayLoader = (e) => {
  let button = e.currentTarget;
  if (!button) button = e.target;

  console.log(button);
  let disabled = false;
  console.log(disabled);

  Array.from(button.attributes).forEach((attr) => {
    if (attr.name === `disabled`) disabled = true;
  });

  console.log(disabled);

  disabled
    ? button.removeAttribute(`disabled`)
    : button.setAttribute(`disabled`, ``);

  button.childNodes[0].classList.toggle(`hidden`);
  button.childNodes[1].classList.toggle(`hidden`);
};

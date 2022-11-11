import { animate } from './animate';

export const handleIconFocus = (e) => {
  const clickedButton =
    e.target.type === `button`
      ? e.target
      : e.target.parentNode.type === `button`
      ? e.target.parentNode
      : e.target.parentNode.parentNode;

  const isActive = clickedButton.parentNode.classList.contains('active');

  if (isActive) return;

  const parentDivChildren = clickedButton.parentNode.parentNode.childNodes;

  Array.from(parentDivChildren).forEach((item) => {
    if (item.id !== clickedButton.id) {
      item.classList.replace(`flex`, `hidden`);
      if (item.id === `icon-save-button`) {
        item.classList.replace(`hidden`, `flex`);
      }
    } else {
      item.classList.add(`active`, `w-3/4`, `gap-3`);
      animate(item.lastChild);
    }
  });
};

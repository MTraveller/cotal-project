import { animate } from './animate';

export const handleIconSaveFlip = (e) => {
  const parentChildren = e.target.parentNode.childNodes;

  Array.from(parentChildren).forEach((node) => {
    const isActive = node.classList.contains(`active`);

    if (isActive) {
      node.classList.remove(`active`, `w-3/4`, `gap-3`);
      node.childNodes[1].classList.replace(`flex`, `hidden`);
    } else if (!isActive && node.type !== `button`) {
      animate(node);
    }

    if (node.type === `button`) node.classList.replace(`flex`, `hidden`);
  });
};

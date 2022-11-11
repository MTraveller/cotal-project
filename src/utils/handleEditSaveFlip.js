import { animate } from './animate';

export const handleEditSaveFlip = (e) => {
  let innerText = e.target.innerText;
  innerText = innerText === `Edit` ? `Save` : `Edit`;
  e.target.innerText = innerText;

  const firstChild = e.target.parentElement.firstChild;
  const sibling = firstChild.nextElementSibling;
  const firstChildClassList = firstChild.classList;
  const siblingClassList = firstChild.nextElementSibling.classList;

  animate(firstChild, sibling, firstChildClassList, siblingClassList);
};

export const handleEditSaveFlip = (e) => {
  let innerText = e.target.innerText;
  innerText = innerText === `Edit` ? `Save` : `Edit`;
  e.target.innerText = innerText;

  let firstChild = e.target.parentElement.firstChild;
  let firstChildClassList = firstChild.classList;
  let siblingClassList = firstChild.nextElementSibling.classList;

  const isBlock = firstChildClassList.contains('flex');
  const block = isBlock ? 'flex' : 'hidden';
  const hidden = isBlock ? 'hidden' : 'flex';

  firstChildClassList.replace(block, hidden);
  siblingClassList.replace(hidden, block);
};

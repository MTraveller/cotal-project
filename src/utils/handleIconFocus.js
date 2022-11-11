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

  Array.from(parentDivChildren).forEach((node) => {
    if (node.id !== clickedButton.name) {
      node.classList.replace(`flex`, `hidden`);
      if (node.id === `icon-save-button`) {
        node.classList.replace(`hidden`, `flex`);
      }
      node.parentNode.lastChild.classList.replace(`block`, `hidden`);
    } else {
      node.classList.add(`active`, `w-3/4`, `gap-3`);
      node.lastChild.classList.replace(`hidden`, `flex`);
    }
  });
};

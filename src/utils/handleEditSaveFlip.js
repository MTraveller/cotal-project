export const handleEditSaveFlip = (e) => {
  let innerText = e.target.innerText;
  innerText = innerText === `Edit` ? `Save` : `Edit`;
  e.target.innerText = innerText;

  const firstChild = e.target.parentElement.firstChild;
  const sibling = firstChild.nextElementSibling;
  const firstChildClassList = firstChild.classList;
  const siblingClassList = firstChild.nextElementSibling.classList;

  const isFlex = firstChildClassList.contains(`flex`);
  const block = isFlex ? `flex` : `hidden`;
  const hidden = isFlex ? `hidden` : `flex`;

  // Amimation learning material from:
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
  const swapKeyframes = new KeyframeEffect(
    isFlex ? firstChild : sibling,
    [{ opacity: 0 }],
    {
      duration: 100,
      easing: `ease-in-out`,
    }
  );

  const swapAnimation = new Animation(swapKeyframes, document.timeline);

  swapAnimation.play();
  swapAnimation.finished
    .then(() => {
      isFlex
        ? firstChildClassList.replace(block, hidden)
        : siblingClassList.replace(hidden, block);
    })
    .then(() => {
      isFlex
        ? siblingClassList.replace(hidden, block)
        : firstChildClassList.replace(block, hidden);
    });
};

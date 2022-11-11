export const animate = (element, ...rest) => {
  const isRest = Boolean(rest.length > 0);
  const isFlex = element.classList.contains(`flex`);

  const flex = isFlex ? `flex` : `hidden`;
  const hidden = isFlex ? `hidden` : `flex`;

  // Amimation learning material from:
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
  const swapKeyframes = new KeyframeEffect(
    !isRest ? element : isFlex ? element : rest[0],
    [{ opacity: isFlex ? 1 : 0 }],
    {
      duration: 100,
      easing: `ease-in-out`,
    }
  );

  const swapAnimation = new Animation(swapKeyframes, document.timeline);

  swapAnimation.play();

  if (!isRest) {
    swapAnimation.finished.then(() => {
      isFlex
        ? element.classList.replace(flex, hidden)
        : element.classList.replace(flex, hidden);
    });
  } else {
    swapAnimation.finished
      .then(() => {
        isFlex ? rest[1].replace(flex, hidden) : rest[2].replace(hidden, flex);
      })
      .then(() => {
        isFlex ? rest[2].replace(hidden, flex) : rest[1].replace(flex, hidden);
      });
  }
};

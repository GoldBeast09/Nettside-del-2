const likeButtons = document.querySelectorAll(".likeButton");

const randomNum = (x) => {
  return Math.floor(Math.random() * x);
};

likeButtons.forEach((button) => {
  const likesTextElement = button.querySelector(".likesText");
  likesTextElement.textContent = randomNum(100);
  let isLiked = false;

  button.addEventListener("click", () => {
    let currentCount = parseInt(likesTextElement.textContent);
    if (isLiked === false) {
      likesTextElement.textContent = currentCount + 1;
    } else {
      likesTextElement.textContent = currentCount - 1;
    }
    isLiked = !isLiked;
  });
});

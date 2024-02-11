const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

yesbtn.addEventListener('click', () => {
    question.innerHTML = "Yay, you are the best! Click on the yes again";
    gif.src = 'pic2.png';

    yesbtn.addEventListener('click', () => {
        window.location.href = "https://tianzeyin.github.io/lilt/";
    });
});

nobtn.addEventListener("mouseover", () => {
    const noBtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
});

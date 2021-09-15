const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

const eventInit = () => {
    moreBtn.addEventListener('click', () => {
        moreBtn.classList.toggle('clicked');
        title.classList.toggle('clamp');
    })
}

if (moreBtn) eventInit();
let barsEl = document.querySelector('.bars');
let iconBarsEl = document.querySelector('.icon-bars');

barsEl.addEventListener('click', () => {
   iconBarsEl.classList.toggle('show');
});
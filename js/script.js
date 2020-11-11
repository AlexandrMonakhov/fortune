const wheel = document.querySelector('.wheel');

const spin = () => {
  wheel.classList.add('wheel--active');
};



wheel.addEventListener('click', spin);
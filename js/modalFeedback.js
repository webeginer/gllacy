var linkFeedback = document.querySelector(".button--contacts"),
  modalOverlay = document.querySelector(".modal-overlay"),
  modalFeedback = document.querySelector(".modal-feedback"),
  closeFeedback = modalFeedback.querySelector(".modal-close"),
  formFeedback = modalFeedback.querySelector("form"),
  loginFeedback = modalFeedback.querySelector("[name=login]"),
  emailFeedback = modalFeedback.querySelector("[name=email]"),
  messageFeedback = modalFeedback.querySelector("[name=message]"),
  storageLogin = localStorage.getItem('loginFeedback')
storageEmail = localStorage.getItem('emailFeedback');

linkFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  modalOverlay.classList.add('modal-overlay--show');
  modalFeedback.classList.add('modal-feedback--show');
  if (storageLogin && storageEmail) {
    loginFeedback.value = storageLogin;
    emailFeedback.value = storageEmail;
    messageFeedback.focus();
  } else if (storageLogin) {
    loginFeedback.value = storageLogin;
    emailFeedback.focus();
  } else if (storageEmail) {
    emailFeedback.value = storageEmail;
    loginFeedback.focus();
  } else {
    loginFeedback.focus();
  }
});

closeFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  modalFeedback.classList.remove('modal-feedback--show');
  modalOverlay.classList.remove('modal-overlay--show');
  modalFeedback.classList.remove('modal-error');
});

formFeedback.addEventListener('submit', function(event) {
  if (!loginFeedback.value || !emailFeedback.value) {
    event.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  } else {
    localStorage.setItem('loginFeedback', loginFeedback.value);
    localStorage.setItem('emailFeedback', emailFeedback.value);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modalFeedback.classList.contains('modal-feedback--show')) {
      modalFeedback.classList.remove('modal-feedback--show');
      modalOverlay.classList.remove('modal-overlay--show');
      modalFeedback.classList.remove('modal-error');
    }
  }
})

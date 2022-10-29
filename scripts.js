/* Add your JavaScript to this file */
window.addEventListener("load", function () {
  let email = document.getElementById("email");
  let userEmail = email.value;
  let submitButton = document.querySelector(".btn[type=submit]");
  let message = document.querySelector(".message");

  submitButton.addEventListener("click", func);

  function func(event) {
    event.preventDefault();

    userEmail = email.value;

    if (userEmail) {
      validEmail();
      email.value = "";
      return true;
    } else {
      invalidEmail();
    }
  }

  // To clear an previous classname
  function clear() {
    if (message.classList.contains("valid")) {
      message.classList.remove("valid");
    } else if (message.classList.contains("invalid")) {
      message.classList.remove("invalid");
    }
  }

  function validEmail() {
    clear();
    validMessage = `Thank you! Your email address <span class="userEmail">${userEmail}</span> has been
     added to our mailing list!`;
    message.classList.add("valid");
    message.innerHTML = validMessage;
  }

  function invalidEmail() {
    clear();
    invalidMessage = `Please enter a valid email address`;
    message.classList.add("invalid");
    message.innerText = invalidMessage;
  }
});

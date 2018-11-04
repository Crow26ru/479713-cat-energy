var formPush = document.querySelector(".form__button");

function validEmail(str) {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var valid = re.test(str);
  return valid;
}

function validPhone(str) {
  var re = /^8 \(\d{3}\) \d{3}-\d{2}-\d{1}\d$/;
  var valid = re.test(str);
  return valid;
}

formPush.addEventListener("click", function(e) {
  var form = document.querySelector(".form");
  var name = form.querySelector(".form__input--name");
  var weight = form.querySelector(".form__input--weight")
  var email = form.querySelector(".form__input--email");
  var phone = form.querySelector(".form__input--phone");

  if(name.value == "") {
    e.preventDefault();

    if(!name.classList.contains("form__input--text-error")) {
      name.classList.add("form__input--text-error");
    }
  } else {
    if(name.classList.contains("form__input--text-error")) {
      name.classList.remove("form__input--text-error");
    }
  }

  if(weight.value == "" || isNaN(weight.value)) {
    e.preventDefault();

    if(!weight.classList.contains("form__input--text-error")) {
      weight.classList.add("form__input--text-error");
    }
  } else {
    if(weight.classList.contains("form__input--text-error")) {
      weight.classList.remove("form__input--text-error");
    }
  }

  if(!validEmail(email.value)) {
    e.preventDefault();

    if(!email.classList.contains("form__input--text-error")) {
      email.classList.add("form__input--text-error");
    }
  } else {
    if(email.classList.contains("form__input--text-error")) {
      email.classList.remove("form__input--text-error");
    }
  }

  if(!validPhone(phone.value)) {
    e.preventDefault();

    if(!phone.classList.contains("form__input--text-error")) {
      phone.classList.add("form__input--text-error");
    }
  } else {
    if(phone.classList.contains("form__input--text-error")) {
      phone.classList.remove("form__input--text-error");
    }
  }
});

formPush.addEventListener("touchend", function(e) {
  var form = document.querySelector(".form");
  var name = form.querySelector(".form__input--name");
  var weight = form.querySelector(".form__input--weight")
  var email = form.querySelector(".form__input--email");
  var phone = form.querySelector(".form__input--phone");

  if(name.value == "") {
    e.preventDefault();

    if(!name.classList.contains("form__input--text-error")) {
      name.classList.add("form__input--text-error");
    }
  } else {
    if(name.classList.contains("form__input--text-error")) {
      name.classList.remove("form__input--text-error");
    }
  }

  if(weight.value == "" || isNaN(weight.value)) {
    e.preventDefault();

    if(!weight.classList.contains("form__input--text-error")) {
      weight.classList.add("form__input--text-error");
    }
  } else {
    if(weight.classList.contains("form__input--text-error")) {
      weight.classList.remove("form__input--text-error");
    }
  }

  if(!validEmail(email.value)) {
    e.preventDefault();

    if(!email.classList.contains("form__input--text-error")) {
      email.classList.add("form__input--text-error");
    }
  } else {
    if(email.classList.contains("form__input--text-error")) {
      email.classList.remove("form__input--text-error");
    }
  }

  if(!validPhone(phone.value)) {
    e.preventDefault();

    if(!phone.classList.contains("form__input--text-error")) {
      phone.classList.add("form__input--text-error");
    }
  } else {
    if(phone.classList.contains("form__input--text-error")) {
      phone.classList.remove("form__input--text-error");
    }
  }
});

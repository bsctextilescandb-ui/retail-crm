function authenticate(pin) {

  if(pin === APP_CONFIG.PIN) {

    sessionStorage.setItem(
      "authenticated",
      "true"
    );

    sessionStorage.setItem(
      "loginTime",
      Date.now()
    );

    return true;

  }

  return false;

}

function checkAuthentication() {

  const authenticated =
    sessionStorage.getItem("authenticated");

  const loginTime =
    sessionStorage.getItem("loginTime");

  if(!authenticated || !loginTime) {

    logout();

    return false;

  }

  const currentTime = Date.now();

  if(
    currentTime - Number(loginTime)
    >
    APP_CONFIG.SESSION_TIMEOUT
  ) {

    logout();

    return false;

  }

  return true;

}

function logout() {

  sessionStorage.clear();

  localStorage.clear();

  window.location.reload();

}

class Auth {
  authenticate() {
    const token = localStorage.getItem("Token");
    console.log(token);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Auth();

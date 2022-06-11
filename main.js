function sendForm() {
  if (firstAndLastName()) {
    return true;
  }
  return false;
}
function firstAndLastName() {
  var regexName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*{1,10})$/;
  if (regexName.test(first_input.value && last_input.value)) {
    return true;
  }
  alert("Missing somthing");
  return false;
}
function checkIfUserAbove18() {
       

}

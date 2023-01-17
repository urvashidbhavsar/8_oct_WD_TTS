function form_valid() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  if (fname == "" && lname == "") {
    document.getElementById("fmsg").innerHTML = "Enter first name";
    document.getElementById("lmsg").innerHTML = "Enter last name";
    return false;
  }
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  if (male == false && female == false) {
    document.getElementById("genmsg").innerHTML = "Select Gender";
    return false;
  }
  //   /^[a-zA-z]*$/
  //   if(/^[a-zA-z]*$/.test(fname)){}
  if (!fname.match(/^[a-zA-z]*$/)) {
    document.getElementById("fmsg").innerHTML = "Digits not allowed";
    return false;
  }
  if (!lname.match(/^[a-zA-z]*$/)) {
    document.getElementById("lmsg").innerHTML = "Digits not allowed";
    return false;
  }
}

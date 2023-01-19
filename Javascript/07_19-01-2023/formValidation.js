function form_valid() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let mail = document.getElementById("mail").value;
  let mno = document.getElementById("mno").value;
  let city = document.getElementById("city").value;
  let addr = document.getElementById("addr").value;
  let pass = document.getElementById("pass").value;
  if (
    fname == "" &&
    lname == "" &&
    mail == "" &&
    mno == "" &&
    city == -1 &&
    addr == "" &&
    pass == ""
  ) {
    document.getElementById("fmsg").innerHTML = "Enter first name";
    document.getElementById("lmsg").innerHTML = "Enter last name";
    document.getElementById("mailmsg").innerHTML = "Enter Email";
    document.getElementById("nomsg").innerHTML = "Enter mobile no";
    document.getElementById("citymsg").innerHTML = "Select city";
    document.getElementById("addmsg").innerHTML = "Enter Address";
    document.getElementById("pmsg").innerHTML = "Enter Password";
    return false;
  }
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  if (male == false && female == false) {
    document.getElementById("genmsg").innerHTML = "Select Gender";
    return false;
  }

  let c1 = document.getElementById("c1").checked;
  let c2 = document.getElementById("c2").checked;
  if (c1 === false && c2 == false) {
    document.getElementById("chmsg").innerHTML = "Select Qualification";
    return false;
  }

  /* let addr = document.getElementById("addr").value;
  if (addr == "") {
    document.getElementById("addmsg").innerHTML = "Enter address";
    return false;
  } 

  let city = document.getElementById("city").value;
  if (city == -1) {
    document.getElementById("citymsg").innerHTML = "Select City";
    return false;
  }*/

  if (isNaN(mno)) {
    document.getElementById("nomsg").innerHTML = "Alphabet not allowed";
    return false;
  } else if (mno.length < 10) {
    document.getElementById("nomsg").innerHTML = "Enter number proper.";
    return false;
  }
  if (!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    document.getElementById("mailmsg").innerHTML = "Enter Email Properly";
    return false;
  } else {
    return true;
  }

  if (
    !pass.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    )
  ) {
    document.getElementById("pmsg").innerHTML =
      "password must be 8 to 12 character, one uppercase, one lowercase, one number, one special character.";
    return false;
  }
  //   /^[a-zA-z]*$/
  //   if(/^[a-zA-z]*$/.test(fname)){}
  /* if (!fname.match(/^[a-zA-z]*$/)) {
    document.getElementById("fmsg").innerHTML = "Digits not allowed";
    return false;
  }
  if (!lname.match(/^[a-zA-z]*$/)) {
    document.getElementById("lmsg").innerHTML = "Digits not allowed";
    return false;
  }*/
}

function hide_show_pass() {
  let pass = document.getElementById("pass");
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

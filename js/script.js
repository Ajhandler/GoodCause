$(document).ready(function(){

  var firstName = "";
  var lastName = "";
  var userEmail = "";
  var emailAt;
  var emailDot;
  var f1, f2, f3;

  $(".submitButton").click(function(){
    validateForm();
  })

  function validateForm(){
    firstName = $("#first-name").val();
    lastName =$("#last-name").val();
    userEmail = $("#user-email").val();
    emailAt = userEmail.indexOf("@"); 
    emailDot = userEmail.indexOf(".");


    if(firstName != ""){
      f1 = true;
    }else{
      alert("Please provide a first name.")
      f1 = false;
      $("#first-name").css({"border":"solid 1px #f00"});
    }

    if(lastName != ""){
      f2 = true;
    }else{
      alert("Please provide a last name.")
      f2 = false;
      $("#last-name").css({"border":"solid 1px #f00"});
    }

    if(userEmail != ""){
  
      if(emailAt != -1 && emailDot != -1){
        f3 = true;
      }else{
        alert("Please provide a valid email address.")
        f3 = false;
        $("#user-email").css({"border":"solid 1px #f00"});
      }
    }else{
      alert("Please provide a valid email address.")
      f3 = false;
      $("#user-email").css({"border":"solid 1px #f00"});
    }
    

    if(f1 && f2 && f3){
      $("#donationInfo").text("Thank You For Your Contributions! We'll Contact You Shortly To Obtain The Payment.");
    }else{
      alert("Please make sure to fill in every field in the form.")
    }
 
    }
  });
const checkSigninForm = () => {
   let username = $("#signin-username").val();
   let password = $("#signin-password").val();

   if(username=="user" && password=="pass") {
      console.log("logged in")
   } else {
      console.log("logged out")
   }
}


// Document Ready
$(()=>{

   $(document)

   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })

});
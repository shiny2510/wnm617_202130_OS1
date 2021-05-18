
let core_pages = ["recent-page","list-page","user-profile-page"];

// Document Ready
$(()=>{

   checkUserId();

   $(document)


   .on("pagecontainerbeforeshow", function(event, ui) {
      console.log(ui.toPage[0].id)

      $(".active").removeClass("active")

      if(core_pages.includes(ui.toPage[0].id)) {
         $(`[data-page-link='${ui.toPage[0].id}']`)
            .addClass("active");
      }

      // PAGE ROUTING
      switch(ui.toPage[0].id) {
         case "recent-page": RecentPage(); break;
         case "list-page": ListPage(); break;
         case "user-profile-page": UserProfilePage(); break;
         case "user-edit-page": UserEditPage(); break;
         case "user-password-page": UserPasswordPage(); break;
         case "user-upload-page": UserUploadPage(); break;
         case "animal-profile-page": AnimalProfilePage(); break;
         case "animal-edit-page": AnimalEditPage(); break;
         case "animal-add-page": AnimalAddPage(); break;
         case "choose-animal-page": ChooseAnimalPage(); break;
         case "choose-location-page": ChooseLocationPage(); break;
      }
   })


   /* FORM SUBMITS */
   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })
   .on("submit","#signup-form",function(e){
      console.log("entering submit");
      console.log(e);
      e.preventDefault();
      checkSignupForm();
      // $.mobile.navigate("#signup-second-page");
   })
   .on("submit","#signup-second-form",function(e){
      e.preventDefault();
      checkSignupSecondForm();
      // $.mobile.navigate("#recent-page");
   })

   .on("submit","#list-search",function(e){
      e.preventDefault();
      checkSearchForm();
   })
   .on("submit","#recent-search",function(e){
      e.preventDefault();
      checkRecentSearchForm();
   })

   .on("change",".image-uploader input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         $(".upload-image-input").val('uploads/'+d.result);
         $(".image-uploader").css({
            "background-image":`url(uploads/${d.result})`
         });
      })
   })




   /* ANCHOR CLICKS */
   .on("click",".js-logout",function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
   })
   .on("click",".animal-jump",function(e){
      sessionStorage.animalId = $(this).data('id');
      $.mobile.navigate("#animal-profile-page")
   })
   .on("click",".animal-nav a",function(e){
      let id = $(this).parent().index();
      
      $(this).parent().addClass("active")
         .siblings().removeClass("active")

      $(this)
         .closest(".animal-nav").next().children().eq(id)
         .addClass("active")
         .siblings().removeClass("active")
   })
   .on("click",".js-choose-animal",function(e){
      $("#location-choose-animal")
         .html(FormSelectOptions([{id:sessionStorage.animalId,name:"chosen"}]))
      $("#location-redirect").val(-2);
   })
   .on("click",".js-add-from-recent",function(e){
      $("#location-redirect").val(-3);
   })
   .on("click",".animal-add-submit",function(e){
      checkAnimalAddForm();
   })
   .on("click",".animal-edit-submit",function(e){
      checkAnimalEditForm();
   })
   .on("click",".user-edit-submit",function(e){
      checkUserEditForm();
   })
      .on("click",".user-upload-submit",function(e){
      checkUserUploadForm();
   })
   .on("click",".user-password-submit",function(e){
      checkUserPasswordForm();
   })
   .on("click",".location-add-submit",function(e){
      checkLocationAddForm();
   })
   .on("click",".animal-delete",function(e){
      checkAnimalDelete($(this).data('id'));
   })
   .on("click",".filter",function(e){
      checkListFilter($(this).data());
   })

   .on("click",".js-update-animal-image",function(e){
      console.log("honk")
   })


   /* DATA ACTIVATE */
   .on("click","[data-activate]",function(e){
      let target = $(this).data("activate");
      $(target).addClass("active");
   })
   .on("click","[data-deactivate]",function(e){
      let target = $(this).data("deactivate");
      $(target).removeClass("active");
   })
   .on("click","[data-toggle]",function(e){
      let target = $(this).data("toggle");
      $(target).toggleClass("active");
   })









   $("[data-template]").each(function(){
      let id = $(this).data("template");
      let template = $(id).html();
      $(this).html(template);
   })

});
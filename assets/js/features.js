jQuery(document).ready(function(){

      jQuery("header.header-top span.menu-icon").on("click",function(){
          jQuery(".overlay").css("width","60%");
      })
      jQuery(".oly-closebtn").on("click",function(){
        jQuery(".overlay").css("width","0");
    })

});
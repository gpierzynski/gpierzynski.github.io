//Hide all individual paragraphs until they are clicked
$(function() {
  $("#about-text").hide();
  $("#projects-text").hide();
  $("#skills-text").hide();
});

//Handles brighten animation of image when mouse hovers
$(document).ready(function(){
    $("[id$=img]").mouseenter(function(){
        $(this).animate({
          opacity: '0.75'
        }, "fast");
    });
    $("[id$=img]").mouseleave(function(){
      $(this).animate({
        opacity: '1'
      }, "fast");
    });
});

//handles showing the text of the pages clicked
$(document).ready(function(){
    //when an image is clicked
    $("[id$=img]").click(function(){
        var img_tag = $(this).attr('id');
        var text_tag = "";
        for(i = 0; i < img_tag.length; i++) {
          if (img_tag[i] == '-')
            break;
          text_tag += img_tag[i];
        }
        text_tag += "-text";
        //window.alert(text_tag);
        //if id tag does not match image, hide text
        $("[id$=text]").not( document.getElementById(text_tag) ).hide();
        $('#'+text_tag).show();
    });
});

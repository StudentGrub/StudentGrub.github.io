 function scrollDown(linkID){
  $('html, body').animate({
        scrollTop: $("#"+linkID).offset().top
    }, 500);
}

// script.js
$(function(){
  // simple hover style change (smooth)
  $('.main-nav a').hover(
    function(){ $(this).css('filter','brightness(0.95)'); },
    function(){ $(this).css('filter',''); }
  );

  // print/download resume
  $('#printResume').on('click', function(){
    // use print dialog — user can save as PDF
    window.print();
  });
});

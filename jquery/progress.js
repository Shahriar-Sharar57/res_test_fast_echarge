var steps = {
  "steps":[
    {"id":"1", "position":"25"}, 
    {"id":"2", "position":"50"},
    {"id":"3", "position":"75"},
    {"id":"3", "position":"100"}
]
}

$(document).ready(function() {
  console.log(steps);
  var $progress = $('.js-progress-bar').data('progress');
  var $animationLength = $('.js-progress-bar').data('animation-lenght');
  var $progress = parseInt($progress);
 if($progress > 100) {
   $progress = 100;
 }
  $(this).find('.fram-progress-bar-bar').css('width', $progress + '%');
  var i = 0;
(function updateCounter (i) {
  setTimeout(function () {
    if (i++ < $progress) {   
      $('.js-counter').text(i + '%');
      updateCounter(i);  
      //$('.football').css('left', i + '%');
      if (i == steps.steps[0].position) {
        $('.js-step-1').addClass('visible');
      }
      if (i == steps.steps[1].position) {
        $('.js-step-2').addClass('visible');
      }
      if (i == steps.steps[2].position) {
        $('.js-step-3').addClass('visible');
      }
      if (i == steps.steps[3].position) {
        $('.js-step-4').addClass('visible');
      }
    }
  }, $animationLength/$progress - 1);
 
})(1);
  
  
});
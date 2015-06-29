$(document).ready(function() {
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  get: 'tagged',
  tagName: 'restaurant',
  limit: 5,
  clientId: '11abb048770444eba3c05645f3d5087e',
  useHttp: true,
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
    if (!feed.hasNext()) {
        loadButton.setAttribute('disabled', 'disabled');
      }
  },
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
});
feed.run();
$('#load-more').on('click', function() {
  feed.next();
});

});
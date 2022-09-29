import * as marked from 'https://cdn.skypack.dev/marked';

fetch( 'https://merrellj-codeup.github.io/curriculum-app/java/v2/introduction.md' )
  .then( response => response.text() )
  .then( (result) => {
    console.log(result);
    var content = marked.parse(result);
    document.querySelector( '#mdimport' ).innerHTML = content;
  });
  
$('[data-dropdown="toggle"]').on('click', function(){
  var toggle = $(this),
    parent = $(this).parents('[data-dropdown="parent"]').first(),
    arrow = parent.find('[data-dropdown="arrow"]').first(),
    list = $(this).parents('[data-dropdown="parent"]').first().find('[data-dropdown="menu"]').first();
  
  if (list.hasClass('closed')) {
    var curHeight = list.height(),
        autoHeight = list.css('height', 'auto').outerHeight();
    list.css('height', '0');
    arrow.addClass('rotate');
    list.animate({
      height: autoHeight
    }, 200, function(){
      list.removeClass('closed').css('height', '');
    });
  }
  else {
    var curHeight = list.height();
    arrow.removeClass('rotate');
    list.animate({
      height: 0
    }, 200, function(){
      list.addClass('closed').css('height', '');
    });
  }
});
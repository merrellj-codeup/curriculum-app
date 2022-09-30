import * as marked from 'https://cdn.skypack.dev/marked';
import highlightJs from 'https://cdn.skypack.dev/highlight.js';

fetch( 'https://merrellj-codeup.github.io/curriculum-app/java/v2/introduction.md' )
  .then( response => response.text() )
  .then( (result) => {
    var content = marked.parse(result);
    document.querySelector( '#mdimport' ).innerHTML = content;
  })
  .then( () => {
    highlightJs.highlightAll();
  }) ;
  
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

$(document).on('click', '.collapse-button', function(){
    $('.navigation').toggleClass('closed');
});

$(document).on('click', '.nav-dropdown-link', function(){
    let target = $(this).children('.nav-dropdown-title').text().toLowerCase();
    target = target.split(' ').join('-');
    $('#' + target)[0].scrollIntoView({behavior: 'smooth' });
});
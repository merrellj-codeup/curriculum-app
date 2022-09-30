import { html } from 'https://cdn.skypack.dev/htm/react';
import react from 'https://cdn.skypack.dev/react';
import reactDom from 'https://cdn.skypack.dev/react-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'https://cdn.skypack.dev/react-router-dom';
import { Header } from './layout/Header/index.js';
import { LeftNavigation } from './layout/LeftNavigation/index.js';
import { Main } from './layout/Main/index.js';

function App() {
  return html`
    <div class="app-wrapper">
      <${Header} />
      <div class="page-wrapper">
        <${LeftNavigation} />
        <${Main} />
      </div>
    </div>`;
}
reactDom.render(
  html`
  <${BrowserRouter}>
    <${App} />
  <${BrowserRouter} />
  `, document.getElementById('root'));

$(document).on('click', '[data-dropdown="toggle"]', function () {
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
    }, 200, function () {
      list.removeClass('closed').css('height', '');
    });
  }
  else {
    var curHeight = list.height();
    arrow.removeClass('rotate');
    list.animate({
      height: 0
    }, 200, function () {
      list.addClass('closed').css('height', '');
    });
  }
});

$(document).on('click', '.collapse-button', function () {
  $('.navigation').toggleClass('closed');
});

$(document).on('click', '.nav-dropdown-link', function () {
  let target = $(this).children('.nav-dropdown-title').text().toLowerCase();
  target = target.split(' ').join('-');
  $('#' + target)[0].scrollIntoView({ behavior: 'smooth' });
});
import { html } from 'https://cdn.skypack.dev/htm/react';
import react from 'https://cdn.skypack.dev/react';
import * as marked from 'https://cdn.skypack.dev/marked';
import highlightJs from 'https://cdn.skypack.dev/highlight.js';

function getMarkdown(course, version, lesson){
    fetch( `https://merrellj-codeup.github.io/curriculum-app/${course}/${version}/${lesson}.md` )
        .then( response => response.text() )
        .then( (result) => {
            var content = marked.parse(result);
            document.querySelector( '#mdimport' ).innerHTML = content;
    })
    .then( () => {
        highlightJs.highlightAll();
    }) ;
}

function Main() {
  return (
    html`
    <main class="main">
        <div id="mdimport" class="main-content md-typeset"></div>
    </main>`
  );
}
getMarkdown('java', 'v2', 'introduction');

export {getMarkdown, Main}
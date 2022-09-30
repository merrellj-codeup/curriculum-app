import { html } from 'https://cdn.skypack.dev/htm/react';
import react from 'https://cdn.skypack.dev/react';
const logo = '/images/CodeupFullColorLogo.png';

export function Header() {
  return (
    html`
    <header class="header">
      <img src="${logo}" alt="" class="image" />
      <div class="header-title">Java Curriculum</div>
      <a href="#" class="button w-button">Back to Course</a>
    </header>`
  );
}
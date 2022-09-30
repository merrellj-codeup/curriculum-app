import { html } from 'https://cdn.skypack.dev/htm/react';
import react from 'https://cdn.skypack.dev/react';
import styledComponents from 'https://cdn.skypack.dev/styled-components';

const logo = '/images/CodeupFullColorLogo.png';

const HeaderWrapper = styledComponents.div`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100px;
  padding-right: 30px;
  padding-left: 30px;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
`
console.log(HeaderWrapper);
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
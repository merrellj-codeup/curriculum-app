import { html } from 'https://cdn.skypack.dev/htm/react';
import react from 'https://cdn.skypack.dev/react';
import {
  Route,
  Link
} from 'https://cdn.skypack.dev/react-router-dom';

const lessonIcon = 'images/lesson-icon.svg';
const exerciseIcon = 'images/noun-code-5203600.svg';
const collapseIcon = 'images/noun-menu-1780117-FFFFFF.svg';

export function LeftNavigation() {
  return (
    html`
      <nav class="navigation">
        <div class="nav-mask">
          <div class="nav-inner">
            <div class="nav-search-wrapper w-embed"><input class="nav-search-input" type="text" placeholder="Search curriculum..." /></div>
            <div class="nav-modules">
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line rotate"></div>
                  </div>
                  <div class="nav-module-title">Introduction</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown">
                  <div class="nav-dropdown-inner">
                    <div class="nav-dropdown-link"><img src="${lessonIcon}" loading="lazy" alt="" class="nav-dropdown-icon" />
                      <div class="nav-dropdown-title">Intro to HTML</div>
                      <div class="nav-time">
                        <div>10 min</div>
                      </div>
                    </div>
                    <div class="nav-dropdown-link"><img src="${lessonIcon}" loading="lazy" alt="" class="nav-dropdown-icon" />
                      <div class="nav-dropdown-title">Doctype Declaration</div>
                      <div class="nav-time">
                        <div>10 min</div>
                      </div>
                    </div>
                    <div class="nav-dropdown-link"><img src="${lessonIcon}" loading="lazy" alt="" class="nav-dropdown-icon" />
                      <div class="nav-dropdown-title">Root Element</div>
                      <div class="nav-time">
                        <div>10 min</div>
                      </div>
                    </div>
                    <div class="nav-dropdown-link"><img src="${lessonIcon}" loading="lazy" alt="" class="nav-dropdown-icon" />
                      <div class="nav-dropdown-title">Head and Body</div>
                      <div class="nav-time">
                        <div>30 min</div>
                      </div>
                    </div>
                    <div class="nav-dropdown-link"><img src="${lessonIcon}" loading="lazy" alt="" class="nav-dropdown-icon" />
                      <div class="nav-dropdown-title">Semantic Markup</div>
                      <div class="nav-time">
                        <div>10 min</div>
                      </div>
                    </div>
                    <div class="nav-dropdown-link"><img src="images/noun-code-5203600.svg" loading="lazy" alt="" class="nav-dropdown-icon" />
                      <div class="nav-dropdown-title">Exercises</div>
                      <div class="nav-time">
                        <div>45 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">Programming Fundamentals (Front End)</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">UX/UI (User Interface, User Experience)</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">Programming Fundamentals (Back End)</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">Data Storage</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">Backend Web Applications</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">Capstones</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
              <div data-dropdown="parent" class="nav-module">
                <div data-dropdown="toggle" class="nav-module-toggle">
                  <div class="toggle-icon-wrapper">
                    <div class="toggle-icon-line rotate"></div>
                    <div data-dropdown="arrow" class="toggle-icon-line"></div>
                  </div>
                  <div class="nav-module-title">Career Simulation &amp; Preparation</div>
                </div>
                <div data-dropdown="menu" class="nav-module-dropdown closed"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse-button"><img src="${collapseIcon}" loading="lazy" alt="" class="collapse-icon" /></div>
      </nav>
    `
  );
}
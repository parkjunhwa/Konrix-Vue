<template>
  <div class="app-menu">
    <a href="/" class="logo-box">
      <div class="logo-light">
        <img src="@/assets/images/logo-light.png" class="logo-lg h-6" alt="Light logo" />
        <img src="@/assets/images/logo-sm.png" class="logo-sm" alt="Small logo" />
      </div>

      <div class="logo-dark">
        <img src="@/assets/images/logo-dark.png" class="logo-lg h-6" alt="Dark logo" />
        <img src="@/assets/images/logo-sm.png" class="logo-sm" alt="Small logo" />
      </div>
    </a>

    <button id="button-hover-toggle" class="absolute top-5 end-2 rounded-full p-1.5">
      <span class="sr-only">Menu Toggle Button</span>
      <i class="mgc_round_line text-xl"></i>
    </button>

    <!--- Menu -->
    <div class="srcollbar" data-simplebar>
      <ul class="menu" data-fc-type="accordion">
        <li class="menu-title">Menu</li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_home_3_line"></i></span>
            <span class="menu-text"> Dashboard </span>
          </router-link>
        </li>

        <li class="menu-title">Apps</li>

        <li class="menu-item">
          <router-link to="/apps/calendar" class="menu-link">
            <span class="menu-icon"><i class="mgc_calendar_line"></i></span>
            <span class="menu-text"> Calendar </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/apps/tickets" class="menu-link">
            <span class="menu-icon"><i class="mgc_coupon_line"></i></span>
            <span class="menu-text"> Tickets </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/apps/file-manager" class="menu-link">
            <span class="menu-icon"><i class="mgc_folder_2_line"></i></span>
            <span class="menu-text"> File Manager </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/apps/kanban" class="menu-link">
            <span class="menu-icon"><i class="mgc_task_2_line"></i></span>
            <span class="menu-text">Kanban</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#project-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_building_2_line"></i></span>
            <span class="menu-text"> Project </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="project-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/apps/project/list" class="menu-link">
                <span class="menu-text">List</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/apps/project/detail" class="menu-link">
                <span class="menu-text">Detail</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/apps/project/create" class="menu-link">
                <span class="menu-text">Create</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-title">Custom</li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#auth-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_user_3_line"></i></span>
            <span class="menu-text"> Auth Pages </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="auth-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/login" class="menu-link">
                <span class="menu-text">Log In</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/register" class="menu-link">
                <span class="menu-text">Register</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/recoverpw" class="menu-link">
                <span class="menu-text">Recover Password</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/lock-screen" class="menu-link">
                <span class="menu-text">Lock Screen</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#extra-page-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_box_3_line"></i></span>
            <span class="menu-text"> Extra Pages </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="extra-page-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/pages/starter" class="menu-link">
                <span class="menu-text">Starter</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/timeline" class="menu-link">
                <span class="menu-text">Timeline</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/invoice" class="menu-link">
                <span class="menu-text">Invoice</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/gallery" class="menu-link">
                <span class="menu-text">Gallery</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/faq" class="menu-link">
                <span class="menu-text">FAQs</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/pricing" class="menu-link">
                <span class="menu-text">Pricing</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/maintenance" class="menu-link">
                <span class="menu-text">Maintenance</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/pages/coming-soon" class="menu-link">
                <span class="menu-text">Coming Soon</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/404" class="menu-link">
                <span class="menu-text">Error 404</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/404-alt" class="menu-link">
                <span class="menu-text">Error 404-alt</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/500" class="menu-link">
                <span class="menu-text">Error 500</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#layout-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_layout_line"></i></span>
            <span class="menu-text"> Layout </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="layout-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/layout/hovered" class="menu-link">
                <span class="menu-text">Hovered Menu</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/layout/icon-view" class="menu-link">
                <span class="menu-text">Icon View Menu</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/layout/compact" class="menu-link">
                <span class="menu-text">Compact Menu</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/layout/mobile-view" class="menu-link">
                <span class="menu-text">Mobile View Menu</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/layout/hidden" class="menu-link">
                <span class="menu-text">Hidden Menu</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-title">Elements</li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#components-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_classify_2_line"></i></span>
            <span class="menu-text"> Components </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="components-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/ui/accordions" class="menu-link">
                <span class="menu-text">Accordions</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/alerts" class="menu-link">
                <span class="menu-text">Alerts</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/avatars" class="menu-link">
                <span class="menu-text">Avatars</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/buttons" class="menu-link">
                <span class="menu-text">Buttons</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/badges" class="menu-link">
                <span class="menu-text">Badges</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/breadcrumbs" class="menu-link">
                <span class="menu-text">Breadcrumb</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/cards" class="menu-link">
                <span class="menu-text">Cards</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/collapse" class="menu-link">
                <span class="menu-text">Collapse</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/dismissible" class="menu-link">
                <span class="menu-text">Dismissible</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/dropdowns" class="menu-link">
                <span class="menu-text">Dropdowns</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/progress" class="menu-link">
                <span class="menu-text">Progress</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/skeleton" class="menu-link">
                <span class="menu-text">Skeleton</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/spinners" class="menu-link">
                <span class="menu-text">Spinners</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/list-group" class="menu-link">
                <span class="menu-text">List Group</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/ratio" class="menu-link">
                <span class="menu-text">Ratio</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/tabs" class="menu-link">
                <span class="menu-text">Tab</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/modals" class="menu-link">
                <span class="menu-text">Modals</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/offcanvas" class="menu-link">
                <span class="menu-text">Offcanvas</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/popovers" class="menu-link">
                <span class="menu-text">Popovers</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/tooltips" class="menu-link">
                <span class="menu-text">Tooltips</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/ui/typography" class="menu-link">
                <span class="menu-text">Typography</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#extended-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_box_3_line"></i></span>
            <span class="menu-text"> Extended </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="extended-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/extended/swiper" class="menu-link">
                <span class="menu-text">Swiper</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/nestable" class="menu-link">
                <span class="menu-text">Nestable List</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/ratings" class="menu-link">
                <span class="menu-text">Ratings</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/animation" class="menu-link">
                <span class="menu-text">Animation</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/player" class="menu-link">
                <span class="menu-text">Player</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/scrollbar" class="menu-link">
                <span class="menu-text">Scrollbar</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/sweet-alert" class="menu-link">
                <span class="menu-text">Sweet Alert</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/tour" class="menu-link">
                <span class="menu-text">Tour Page</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/tippy-tooltips" class="menu-link">
                <span class="menu-text">Tippy Tooltip</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/extended/lightbox" class="menu-link">
                <span class="menu-text">Lightbox</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#forms-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_file_check_line"></i></span>
            <span class="menu-text"> Forms </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="forms-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/forms/elements" class="menu-link">
                <span class="menu-text">Form Elements</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/select" class="menu-link">
                <span class="menu-text">Select</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/range" class="menu-link">
                <span class="menu-text">Range</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/pickers" class="menu-link">
                <span class="menu-text">Pickers</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/masks" class="menu-link">
                <span class="menu-text">Masks</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/editor" class="menu-link">
                <span class="menu-text">Editor</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/file-uploads" class="menu-link">
                <span class="menu-text">File Uploads</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/validation" class="menu-link">
                <span class="menu-text">Validation</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/forms/layout" class="menu-link">
                <span class="menu-text">Form Layout</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#tables-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_layout_grid_line"></i></span>
            <span class="menu-text"> Tables </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="tables-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/tables/basic" class="menu-link">
                <span class="menu-text">Basic Tables</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/tables/datatables" class="menu-link">
                <span class="menu-text">Data Tables</span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#icons-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_dribbble_line"></i></span>
            <span class="menu-text"> Icons </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="icons-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/icons/mingcute" class="menu-link">
                <span class="menu-text">Mingcute</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/icons/feather" class="menu-link">
                <span class="menu-text">Feather</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/icons/material-symbols" class="menu-link">
                <span class="menu-text">Material Symbols </span>
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <router-link to="/charts" class="menu-link">
            <span class="menu-icon"><i class="mgc_chart_bar_line"></i></span>
            <span class="menu-text"> Chart </span>
          </router-link>
        </li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#maps-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_location_line"></i></span>
            <span class="menu-text"> Maps </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="maps-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <a href="/maps/vector-maps" class="menu-link">
                <span class="menu-text">Vector Maps</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="/maps/google-maps" class="menu-link">
                <span class="menu-text">Google Maps</span>
              </a>
            </li>
          </ul>
        </li>

        <li class="menu-title">Documentation</li>

        <li class="menu-item">
          <a href="#" data-hs-collapse="#docs-collapse" class="menu-link hs-collapse-toggle">
            <span class="menu-icon"><i class="mgc_document_line"></i></span>
            <span class="menu-text"> Documentation </span>
            <span class="menu-arrow"></span>
          </a>

          <ul
            id="docs-collapse"
            class="sub-menu hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <li class="menu-item">
              <router-link to="/docs/introduction" class="menu-link">
                <span class="menu-text">Introduction</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/docs/installation" class="menu-link">
                <span class="menu-text">Installation</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/docs/customization" class="menu-link">
                <span class="menu-text">Customization</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/docs/changelog" class="menu-link">
                <span class="menu-text">Changelog</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Help Box Widget -->
      <div class="my-10 mx-5">
        <div class="help-box p-6 bg-black/5 text-center rounded-md">
          <div class="flex justify-center mb-4">
            <svg width="30" height="18" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z"
                fill="#38BDF8"
              ></path>
            </svg>
          </div>
          <h5 class="mb-2">Unlimited Access</h5>
          <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
          <a href="javascript: void(0);" class="btn btn-sm bg-secondary text-white">Upgrade</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/layout'

export default {
  data() {
    return {
      useLayout: useLayoutStore(),
    }
  },
}
</script>

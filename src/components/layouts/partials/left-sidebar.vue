<template>
  <div class="app-menu">
    <div class="block md:hidden h-[70px]">모바일에서 보이는 탑 영역</div>

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
      </ul>
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

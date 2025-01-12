<template>
  <header class="app-header flex items-center px-4 gap-3">
    <button id="button-toggle-menu" class="nav-link p-2">
      <span class="sr-only">Menu Toggle Button</span>
      <span class="flex items-center justify-center h-6 w-6">
        <i class="mgc_menu_line text-xl"></i>
      </span>
    </button>
    <div class="flex me-auto">
      <a href="/" class="logo-box">
        <div class="logo-dark">
          <img src="@/assets/images/logo-dark.png" class="h-6" alt="Dark logo" />
        </div>
      </a>
    </div>

    <div class="hs-dropdown relative inline-flex md:flex">
      <button type="button" class="hs-dropdown-toggle nav-link p-2">
        <div class="relative inline-flex">
          <span class="sr-only">View notifications</span>
          <span class="flex items-center justify-center h-6 w-6">
            <i class="mgc_notification_line text-2xl"></i>
          </span>
          <div class="absolute end-0 h-2 w-2 rounded-full border border-white bg-success"></div>
        </div>
      </button>
      <div
        class="hs-dropdown-menu hs-dropdown-open:opacity-100 hidden opacity-0 w-80 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg"
      >
        <div class="p-2 border-b border-dashed border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <h6 class="text-sm">Notification</h6>
            <a href="javascript: void(0);" class="text-gray-500 underline">
              <small>Clear All</small>
            </a>
          </div>
        </div>

        <simplebar class="p-4 h-80">
          <h5 class="text-xs text-gray-500 mb-2">Today</h5>

          <a href="javascript:void(0);" class="block mb-4">
            <div class="card-body">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div
                    class="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary"
                  >
                    <i class="mgc_message_3_line text-lg"></i>
                  </div>
                </div>
                <div class="flex-grow truncate ms-2">
                  <h5 class="text-sm font-semibold mb-1">
                    Datacorp
                    <small class="font-normal text-gray-500 ms-1">1 min ago</small>
                  </h5>
                  <small class="noti-item-subtitle text-muted"
                    >Caleb Flakelar commented on Admin</small
                  >
                </div>
              </div>
            </div>
          </a>

          <a href="javascript:void(0);" class="block mb-4">
            <div class="card-body">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div
                    class="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white"
                  >
                    <i class="mgc_user_add_line text-lg"></i>
                  </div>
                </div>
                <div class="flex-grow truncate ms-2">
                  <h5 class="text-sm font-semibold mb-1">
                    Admin
                    <small class="font-normal text-gray-500 ms-1">1 hr ago</small>
                  </h5>
                  <small class="noti-item-subtitle text-muted">New user registered</small>
                </div>
              </div>
            </div>
          </a>

          <a href="javascript:void(0);" class="block mb-4">
            <div class="card-body">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    class="rounded-full h-9 w-9"
                    alt=""
                  />
                </div>
                <div class="flex-grow truncate ms-2">
                  <h5 class="text-sm font-semibold mb-1">
                    Cristina Pride
                    <small class="font-normal text-gray-500 ms-1">1 day ago</small>
                  </h5>
                  <small class="noti-item-subtitle text-muted"
                    >Hi, How are you? What about our next meeting</small
                  >
                </div>
              </div>
            </div>
          </a>

          <h5 class="text-xs text-gray-500 mb-2">Yesterday</h5>

          <a href="javascript:void(0);" class="block mb-4">
            <div class="card-body">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div
                    class="flex justify-center items-center h-9 w-9 rounded-full bg-primary text-white"
                  >
                    <i class="mgc_message_1_line text-lg"></i>
                  </div>
                </div>
                <div class="flex-grow truncate ms-2">
                  <h5 class="text-sm font-semibold mb-1">Datacorp</h5>
                  <small class="noti-item-subtitle text-muted"
                    >Caleb Flakelar commented on Admin</small
                  >
                </div>
              </div>
            </div>
          </a>

          <a href="javascript:void(0);" class="block">
            <div class="card-body">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    src="@/assets/images/users/avatar-4.jpg"
                    class="rounded-full h-9 w-9"
                    alt=""
                  />
                </div>
                <div class="flex-grow truncate ms-2">
                  <h5 class="text-sm font-semibold mb-1">Karen Robinson</h5>
                  <small class="noti-item-subtitle text-muted"
                    >Wow ! this admin looks good and awesome design</small
                  >
                </div>
              </div>
            </div>
          </a>
        </simplebar>

        <a
          href="javascript:void(0);"
          class="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold"
        >
          View All
        </a>
      </div>
    </div>

    <!-- <div class="flex">
      <button id="light-dark-mode" type="button" class="nav-link p-2">
        <span class="sr-only">Light/Dark Mode</span>
        <span class="flex items-center justify-center h-6 w-6">
          <i class="mgc_moon_line text-2xl"></i>
        </span>
      </button>
    </div> -->

    <div class="hs-dropdown relative inline-flex">
      <button type="button" class="hs-dropdown-toggle nav-link">
        <div class="relative inline-flex">
          <div class="w-8 h-8 justify-center items-center flex bg-primary rounded-full">
            <span class="text-white">PJ</span>
          </div>
          <div class="absolute end-0 h-2 w-2 rounded-full border border-white bg-success"></div>
        </div>
      </button>
      <div
        class="hs-dropdown-menu hs-dropdown-open:opacity-100 hidden opacity-0 w-44 z-50 transition-[margin,opacity] duration-300 mt-2 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800"
      >
        <router-link
          class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          to="/pages/gallery"
        >
          <i class="mgc_pic_2_line me-2"></i>
          <span>Gallery</span>
        </router-link>
        <router-link
          class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          to="/apps/kanban"
        >
          <i class="mgc_task_2_line me-2"></i>
          <span>Kanban</span>
        </router-link>
        <router-link
          class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          to="/lock-screen"
        >
          <i class="mgc_lock_line me-2"></i>
          <span>Lock Screen</span>
        </router-link>
        <hr class="my-2 -mx-2 border-gray-200 dark:border-gray-700" />
        <router-link
          class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          to="/login"
        >
          <i class="mgc_exit_line me-2"></i>
          <span>Log Out</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import simplebar from 'simplebar-vue'

export default {
  components: { simplebar },
}
</script>

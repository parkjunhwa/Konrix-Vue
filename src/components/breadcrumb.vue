<template>
  <div class="flex flex-col mb-6 gap-2">sss
    <div class="md:flex hidden items-center mb-2 text-sm font-semibold">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center text-sm font-semibold space-x-1">
          <li>
            <div class="flex items-center">
              <a href="#" class="text-gray-400 hover:text-gray-500 align-middle w-5 h-5">
                <i class="mgc_home_4_line text-lg flex-shrink-0 align-top"></i>
                <span class="sr-only">Home</span>
              </a>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <i class="mgc_right_line text-lg flex-shrink-0 text-gray-400"></i>
              <a href="#" class="ms-1 text-sm font-medium text-gray-500 hover:text-gray-700">{{
                subtitle
              }}</a>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <i class="mgc_right_line text-lg flex-shrink-0 text-gray-400"></i>
              <a
                href="#"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-gray-700"
                aria-current="page"
                >{{ title }}</a
              >
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <h1 class="text-[28px] text-slate-900 dark:text-slate-200 min-h-[42px]">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    subtitle: String,
  },
  mounted() {
    this.useMeta({
      title: this.title,
    })
  },
}
</script>

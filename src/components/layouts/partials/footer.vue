<template>
  <footer class="footer h-14 flex items-center">
    <div class="flex justify-center w-full gap-4">
      {{ year }}
      @명인제약 UBCare Allright Reserved.
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

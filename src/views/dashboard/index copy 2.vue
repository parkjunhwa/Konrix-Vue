<template>
  <Layout>
    <Breadcrumb title="Dashboard" subtitle="Menu" />
    <div class="grid gap-6 mb-6">컨텐츠 영역</div>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/layouts/layout.vue'
import Breadcrumb from '@/components/breadcrumb.vue'

export default {
  components: {
    Layout,
    Breadcrumb,
  },
}
</script>

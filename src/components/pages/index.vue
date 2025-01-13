<template>
  <Layout>
    <Breadcrumb title="타이틀 입력" subtitle="서브메뉴 입력" />
    <div class="grid gap-6 mb-6">
      <h2 class="text-blackA12 text-lg">컴포넌트 정리</h2>
    </div>
    <div class="grid gap-6 mb-6">
      <h4 class="text-blackA12 text-base">Text</h4>
      <div class="flex gap-4">
        <span class="text-blackA12 text-xs font-bold">Aa</span>
        <span class="text-blackA12 text-sm font-bold">Aa</span>
        <span class="text-blackA12 text-base font-bold">Aa</span>
        <span class="text-blackA12 text-lg font-bold">Aa</span>
        <span class="text-blackA12 text-xl font-bold">Aa</span>
        <span class="text-blackA12 text-2xl font-bold">Aa</span>
        <span class="text-blackA12 text-3xl font-bold">Aa</span>
        <span class="text-blackA12 text-4xl font-bold">Aa</span>
        <span class="text-blackA12 text-5xl font-bold">Aa</span>
        <span class="text-blackA12 text-6xl font-bold">Aa</span>
      </div>
      <div class="flex gap-4">
        <span class="text-blackA12 text-xs">Aa</span>
        <span class="text-blackA12 text-sm">Aa</span>
        <span class="text-blackA12 text-base">Aa</span>
        <span class="text-blackA12 text-lg">Aa</span>
        <span class="text-blackA12 text-xl">Aa</span>
        <span class="text-blackA12 text-2xl">Aa</span>
        <span class="text-blackA12 text-3xl">Aa</span>
        <span class="text-blackA12 text-4xl">Aa</span>
        <span class="text-blackA12 text-5xl">Aa</span>
        <span class="text-blackA12 text-6xl">Aa</span>
      </div>
      <div class="flex gap-4">
        <span class="text-blackA12 text-xs font-light">Aa</span>
        <span class="text-blackA12 text-sm font-light">Aa</span>
        <span class="text-blackA12 text-base font-light">Aa</span>
        <span class="text-blackA12 text-lg font-light">Aa</span>
        <span class="text-blackA12 text-xl font-light">Aa</span>
        <span class="text-blackA12 text-2xl font-light">Aa</span>
        <span class="text-blackA12 text-3xl font-light">Aa</span>
        <span class="text-blackA12 text-4xl font-light">Aa</span>
        <span class="text-blackA12 text-5xl font-light">Aa</span>
        <span class="text-blackA12 text-6xl font-light">Aa</span>
      </div>
      <div class="flex gap-4">
        <HeadingRadix :level="1" as="h1" color="text-blue-600" weight="font-extrabold">
          대제목(H1)
        </HeadingRadix>
        <HeadingRadix :level="2" as="h2" color="text-gray-800" weight="font-bold">
          소제목(H2)
        </HeadingRadix>
        <!--
    as props를 바꿔서 h1~h6 뿐만 아니라
    다른 태그(div, span 등)로도 폴리모픽하게 사용 가능.
  -->
        <HeadingRadix :level="3" as="div" color="text-red-500" weight="font-semibold">
          div 태그로 렌더링되는 제목(H3 레벨)
        </HeadingRadix>
      </div>
    </div>
    <div class="grid gap-6 mb-6">
      <h4 class="text-blackA12 text-base"></h4>
      <RadixButton :as="'button'" variant="primary" size="md" @click="onPrimaryClick">
        Primary Action
      </RadixButton>

      <RadixButton
        :as="'a'"
        href="https://example.com"
        icon="ExternalLinkIcon"
        iconPosition="back"
        variant="secondary"
        size="sm"
        @click="onLinkClick"
      >
        Visit Site
      </RadixButton>
    </div>
  </Layout>
</template>
<script setup lang="ts">
import Layout from '@/components/layouts/layout.vue'
import Breadcrumb from '@/components/breadcrumb.vue'

export default {
  components: {
    Layout,
    Breadcrumb,
  },
}

// Heading
import HeadingRadix from '@/components/radix/HeadingRadix.vue'
</script>

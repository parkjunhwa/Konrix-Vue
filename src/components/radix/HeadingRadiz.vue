<template>
  <!--
    :is="as"를 사용해서 폴리모픽하게 태그를 동적으로 변경합니다.
    ex) h1, h2, h3, span, p 등
  -->
  <component :is="as" :class="computedClasses" v-bind="attrs">
    <!-- Heading 내용을 표시할 기본 슬롯 -->
    <slot />
  </component>
</template>

<script setup>
import { computed, toRefs } from 'vue'

/**
 * Props 정의
 */
const props = defineProps({
  /**
   * Radix UI처럼, Heading이 실제로 어떤 태그로 렌더링될지 결정합니다.
   * ex) 'h1', 'h2', 'div', 'span', ...
   */
  as: {
    type: String,
    default: 'h2',
  },
  /**
   * Heading의 "레벨" 또는 "사이즈"를 지정합니다.
   * (Radix의 Heading 레벨을 참고한 예시)
   * - 1: 가장 큰 제목
   * - 2: 그 다음 크기
   * - 3, 4, 5, 6 ...
   */
  level: {
    type: Number,
    default: 2,
  },
  /**
   * 폰트 색상이나 테마 등을 변경하고 싶을 때 사용합니다.
   * (Tailwind 클래스 내에서 text-gray-900, text-blue-600 등으로 활용 가능)
   */
  color: {
    type: String,
    default: 'text-gray-900',
  },
  /**
   * 폰트 두께(웨이트)를 지정합니다.
   * ex) 'font-bold', 'font-semibold', 'font-normal' 등
   */
  weight: {
    type: String,
    default: 'font-bold',
  },
})

/**
 * toRefs로 필요 프로퍼티 추출
 */
const { as, level, color, weight } = toRefs(props)

/**
 * Tailwind 폰트 사이즈 정의:
 * level 값에 따라 text-2xl, text-3xl, 등 다른 클래스를 적용.
 * 필요에 따라 커스터마이징하세요.
 */
const computedClasses = computed(() => {
  const baseStyles = `${color.value} ${weight.value}`

  // level에 따라 Tailwind 폰트 사이즈 적용
  // 원하는 크기로 자유롭게 매핑 가능
  const sizeMap = {
    1: 'text-4xl', // h1
    2: 'text-3xl', // h2
    3: 'text-2xl', // h3
    4: 'text-xl', // h4
    5: 'text-lg', // h5
    6: 'text-base', // h6
  }

  // level 범위를 벗어난 경우 default 처리
  const fontSize = sizeMap[level.value] || 'text-base'

  return [baseStyles, fontSize].join(' ')
})

/**
 * 기타 속성(예: id, title, style 등)을 받아서
 * 컴포넌트 루트 요소에 바인딩하기 위해 defineAttrs 사용
 */
const attrs = defineAttrs()
</script>

<style scoped>
/* 필요하다면 컴포넌트별로 추가 커스텀 스타일을 여기에 작성 */
</style>

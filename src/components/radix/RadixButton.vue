<template>
  <!-- We use :is="as" for polymorphism -->
  <component
    :is="as"
    class="inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="computedClasses"
    :disabled="disabled"
    @click="handleClick"
    v-bind="attrs"
  >
    <!-- If icon is provided and should be on the front -->
    <span v-if="icon && iconPosition === 'front'" class="mr-2">
      <component :is="icon" class="w-5 h-5" aria-hidden="true" />
    </span>

    <!-- Default slot for the button label -->
    <slot />

    <!-- If icon is provided and should be on the back -->
    <span v-if="icon && iconPosition === 'back'" class="ml-2">
      <component :is="icon" class="w-5 h-5" aria-hidden="true" />
    </span>
  </component>
</template>

<script setup>
import { computed, toRefs } from 'vue'

// We define all the props we want to handle
const props = defineProps({
  /**
   * The HTML element or component to render (a la Radix UI's polymorphism).
   */
  as: {
    type: String,
    default: 'button', // e.g. could be 'button', 'a', 'router-link', etc.
  },
  /**
   * A slot or component to render as icon.
   */
  icon: {
    type: [Object, Function, String],
    default: null,
  },
  /**
   * If an icon is used, place it in the front or back of the label.
   */
  iconPosition: {
    type: String,
    default: 'front', // or 'back'
  },
  /**
   * The "variant" can be used to define coloring or styling.
   */
  variant: {
    type: String,
    default: 'primary',
  },
  /**
   * The "size" can be used to set padding, text sizes, etc.
   */
  size: {
    type: String,
    default: 'md',
  },
  /**
   * If disabled, we apply the disabled attribute and styles.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
})

const { as, variant, size, disabled } = toRefs(props)

/**
 * Let’s define some Tailwind utility classes based on variant and size.
 */
const computedClasses = computed(() => {
  const baseStyles = 'rounded transition-colors'

  // Variants
  const variantStyles =
    {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    }[variant.value] || variantStyles?.primary

  // Sizes
  const sizeStyles =
    {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    }[size.value] || 'px-4 py-2 text-sm'

  return [baseStyles, variantStyles, sizeStyles].join(' ')
})

/**
 * We define any events we need to emit. Here we mimic Radix UI's typical event
 * forwarding approach, passing the native event object along.
 */
const emits = defineEmits(['click'])

function handleClick(evt) {
  if (!disabled.value) {
    emits('click', evt)
  }
}

// Expose any attribute bindings (e.g., href for <a> elements)
const attrs = defineAttrs()
</script>

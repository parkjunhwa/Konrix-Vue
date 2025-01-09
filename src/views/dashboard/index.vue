<template>
  <Layout>
    <Breadcrumb title="타이틀 입력" subtitle="서브메뉴 입력" />
    <div class="grid 2xl:grid-cols-12 gap-6 mb-6">
      컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠
      영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠
      영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠
      영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠 영역<br />컨텐츠
      영역<br />컨텐츠 영역<br />컨텐츠 영역<br />
    </div>
    <div class="grid 2xl:grid-cols-12 gap-6 mb-6">
      <ToolbarRoot
        class="flex p-[10px] w-full max-w-[610px] !min-w-max rounded-md bg-white shadow-sm shadow-blackA7"
        aria-label="Formatting options"
      >
        <ToolbarToggleGroup
          v-model="toggleStateMultiple"
          type="multiple"
          aria-label="Text formatting"
        >
          <ToolbarToggleItem
            class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
            value="bold"
            aria-label="Bold"
          >
            <Icon class="w-[15px] h-[15px]" icon="radix-icons:font-bold" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
            value="italic"
            aria-label="Italic"
          >
            <Icon class="w-[15px] h-[15px]" icon="radix-icons:font-italic" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
            value="strikethrough"
            aria-label="Strike through"
          >
            <Icon class="w-[15px] h-[15px]" icon="radix-icons:strikethrough" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
        <ToolbarToggleGroup v-model="toggleStateSingle" type="single" aria-label="Text Alignment">
          <ToolbarToggleItem
            class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
            value="left"
            aria-label="Left Aligned"
          >
            <Icon class="w-[15px] h-[15px]" icon="radix-icons:text-align-left" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
            value="center"
            aria-label="Center Aligned"
          >
            <Icon class="w-[15px] h-[15px]" icon="radix-icons:text-align-center" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
            value="right"
            aria-label="Right Aligned"
          >
            <Icon class="w-[15px] h-[15px]" icon="radix-icons:text-align-right" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
        <ToolbarLink
          class="bg-transparent !font-normal !text-mauve11 inline-flex justify-center items-center hover:bg-transparent hover:cursor-pointer flex-shrink-0 flex-grow-0 basis-auto h-[25px] px-[5px] rounded text-[13px] leading-none bg-white ml-0.5 outline-none hover:bg-blue3 hover:text-blue11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7 first:ml-0 data-[state=on]:bg-blue5 data-[state=on]:text-blue11"
          href="#"
          target="_blank"
          style="margin-right: 10"
        >
          Edited 2 hours ago
        </ToolbarLink>
        <ToolbarButton
          class="px-[10px] text-white bg-blue9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-blue10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-blue7"
          style="margin-left: auto"
        >
          공유
        </ToolbarButton>
      </ToolbarRoot>
    </div>
    <div>
      <PopoverRoot>
        <PopoverTrigger
          class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-blue11 bg-white shadow-sm shadow-blackA7 hover:bg-green3 shadow-sm focus:shadow-black cursor-default outline-none"
          aria-label="Update dimensions"
        >
          <Icon icon="radix-icons:mixer-horizontal" />
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            side="bottom"
            :side-offset="5"
            class="rounded z-50 p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          >
            <div class="flex flex-col gap-2.5">
              <p class="text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5">Dimensions</p>
              <fieldset class="flex gap-5 items-center">
                <label class="text-[13px] text-grass11 w-[75px]" for="width"> Width </label>
                <input
                  id="width"
                  class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
                  defaultValue="100%"
                />
              </fieldset>
              <fieldset class="flex gap-5 items-center">
                <label class="text-[13px] text-grass11 w-[75px]" for="maxWidth"> Max. width </label>
                <input
                  id="maxWidth"
                  class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
                  defaultValue="300px"
                />
              </fieldset>
              <fieldset class="flex gap-5 items-center">
                <label class="text-[13px] text-grass11 w-[75px]" for="height"> Height </label>
                <input
                  id="height"
                  class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
                  defaultValue="25px"
                />
              </fieldset>
              <fieldset class="flex gap-5 items-center">
                <label class="text-[13px] text-grass11 w-[75px]" for="maxHeight">
                  Max. height
                </label>
                <input
                  id="maxHeight"
                  class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
                  defaultValue="none"
                />
              </fieldset>
            </div>
            <PopoverClose
              class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
              aria-label="Close"
            >
              <Icon icon="radix-icons:cross-2" />
            </PopoverClose>
            <PopoverArrow class="fill-white" />
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const toggleStateSingle = ref('center')
const toggleStateMultiple = ref([])
</script>

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

<script setup lang="ts">
import type {NavigationMenuLinkEmits, NavigationMenuLinkProps} from "reka-ui"
import {NavigationMenuLink, useForwardPropsEmits,} from "reka-ui"
import type {HTMLAttributes} from "vue"
import {reactiveOmit} from "@vueuse/core"
import {cn} from "@/lib/utils"
import {ExternalLinkIcon} from "lucide-vue-next";

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes["class"], blank?: boolean }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuLink :target="props.blank? '_blank': '_self'"
                      data-slot="navigation-menu-link"
                      v-bind="forwarded"
                      :class="cn('data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*=\'text-\'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*=\'size-\'])]:size-4', props.class)"
  >
    <div class="flex flex-row justify-between">
      <slot/>
      <external-link-icon v-if="blank" class="ml-1 mt-1"/>
    </div>
  </NavigationMenuLink>
</template>

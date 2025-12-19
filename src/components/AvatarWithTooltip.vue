<script setup lang="ts">
import { ref } from 'vue';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
interface Props { member: TeamMember }
const props = defineProps<Props>()

const open = ref(false);

// Block the tooltip from staying open after clicking the link
function handleClick(e: MouseEvent) {
  open.value = false;
  const element = e.currentTarget as HTMLElement | null;
  element?.blur();
}
</script>

<template>
  <TooltipProvider>
    <Tooltip v-model:open="open" :delay-duration="100">
      <TooltipTrigger as-child>
        <a :href="`https://github.com/${props.member.username}`" target="_blank" @click="handleClick">
          <Avatar>
            <AvatarImage :src="'https://github.com/' + props.member.username + '.png'" :alt="props.member.username"/>
            <AvatarFallback>{{ props.member.fallback }}</AvatarFallback>
          </Avatar>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        {{ props.member.username }}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<style scoped>

</style>
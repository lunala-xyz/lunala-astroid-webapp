<script setup lang="ts">
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
interface Props { member: TeamMember }
const props = defineProps<Props>()
</script>

<template>
  <TooltipProvider>
    <Tooltip :delay-duration="100">
      <TooltipTrigger as-child>
        <a :href="`https://github.com/${props.member.username}`" target="_blank">
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
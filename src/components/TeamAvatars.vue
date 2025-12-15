<script setup lang="ts">
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from '@/components/ui/tooltip'

const props = defineProps<{
  teamMembers: Array<TeamMember>,
}>();
</script>

<template>
  <TooltipProvider>
    <div class="flex flex-row flex-wrap items-center gap-4 mt-1 mb-3">
      <div v-for="member in props.teamMembers" :key=member.username>
        <Tooltip :delay-duration="100">
          <TooltipTrigger as-child>
            <a :href="`https://github.com/${member.username}`" target="_blank">
              <Avatar>
                <AvatarImage :src="'https://github.com/' + member.username + '.png'" :alt="member.username"/>
                <AvatarFallback>{{ member.fallback }}</AvatarFallback>
              </Avatar>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            {{ member.username }}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  </TooltipProvider>
</template>
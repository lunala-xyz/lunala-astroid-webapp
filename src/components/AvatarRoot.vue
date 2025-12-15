<script setup lang="ts">
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
const click = function sendToGithub(username: string) {

}

const teamMembers = [{
  username: "MineKID-LP",
  fallback: "MK",
}, {
  username: "YannickMyxe",
  fallback: "Yan",
}, {
  username: "Gameboys360",
  fallback: "GB",
},
];
</script>

<template>
  <div class="flex flex-row flex-wrap items-center gap-4">
    <div v-for="member in teamMembers" :key=member.username>
      <TooltipProvider @click="click(member.username)">
        <Tooltip>
          <TooltipTrigger as-child>
            <Avatar>
              <AvatarImage :src="'https://github.com/' + member.username + '.png'" :alt="member.username"/>
              <AvatarFallback>{{ member.fallback }}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            {{ member.username }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
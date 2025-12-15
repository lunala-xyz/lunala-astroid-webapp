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
  avatar: "https://github.com/MineKID-LP.png",
  alt: "minekid-lp", fallback: "MK",
}, {
  avatar: "https://github.com/YannickMyxe.png",
  alt: "YannickMyxe", fallback: "Yan",
}, {
  avatar: "https://github.com/Gameboys360.png",
  alt: "Gameboys360", fallback: "GB",
},
];
</script>

<template>
  <div class="flex flex-row flex-wrap items-center gap-4">
    <div v-for="member in teamMembers" :key=member.alt>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Avatar>
              <AvatarImage :src="member.avatar" :alt="member.alt"/>
              <AvatarFallback>{{ member.fallback }}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            {{member.alt}}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
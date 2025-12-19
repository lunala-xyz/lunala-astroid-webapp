<script setup lang="ts">
import AvatarWithTooltip from "@/components/AvatarWithTooltip.vue";

const props = defineProps<{
  teamMembers: Array<TeamMember>,
}>();
</script>

<template>
    <div class="flex flex-row flex-wrap items-center gap-4 mt-1 mb-3">
      <div v-for="member in props.teamMembers" :key=member.username>
       <AvatarWithTooltip :member="member" />
      </div>
    </div>
</template>
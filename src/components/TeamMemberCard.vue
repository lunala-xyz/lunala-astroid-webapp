<script setup lang="ts">
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from '@/components/ui/card'
import AvatarWithTooltip from "@/components/AvatarWithTooltip.vue";

interface Props {
  member: TeamMemberExtended;
}

const props = defineProps<Props>();
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <div class="flex flex-row">
          <AvatarWithTooltip :member="props.member" class="mr-3"/>
          <span class="ml-3 mt-2">{{ props.member.username }} </span>
        </div>
      </CardTitle>
      <CardDescription>{{ props.member.role }}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{{ props.member.description }}</p>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
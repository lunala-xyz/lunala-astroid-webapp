<script setup lang="ts">
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from '@/components/ui/card'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

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
          <Avatar class="mr-3">
            <AvatarImage :src="'https://github.com/' + props.member.username + '.png'" :alt="props.member.username"/>
            <AvatarFallback>{{ member.fallback }}</AvatarFallback>
          </Avatar>
          <span class="mr-1 mt-2">{{ props.member.username }} </span>
        </div>
      </CardTitle>
      <CardDescription>{{props.member.role}}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{{props.member.description}}</p>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
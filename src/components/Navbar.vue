<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {ref} from "vue";
import ModeToggle from "@/components/ModeToggle.vue";

const navItems = ref([
  {text: 'Home', link: '/'},
  {text: 'About', link: '/about'},
  {text: 'Projects', link: '/projects'},
  {text: 'Blog', link: '/blog'},
  {text: 'Source', link: 'https://github.com/lunala-xyz'},
]);
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="item in navItems" :key="item.text">
        <NavigationMenuLink :href="item.link" class="text-primary">
          {{item.text}}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
    <ModeToggle/>
  </NavigationMenu>
</template>

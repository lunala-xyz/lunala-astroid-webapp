<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {ref} from "vue";

const navItems = ref([
  {text: 'Home', link: '/'},
  {text: 'About', link: '/about'},
  {text: 'Source', link: 'https://github.com/Lunala-Studio/Lunala-Astro'},
]);
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="item in navItems">
        <NavigationMenuLink :href="item.link">
          {{item.text}}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

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
  {text: 'Home', link: '/lunala-astroid-webapp'},
//{text: 'About', link: '/about'},
  {text: 'Projects', link: '/lunala-astroid-webapp/projects'},
  {text: 'Blog', link: '/lunala-astroid-webapp/blog'},
  {text: 'Source', link: 'https://github.com/lunala-xyz', blank: true},
]);
</script>

<template>
  <div class="flex w-full justify-between items-center px-5 bg-secondary py-3">
    <a href="/" class="text-lg font-bold text-accent-foreground">Lunala</a>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem v-for="item in navItems" :key="item.text">
          <NavigationMenuLink :href="item.link" class="text-primary" :blank="item.blank">
            {{item.text}}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <ModeToggle/>
  </div>
</template>

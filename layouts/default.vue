<template>
  <div class="navBarLayout">
      <v-layout>
        <v-app-bar scroll-behavior="hide">
          <v-app-bar-nav-icon @click="drawer=!drawer"/>
          <v-app-bar-title>Testing Proper Project Structure</v-app-bar-title>
          <v-btn @click="toggleTheme">
            Don't Burn Your Retinas
          </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer">
          <v-list-item>
              <v-list-item-title class="text-h6"> Dima's Project</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" nav>
                <nuxt-link :to="item.link">
                <v-icon>{{ item.icon }}</v-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </nuxt-link>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <slot />
  </div>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()
    let drawer = ref(false)
    let items = [
      {title:'Videogame Filter', icon:'mdi-controller', link:'/'},
      {title:'Lifting Numbers', icon:'mdi-weight-lifter',link:'/lifts'},
      {title:'Not sure yet', icon:'mdi-help',link:'/wip'},
    ]

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
      drawer, items
    }
  },
}
</script>

<style scoped>
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
</style>

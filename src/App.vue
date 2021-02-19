<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="mytitle" />
      <!-- <v-toolbar-title>WelcomeToTheWorld</v-toolbar-title> -->
      <v-spacer />
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <site-menu />
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <!-- <v-main>
      <HelloWorld />
    </v-main> -->
    <site-footer :footer="myfooter" />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import SiteTitle from '@/views/layout/title'
import SiteFooter from '@/views/layout/footer'
import SiteMenu from '@/views/layout/menu'

export default {
  name: 'App',

  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu
  },

  data: () => ({
    drawer: false,
    mytitle: 'WelcomeToTheWorld',
    myfooter: 'myfootertest'
  })
}
</script>

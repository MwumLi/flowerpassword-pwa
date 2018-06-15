<template>
  <v-app dark>
    <v-content :class="{'mx-auto': isBigScreen}">
      <router-view/>
    </v-content>
    <v-bottom-nav :value="true" :active.sync="tab" absolute color="transparent" app>
      <router-link to="/">
      <v-btn flat color="teal" value="fpcode">
        <span>生成</span>
        <v-icon>history</v-icon>
      </v-btn>
      </router-link>
      <router-link to="/setting">
      <v-btn flat color="teal" value="setting">
        <span>设置</span>
        <v-icon>settings</v-icon>
      </v-btn>
      </router-link>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      tab: this.$router.currentRoute.name
    }
  },
  name: 'App',
  computed: {
    isBigScreen () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

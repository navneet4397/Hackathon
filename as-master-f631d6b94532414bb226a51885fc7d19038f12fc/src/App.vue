
<template>
  <v-app>
    <div id="nav"></div>
    <v-flex>
      <v-navigation-drawer v-model="drawer"  app
    >
       
&nbsp;
        <v-switch v-model="$vuetify.theme.dark" hide-details inset label="Dark Mode"></v-switch>

        <v-list dense>
          <v-list-item @click="$router.push('/about')">
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>COVID-19</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push('/faq')" >
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>FAQs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>



            <v-list-item @click="$router.push('/')" >
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          

        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="teal lighten-3" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Novel Corona Virus</v-toolbar-title>
        <v-spacer></v-spacer>

            <v-btn flat depressed>
                <!-- <a href="https://geojson.in/" target="_blank" rel="noopener">Live updates</a> -->
                <a style="text-decoration:none; color:inherit;" href="https://news.google.com/covid19/map?hl=en-IN&gl=IN&ceid=IN:en"> Live updates</a>
            </v-btn>
      </v-app-bar>
    </v-flex>

    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>



export default {
  name: "App",
  
  props: {
    attrs: {
      type: Object,
      default: () => ({})
    }
  },

  data1: vm => ({
    initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false
  }),

  beforeDestroy() {
    if (!this.$vuetify) return;

    this.$vuetify.theme.dark = this.initialDark;
  },

  data() {
    return {
      drawer: false,
    }
  },

 

  
};
</script>

<style>

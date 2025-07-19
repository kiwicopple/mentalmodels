<template>
  <div class="page-container md-layout-column">
    <md-toolbar  md-elevation="0">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <img src="/static/img/icons/icon-128x128.png" />
      </md-button>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" class="sidebar">

      <div class="close-sidebar">
        <md-button class="md-icon-button" @click="() => {showNavigation = false}">
          <img src="/static/img/x.svg" alt="X" />
        </md-button>
      </div>
      <md-content>
        <img src="/static/img/mm-logo.svg" class="main-logo" />
      </md-content>

      <md-list>
        <md-subheader>Filter Topics</md-subheader>
        <md-list-item @click="toggleSelectedCategories">Toggle All</md-list-item>
        <md-list-item v-for="(c, index) in categoryList" :key="index">
          <md-checkbox :value="c" class="md-accent selected" v-model="categories" />
          <span class="md-list-item-text">{{c}} ({{categoryCount(c)}})</span>
        </md-list-item>
      </md-list>

      <md-content>
        <h3 class="md-caption">About</h3>
        <p>Mental models are "core concepts". They unchanging fundamentals for a particular subject.<br> Learning these concepts will give you a better comprehension of the world and help you make rational decisions.</p>
        <p>This app is a shuffled list of {{modelList.length}} mental models, grouped into {{categoryList.length}} color-coded categories.</p>
        <p>Try to do a few each day. Spaced repetition will help you remember. If you are using a mobile you can add this page to your homescreen and use it offline.</p>
      </md-content>

      <md-content>
        <h3 class="md-caption">Acknowledgements</h3>
        <p>
          <small>Credit for models</small>
        </p>
        <ul>
          <li><a href="https://www.farnamstreetblog.com/mental-models/" target="_blank">Farnam Street</a></li>
          <li><a href="https://yourlogicalfallacyis.com" target="_blank">Your Logical Fallacy Is</a></li>
        </ul>

      </md-content>
      <md-content>
        <h3 class="md-caption">Source Code</h3>
        <p><small>You can find the source code for this app on <a href="https://github.com/kiwicopple/mentalmodels" target="_blank">Github</a></small></p>
      </md-content>

    </md-drawer>


    <router-view></router-view>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    categories: [
      'Logical Fallacies',
      'General Thinking Concepts',
      'Numeracy',
      'Systems',
      'Physical World',
      'The Biological World',
      'Human Nature & Judgment',
      'Microeconomics & Strategy',
      'Military & War'
    ]
  }),
  watch: {
    categories: function () {
      console.log('this.categories', this.categories)
      this.$store.commit('SET_SELECTED_CATEGORIES', this.categories)
    }
  },
  computed: {
    ...mapGetters([
      'modelList',
      'categoryList',
      'selectedCategories'
    ])
  },
  methods: {
    categoryCount (categoryName) {
      return this.modelList.filter(c => c.category === categoryName).length
    },
    shuffle (array) {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
      return array
    },
    toggleSelectedCategories () {
      this.categories = (this.selectedCategories.length === this.categoryList.length) ? [] : this.categoryList.slice(0)
    }
  }
}
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine
  @include md-register-theme("default", (
    primary: rgba(0,0,0,0.1), // The primary color of your application
    accent: md-get-palette-color(red, A200) // The accent and secondary color
  ));
  @import "~vue-material/dist/theme/all"; // Apply the theme

  #overide-bg-white {
    background: #ffffff !important;
    background-color: #ffffff !important;
  }
  html, body {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
  }
  .main-logo {
    width: 50%;
    max-width: 200px;
    display: block;
    margin: 0;
  }

  .md-drawer {
    width: 80%;
    max-width: 450px;

    a {
      color: #4E74FF !important;
      &.padded {
        display: inline-block;
        margin: 10px 0 0 0;
      }
    }
  }
  .close-sidebar {
    text-align: right;
  }

  .md-layout, .md-content {
    padding: 16px;
  }

</style>

<template>
  <div class="page-container md-layout-column">
    <md-toolbar  md-elevation="0">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <img src="/static/img/icons/icon-128x128.png" />
      </md-button>
      <!-- <span class="md-title">Mental Models</span> -->

      <!-- <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click="showSidepanel = true">
          <md-icon>filter_list</md-icon>
        </md-button>
      </div> -->
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

        <md-list-item v-for="(c, index) in categoryList" :key="index">
          <md-checkbox v-model="categories" :value="c" class="md-accent" />
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
        <h3 class="md-caption">Support</h3>
        <p><small>I don't plan to put adwords on this site, but if you want to show your support then check out one of my other sites. </small></p>
        <ul>
          <li><a href="https://pollygot.com" target="_blank" class="padded">Pollygot</a></li>
          <li><a href="https://braineebox.com" target="_blank" class="padded">BraineeBox</a></li>
        </ul>
      </md-content>

    </md-drawer>



      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <EmptyCard  v-if="!shuffledModels.length" />
          <ModelCard
            v-if="shuffledModels.length"
            :model="currentModel"
            @onNext="nextModel"
            @onPrevious="previousModel"
          />
          <p class="md-caption" v-if="shuffledModels.length"> {{cardIndex + 1}} / {{shuffledModels.length}}</p>
        </div>

      </div>




  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyCard from './components/EmptyCard'
import ModelCard from './components/ModelCard'
export default {
  name: 'app',
  components: { EmptyCard, ModelCard },
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    cardIndex: 0,
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
  computed: {
    ...mapGetters([
      'modelList',
      'categoryList'
    ]),
    shuffledModels: function () {
      let filtered = this.modelList.filter(m => this.categories.includes(m.category))
      return this.shuffle(filtered)
    },
    currentModel: function () {
      return this.shuffledModels[this.cardIndex]
    }
  },
  methods: {
    categoryCount (categoryName) {
      return this.modelList.filter(c => c.category === categoryName).length
    },
    nextModel () {
      this.cardIndex = (this.cardIndex + 1) >= this.shuffledModels.length ? 0 : this.cardIndex + 1
    },
    previousModel () {
      this.cardIndex = (this.cardIndex - 1) < 0 ? (this.shuffledModels.length - 1) : this.cardIndex - 1
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

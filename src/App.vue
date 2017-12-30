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

      <md-content>
        <img src="/static/img/mm-logo.svg" class="main-logo" />
      </md-content>

      <md-list>
        <md-subheader>Filter</md-subheader>

        <md-list-item v-for="c in categoryList">
          <md-checkbox v-model="categories" :value="c" class="md-accent" />
          <span class="md-list-item-text">{{c}}</span>
        </md-list-item>
      </md-list>

      <md-content>
        <h3 class="md-caption">About</h3>
        <p>Mental models are "core concepts". They unchanging fundamentals for a particular subject.<br> Learning these concepts will give you a better comprehension of the world and help you make rational decisions.</p>
        <p>This app is a list of 113 mental models, grouped into 8 color-coded categories. The models are shuffled in a randome order.</p>
        <p>Try to do a few each day. Spaced repetition will help you remember. If you are using a mobile you can add this page to your homescreen and use it offline.</p>
      </md-content>

      <md-content>
        <h3 class="md-caption">Acknowledgements</h3>
        <p>Credit for all mental models goes to <a href="https://www.farnamstreetblog.com/mental-models/" target="_blank">Farnam Street</a>.</p>
      </md-content>
      <md-content>
        <h3 class="md-caption">Support</h3>
        <p><small>I don't plan to put adwords on this site, but if you want to show your support then check out one of my other sites. <br>
          <a href="https://pollygot.com" target="_blank" class="padded">Pollygot</a> <br>
          <a href="https://braineebox.com" target="_blank" class="padded">BraineeBox</a><br>
          </small>
        </p>
      </md-content>

    </md-drawer>



      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <md-card class="md-primary"
          v-bind:class="{
            'show-description': showDescription,
            'blue-card': currentModel.category === 'General Thinking Concepts',
            'black-card': currentModel.category === 'Numeracy',
            'purple-card': currentModel.category === 'Systems',
            'green-card': currentModel.category === 'Physical World',
            'orange-card': currentModel.category === 'The Biological World',
            'pink-card': currentModel.category === 'Human Nature & Judgment',
            'yellow-card': currentModel.category === 'Microeconomics & Strategy',
            'red-card': currentModel.category === 'Military & War',
          }">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{currentModel.name}}</div>
                <div class="md-subhead">{{currentModel.category}}</div>
              </md-card-header-text>
            </md-card-header>
            <md-card-content class="description">
               {{currentModel.description}}
             </md-card-content>
            <md-card-actions class="actions">
              <md-button @click="nextModel()"  class="btn-next">Next</md-button>
            </md-card-actions>
          </md-card>

          <p class="md-caption"> {{cardIndex + 1}} / {{shuffledModels.length}}</p>
        </div>

      </div>




  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    showDescription: false,
    cardIndex: 0,
    categories: [
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
    showDetails () {
      this.showDescription = true
    },
    nextModel () {
      this.showDescription = false
      this.cardIndex = (this.cardIndex + 1) >= this.shuffledModels.length ? 0 : this.cardIndex + 1
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

  .md-layout, .md-content {
    padding: 16px;
  }
  .description {
    white-space: pre-wrap;
  }
  .blue-card {
    background: #2196F3 !important;
    color: white !important;
  }
  .black-card {
    background: black !important;
    color: white !important;
  }
  .purple-card {
    background: #9C27B0 !important;
    color: white !important;
  }
  .green-card {
    background: #4CAF50 !important;
    color: white !important;
  }
  .orange-card {
    background: #FF9800 !important;
    color: white !important;
  }
  .red-card {
    background: #f44336 !important;
    color: white !important;
  }
  .yellow-card {
    background: #FFEB3B !important;
    color: #000 !important;
    .md-button {
      color: #000 !important;
    }
  }
  .pink-card {
    background: #E91E63 !important;
    color: white !important;
  }
  .description, .actions {
    background: #f9f8f8 !important;
    color: #333 !important;
    .md-button {
      color: #333 !important;
    }
  }
</style>

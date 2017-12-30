<template>
  <div class="page-container md-layout-column">
    <md-toolbar  md-elevation="0">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <img src="/static/img/icons/icon-128x128.png" />
      </md-button>
      <!-- <span class="md-title">Mental Models</span> -->
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" class="sidebar">

      <md-content>
        <img src="/static/img/mm-logo.svg" class="main-logo" />
      </md-content>

      <md-content>
        <h3 class="md-caption">About</h3>
        <p>Mental Models are ways of thinking. <br> You can use them in real-life situations to make rationale decisions.</p>
        <p>This app is a list of 113 mental models, grouped into categories. You are randomly shown one mental model as a "flash card", with the description on the "back".</p>
        <p>Try to do a few each day. The spaced repetition will help you to remember them and to act rationally throughout the day.</p>
      </md-content>

      <md-content>
        <h3 class="md-caption">Acknowledgements</h3>
        <p>Credit for all mental models goes to <a href="https://www.farnamstreetblog.com/mental-models/" target="_blank">Farnam Street</a>.</p>
      </md-content>
      <md-content>
        <h3 class="md-caption">Support</h3>
        <p>I don't plan to put adwords on this site. <br>
          <small>Warning: plug (sorry)</small><br>
          If you want to show your the check out one of my other sites: <br>
          <a href="https://pollygot.com" target="_blank" class="padded">Pollygot</a> <br>
          <a href="https://braineebox.com" target="_blank" class="padded">BraineeBox</a>
        </p>
      </md-content>

    </md-drawer>

    <md-content>

      <md-card class="md-primary" md-theme="blue-card" v-bind:class="{ 'show-description': showDescription }">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Inversion</div>
            <div class="md-subhead">General Thinking Concepts</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content v-show="showDescription" >
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
         </md-card-content>
        <md-card-actions>
          <md-button @click="nextModel()"  v-show="showDescription" class="btn-next md-raised md-primary">Next</md-button>
          <md-button @click="showDetails()" v-show="!showDescription">Description</md-button>
        </md-card-actions>
      </md-card>

    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      showDescription: false
    }),
    methods: {
      showDetails () {
        this.showDescription = true
      },
      nextModel () {
        this.showDescription = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine"; // Import the theme engine
  @include md-register-theme("default", (
    primary: rgba(0,0,0,0.1), // The primary color of your application
    accent: md-get-palette-color(red, A200) // The accent and secondary color
  ));
  @include md-register-theme("green-card", (
    primary: md-get-palette-color(green, 500)
  ));
  @include md-register-theme("blu-card", (
    primary: md-get-palette-color(black, 500)
  ));
  @include md-register-theme("blue-card", (
    primary: md-get-palette-color(blue, 500)
  ));
  @include md-register-theme("purple-card", (
    primary: md-get-palette-color(purple, 500)
  ));
  @include md-register-theme("orange-card", (
    primary: md-get-palette-color(orange, 500)
  ));
  @import "~vue-material/dist/theme/all"; // Apply the theme
  // @import "~vue-material/base/theme";
  @import "~vue-material/dist/components/MdCard/theme";

  * {
    transition: all 0.2s ease;
  }
  .main-logo {
    width: 80%;
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

  .md-content {
    padding: 16px;
  }

  .md-card.show-description {
    background: #f9f8f8 !important;
    color: #333 !important;
    .md-title, .md-subhead {
      color: #333 !important;
    }
  }
</style>

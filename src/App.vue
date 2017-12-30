<template>
  <div class="page-container md-layout-column">
    <md-toolbar  md-elevation="0">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <!-- <span class="md-title">Mental Models</span> -->
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
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
   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
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

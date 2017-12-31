<template>
  <md-card class="md-primary"
    v-bind:class="{
      'blue-card': model.category === 'General Thinking Concepts',
      'black-card': model.category === 'Numeracy',
      'purple-card': model.category === 'Systems',
      'green-card': model.category === 'Physical World',
      'orange-card': model.category === 'The Biological World',
      'pink-card': model.category === 'Human Nature & Judgment',
      'yellow-card': model.category === 'Microeconomics & Strategy',
      'red-card': model.category === 'Military & War',
    }">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{model.name}}</div>
        <div class="md-subhead">{{model.category}}</div>
      </md-card-header-text>
      <md-menu md-size="big" md-direction="bottom-end">
        <md-button class="md-icon-button" @click="google(model)">
          <img src="/static/img/google.svg" alt="G" />
        </md-button>
      </md-menu>
    </md-card-header>
    </md-card-header>
    <md-card-content class="description">
       {{model.description}}
     </md-card-content>
    <md-card-actions class="actions">
      <md-button @click="previousModel()"  class="btn-next">Back</md-button>
      <md-button @click="nextModel()"  class="btn-next">Next</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props: ['model'],
  name: 'ModelCard',
  data: () => ({}),
  methods: {
    nextModel () {
      this.$emit('onNext')
    },
    previousModel () {
      this.$emit('onPrevious')
    },
    google (model) {
      let url = 'https://www.google.com/search?q=' + model.name
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.description {
  white-space: pre-wrap;
}
.empty-card {
  color: #333 !important;
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

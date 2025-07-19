<template>
  <q-card 
    class="model-card q-ma-md"
    :class="cardClass"
    style="width: 100%; max-width: 500px;"
  >
    <q-card-section class="card-header">
      <div class="row items-center justify-between">
        <div>
          <div class="text-h6 text-weight-bold">{{ model.name }}</div>
          <div class="text-subtitle2">{{ model.category }}</div>
        </div>
        <q-btn
          flat
          round
          icon="search"
          @click="google(model)"
          :color="isYellowCard ? 'dark' : 'white'"
        >
          <q-tooltip>Search on Google</q-tooltip>
        </q-btn>
      </div>
    </q-card-section>
    
    <q-separator />
    
    <q-card-section class="description bg-grey-1 text-dark">
      <div class="text-body1" style="white-space: pre-wrap;">
        {{ model.description }}
      </div>
    </q-card-section>
    
    <q-card-actions class="bg-grey-1 justify-between">
      <q-btn 
        flat 
        label="Back" 
        color="primary"
        @click="previousModel()"
      />
      <q-btn 
        flat 
        label="Next" 
        color="primary"
        @click="nextModel()"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ModelCard',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  emits: ['onNext', 'onPrevious'],
  setup(props, { emit }) {
    const cardClass = computed(() => {
      const categoryClasses = {
        'Logical Fallacies': 'cyan-card',
        'General Thinking Concepts': 'blue-card',
        'Numeracy': 'black-card',
        'Systems': 'purple-card',
        'Physical World': 'green-card',
        'The Biological World': 'orange-card',
        'Human Nature & Judgment': 'pink-card',
        'Microeconomics & Strategy': 'yellow-card',
        'Military & War': 'red-card'
      }
      return categoryClasses[props.model.category] || ''
    })
    
    const isYellowCard = computed(() => {
      return props.model.category === 'Microeconomics & Strategy'
    })
    
    const nextModel = () => {
      emit('onNext')
    }
    
    const previousModel = () => {
      emit('onPrevious')
    }
    
    const google = (model) => {
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(model.name)
      window.open(url, '_blank')
    }
    
    return {
      cardClass,
      isYellowCard,
      nextModel,
      previousModel,
      google
    }
  }
}
</script>

<style lang="scss" scoped>
.model-card {
  .card-header {
    color: white;
  }
  
  &.cyan-card .card-header {
    background: #00BCD4;
  }
  
  &.blue-card .card-header {
    background: #2196F3;
  }
  
  &.black-card .card-header {
    background: black;
  }
  
  &.purple-card .card-header {
    background: #9C27B0;
  }
  
  &.green-card .card-header {
    background: #4CAF50;
  }
  
  &.orange-card .card-header {
    background: #FF9800;
  }
  
  &.red-card .card-header {
    background: #f44336;
  }
  
  &.yellow-card .card-header {
    background: #FFEB3B;
    color: #000;
  }
  
  &.pink-card .card-header {
    background: #E91E63;
  }
}
</style>
<template>
  <q-page class="flex flex-center">
    <div class="column items-center q-pa-md" style="max-width: 600px; width: 100%;">
      <EmptyCard v-if="!shuffledModels.length" />
      
      <template v-if="shuffledModels.length">
        <div class="text-caption text-grey-6 q-mb-md">
          {{ cardIndex + 1 }} / {{ shuffledModels.length }}
        </div>
        
        <ModelCard
          :model="currentModel"
          @onNext="nextModel"
          @onPrevious="previousModel"
          class="q-mb-md"
        />
        
        <Form :model="currentModel" />
      </template>
    </div>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useModelsStore } from '../store'
import EmptyCard from './EmptyCard.vue'
import ModelCard from './ModelCard.vue'
import Form from './Form.vue'

export default {
  name: 'Models',
  components: { EmptyCard, ModelCard, Form },
  setup() {
    const store = useModelsStore()
    
    const shuffledModels = computed(() => {
      const filtered = store.modelList.filter(m => 
        store.selectedCategories.includes(m.category)
      )
      return shuffle(filtered)
    })
    
    const currentModel = computed(() => {
      return shuffledModels.value[store.cardIndex]
    })
    
    const cardIndex = computed(() => store.cardIndex)
    
    const nextModel = () => {
      const i = (store.cardIndex + 1) >= shuffledModels.value.length 
        ? 0 
        : store.cardIndex + 1
      store.setCardIndex(i)
    }
    
    const previousModel = () => {
      const i = (store.cardIndex - 1) < 0 
        ? (shuffledModels.value.length - 1) 
        : store.cardIndex - 1
      store.setCardIndex(i)
    }
    
    const shuffle = (array) => {
      const shuffled = [...array]
      let currentIndex = shuffled.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = shuffled[currentIndex]
        shuffled[currentIndex] = shuffled[randomIndex]
        shuffled[randomIndex] = temporaryValue
      }
      return shuffled
    }
    
    return {
      shuffledModels,
      currentModel,
      cardIndex,
      nextModel,
      previousModel
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
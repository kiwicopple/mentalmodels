<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-size-50 md-small-size-100">
      <EmptyCard v-if="!shuffledModels.length" />
      <p class="md-caption" v-if="shuffledModels.length"> {{cardIndex + 1}} / {{shuffledModels.length}}</p>
      <ModelCard
        v-if="shuffledModels.length"
        :model="currentModel"
        @onNext="nextModel"
        @onPrevious="previousModel"
      />
      <Form :model="currentModel" v-if="shuffledModels.length" />
    </div>

  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import EmptyCard from './EmptyCard'
import ModelCard from './ModelCard'
import Form from './Form'
export default {
  name: 'app',
  props: ['category', 'model'],
  components: { EmptyCard, ModelCard, Form },
  mounted: () => {
    // console.log('this.category', this.$route.params.category)
  },
  data: () => ({ }),
  computed: {
    ...mapGetters([
      'categoryCount',
      'categoryList',
      'cardIndex',
      'modelList',
      'selectedCategories'
    ]),
    shuffledModels: function () {
      let filtered = this.modelList.filter(m => this.selectedCategories.includes(m.category))
      return this.shuffle(filtered)
    },
    currentModel: function () {
      return this.shuffledModels[this.cardIndex]
    }
  },
  methods: {
    nextModel () {
      let i = (this.cardIndex + 1) >= this.shuffledModels.length ? 0 : this.cardIndex + 1
      this.$store.commit('SET_CARD_INDEX', i)
    },
    previousModel () {
      let i = (this.cardIndex - 1) < 0 ? (this.shuffledModels.length - 1) : this.cardIndex - 1
      this.$store.commit('SET_CARD_INDEX', i)
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

<style lang="scss" scoped>
</style>

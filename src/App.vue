<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-avatar>
          <img src="/img/icons/icon-128x128.png" />
        </q-avatar>
        <q-toolbar-title>
          Mental Models
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
      :width="300"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label header class="text-grey-8">
            <q-btn flat dense round icon="close" @click="leftDrawerOpen = false" class="float-right" />
          </q-item-label>
          
          <q-item class="q-mt-md">
            <q-item-section avatar>
              <q-avatar>
                <img src="/img/mm-logo.svg" class="main-logo" />
              </q-avatar>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item-label header class="text-grey-8">
            Filter Topics
          </q-item-label>

          <q-item clickable @click="toggleSelectedCategories">
            <q-item-section>
              <q-item-label>Toggle All</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-for="(category, index) in categoryList" :key="index">
            <q-item-section side>
              <q-checkbox 
                v-model="selectedCategories" 
                :val="category" 
                color="primary"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ category }} ({{ categoryCount(category) }})</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item-label header class="text-grey-8">
            About
          </q-item-label>
          
          <q-item>
            <q-item-section>
              <q-item-label class="text-caption">
                Mental models are "core concepts". They unchanging fundamentals for a particular subject.
                Learning these concepts will give you a better comprehension of the world and help you make rational decisions.
              </q-item-label>
              <q-item-label class="text-caption q-mt-sm">
                This app is a shuffled list of {{ modelList.length }} mental models, grouped into {{ categoryList.length }} color-coded categories.
              </q-item-label>
              <q-item-label class="text-caption q-mt-sm">
                Try to do a few each day. Spaced repetition will help you remember. If you are using a mobile you can add this page to your homescreen and use it offline.
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item-label header class="text-grey-8">
            Acknowledgements
          </q-item-label>
          
          <q-item>
            <q-item-section>
              <q-item-label class="text-caption">Credit for models</q-item-label>
              <q-list dense>
                <q-item dense>
                  <q-item-section>
                    <a href="https://www.farnamstreetblog.com/mental-models/" target="_blank" class="text-primary">Farnam Street</a>
                  </q-item-section>
                </q-item>
                <q-item dense>
                  <q-item-section>
                    <a href="https://yourlogicalfallacyis.com" target="_blank" class="text-primary">Your Logical Fallacy Is</a>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item-label header class="text-grey-8">
            Source Code
          </q-item-label>
          
          <q-item>
            <q-item-section>
              <q-item-label class="text-caption">
                You can find the source code for this app on 
                <a href="https://github.com/kiwicopple/mentalmodels" target="_blank" class="text-primary">Github</a>
              </q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useModelsStore } from './store'

export default {
  name: 'App',
  setup() {
    const store = useModelsStore()
    const leftDrawerOpen = ref(false)
    
    const selectedCategories = ref([
      'Logical Fallacies',
      'General Thinking Concepts',
      'Numeracy',
      'Systems',
      'Physical World',
      'The Biological World',
      'Human Nature & Judgment',
      'Microeconomics & Strategy',
      'Military & War'
    ])

    const categoryList = computed(() => store.categoryList)
    const modelList = computed(() => store.modelList)

    watch(selectedCategories, (newCategories) => {
      store.setSelectedCategories(newCategories)
    }, { deep: true })

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const categoryCount = (categoryName) => {
      return modelList.value.filter(c => c.category === categoryName).length
    }

    const toggleSelectedCategories = () => {
      selectedCategories.value = selectedCategories.value.length === categoryList.value.length 
        ? [] 
        : [...categoryList.value]
    }

    return {
      leftDrawerOpen,
      selectedCategories,
      categoryList,
      modelList,
      toggleLeftDrawer,
      categoryCount,
      toggleSelectedCategories
    }
  }
}
</script>

<style lang="scss">
html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}

.main-logo {
  width: 100%;
  max-width: 120px;
  display: block;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
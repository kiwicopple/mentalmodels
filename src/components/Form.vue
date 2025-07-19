<template>
  <q-card class="suggestion-form q-ma-md" style="width: 100%; max-width: 500px;">
    <q-card-section>
      <div class="text-h6 q-mb-md">Suggest an Improvement</div>
      
      <form action="https://formspree.io/pcopplestone@gmail.com" method="POST">
        <q-input
          v-model="suggestion"
          type="textarea"
          outlined
          label="Suggest an improved description"
          rows="4"
          class="q-mb-md"
        />
        
        <input type="hidden" name="category" :value="model.category">
        <input type="hidden" name="model" :value="model.name">
        <input type="hidden" name="suggestion" :value="suggestion">
        
        <div class="row justify-end">
          <q-btn 
            type="submit" 
            color="primary" 
            label="Send Suggestion"
            :disable="!suggestion.trim()"
          />
        </div>
      </form>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Form',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  setup() {
    const suggestion = ref('')
    
    return {
      suggestion
    }
  }
}
</script>

<style lang="scss" scoped>
.suggestion-form {
  margin-top: 20px;
}
</style>
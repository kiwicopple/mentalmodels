<template>
  <form action="https://formspree.io/pcopplestone@gmail.com" method="POST">
    <md-field>
      <label>Suggest an improved description</label>
      <md-textarea v-model="suggestion"></md-textarea>
    </md-field>
    <input type="hidden" name="category" :value="model.category">
    <input type="hidden" name="model" :value="model.name">
    <input type="hidden" name="suggestion" :value="suggestion">
    <div class="right">
      <md-button type="submit" class="btn-no-margin md-raised">Send</md-button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model'],
  name: 'EmptyCard',
  data: () => ({
    suggestion: ''
  })
}
</script>
<style lang="scss" scoped>
form {
  margin-top: 50px;
}
.right {
  text-align: right;
  .btn-no-margin {
    margin: 0;
  }
}
</style>

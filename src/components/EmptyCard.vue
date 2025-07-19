<template>
  <q-card class="empty-card q-ma-md bg-grey-3 text-dark" style="width: 100%; max-width: 500px;">
    <q-card-section class="bg-grey-5 text-center">
      <div class="text-h6 text-weight-bold">Choose Topics</div>
    </q-card-section>
    
    <q-card-section class="text-center">
      <div class="text-body1">
        Select some topics in the sidebar to get started
      </div>
      <q-icon name="arrow_back" size="2em" class="q-mt-md text-grey-6" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'EmptyCard'
}
</script>

<style lang="scss" scoped>
.empty-card {
  border: 2px dashed #ccc;
}
</style>
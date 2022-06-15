<template>
  <router-link
    class="show__link"
    :to="{ name: 'ShowDetails', params: { id: show.id } }"
  >
    <div class="show__card">
      <div class="show__card--header"> 
        <img
          :src="show.image !== null
          ? show.image.medium
          : 'https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available' "
        />
      </div>
      <div class="show__card--body">
        <h3>{{ show.name }}</h3>
        <p>{{ show.genres.join(", ") }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
    
  props: {
    show: {
      type: Object,
      required: true
    },
    
  }
}
</script>

<style scoped lang="scss">

</style>
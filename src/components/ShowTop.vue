<template>
  <div class="show-toprated u-text-center">
    <h1>Critically acclaimed shows</h1>
  </div>
  <div class="show__grid">
    <div class="show__card"
      v-for="(item, index) in topRatedShows"
      :key="index"
      >
      <router-link
        class="show__link"
        :to="{ name: 'ShowDetails', 
        params: { id: item.id, shows: item.show } }"
      >
        <div class="show__card--header"> 
          <img
            v-bind:src="
              item.image !== null
              ? item.image.medium
              : 'https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available'
            "
          />
        </div>
        <div class="show__card--body">
          <h3 class="">{{ item.name }}</h3>
          <p v-if="item.rating.average">{{ item.rating.average }}/10</p>
        </div>
      </router-link> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topRatedShows: { type: Array },
  }
};
</script>

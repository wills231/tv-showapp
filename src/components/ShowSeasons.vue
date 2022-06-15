<template>
    <div v-if="seasonsInfo.length" class="showdetails-seasons">
      <h2> Seasons </h2>
      <div class="show__grid">
        <div
          class="show__card"
          v-for="(season, index) in seasonsInfo"
          :key="index"
        >
          <a :href="season.url" target="_blank">
            <div class="show__card--header">
              <img
                v-bind:src="
                season.image !== null
                  ? season.image.medium
                  : 'https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available' 
                "
                  class="u-size-small"
              />
            </div>
            <div class="show__card--body">
              Season {{ season.number }}
            </div>
          </a>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  components: {
  },
  props: { 
      seasonsInfo: { type: Array }
  }
};
</script>

<style scoped lang="scss">

  .showdetails-seasons {
    background: #c7d3da;
    padding: 24px;
    margin-bottom: 24px;
  }
  .show__card {
    height: 100%;
  }
  .show__card--body {
    padding: 16px;
  }
</style>

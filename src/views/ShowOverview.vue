<template>
  <div class="show-overview">
    <ShowTop :topRatedShows="getTopRatedShows"/>
    <div class="show-genres u-text-center">
      <h1>Check out these genres</h1>
    </div>
    <div class="show__grid">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<script>
import ShowService from '@/services/ShowService.ts'
import ShowCard from '@/components/ShowCard.vue'
import ShowTop from '@/components/ShowTop.vue'

export default {
  name: "show-overview",
  components: {
    ShowCard,
    ShowTop
  },
  data() {
    return {
      shows: [],
      query: "",
      topRatedShows: []
    }
  },

  computed: {
    getTopRatedShows() {
      const topRating = 9
      const topRatedShows = this.shows.filter(
        show => show.rating.average >= topRating
      );
      console.log('toprated:', topRatedShows)
      topRatedShows.sort((a, b) => b.rating.average - a.rating.average);
      return topRatedShows;
    }
  },

  async created() {
     ShowService.getShows()
      .then(response => {
        this.shows = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style scoped lang="scss">
  .show-overview {
    margin: 24px;
  }

  .show-search {
    text-align: center;
  }

  .searchbar__form--input {
    padding: 12px;
    margin-right: 8px;
    text-align: center;
    width: 210px;
    transition: box-shadow 200ms ease,transform 200ms ease;
    
    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -8px 8px 0 #000000;
    }
  }

  .searchbar__form--submit {
    position: absolute;
    background: white;
    padding: 12px;
    transition: box-shadow 200ms ease,transform 200ms ease;
    cursor: pointer;

    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -8px 8px 0 #000000;
    }
  }
</style>

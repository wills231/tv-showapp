<template>
  <div class="searchresults-page">
    <h3 v-show="shows.length" class="u-text-center">
      Shows found for "{{ searchQuery }}"
    </h3>
    <div v-if="shows.length" class="show__grid"> 
      <div class="show__card"
        v-for="(item, index) in shows"
        :key="index"
        >
        <router-link
          class="show__link"
          :to="{ name: 'ShowDetails',
          params: { id: item.show.id, shows: item.show } }"
        >
        <div class="show__card--header"> 
          <img
              v-bind:src="
              item.show.image !== null
              ? item.show.image.medium
              : 'https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available'
            "
          />
        </div>
        <div class="show__card--body">
          <h3 class="">{{ item.show.name }}</h3>
          <p>{{ item.show.genres.join(", ") }}</p>
          <p v-if="item.show.rating.average">{{ item.show.rating.average }}/10</p>
          <span class="u-text-small" v-else>No rating available</span>
        </div>
        </router-link>
      </div>
    </div>
    <div class="u-text-center" v-else>
      No search results for "{{ searchQuery }}""
    </div>
  </div>

</template>

<script>
import ShowService from '@/services/ShowService.ts'

export default {
  name: "show-search",
  props: ['searchQuery'],
  components: {},

  data() {
    return {
      shows: [],
    };
  },

  async created() {
    ShowService.getSearchResult(this.searchQuery)
      .then(response => {
        this.shows = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

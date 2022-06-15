<template>
  <div class="searchresults-page">
    <div class="show-search">
      <form @submit.prevent="SearchShows()" class="search-box">
        <input
          type="search"
          v-model="search"
          placeholder="What show are you looking for?"
          class="searchbar__form--input"
        />
        <button type="input" class="searchbar__form--submit">
          Search
        </button>
      </form>
    </div>
    <div class="searchresults-body">
      <div class="show__grid"> 
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
                  : 'https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available'"
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
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "search-page",

  setup () {
    const search = ref("");
    const shows = ref([]);

    const SearchShows = () => {
      if (search.value != "") {      
        fetch(`https://api.tvmaze.com/search/shows?&q=${search.value}`)
          .then(response => response.json())
          .then(data => {
            shows.value = data
            search.value = ""
        })
      }
    }

    return {
      search,
      shows,
      SearchShows
    }
  }
}
</script>

<style scoped lang="scss">
  .show__card {
    height: 450px;
  }
</style>

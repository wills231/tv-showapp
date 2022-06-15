<template>
  <div class="showdetails">
    <div class="showdetails__header">
      <img
      :src="show.image.original"
      class="img-fluid"
      />
      <div v-if="show" class="showdetails__meta">
        <div><strong><u>{{ show.name }}</u></strong></div>
        <div><strong>Network:</strong> {{ show.network.name }}</div>
        <div><strong>Language:</strong> {{ show.language }}</div>
        <div><strong>Runtime:</strong> {{ show.runtime }} min</div>
        <div><strong>Genres:</strong> {{ show.genres.join(", ") }}</div>
        <div><strong>Status:</strong> {{ show.status }}</div>
        <div><strong>Rating:</strong> {{ show.rating.average }}</div>
        <div v-html="show.summary"></div>
      </div>
      <div v-else>
        No show information
      </div>
    </div>
    <div class="showdetails__body">
        <ShowSeasons :seasons-info="getSeasonsInfo"/>
        <ShowCast :cast-info="getCastInfo"/>
        <ShowCrew :crew-info="getCrewInfo"/>
    </div>
  </div>
</template>

<script>
import ShowService from '@/services/ShowService.ts'
import ShowCrew from '@/components/ShowCrew.vue'
import ShowCast from '@/components/ShowCast.vue'
import ShowSeasons from '@/components/ShowSeasons.vue'

export default {
  props: ['id'],
  components: {
    ShowCast,
    ShowSeasons,
    ShowCrew
  },
  data() {
    return {
      show: [],
      castInfo: [],
      crewInfo: [],
      seasonsInfo: [],
    }
  },

  computed: {
    getCastInfo() {
      const castInfo = this.show._embedded.cast;
      return castInfo;
    },
    getSeasonsInfo() {
      const seasonsInfo = this.show._embedded.seasons;
      return seasonsInfo;
    },
    getCrewInfo() {
      const crewInfo = this.show._embedded.crew
      return crewInfo;
    },
  },

  async created() {
    ShowService.getShow(this.id)
      .then(response => {
        this.show = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped lang="scss">
  .showdetails {
    max-width: 1140px;
    width: 100%;
    @media (min-width: 1140px) {
      margin: 0;
      margin-top: 36px;
      margin-right: auto;
      margin-left: auto;
    }
    &__header {
      @media (min-width: 768px) {
        display: flex;
        transform: translate(4px, -4px);
        box-shadow: -8px 8px 0 #d59c30c7;
      }
    }
    &__body {
      margin: 24px;
    }
    &__meta {
      display: grid;
      grid-template-rows: repeat(6, 24px);
      grid-gap: 12px;
      background-color: white;
      padding: 24px;
      @media (min-width: 768px) {
        width: 100%;
      }
    }
  }
  .img-fluid {
    background: linear-gradient(#25333d 0%, rgba(37, 51, 61, 0) 100%);    width: 100%;
    max-height: 180px;
    object-fit: cover;
    @media (max-width: 767px) and (min-width: 425px) {
      max-width: 100%;
      max-height: 220px;
    }
    @media (min-width: 768px) {
      object-fit: cover;
      max-width: 300px;
      max-height: 500px;
      background: linear-gradient(#25333d 0%, rgba(37, 51, 61, 0) 100%);
    }
  }
  .img-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .6;
    left: 0;
    top: 0;
    background-image: linear-gradient(59deg,#222,rgba(0,0,0,.2) 45%,rgba(255,255,255,0) 70%);
  }
</style>

<template>
  <div v-if="castInfo.length" class="showdetails-cast">
    <h2>Cast</h2>
    <ul>
      <li
        v-for="(cast, index) in castInfo"
        :key="index"
      >
        {{ cast.person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import ShowService from '@/services/ShowService.ts'

export default {
  props: {
    castInfo: { type: Array },
  }
};
</script>

<style scoped lang="scss">
  .showdetails-cast {
    background: white;
    padding: 24px;
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 #d59c30c7;
    margin-bottom: 24px;
  }
</style>

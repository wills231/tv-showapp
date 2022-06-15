<template>
  <div v-if="crewInfo.length" class="showdetails-crew">
      <h2>Crew</h2>
      <ul>
        <li
          class=""
          v-for="(crew, index) in crewInfo"
          :key="index"
        >
          {{ crew.person.name }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    crewInfo: { type: Array },
  }
};
</script>

<style scoped lang="scss">
  .showdetails-crew {
    background: white;
    padding: 24px;
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 #d59c30c7;
    margin-bottom: 24px;
  }
</style>

<template>
  <div id="nav">
    <div class="header">
      <div class="header__logo">
        <img :src="require('@/assets/logo.png')"
        class="logo"
        />
      </div>
      <div class="header__nav">
        <router-link :to="{ name: 'Show Overview' } ">Home</router-link> | 
        <router-link :to="{ name: 'search-page' } ">Search</router-link>
      </div>
      <!-- WIP, disabled the quicksearch-bar -->
      
      <!-- <div class="header__searchbar">
         <form class="searchbar__form">
          <input
            type="search"
            v-model="query"
            placeholder="Quick Search"
            class="searchbar__form--input"
          />
          <router-link v-if="query"
            :to="{ name: 'search-details', params: { searchQuery: query } }"
          >
          <button type="input" class="searchbar__form--submit">
            Search<i class="fa fa-search"></i>
          </button>
          </router-link>  
        </form> 
      </div> -->
    </div>
  </div>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      query: "",
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');

body {
  background-color: #fff0e5;
  margin: 0;
}
#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  background-color: #c7d3da;
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  transition: text-decoration-color 300ms;
  text-decoration: underline 0.15em rgba(255, 255, 255, 0);
  text-underline-offset: 3px;
    &.router-link-exact-active {
      color: #2e8bba;
    }
    &:hover {
      text-decoration-color: #2e8bba;
      text-underline-offset: 3px;
    }
  }

ul {
  padding-inline-start: 0;
  column-count: 4;
  column-gap: 20px;
  list-style-type: none;
  @media (max-width: 767px) {
    column-count: 1;
  }
  @media (min-width: 768px) {
    column-count: 3;
  }
}

.header {
  max-width: 1140px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  h1 {
    margin-top: 0;
  }
  .logo {
    width: 200px;
    margin-bottom: 24px;
  }
  &__nav {

  }
  &__logo {

  }
  &__searchbar {
    position: absolute;
    top: 24px;
    right: 48px;
  }
 }

.show__grid {
  margin-top: 36px;
  max-width: 1140px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  column-gap: 16px;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
}

.show {
  &__card {
    text-align: center;
    max-width: 210px;
    height: 425px;
    overflow: hidden;
    cursor: pointer;
    background: white;
    margin-bottom: 18px;
    transition: box-shadow 200ms ease,transform 200ms ease;

    &--body {
      padding: 0 12px 0 12px;
      p {
       font-weight: 400;
     }
    }

    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -8px 8px 0 #d59c30c7;
    }
  }
  
  &__link {
    color: #2c3e50;
    text-decoration: none;
  }
}

.show-search {
  text-align: center;
}

.search-box {
  margin: 48px;
}

.searchbar__form--input {
  padding: 12px;
  margin-right: 8px;
  background-color: #ffffff;
  text-align: center;
  width: 320px;
  height: 45px;
  border: none;
  transition: box-shadow 200ms ease,transform 200ms ease;
  @media (max-width: 425px) {
    width: 100%;
  }

  &:hover {
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 #000000;
  }
}

.searchbar__form--submit {
  position: absolute;
  border: none;
  height: 45px;
  background: #2c3e50;
  padding: 12px;
  transition: box-shadow 200ms ease,transform 200ms ease;
  cursor: pointer;
  color: white;
  @media (max-width: 425px) {
    position: relative;
    width: 100%;
    margin-top: 12px;
  }

  &:hover {
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 #000000;
    background-color:#5376a6bd;
  }
}

// utilities
.u-text-small {
    font-size: 12px;
  }
.u-text-center {
    text-align: center;
  }
.u-size-small {
  max-width: 150px;
  height: 100%;
}
.u-size-large {
  max-width: 275px;
  height: 100%;
}
</style>

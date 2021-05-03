<template>
  <div>
    <h1>Add country</h1>
    <form class="add-country" @submit.prevent="submit">
      <input
          type="text"
          placeholder="Country name"
          v-model="countryName"
      >
      <input
          type="text"
          placeholder="Country capital"
          v-model="capital"
      >
      <input
          type="text"
          placeholder="Country Continent"
          v-model="continent.name"
      >
      <button type="submit">Add country</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddCountry',
  props: {},
  data() {
    return {
      countryName: '',
      capital: '',
      continent: {
        name: ''
      }
    }
  },
  methods: {
    ...mapMutations(['addCountry']),
    submit() {
      if (!this.countryName || !this.capital) {
        return;
      }
      this.addCountry({
        capital: this.countryName,
        name: this.capital,
        continent: {
          name: this.continent.name
        }
      })
    }
  }
}
</script>

<style scoped>
.add-country {
  display: block;
  padding: 0 30px 30px;
  border-bottom: 1px solid #cacaca;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  padding: 10px;
  margin: 2px;
}
button {
  cursor: pointer;
  padding: 10px;
  background-color: coral;
  margin-left: 10px;
  border: 0;
}

button:hover,
button:active,
button:focus {
  background-color: #42b983;
}
</style>

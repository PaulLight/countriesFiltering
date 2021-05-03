<template>
  <div>
    <h2>Countries List</h2>
    <router-link to="/">Home</router-link>
    <AddCountry/>

    <filterCountries
     @filter-by-limit="filterByLimit"/>

    <h2>List of Countries of the world</h2>
    <div class="country" v-for="(country, index) in allCountries" :key="index">
      <h3>{{ index += 1 }}) Country: {{ country.name }} </h3>
      <div>Capital: {{ country.capital }} </div>
    </div>
  </div>
</template>

<script>
import AddCountry from '@/components/AddCountry.vue'
import filterCountries from '@/components/filterCountries.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Countries',
  data() {
    return {
      limiter: ''
    }
  },
  components: {
    AddCountry,
    filterCountries
  },
  computed: {
    ...mapGetters(['allCountries'])
  },
  methods: {
    ...mapActions({
      getCountriesActions: 'getCountries'
    }),
    filterByLimit(limit) {
      this.limiter = limit;
      this.getCountriesActions(limit)
    }
  },
  mounted() {
    this.getCountriesActions()
  }
}
</script>

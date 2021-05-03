<template>
  <div v-if="limiterOptions.length">
    <span>Limit </span>
    <select v-model="selectLimit">
      <option :value="null">Select</option>
      <option v-for="(option, key) in limiterOptions"
              :value="option"
              :key="key"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'filterCountries',
  props: {

  },
  data() {
    return {
      selectLimit: 10,
      limiterOptions: [5, 10, 20, 30]
    }
  },
  watch: {
    selectLimit(newOption) {
      this.$emit('filter-by-limit', newOption)
    }
  }
}
</script>

<style scoped>

</style>

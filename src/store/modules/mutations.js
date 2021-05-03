export default {
    updateCountries(state, countries) {
        state.countries = countries
    },
    addCountry(state, country) {
        state.countries.unshift(country);
    }
}

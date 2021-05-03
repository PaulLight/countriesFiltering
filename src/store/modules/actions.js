export default {
    async getCountries({ commit }, limiter = 10) {
        const response = await fetch(
            `https://parseapi.back4app.com/classes/Country?count=1&limit=${limiter}&include=continent&keys=name,capital,continent,continent.name,phone,currency`,
            {
                headers: {
                    'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja',
                    'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH',
                }
            }
        );
        const { results } = await response.json();
        commit('updateCountries', results)
    }
}

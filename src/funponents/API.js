import axios from 'axios';

const BASEURL = 'https://api.nutritionix.com/v1_1/search/';
const APIKEY = '5234f7f1&appKey=40a5d6ab8411eb1e9d9f23f601944842';

export default {
	search: function(query) {
		return axios.get(BASEURL + query + APIKEY);
	},
	// searchLastUser: function() {return axios.get('/api/saved');},

	getSaved: function() {
		return axios.get('/api/saved').then(function(results) {
			console.log('axios results', results);
			return results;
		});
	},
	postSaved: function(user, item_name, brand_name, nf_sugars, date, logged) {
		var newFood = { user: user, item: item_name, brand: brand_name, sugar: nf_sugars, date: date, logged: true };
		return axios.post('/api/saved', newFood).then(function(response) {
			console.log('axios results food', response.data);
			alert('hitting post route with ' + response.data);
			return response.data;
		});
	}
};

const AXIOS = axios.create({baseURL: 'http://localhost:8080'})

new Vue({
	el: '#app',
	data() {
		return {}
	},
	methods: {
		openShare() {
			let input = document.createElement('input')
    	input.type = "file"
  		input.setAttribute("multiple","");
    	input.onchange = async function() {
				let fd = new FormData();
				[...input.files].forEach(file => fd.append(`files`, file))
				console.log(await AXIOS.post('/new-photo', fd))
    	}
    	input.click()
		}
	}
})
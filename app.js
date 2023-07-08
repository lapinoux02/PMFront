const AXIOS = axios.create({baseURL: 'http://pinkcactus.freeboxos.fr/pmback'})

new Vue({
	el: '#app',
	data() {
		return {
			files: [],
			uploads: 0
		}
	},
	methods: {
		openShare() {
			let input = document.createElement('input')
		    	input.type = "file"
	  		input.setAttribute("multiple","")
		    	input.onchange = async () => {
				this.uploads = 0
				this.files = [...input.files].map(f => ({name: f.name, status: 0}))
				for (let i=0; i<input.files.length; ++i) {
					let fd = new FormData()
					fd.append('files', input.files[i])
					try {
						await AXIOS.post('/new-photo', fd)
						this.files[i].status = 1
					} catch(e) {
						this.files[i].status = 2
					} finally {
						this.uploads++
					}
				}				

				// [...input.files].forEach(file => fd.append(`files`, file))
				// await AXIOS.post('/new-photo', fd)
		    	}
		  	input.click()
		},
		icon(val) {
			switch(val) {
				case 0: return 'pending'
				case 1: return 'check_circle'
				case 2: return 'cancel'
			}
		},
		color(val) {
			switch(val) {
				case 0: return 'blue'
				case 1: return 'green'
				case 2: return 'red'
			}
		}
	}
})

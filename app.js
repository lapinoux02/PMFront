const AXIOS = axios.create({baseURL: 'http://pinkcactus.freeboxos.fr/pmback'})

Vue.component('home', {
	template: `<div>home</div>`
})

Vue.component('places', {
	template: `<div id="places">
		<h1 class="info-title">Lieux</h1>
		<div class="info-content">
			<ul>
				<li style="font-size: 1.3rem"><span style="font-weight: bold">Chez nous</span><span class="tab">12 rue de la tour, 31380 Gragnague</span></li>
				<li style="font-size: 1.3rem"><span style="font-weight: bold">Mairie de Gragnague</span><span class="tab">15 Pl. Bellegarde, 31380 Gragnague</span></li>
				<li style="font-size: 1.3rem"><span style="font-weight: bold">Église de Gragnague</span><span class="tab">19 Pl. Bellegarde, 31380 Gragnague</span></li>
				<li style="font-size: 1.3rem"><span style="font-weight: bold">Restaurant "le petit café"</span><span class="tab">14 Av. du champ de Foire, 31380 Gragnague</span></li>
			</ul>
			<img src="assets/plan gragnague.png" width="100%">
		</div>
	</div>`
})

Vue.component('program', {
	template: `<div id="program">
		<h1 class="info-title">Programme</h1>
		<ul class="info-content">
			<li>
				<img src="assets/mairie.png" height="100px">
				<div>
					<h2>Cérémonie civile</h2>
					<div>15h30</div>
					<div>Mairie de Gragnague</div>
				</div>
			</li>
			<li>
				<img src="assets/photos.png" height="100px">
				<div>
					<h2>Photos</h2>
				</div>
			</li>
			<li>
				<img src="assets/église.png" height="100px">
				<div>
					<h2>Cérémonie religieuse</h2>
					<div>16h30</div>
					<div>Église de Gragnague</div>
				</div>
			</li>
			<li>
				<img src="assets/apéro.png" height="100px">
				<div>
					<h2>Vin d'honneur</h2>
					<div>Chez nous</div>
				</div>
			</li>
			<li>
				<img src="assets/couverts.png" height="100px">
				<div>
					<h2>Dinner</h2>
					<div>20h30</div>
					<div>Restaurant "le petit café"</div>
				</div>
			</li>
			<li>
				<img src="assets/musique.png" height="100px">
				<div>
					<h2>Soirée</h2>
					<div>Chez nous</div>
				</div>
			</li>
		</ul>
	</div>`
})

Vue.component('photos', {
	template: `<div class="info">
		<div @click="openShare" class="share">
			Vous pouvez partager vos photos du mariage en cliquant sur le bouton partager:
			<div class="share-button">Partager</div>
		</div>
		<div v-if="files.length && files.some(f => !f.status)">Veuillez ne pas quitter la page tant que les fichiers ne sont pas tous uploadés ({{uploads}} / {{files.length}})</div>
		<div v-else-if="files.length">Téléchargement terminé, merci <span class="material-symbols-outlined" style="color: red">favorite</span></div>
		<div class="file-list">
			<div v-for="file in files" class="file">
				<span>{{file.name}}</span>
				<span class="material-symbols-outlined" :style="{color: color(file.status)}">{{icon(file.status)}}</span>
			</div>
		</div>
	</div>`,
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

new Vue({
	el: '#app',
	data() {
		return {
			route: 'home'
		}
	},
	methods: {
	}
})

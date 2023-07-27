const AXIOS = axios.create({baseURL: 'https://pinkcactus.freeboxos.fr/pmback'})

Vue.component('tache', {
	template: `<svg width="4.5rem" height="4.5rem" viewBox="0 0 15 15">
		<g>
			<path
				:fill="color"
				d="m 12.14,12.15 c -1.3229,1.559786 -5.20442,2.505837 -7.09667,1.729685 -1.89224,-0.776152 -3.99144,-4.175357 -3.83801,-6.214831 0.15343,-2.039473 2.73757,-5.086349 4.72464,-5.570661 1.98706,-0.484311 5.68336,1.031821 6.75801,2.771973 1.07464,1.740153 0.77493,5.724049 -0.54797,7.283834 z" />
		</g>
	</svg>`,
	props: ['color']
})

Vue.component('home', {
	template: `<div id="home">
		<h1 class="info-title">Bienvenue !</h1>
		<div class="info-content" style="text-align: center;"><p style="margin-top: 0">Nous avons la joie de vous convier à notre mariage convivial
		aux couleurs automnales dans une ambiance bohème.</p><p>
		Déplacements à pieds, détente dans le jardin et petit restaurant agrémenteront la journée.</p>
		<p>Vous trouverez ici toutes les informations concernant le mariage. N'hésitez pas à partager vos photos du mariage dans l'onglet photos.</p></div>
	</div>`
})

Vue.component('galery', {
	template: `<div id="galery">
		<h1 class="info-title">Galerie</h1>
		<div class="info-content" style="text-align: center;"><p style="margin-top: 0">
			<div>Une fois récupérées, vous pourrez trouver ici toutes les photos du mariage.</div>
			<img src="assets/bouquet.png" style="max-width: 100%;">
		</div>
	</div>`
})

Vue.component('rest', {
	template: `<div id="rest">
		<h1 class="info-title">Hébergement</h1>
		<div class="info-content">
			<div class="rest-list">
				<div class="rest-square">
					<h2>Chez nous</h2>
					<ul>
						<li>Hafsa, Romain, Arthur</li>
						<li>Eugénie, Bastien</li>
						<li>Morgan</li>
						<li>Sébastien</li>
					</ul>
					<div class="rest-info">
						<div class="rest-address">12 rue de la tour<br>31380 Gragnague</div>
						<div class="rest-trivia"></div>
					</div>
				</div>
				<div class="rest-square">
					<h2>Logement 1</h2>
					<ul>
						<li>Lysianne, Bruno</li>
						<li>Cathy, François</li>
						<li>Marie, Jonathan</li>
					</ul>
					<div class="rest-info">
						<div class="rest-address">19 allée de la briqueterie<br>31380 Gragnague</div>
						<div class="rest-trivia">du 22/09 16h00 au 25/09 11h00</div>
					</div>
				</div>
				<div class="rest-square">
					<h2>Logement 2</h2>
					<ul>
						<li>Sylvie, Pascal, Ludo</li>
						<li>Georgette, Marcel</li>
					</ul>
					<div class="rest-info">
						<div class="rest-address">30 Route de Baougnac<br>31590 Lavalette</div>
						<div class="rest-trivia">du 22/09 au 26/09<br>Serviettes et draps à apporter</div>
					</div>
				</div>
				<div class="rest-square">
					<h2>Logement 3</h2>
					<ul>
						<li>Mathilde, Julien, Marion, Louis</li>
					</ul>
					<div class="rest-info">
						<div class="rest-address">4 Chemin de Bordenoble<br>31180 Lapeyrouse-Fossat</div>
						<div class="rest-trivia">du 22/09 15h00 au 24/09 10h00</div>
					</div>
				</div>
			</div>
		</div>
	</div>`
})

Vue.component('dresscode', {
	template: `<div id="dresscode">
		<h1 class="info-title">Dress-code</h1>
		<div class="info-content">
			<div style="margin-bottom: 1rem;">Les mariés comptent sur vous pour trouver une tenue bohème dans les tons suivants :</div>
			<div class="dresscode-colors">
				<div v-for="color in colors" class="dresscode-color">
					<tache :color="color.color"></tache>
					<div class="color-name">{{color.name}}</div>
				</div>
			</div>
		</div>
	</div>`,
	data() {
		return {
			colors: [{
				color: 'var(--color1)',
				name: 'Terracotta'
			}, {
				color: 'var(--color5)',
				name: 'Camel'
			}, {
				color: 'var(--color2)',
				name: 'Champagne'
			}, {
				color: 'var(--color4)',
				name: 'Sauge'
			}, {
				color: 'var(--color3)',
				name: 'Eucalyptus'
		}]
		}
	}
})

Vue.component('places', {
	template: `<div id="places">
		<h1 class="info-title">Lieux</h1>
		<div class="info-content">
			<img src="assets/plan.png" width="100%">
			<ul>
				<li><span class="places-title"><img src="assets/home.png">Chez nous</span><span class="tab">12 rue de la tour, 31380 Gragnague</span></li>
				<li><span class="places-title"><img src="assets/university.png">Mairie de Gragnague</span><span class="tab">15 Pl. Bellegarde, 31380 Gragnague</span></li>
				<li><span class="places-title"><img src="assets/big-church.png">Église de Gragnague</span><span class="tab">19 Pl. Bellegarde, 31380 Gragnague</span></li>
				<li><span class="places-title"><img src="assets/restaurant.png">Restaurant "le petit café"</span><span class="tab">14 Av. du champ de Foire, 31380 Gragnague</span></li>
			</ul>
		</div>
	</div>`
})

Vue.component('weekend', {
	template: `<div id="weekend">
		<h1 class="info-title">Week-end</h1>
		<div class="info-content">
			<h2>Vendredi</h2>
			<ul>
				<li>Derniers préparatifs: décoration restaurant et église, ...</li>
				<li>Soirée pizzas</li>
			</ul>
			<h2>Samedi</h2>
			<ul>
				<li>Repas du midi à la bonne franquette</li>
				<li>Voir "Programme" pour la suite</li>
			</ul>
			<h2>Dimanche</h2>
			<ul>
				<li>Brunch à partir de 11h00</li>
			</ul>
		</div>
	</div>`
})

Vue.component('program', {
	template: `<div id="program">
		<h1 class="info-title">Programme</h1>
		<div class="info-content">
			<ul>
				<li>
					<img src="assets/mairie.png">
					<div>
						<h2>Cérémonie civile</h2>
						<div>15h30</div>
						<div>Mairie de Gragnague</div>
					</div>
				</li>
				<li>
					<img src="assets/photos.png">
					<div>
						<h2>Photos</h2>
					</div>
				</li>
				<li>
					<img src="assets/église.png">
					<div>
						<h2>Cérémonie religieuse</h2>
						<div>16h30</div>
						<div>Église de Gragnague</div>
					</div>
				</li>
				<li>
					<img src="assets/apéro.png">
					<div>
						<h2>Vin d'honneur</h2>
						<div>Chez nous</div>
					</div>
				</li>
				<li>
					<img src="assets/couverts.png">
					<div>
						<h2>Dîner</h2>
						<div>20h30</div>
						<div>Restaurant "le petit café"</div>
					</div>
				</li>
				<li>
					<img src="assets/musique.png">
					<div>
						<h2>Soirée</h2>
						<div>Chez nous</div>
					</div>
				</li>
			</ul>
		</div>
	</div>`
})

Vue.component('photos', {
	template: `<div id="photos">
		<h1 class="info-title">Photos</h1>
		<div class="info-content" style="display: flex; flex-direction: column; gap: 1rem;">
			<div @click="openShare" class="share">
				<span>Vous pouvez nous partager vos photos du mariage en cliquant sur le bouton suivant :</span>
				<span class="material-symbols-outlined share-button">add_a_photo</span>
			</div>
			<div v-if="files.length && files.some(f => !f.status)" style="font-size: 1rem;">Upload en cours, ne quittez pas la page : {{uploads}} / {{files.length}}</div>
			<div v-else-if="files.length" style="font-size: 1rem;">Upload terminé <span v-if=errors style="font-size: 1rem;">({{errors}} fichiers en erreur)</span>, merci <span class="material-symbols-outlined" style="color: red">favorite</span></div>
			<div class="file-list">
				<div v-for="file in files" class="file">
					<span class="file-name">{{file.name}}</span>
					<span class="material-symbols-outlined" :style="{color: color(file.status), display: 'flex', fontSize: '1rem'}">{{icon(file.status)}}</span>
				</div>
			</div>
		</div>
	</div>`,
	data() {
		return {
			files: [],
			uploads: 0
		}
	},
	computed: {
		errors() {
			return this.files.filter(f => f.status === 2).length
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
	computed: {
		daysLeft() {
			return Math.round((new Date('2023-09-23').getTime() - new Date().getTime())/(1000*60*60*24))
		}
	}
})

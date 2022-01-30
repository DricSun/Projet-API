var requestOptions = {
	method: "GET",
	redirect: "follow",
};

fetch("https://hp-api.herokuapp.com/api/characters", requestOptions)

	.then((response) => response.json())

	.then((result) => {



		let Characters = new Array(20);
		for (let i = 0; i < 20; i++) {
			Characters[i] = result[i]

		}

		let triChara = sortByKey(Characters, 'name')


		for (let i = 0; i < 20; i++) {

			let character = triChara[i];


			RenderHogwartsCharacters(character);
			Color();
		}
	})

let sectionGot = document.getElementById('section-got')

sectionGot.style.display = 'none'

let logoGot = document.getElementById('logo-got').style.display = 'none'

const containeur = document.querySelector(".containeur");
document.body.style.backgroundImage = "url('./asset/bg-api.jpg')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';

function RenderHogwartsCharacters(chara) {

	containeur.innerHTML += `
		<div class='contain' onclick="SelectCharacter('${chara["name"]}')">
		  <h3>${chara["name"]}</h3>
		  <img src="${chara["image"]}">
		  <p id='color-actor'>${chara["actor"]}</p>
		</div>

		<style>

		.contain{
			display:flex;
			flex-direction:column;
			align-items:center;
			gap:9px;
			cursor:pointer
		}

		h3{
			font-family:'Harry P';
			color:rgb(201,141,40);
			font-size:1.4rem;
			letter-spacing:3px;
			text-align:center;
		}
		
		img{
			width:100px;
			height100px;
		}

		.containeur{
			display:flex;
			flex-wrap :wrap;
			justify-content : center;
			gap: 50px;
			align-items : center;
		}


		
		</style>
	  `;

}

const selectHouse = document.getElementById('select-house')

function Color() {

	const txt = document.querySelectorAll('#color-actor');

	txt.forEach(p => {
		p.style.color = "white";
	})

}

function SelectCharacter(name) {

	containeur.style.display = 'none';



	fetch("https://hp-api.herokuapp.com/api/characters", requestOptions)

		.then((response) => response.json())

		.then((result) => {

			let triChara = result.sort();

			for (let i = 0; i < 20; i++) {
				let character = triChara[i];
				if (character['name'] == name)
					ShowChara(character)


			}
		})

}

var selectChara = document.getElementsByClassName('select-chara')[0];
selectChara.style.display = 'flex';
selectChara.style.justifyContent = 'center';

function ShowChara(wizard) {

	selectHouse.style.display = 'none'

	selectChara.style.display = 'flex';

	selectChara.innerHTML = `
	<div class='contain contain-select' onclick="SelectCharacter('${wizard["name"]}')">
		  <h3 id='color-name' class='title-select'>${wizard["name"]}</h3>
		  <img id='img-select' src="${wizard["image"]}">
		  <p id='color-actor'>${wizard["actor"]}</p>
		  <p>${wizard["gender"]}</p>
		  <p>${wizard["ancestry"]}</p>
		  <p>${wizard["eyeColour"]}</p>
		  <p>${wizard["hairColour"]}</p>
		  <p>${wizard["house"]}</p>
		  <p>${wizard["dateOfBirth"]}</p>
	</div>

	<style scoped>
	
	#img-select{
		height:300px;
		width:200px
	}
	
	p{
		color:white;
		text-align:center;
		font-weight : bold;
	}
	
	.title-select{
		font-size:2.5rem
	}

	.contain-select{
		background-color : rgb(201,141,40, 0.7);
		border-radius :5px;
		padding: 20px;
	}
	</style>
	`
}

function ShowAllCharacters() {

	containeur.style.display = 'flex';

	selectChara.style.display = 'none';

	selectHouse.style.display = 'block'

}

function sortByKey(array, key) {
	return array.sort(function (a, b) {
		var x = a[key];
		var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

function SelectByHouse(house) {

	containeur.innerHTML = ''

	fetch("https://hp-api.herokuapp.com/api/characters", requestOptions)

		.then((response) => response.json())

		.then((result) => {


			for (let i = 0; i < 20; i++) {

				let character = result[i];
				if (character['house'] == house || house == 'Any') {
					RenderHogwartsCharacters(character);
					Color();
				}

			}
		})
}


selectHouse.addEventListener('change', () => {
	SelectByHouse(selectHouse.value)
})










fetch('https://thronesapi.com/api/v2/Characters')
		.then((response) => response.json())
		.then((result) => {

			let CharactersGot = new Array(20)
			for (let i = 0; i < 20; i++) {
				CharactersGot[i] = result[i]
				ShowCharaGot(CharactersGot[i])
			}

		})

// function SelectCharacterGot(name) {

	

// }
var showcharaGot = document.getElementsByClassName('showcharaGot')[0];

function ShowCharaGot(charactersgot) {


	showcharaGot.innerHTML = `
	<div class='contain contain-select'>
		  <h3 id='color-name' class='title-select'>${charactersgot["fullName"]}</h3>
		  <img id='img-select' src="${charactersgot["imageUrl"]}">
		  <p>${charactersgot["firstName"]}</p>
		  <p>${charactersgot["LastName"]}</p>
		  <p>${charactersgot["title"]}</p>
		  <p>${charactersgot["family"]}</p>
	</div>`

}

function SearchCharaGOT(){

	fetch('https://thronesapi.com/api/v2/Characters')
		.then((response) => response.json())
		.then((result) => {


						let CharactersGot = new Array(20);
						showcharaGot.innerHTML = "";
						for (let i = 0; i < 20; i++) {
								console.log("Hello")
							if (result[i]['fullName'].toLowerCase().includes(search.value.toLowerCase())){
										ShowCharaGot(result[i])
							}

						}

				})

}


			const buttonChange = document.getElementById('switch')

			function Change() {
				let state = 'bg1';

				buttonChange.addEventListener('click', () => {
					if (state == 'bg1') {
						document.body.style.backgroundImage = "url('/asset/The-Wall.jpg')"
						state = 'bg2';

						document.getElementById('logo-got').style.display = 'flex'

						document.getElementById('logo-potter').style.display = 'none'

						containeur.style.display = 'none'

						selectHouse.style.display = 'none'

						sectionGot.style.display = 'flex'

						selectChara.style.display = 'none';

					} else {
						document.body.style.backgroundImage = "url('/asset/bg-api.jpg')"
						state = 'bg1';

						document.getElementById('logo-potter').style.display = 'flex'
						document.getElementById('logo-got').style.display = 'none'

						containeur.style.display = 'flex'

						selectHouse.style.display = 'flex'

						sectionGot.style.display = 'none'
					}
				})

			}

			Change()
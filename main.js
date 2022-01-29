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
	
const containeur = document.querySelector(".containeur");
document.body.style.backgroundImage ="url('./asset/bg-api.jpg')";
document.body.style.backgroundSize ='cover';
document.body.style.backgroundRepeat ='no-repeat';

function RenderHogwartsCharacters(chara) {

	containeur.innerHTML += `
		<div class='contain' onclick="SelectCharacter('${chara["name"]}')">
		  <h3>${chara["name"]}</h3>
		  <img src="${chara["image"]}">
		  <p id='color-actor'>${chara["actor"]}</p>
		</div>

		<style>
		
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

function Color(){

const txt = document.querySelectorAll('#color-actor');

txt.forEach(p=>{
	p.style.color = "white";
})
	
}

function SelectCharacter(name){

containeur.style.display ='none';



fetch("https://hp-api.herokuapp.com/api/characters", requestOptions)
	
.then((response) => response.json())

.then((result) => {
  
let triChara = result.sort();

  for (let i = 0; i < 20; i++) {
	let character = triChara[i];
	if(character['name'] == name)
		ShowChara(character)


  }
})

}

var selectChara =document.getElementsByClassName('select-chara')[0];


function ShowChara(wizard){

	selectHouse.style.display ='none'

	selectChara.style.display ='flex';

	selectChara.innerHTML = `
	<div class='contain' onclick="SelectCharacter('${wizard["name"]}')">
		  <h3 id='color-name'>${wizard["name"]}</h3>
		  <img src="${wizard["image"]}">
		  <p id='color-actor'>${wizard["actor"]}</p>
		  <p>${wizard["gender"]}</p>
		  <p>${wizard["ancestry"]}</p>
		  <p>${wizard["eyeColour"]}</p>
		  <p>${wizard["hairColour"]}</p>
		  <p>${wizard["house"]}</p>
		  <p>${wizard["dateOfBirth"]}</p>
	</div>
	`
}

function ShowAllCharacters(){

	containeur.style.display='flex';
	
	selectChara.style.display='none';

	selectHouse.style.display ='block'

}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function SelectByHouse(house){

	containeur.innerHTML = ''

	fetch("https://hp-api.herokuapp.com/api/characters", requestOptions)
	
	.then((response) => response.json())
	
	.then((result) => {


	  for (let i = 0; i < 20; i++) {
		
		let character = result[i];
		if(character['house'] == house || house == 'Any'){
			RenderHogwartsCharacters(character);
			Color();
		}
		
	  }
	})
}



selectHouse.addEventListener('change', ()=>{
	SelectByHouse(selectHouse.value)
})


































var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo
var nivel = window.location.search //recuperando a url a partir de tudo que está a direita do ponto de interrogação 
nivel = nivel.replace('?','')//removendo o interrogação

switch (nivel){
	case 'Facil':
		criaMosquitoTempo = 1500
		break;
	case 'Normal':
		criaMosquitoTempo = 1000
		break;
	case 'Dificil':
		criaMosquitoTempo = 750
		break;
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var decrementa = function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro) //limpa memória da aplicação
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}
	else{
	document.getElementById('cronometro').innerHTML = tempo//innderHTML para inserir dentro da tag
	}
}

var cronometro = setInterval( decrementa,1000)

function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {
			window.location.href = 'fim_de_jogo.html' //forçando o redirecionamento para a fim de jogo
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}


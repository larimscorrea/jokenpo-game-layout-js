const $stoneButton1 = document.querySelector('.button-stone-player-1')
const $paperButton1 = document.querySelector('.button-paper-player-1')
const $scissorsButton1 = document.querySelector('.button-scissors-player-1')

const $stoneButton2 = document.querySelector('.button-stone-player-2')
const $paperButton2 = document.querySelector('.button-paper-player-2')
const $scissorsButton2 = document.querySelector('.button-scissors-player-2')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')




    $stoneButton1.addEventListener('click', function(){
        $fieldPlayer1.innerHTML = '<img class="move-image" title="uma mão fechada, enluvada da cor branca, com o fundo azul claro, e delineada com preto" src="stone.png"/>'
})

    $paperButton1.addEventListener('click', function(){
        $fieldPlayer1.innerHTML = '<img class="move-image" title="uma mão enluvada da cor branca com delineado preto aberta" src="paper.png"/>'
})

    $scissorsButton1.addEventListener('click', function(){
        $fieldPlayer1.innerHTML = '<img class="move-image" title="uma mão enluvada da cor branca com delineado preto exibindo apenas dois dedos, o indicador e o do meio" src="scissors.png"/>'
})

    $stoneButton2.addEventListener('click', function(){
        $fieldPlayer2.innerHTML = '<img class="move-image" title="uma mão fechada, enluvada da cor branca, com o fundo azul claro, e delineada com preto" src="stone.png"/>'
})

    $paperButton2.addEventListener('click', function(){
        $fieldPlayer2.innerHTML = '<img class="move-image" title="uma mão enluvada da cor branca com delineado preto aberta" src="paper.png"/>'
})

    $scissorsButton2.addEventListener('click', function(){
        $fieldPlayer2.innerHTML = '<img class="move-image" title="uma mão enluvada da cor branca com delineado preto exibindo apenas dois dedos, o indicador e o do meio" src="scissors.png"/>'
})
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reset = document.querySelector('.restart');
const nuven = document.querySelector('.nuven');
const h1 = document.querySelector('.h1')

var num = 1

pipe.style.animation = 'none'
pipe.style.width = '0'
reset.style.display = 'none'

const start = () => {
    pipe.style.animation = 'pipe-animation 1.2s infinite linear'
    nuven.style.animation = 'nuven_animation 10s infinite linear'
    pipe.style.width = '80px'
    s = true
}

document.addEventListener("keydown", start); {
    const jump = () => {
        mario.classList.add('jump');
    
        setTimeout(() => {
    
            mario.classList.remove('jump');
    
        }, 500)
    }
    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        
        if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80 ) {
    
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`
    
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition }px`
    
            mario.src = './images/game_over.png'
            mario.style.width = '100px'
            mario.style,marginLeft = '50px'
            
    
            reset.style.display = 'block'
            clearInterval(loop);
            h1.innerHTML = ''
            h1.src = ''

        }
        
        if(pipePosition == 80){
                num=num+1
                console.log(num)
                h1.innerHTML = `${num}`
            }

    })
    
    document.addEventListener('keydown', jump);
}




function timer(){
    const cronometro = document.querySelector('.time')
    let segundos = 0;
    let timer;

    function getTimeSeconds(Seconds){
        const data = new Date(Seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        }) 
    };

    function initTime(){
        timer = setInterval(function(){
            segundos++;
            cronometro.innerHTML = getTimeSeconds(segundos); 
        }, 1000)
    };

    document.addEventListener('click', function(event){
        const action = event.target;

        if  (action.classList.contains('init')){
            clearInterval(timer);
            initTime();
        }

        if  (action.classList.contains('pause')){
            clearInterval(timer);
        }

        if  (action.classList.contains('close')){
            clearInterval(timer);
            cronometro.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
};

timer();
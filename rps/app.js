const game = () =>

{
    let playerScore = 0;
    let cpuScore = 0;
    let playerName;
    const earthBtn = document.querySelector('.earth');
    const fireBtn = document.querySelector('.fire');
    const waterBtn = document.querySelector('.water');
    const pChose = document.querySelector('.playerTxt');
    const cChose = document.querySelector('.cpuTxt');


    const startGame = () =>
    {
        const playBtn = document.querySelector('.introBtn');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const matchScore = document.querySelector('.score');

        playBtn.addEventListener('click', ()=>
        {
            introScreen.classList.add('fadeOut');
            playerName = prompt('your name?');

            const fading = () =>
            {
                match.classList.add('fadeIn');
                matchScore.classList.add('fadeIn');
            }

            fading();
            const changeName = document.querySelector('.name');
            changeName.textContent = playerName;
        })

        waterBtn.addEventListener('click', ()=>
        {
            playerPick = 'WATER';
            pChose.textContent = playerPick;
            pChose.style.color = 'blue';
            cpuRoll();
           // comparePicks();
        })

        earthBtn.addEventListener('click', ()=>
        {
            playerPick = 'EARTH';
            pChose.textContent = playerPick;
            pChose.style.color = 'green';
            cpuRoll();
            //comparePicks();
        })

        fireBtn.addEventListener('click', ()=>
        {
            playerPick = 'FIRE';
            pChose.textContent = playerPick;
            pChose.style.color = 'red';
            cpuRoll();
            console.log(playerPick);
            //updatePicks();
            //comparePicks();
        })
        

        
    }

    const cpuRoll = () =>
    {
        const cpuElems = ['WATER', 'EARTH', 'FIRE'];
        const cpuRandom = Math.floor(Math.random() * 3);
        const cpuPicks = cpuElems[cpuRandom];
        cChose.textContent = cpuPicks;
        console.log(cpuPicks);
        comparePicks(playerPick, cpuPicks);

        if(cpuPicks === 'WATER')
        {
            cChose.style.color = 'blue';
        }
        else if (cpuPicks === 'EARTH')
        {
            cChose.style.color = 'green';
        }
        else{
            cChose.style.color = 'red';
        }
        
    }

    //Start the match
   // const startMatch = () =>
  //  {
      //  const elements = document.querySelectorAll('.elements button');
      //  const cpuElements = ['water', 'earth', 'fire'];

     //   elements.forEach((element) =>
     //   {
          //  element.addEventListener('click', function ()
         //   {
              //  const cpuNumber = Math.floor(Math.random() * 3);
             //   const cpuPick = cpuElements[cpuNumber];
            ///    updatePicks();
              //  console.log(cpuPick);
             //   comparePicks(playerPick, cpuPicks);
              //  updatePicks();
           // })
      //  })

        
    //}

    //Update the score
    const updateScore = () =>
    {
        const pScore = document.querySelector('.pScore');
        const cScore = document.querySelector('.cScore');
        pScore.textContent = playerScore;
        cScore.textContent = cpuScore;
    };

   

    const comparePicks = (playerPick, cpuPicks) =>
    {
        const winner = document.querySelector('.winner');


        if(playerPick === cpuPicks)
        {
            winner.textContent = 'Its a tie!';
            console.log('tie');
           // updatePicks();
            return;
        }

        if(playerPick === 'EARTH')
        {
            if(cpuPicks === 'WATER')
            {
               // cChose.style.color = 'blue';
                winner.textContent = playerName + ' Won this round!';
                playerScore++;
                updateScore();
                //updatePicks();
                return;
            }
            else
            {
                winner.textContent = 'CPU won this round!';
                cpuScore++;
                updateScore();
                //updatePicks();
                return;
            }
        };

        if(playerPick === 'FIRE')
        {
            if(cpuPicks === 'EARTH')
            {
               // cChose.style.color = 'green';
                winner.textContent = playerName + ' Won this round!';
                playerScore++;
                updateScore();
                //updatePicks();
                return;
            }
            else
            {
                winner.textContent = 'CPU won this round!';
                cpuScore++;
                updateScore();
                //updatePicks();
                return;
            }
        };

        if(playerPick === 'WATER')
        {
            if(cpuPicks === 'FIRE')
            {
               // cChose.style.color = 'red';
                winner.textContent = playerName + ' Won this round!';
                playerScore++;
                updateScore();
               // updatePicks();
                return;
            }
            else
            {
                winner.textContent = 'CPU won this round!';
                cpuScore++;
                updateScore();
               // updatePicks();
                return;
            }
        };
    };

    startGame();
    //updatePicks(playerPick,cpuPicks);
    //startMatch();
};

game();
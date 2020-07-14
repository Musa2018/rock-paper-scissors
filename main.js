      let playerScore=0;
	let computerScore=0;
	let playerSelection;
	let computerSelectionRandom
	let computerSelection=[65,68,83];
	let playerSelectionUpper;
	
	
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }
    
      function playSound(e) {
		computerSelectionRandom =computerSelection[Math.floor(Math.random() * Math.floor(3))];
		
		
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		if (!audio) return;
		const comScore=document.getElementById('Score2');
		const playersScore=document.getElementById('Score1');
		const comImage=document.getElementById('ComImage');
		if(e.keyCode == 65 && computerSelectionRandom == 68)
		{	comImage.setAttribute('src','image/paper.png');
			computerScore ++;
			
				comScore.textContent=computerScore;
		} else if(e.keyCode == 68 && computerSelectionRandom == 83)
		{ comImage.setAttribute('src','image/scissors.png');
			computerScore ++;
			comScore.textContent=computerScore;

		} else if(e.keyCode == 83 && computerSelectionRandom == 65)
		{	comImage.setAttribute('src','image/rock.png');
			
			computerScore ++;
			comScore.textContent=computerScore;
		} else
		{  
			if(computerSelectionRandom ==68 )
			comImage.setAttribute('src','image/paper.png');
			else if(computerSelectionRandom == 83)
			comImage.setAttribute('src','image/scissors.png');
			else 
			comImage.setAttribute('src','image/rock.png');
			if(computerSelectionRandom == e.keyCode) {

			}else
			playerScore ++ ;
			
			playersScore.textContent=playerScore;
			

		}
        key.classList.add('playing');
        audio.currentTime = 0;
		audio.play();
		if (computerScore > 5){
			computerScore=0;
			playerScore=0;
			
			alert("Computer winner !")
			playersScore.textContent=0;
			comScore.textContent=0;
			comImage.setAttribute('src','image/question.png');

		}
		else if(playerScore > 5)
		{ computerScore=0;
			playerScore=0;
			alert("You\'r winner");
			playersScore.textContent=0;
			comScore.textContent=0;
			comImage.setAttribute('src','image/question.png');
		}
		else {}
		
      }
    
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      window.addEventListener('keydown', playSound);
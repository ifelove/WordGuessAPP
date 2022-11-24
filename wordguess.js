const HintText = document.querySelector(".hint");
const WordText = document.querySelector(".word");
const RefreshBtn = document.querySelector(".refresh");
const CheckBtn = document.querySelector(".check");
const input = document.querySelector("input");
const timeText = document.querySelector(".time span b");

let correctAnswer, timer;

const InitTimer = (maxtime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxtime > 0) {
      maxtime--;
      return (timeText.innerText = maxtime);
    }
    clearInterval(timer);
    alert(`Timeoff!! the correct anwser is ${correctAnswer.toUpperCase()}`);
    InitGame();
  }, 1000);
};

function InitGame() {
  InitTimer(10);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  correctAnswer = randomObj.word.toLocaleLowerCase();
  let wordArray = randomObj.word.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    // for swipping and shuffling
    let temp = wordArray[i];
    wordArray[i] = wordArray[j];
    wordArray[j] = temp;
    console.log(j);
  }

  console.log(wordArray, randomObj.word);

  WordText.innerText = wordArray.join("");
  HintText.innerText = randomObj.hint;
  input.value = "";
  input.setAttribute("maxlength", correctAnswer.length);
}

/*
function InitTime(maxtime){ clearInterval(timer)
    timer=setInterval(()=>{
        maxtime=maxtime-1;timeText.innerText=maxtime;
           if(maxtime<0){ alert(`Timeoff!! the correct anwser is`);
           clearInterval(timer)
           InitGame();
         }
            
     },1000);
     */

//ClearingTimeinterval()

InitGame();

InitGame();
//}

RefreshBtn.addEventListener("click", InitGame);
CheckBtn.addEventListener("click", checkWord);

function checkWord() {
  let useranswer = input.value;

  if (!useranswer) return alert("Please enter a word!!");
  useranswer = useranswer.toLocaleLowerCase();

  console.log(correctAnswer);
  useranswer !== correctAnswer
    ? alert(`sorry ${useranswer} is not the correct anser`)
    : alert(`Congratulation ${useranswer} is  the correct answer`);
  InitGame();
  input.value = "";
}

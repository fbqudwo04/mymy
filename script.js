function calculateBMI(){
  
  let h; //키
  let w; //몸무게

  //h = document.querySelector("#height").value;
  //w = document.querySelector("#weight").value;
    //document.querySelector("#result").textContent="BMI:아직 구현 안됨.";

  h= Number(document.querySelector("#height").value);
  w= Number(document.querySelector("#weight").value);

  h= h/100; // cm -> m,170 -> 1.7
  let bmi;
  bmi = w/(h*h);
  document.querySelector("#result").textContent = "BMI:" + bmi.toFixed(2);
  
if(bmi >=25){document.querySelector("#state").textContent = "비만";}
  else if(bmi >=23){document.querySelector("#state").textContent = "과체중";}
  else if(bmi >=18.5){document.querySelector("#state").textContent = "정상";}
  else{document.querySelector("#state").textContent = "저체중";}
  const pointer = document.querySelector("#bmiPointer");

// 최대값을 35로 잡고 막대 안에서 위치 계산
let maxBMI = 35;
let minBMI = 0;

let bmiForBar = bmi;
if (bmiForBar < minBMI) bmiForBar = minBMI;
if (bmiForBar > maxBMI) bmiForBar = maxBMI;

let position = (bmiForBar / maxBMI) * 100;
pointer.style.left = position + "%";
}

  
  //document.querySelector("#state").textContent = "정상";
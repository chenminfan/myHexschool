let inputItemHeight = document.querySelector('.c-input__text--height')
let inputItemWeight = document.querySelector('.c-input__text--weight')
let resultSubmit = document.querySelector('.o-btn--submit')
// BMI-result
let resultGroup = document.querySelector('.o-list-group')
let resultItem = document.querySelector('.o-result__item')
let resultItemValue = document.querySelector('.o-result__item__average--value')
let resultItemText = document.querySelector('.o-result__item__text')
let noteJson = JSON.parse(localStorage.getItem("BMInote") ) || [];
let conditionDelete = document.querySelector('.o-condition__item--del .o-btn');
updateNote(noteJson)

resultSubmit.addEventListener('click',calculateBEM)
resultItem.addEventListener('click',calculateBEM)
function calculateBEM(){
	let inputHeight = inputItemHeight.value;
	let inputWeight = inputItemWeight.value;
	// 轉成整數
	// TODO:變數重複
	let Height = parseInt(inputHeight);
	let Weight = parseInt(inputWeight);
	let HeightConvert = (Height/100);
	// 換算單位
	let BMIaverage = ((Weight / (HeightConvert * HeightConvert) ))
	// 平均值
	let BMIAG = resultItemValue.innerHTML = BMIaverage.toFixed(2);
	// 判斷輸入是否為空值
	if(inputHeight == "" || inputWeight == ""){
		alert("請輸入資料！");
	}else{
		let BMIAG = resultItemValue.innerHTML = BMIaverage.toFixed(2);
		// console.log(calculateBEM)
		if(BMIaverage >= 35){
			resultItem.classList.add('o-result__item--morbidobesity');
			let BMIClass = 'morbidobesity';
			let BMItext = resultItemText.innerHTML ="重度肥胖";

		}else if(30 <= BMIAG && BMIAG < 35){
			resultItem.classList.add('o-result__item--moderateobesity');
			let BMIClass = 'moderateobesity';
			let BMItext = resultItemText.innerHTML ="中度肥胖";

		}else if(27 <= BMIAG && BMIAG< 30 ){
			resultItem.classList.add('o-result__item--mildobesity');
			let BMIClass = 'mildobesity';
			let BMItext = resultItemText.innerHTML ="輕度肥胖";

		}else if(24 <= BMIAG && BMIAG < 27){
			resultItem.classList.add('o-result__item--overweight');
			let BMIClass = 'overweight';
			let BMItext = resultItemText.innerHTML ="過重";

		}else if(18.5 <= BMIAG && BMIAG < 24){
			resultItem.classList.add('o-result__item--normalweight');
			let BMIClass = 'normalweight';
			let BMItext = resultItemText.innerHTML ="理想";
		}
		else if(BMIAG < 18.5){
			resultItem.classList.add('o-result__item--underweight');
			let BMIClass = 'underweight';
			let BMItext = resultItemText.innerHTML ="過輕";
		}
		// TODO:拿掉沒有使用到的程式碼
		addNote(BMIClass,BMItext,BMIAG,Weight,Height)
	}
	
	

}

function addNote(BMIClass,BMItext,BMIAG,Height,Weight){
	// console.log(BMIClass,BMItext,BMIAG,Height,Weight)
	let time = new Date();
	let BMItimeYYYY = time.getFullYear();
	let BMItimeMM = time.getMonth();
	let BMItimedd = time.getDate();
	let BMInoteArray = {
		class:BMIClass,
		title:BMItext,
		avg:BMIAG,
		h:Height,
		w:Weight,
		data:BMItimedd + '-' + (BMItimeMM+1) + '-' + BMItimeYYYY

	}
	resultSubmit.remove();
	noteJson.push(BMInoteArray);
	// 字串轉陣列
	localStorage.setItem("BMInote", JSON.stringify(noteJson))
	
	
	updateNote(noteJson)
}
function updateNote(noteJson){
	let noteJsonLen = noteJson.length;
	let print ="";
	if(noteJsonLen == 0){
		resultGroup.innerHTML=`
		<div class="o-list-group__item">
				<div class="o-condition">
					<div class="o-condition__item o-condition__item--text">
						<span class="o-condition__item--value">暫無資料</span>
					</div>
				</div>
			</div>
		`
	}else{
		for(let i = 0;i<noteJsonLen;i++){
			print +=`
			<div class="o-list-group__item o-list-group__item--${noteJson[i].class}" data-num="${i}">
				<div class="o-condition">
					<div class="o-condition__item o-condition__item--text">
						<span class="o-condition__item--value">${noteJson[i].title}</span>
					</div>
					<div class="o-condition__item o-condition__item--bmi">
						BMI<span class="o-condition__item--value">${noteJson[i].avg}</span>
					</div>
					<div class="o-condition__item o-condition__item--weight">
						weight<span class="o-condition__item--value">${noteJson[i].w}kg</span>
					</div>
					<div class="o-condition__item o-condition__item--height">
						height<span class="o-condition__item--value">${noteJson[i].h}cm</span>
					</div>
					<div class="o-condition__item o-condition__item--data">
						<span class="o-condition__item--value">${noteJson[i].data}</span>
					</div>
				</div>
				<button  class="o-btn o-btn--primary">delete</button>
			</div>
			`
		}
		resultGroup.innerHTML = print
	}
}

function deleteNote(e){
	e.preventDefault();
	// TODO:標籤調整
	if(e.target.nodeName !== 'BUTTON'){
		return;
	}
	let num = e.target.parentNode.parentNode.parentNode.dataset.num;
	noteJson.splice(num,1);
	localStorage.setItem("BMInote",JSON.stringify(noteJson));
	updateNote(noteJson)
}
resultGroup.addEventListener('click',deleteNote)
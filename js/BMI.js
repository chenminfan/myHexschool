let inputItemHeight = document.querySelector('.c-input__text--height')
let inputItemWeight = document.querySelector('.c-input__text--weight')
let resultSubmit = document.querySelector('.o-btn--submit')
// BMI-result
let resultGroup = document.querySelector('.o-list-group')
let resultReset = document.querySelector('.o-result')
let noteJson = JSON.parse(localStorage.getItem("BMInote") ) || [];
let conditionDelete = document.querySelector('.o-condition__item--del .o-btn');
updateNote(noteJson)

resultSubmit.addEventListener('click',calculateBEM)
resultReset.addEventListener('click',calculateBEM)
function calculateBEM(){
	let inputHeight = inputItemHeight.value;
	let inputWeight = inputItemWeight.value;
	// 轉成整數
	let BMIHeight = parseInt(inputHeight);
	let BMIWeight = parseInt(inputWeight);
	let HeightConvert = (BMIHeight/100);
	// 換算單位
	let BMIAverage = ((BMIWeight / (HeightConvert * HeightConvert) ))
	// 平均值
	let BMIAvg = BMIAverage.toFixed(2);
	// 判斷輸入是否為空值

	// TODO:0516條件回傳及變數重複
	if(inputHeight == "" || inputWeight == ""){
		alert("請輸入資料！");
	}else if(BMIAverage >= 35){
		let BMIClass = 'morbidobesity';
		let BMIText = "重度肥胖";
		addNote(BMIClass,BMIText,BMIAvg,BMIWeight,BMIHeight)
	}else if(30 <= BMIAvg && BMIAvg < 35){
		let BMIClass = 'moderateobesity';
		let BMIText = "中度肥胖";
		addNote(BMIClass,BMIText,BMIAvg,BMIWeight,BMIHeight)
	}else if(27 <= BMIAvg && BMIAvg< 30 ){
		let BMIClass = 'mildobesity';
		let BMIText = "輕度肥胖";
		addNote(BMIClass,BMIText,BMIAvg,BMIWeight,BMIHeight)
	}else if(24 <= BMIAvg && BMIAvg < 27){
		let BMIClass = 'overweight';
		let BMIText = "過重";
		addNote(BMIClass,BMIText,BMIAvg,BMIWeight,BMIHeight)
	}else if(18.5 <= BMIAvg && BMIAvg < 24){
		let BMIClass = 'normalweight';
		let BMIText = "理想";
		addNote(BMIClass,BMIText,BMIAvg,BMIWeight,BMIHeight)
	}else if(BMIAvg < 18.5){
		let BMIClass = 'underweight';
		let BMIText = "過輕";
		addNote(BMIClass,BMIText,BMIAvg,BMIWeight,BMIHeight)
	}
}
function addNote(BMIClass,BMIText,BMIAvg,BMIHeight,BMIWeight){
	// console.log(BMIClass,BMIText,BMIAvg,Height,Weight)
	let time = new Date();
	let BMItimeYYYY = time.getFullYear();
	let BMItimeMM = time.getMonth();
	let BMItimeDD = time.getDate();
	let BMInoteArray = {
		class:BMIClass,
		title:BMIText,
		avg:BMIAvg,
		h:BMIHeight,
		w:BMIWeight,
		data:BMItimeDD + '-' + (BMItimeMM+1) + '-' + BMItimeYYYY
	}
	resultReset.innerHTML = `
		<div class="o-result__item o-result__item--${BMIClass}">
			<div class="o-btn o-btn--submit o-btn--${BMIClass}">
				<span class="o-result__item__average">${BMIAvg}</span>
					BMI
			</div>
			<span class="o-result__item__text">${BMIText}</span>
		</div>`
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
				<button  class="o-btn o-btn--primary o-btn--del">delete</button>
			</div>
			`
		}
		resultGroup.innerHTML = print
	}
}

function deleteNote(e){
	e.preventDefault();
	if(e.target.nodeName !== 'BUTTON'){
		return;
	}
	let num = e.target.parentNode.parentNode.parentNode.dataset.num;
	noteJson.splice(num,1);
	localStorage.setItem("BMInote",JSON.stringify(noteJson));
	updateNote(noteJson)
}
resultGroup.addEventListener('click',deleteNote)
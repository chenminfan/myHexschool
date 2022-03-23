var inputItemHeight = document.querySelector('.c-input__text--height')
var inputItemWeight = document.querySelector('.c-input__text--weight')
var resultSubmit = document.querySelector('.o-btn--submit')
// BMI-result
var resultGroup = document.querySelector('.o-list-group')
var resultItem = document.querySelector('.o-result__item')
var resultItemValue = document.querySelector('.o-result__item__average--value')
var resultItemText = document.querySelector('.o-result__item__text')
var noteJson = JSON.parse(localStorage.getItem("BMInote") ) || [];
var conditionDelete = document.querySelector('.o-condition__item--del .o-btn');
updateNote(noteJson)

resultSubmit.addEventListener('click',calculateBEM)
resultItem.addEventListener('click',calculateBEM)
function calculateBEM(){
	var inputHeight = inputItemHeight.value;
	var inputWeight = inputItemWeight.value;
	// 轉成整數
	var Height = parseInt(inputHeight);
	var Weight = parseInt(inputWeight);
	var HeightConvert = (Height/100);
	// 換算單位
	var BMIaverage = ((Weight / (HeightConvert * HeightConvert) ))
	// 平均值
	var BMIAG = resultItemValue.innerHTML = BMIaverage.toFixed(2);
	// 判斷輸入是否為空值
	if(inputHeight == "" || inputWeight == ""){
		alert("請輸入資料！");
	}else{
		var HeightConvert = (Height/100);
		var BMIaverage = ((Weight / (HeightConvert * HeightConvert) ))
		var BMIAG = resultItemValue.innerHTML = BMIaverage.toFixed(2);
		// console.log(calculateBEM)
		if(BMIaverage >= 35){
			resultItem.classList.add('o-result__item--morbidobesity');
			var BMIClass = 'morbidobesity';
			var BMItext = resultItemText.innerHTML ="重度肥胖";

		}else if(30 <= BMIAG && BMIAG < 35){
			resultItem.classList.add('o-result__item--moderateobesity');
			var BMIClass = 'moderateobesity';
			var BMItext = resultItemText.innerHTML ="中度肥胖";

		}else if(27 <= BMIAG && BMIAG< 30 ){
			resultItem.classList.add('o-result__item--mildobesity');
			var BMIClass = 'mildobesity';
			var BMItext = resultItemText.innerHTML ="輕度肥胖";

		}else if(24 <= BMIAG && BMIAG < 27){
			resultItem.classList.add('o-result__item--overweight');
			var BMIClass = 'overweight';
			var BMItext = resultItemText.innerHTML ="過重";

		}else if(18.5 <= BMIAG && BMIAG < 24){
			resultItem.classList.add('o-result__item--normalweight');
			var BMIClass = 'normalweight';
			var BMItext = resultItemText.innerHTML ="理想";
		}
		else if(BMIAG < 18.5){
			resultItem.classList.add('o-result__item--underweight');
			var BMIClass = 'underweight';
			var BMItext = resultItemText.innerHTML ="過輕";
		}else{
		
		}
		addNote(BMIClass,BMItext,BMIAG,Weight,Height)
	}
	
	

}

function addNote(BMIClass,BMItext,BMIAG,Height,Weight){
	// console.log(BMIClass,BMItext,BMIAG,Height,Weight)
	var time = new Date();
	var BMItimeYYYY = time.getFullYear();
	var BMItimeMM = time.getMonth();
	var BMItimedd = time.getDate();
	var BMInoteArray = {
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
	var noteJsonLen = noteJson.length;
	var print ="";
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
		for(var i = 0;i<noteJsonLen;i++){
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
				<span class="o-btn o-btn--primary">delete</span>
			</div>
			`
		}
		resultGroup.innerHTML = print
	}
}

function deleteNote(e){
	e.preventDefault();
	if(e.target.nodeName !== 'SPAN'){
		return;
	}
	var num = e.target.parentNode.parentNode.parentNode.dataset.num;
	noteJson.splice(num,1);
	localStorage.setItem("BMInote",JSON.stringify(noteJson));
	updateNote(noteJson)
}
resultGroup.addEventListener('click',deleteNote)
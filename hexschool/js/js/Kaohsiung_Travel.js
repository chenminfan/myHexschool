// TODO:出現許多重複宣告的變數，調整宣告變數，建議使用 let、const 來取代 var，雙等號改成三等號。
const apiUrl = "https://api.kcg.gov.tw/api/service/Get/cb50902c-3681-43ec-89da-705f68eafb88";
async function fetchTravelData(apiUrl) {
	try {
		// 發送 API 請求
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP 錯誤！狀態碼: ${response.status}`);
		}

		// 解析回應資料為 JSON
		const data = await response.json();
		console.log(data); // 確認資料結構

		// 提取景點陣列
		// const DataArray = data.data.AttractionList.Attractions.Attraction;
		const DataArray = data.data;
		// console.log(data)
		// 返回陣列
		return DataArray;

	} catch (error) {
		// 錯誤處理
		console.error("錯誤:", error);
		return []; // 如果出現錯誤，返回空陣列
	}
}
fetchTravelData(apiUrl);
let khTravelDataHotel = [];
const khTravelDataArray = khTravelData.data.XML_Head.Infos.Info;
const weatherLocation = weatherData.cwbopendata.dataset.locations.location;
const weatherLocationLen = weatherLocation.length;
const khDataLen = khTravelDataArray.length;
let areaTemp = [];
const formBox = document.querySelector(".form");
let boxContainer = document.querySelector(".boxContainer");
const boxContainerBody = document.querySelector(".boxContainer .body");
const boxContainerFoot = document.querySelector(".boxContainer .foot");
const scenicItem = document.querySelector(".scenic");
const newItem = document.querySelector(".newItem");
let navArea_test = document.querySelector(".navArea_test");
const navArea = document.querySelector(".navArea");
const hotArea = document.querySelector(".hotAreaBox");
const pageBox = document.querySelector(".pageBox");
const pagePre = document.querySelector(".page_pre");
const pageNext = document.querySelector(".page_next");
const pageBoxNum = document.querySelector(".page_num");
const pageItem = document.querySelectorAll(".page_num li");
const KH_Travel = document.querySelector(".KH_travel");
const scenicArea = document.querySelector(".scenic_area");
let pagesAll = [];
const weatherBox = document.querySelector(".weather");
// [變數]顯示的筆數
let pageNumber = 8;
// [變數]顯示頁
let pagNum = 1;
// [變數]前後頁暫存的顯示頁
let currentPage = 1;
let popularAreaArray = [];


// nav展開
const body = document.querySelector("body");
body.addEventListener('click', function (e) {
	navExpand[1].classList.remove("active");
	navExpand[1].children[1].classList.remove("expand");
})
const navExpand = document.querySelectorAll(".nav .item");
let navExpandLen = navExpand.length;
toggleExpand(navExpand[0]);
for (let i = 0; i < navExpandLen; i++) {
	navExpand[i].addEventListener('mouseover', function (e) {
		console.log(this)
		e.preventDefault();
		toggleExpand(this);
	});
}

function toggleExpand(activePanel) {
	for (let i = 0; i < navExpandLen; i++) {
		// 當資料點擊A回傳的時候
		if (navExpand[i] === activePanel) {
			navExpand[i].classList.add("active");
			if (navExpand[i].children.length >= 2) {
				navExpand[i].children[1].classList.add("expand");
			}
		} else if (
			// 當非資料本身 及 有收合box的時候
			navExpand[i] !== activePanel &&
			navExpand[i].childNodes.length > 3
		) {
			navExpand[i].children[1].classList.remove("expand");
			navExpand[i].classList.remove("active");
		} else {
			// 當非資料A本身
			navExpand[i].classList.remove("active");
		}
	}
}


async function initializeData() {
	khTravelDataHotel = await fetchTravelData(apiUrl);

	if (khDataLen > 0) {
		// 資料準備好後執行篩選
		areaFilter();
	} else {
		console.log("沒有資料可供篩選！");
	}
}
const obj = { name: 'MinFan' };

function greet(greeting) {
	console.log(`${greeting}, ${this.name}`);
}

greet.apply(obj, ['Hello', 'hi']); // 輸出: Hello, MinFan

//區域篩選
function areaFilter() {
	// 回傳printData印出所有資料
	// areaTemp = khTravelDataArray;

	// 區域篩選
	let areaFilterArray = [];
	for (let i = 0; i < khDataLen; i++) {
		// console.log(area)
		let area = khTravelDataArray[i].Add.substr(6, 3);
		if (area.charAt(2) !== "區") {
			area = area + "區";
		}
		// 將篩選的資料推上陣列
		areaFilterArray.push(area);
		// 新增資料回陣列
		khTravelDataArray[i]["Area"] = area;
	}
	// TODO:拉出for迴圈
	// [ES6刪除重複項目]，let areaArray = [...new Set(areaFilterArray)];
	// [js Array.filter() 陣列中刪除重複的內容]
	let areaArray = areaFilterArray.filter(function (ele, pos) {
		return areaFilterArray.indexOf(ele) === pos;
	});
	let printArea = "";
	let popularHotel = [];
	let printHotel = "";
	for (let i = 0; i < areaArray.length; i++) {
		printArea += `<div class="areaItem"><a class="btn btn-area" href="#">${areaArray[i]}</a></div>`;
		popularAreaArray.push({ area: areaArray[i], frequency: 0 });
	}
	for (let i = 0; i < khTravelDataHotel.length; i++) {
		printHotel += `<div class="areaItem" style="display:inline">${khTravelDataHotel[i].觀光旅館名稱}</div>`;
	}
	navArea_test.innerHTML = printHotel;
	navArea.innerHTML = printArea;

}
areaFilter();
newItem.addEventListener('click', newKH);
initializeData();
//公告
// TODO:已調整，變數 boxContainer 等同於變數 newBox_area
function newKH() {
	// 在表頭的部分印出
	formBox.classList.add("newBox");
	formBox.classList.remove("areaBox", "scenicBox");
	// 區域
	boxContainer.children[0].textContent = "區域觀光遊高雄";
	weatherBox.style.display = "block";

	if (boxContainerFoot.style.display !== "none") {
		boxContainerFoot.style.display = "none";
	}
	if (boxContainerBody.children[0].nodeName !== "UL") {
		return reBoxPrint();
	}

	if (scenicItem === scenicItem) {
		// 給新的陣列
		let randomKh = [];
		for (let i = 0; i < khDataLen; i++) {
			randomKh.push(khTravelDataArray[i]);
		}
		// 亂數
		for (let i = 0; i < randomKh.length; i++) {
			randomKh.sort(function () {
				return Math.round(Math.random()) - 0.5;
			});
		}
		// 不重複區域
		let set = new Set();
		let randomKhResult = randomKh.filter((item) =>
			!set.has(item.Area) ? set.add(item.Area) : false
		);

		// 印出
		let print = "";
		let randomKhLen = randomKhResult.length;
		for (let i = 0; i < randomKhLen && i < 12; i++) {
			print += `<li class="scenic_item randomKh_item">
				<a href="#">
					<div class="scenic_warp">
						<figure>
							<figcaption>${randomKhResult[i].Area}</figcaption>
							<img src="${randomKhResult[i].Picture1}" alt="${randomKhResult[i].Picdescribe1}" title="${randomKhResult[i].Name}">
						</figure>
					</div>
				</a>
			</li>`;
		}
		// TODO:拉出for迴圈
		scenicItem.innerHTML = print;
		onScenicItem();
	}
}
newKH();

//區域切換class
function areaKH(randomArea) {
	areaTemp = [];
	// 點擊完判斷區域回傳
	for (let i = 0; i < khDataLen; i++) {
		let area = khTravelDataArray[i].Area;
		if (area === randomArea) {
			areaTemp.push(khTravelDataArray[i]);
		}
	}
	boxContainer.children[0].textContent = randomArea;
	formBox.classList.add("areaBox");
	formBox.classList.remove("newBox");
	// // 點擊區域渲染
	changePage(1);
	pageAverage(areaTemp);
}

//點擊區域累加次數
function popularHotArea(popular) {
	// 假設點擊率
	// console.log(popular)
	// popularAreaArray[1].frequency = 15;
	// popularAreaArray[2].frequency = 10;
	// popularAreaArray[3].frequency = 830;
	popularAreaArray[9].frequency = 90;
	popularAreaArray[10].frequency = 530;
	popularAreaArray[12].frequency = 5630;
	popularAreaArray[14].frequency = 20;
	popularAreaArray[15].frequency = 88;
	popularAreaArray[23].frequency = 750;
	popularAreaArray[25].frequency = 588;
	popularAreaArray[28].frequency = 25;
	// popularAreaArray[32].frequency = 65;
	// popularAreaArray[35].frequency = 45;
	popularAreaArray[37].frequency = 888;

	// 針對名字排序
	let frequencyAdd = 0;
	frequencyAdd++;
	// console.log(popularAreaArray)
	for (let i = 0; i < popularAreaArray.length; i++) {
		// console.log(popular === popularAreaArray[i].area)
		// console.log(popularAreaArray)
		if (popular === popularAreaArray[i].area) {
			popularAreaArray[i]["frequency"] += frequencyAdd;
		}

	}
}

// 熱門行政區，點擊率高的區域印出
function hotPrint() {
	popularHotArea();
	let hotPrintArea = "";
	for (let i = 0; i < popularAreaArray.length && i < 5; i++) {
		popularAreaArray = popularAreaArray.sort(function (a, b) {
			// 針對顯示前八筆的點擊數，依名字排序
			// if(popularAreaArray.length && i < 6){
			// 	var nameA = a.area.toUpperCase(); // ignore upper and lowercase
			// 	var nameB = b.area.toUpperCase(); // ignore upper and lowercase

			// 	if (nameA < nameB) {
			// 	return -1;
			// 	}
			// 	if (nameA > nameB) {
			// 	return 1;
			// 	}
			// }
			// 針對數字大小
			return b.frequency - a.frequency;
		});

		hotPrintArea += `<div class="areaItem hotAreaItem"><a class="btn btn-hot" href="#">${popularAreaArray[i].area}</a></div>`;
	}
	hotArea.innerHTML = hotPrintArea;
}
hotPrint();
// 點擊區域
function areaAlinkClick() {
	// 針對每一個區域宣告
	let areaLiAlink = document.querySelectorAll(".areaItem");
	// console.log(areaLiAlink)
	scenicArea.style.display = "none";
	scenicItem.style.display = "flex";
	for (let i = 0; i < areaLiAlink.length; i++) {
		areaLiAlink[i].addEventListener('click', function (e) {
			scenicArea.style.display = "none";
			scenicItem.style.display = "flex";
			// 判斷DOM的結構
			if (e.target.nodeName !== "A") {
				return currentPage;
			}

			e.preventDefault();
			// 在表頭的部分印出
			formBox.classList.add("areaBox");
			formBox.classList.remove("newBox", "scenicBox");


			boxContainer = document.querySelector(".areaBox .boxContainer");
			boxContainer.children[0].textContent = e.target.textContent;
			areaTemp = [];
			// 點擊完判斷區域回傳
			for (let i = 0; i < khDataLen; i++) {
				let area = khTravelDataArray[i].Area;
				if (area === e.target.textContent) {
					areaTemp.push(khTravelDataArray[i]);

				}
			}
			let popular = e.target.textContent;
			navExpand[1].classList.remove("active");
			navExpand[1].children[1].classList.remove("expand");
			console.log(navExpand)
			console.log(popular)
			popularHotArea(popular);
			// 點擊區域渲染
			changePage(1);

			pageAverage(areaTemp);

		});
	}

}
areaAlinkClick();

// 判斷結構
function reBoxPrint() {
	// 判斷結構回傳function
	// if (boxContainerBody.children[0].nodeName !== "UL"){
	// 	boxContainerBody.innerHTML = `<ul class="scenic"></ul>`;
	// }else
	if (boxContainer.classList[1] === "newBox") {
		newKH();
	} else if (scenicItem.nodeName === "UL") {
		changePage(1);
	} else if (pageBox.nodeName === "DIV") {
		pageAverage(areaTemp);
	}
	boxContainerFoot.innerHTML = `<div class="pageBox">
		<div class="page_pre"><a href="#"><i class="fas fa-angle-left"></i></a></div>
		<ul class="page_num"></ul>
		<div class="page_next"><a href="#"><i class="fas fa-angle-right"></i></a></div>
	</div>`;
}

// 點擊區域
// TODO:不建議函式、變數、參數使用相同名稱，導致增加維護上的困難度。
function onScenicItem() {

	let scenicKHItem = document.querySelectorAll(".scenic .scenic_item");
	scenicKHItem.forEach(scenicKHItem => scenicKHItem.addEventListener('click', function (e) {
		e.preventDefault();
		if (this.classList[1] === 'randomKh_item') {
			let randomArea = this.innerText;
			areaKH(randomArea);
		} else {
			// console.log(this.children[0].dataset.name);
			let scenicName = this.children[0].dataset.name;
			scenicKH(scenicName);
		}
	}))
}

// 印出區域資料
function printData(pageItemPint) {
	if (boxContainerBody.children[0].nodeName !== "UL") {
		reBoxPrint();

	}
	let print = "";
	for (let i = 0; i < pageItemPint.length; i++) {
		let ketWordTime = pageItemPint[i].Opentime;
		// 關鍵字取代
		let ketWord1 = ["全天候開放"];
		for (let j = 0; j < 10; j++) {
			if (ketWordTime.indexOf(ketWord1[j]) !== -1) {
				ketWordTime = ketWord1[0];
			} else if (ketWordTime.length > 40) {
				ketWordTime = "詳請景點內介紹";
			}
		}
		let ketWordName = pageItemPint[i].Name;
		// console.log(ketWordName)
		ketWordName = ketWordName.replace(
			/[\ |\~|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\ |\=|\||\\|\[|\]|\{|\}|\;|\:|\”|\’|\,|\<|\.|\>|\/|\?]/g,
			""
		);
		// 點擊回傳
		print +=
			`<li class="scenic_item">
			<a href="#" data-name='${pageItemPint[i].Name}'>
				<div class="scenic_warp">
					<figure>
						<figcaption><div class="scenic_title">${ketWordName}</div><span class="scenic_area">${pageItemPint[i].Area}</span></figcaption>
						<img src="${pageItemPint[i].Picture1}" alt="${pageItemPint[i].Picdescribe1}" title="${pageItemPint[i].Name}">
					</figure>
					<div class="box">
						<div class="head"><i class="fas fa-crosshairs"></i>${pageItemPint[i].Name}</div>
						<div class="body">
							<ul>
								<li>${ketWordTime}</li>
								<li class="toldescribe">${pageItemPint[i].Toldescribe}</li>
							</ul>
						</div>
					</div>
				</div>
			</a>
		</li>`;
	}

	scenicItem.innerHTML = print;
	onScenicItem();
}


// 印出景點資料
function scenicKH(scenicName) {
	formBox.classList.add("scenicBox");
	formBox.classList.remove("areaBox", "scenicBox");
	formBox.classList.remove("foot");
	scenicArea.style.display = "flex";
	scenicItem.style.display = "none";
	boxContainerFoot.style.display = "none";
	let print = "";
	for (let i = 0; i < khDataLen; i++) {
		let name = khTravelDataArray[i].Name;
		if (name === scenicName) {
			boxContainer.children[0].textContent = khTravelDataArray[i].Name;
			print += `<div class="info_box img_box">
				<div class="head"><i class="fas fa-info-circle"></i>景點介紹</div>
				<div class="body">
					<p>${khTravelDataArray[i].Toldescribe}</p>
					<figure>
						<img src="${khTravelDataArray[i].Picture1}" alt="${khTravelDataArray[i].Picdescribe1}" title="${khTravelDataArray[i].Name}">
						<figcaption><i class="fas fa-images"></i>${khTravelDataArray[i].Picdescribe1}</figcaption>
					</figure>
				</div>

			</div>
			<div class="info_box">
				<div class="area_box">
					<a href="#"><i class="fas fa-chevron-circle-left"></i><span class="title">${khTravelDataArray[i].Area}</span></a>
					<div class="info_box img_box"><img class="khTravelDataArray" src="https://khh.travel/content/images/content/region/region-map-${khTravelDataArray[i].Zipcode}.png" alt="${khTravelDataArray[i].Area}" title="${khTravelDataArray[i].Area}"></div>
				</div>

				<div class="head">相關資訊</div>
				<div class="body">
					<dl class="info">
						<dt><i class="fas fa-clock"></i>營業時間</dt>
						<dd>${khTravelDataArray[i].Opentime}</dd>
					</dl>
					<dl class="info">
						<dt><i class="fas fa-map-marker-alt"></i>地址</dt>
						<dd><a href="https://www.google.com.tw/maps/place/${khTravelDataArray[i].Py},${khTravelDataArray[i].Px}" target="_blank"><i class="fas fa-location-arrow"></i>${khTravelDataArray[i].Add}</a></dd>
					</dl>
					<dl class="info">
						<dt><i class="fas fa-phone-alt"></i>電話</dt>
						<dd>+${khTravelDataArray[i].Tel}</dd>
					</dl>
					<dl class="info">
						<dt><i class="fas fa-link"></i>相關連結</dt>
						<dd><a href="https://www.google.com.tw/search?q=${khTravelDataArray[i].Name}" target="_blank"><i class="fas fa-link"></i>相關連結</a></dd>
					</dl>
					<dl class="info">
						<dt><i class="fas fa-bullhorn"></i>備註</dt>
						<dd>${khTravelDataArray[i].Remarks}</dd>
					</dl>
				</div>
				<div class="head">交通</div>
				<div class="body">
				<p>${khTravelDataArray[i].Travellinginfo}</p>
				<a href="https://maps.google.com/maps?daddr=${khTravelDataArray[i].Py},${khTravelDataArray[i].Px}&amp;hl=zh-tw" target="_blank"><i class="fas fa-location-arrow"></i>可依您的出發地，選擇適合的交通方式 </a>
				</div>
			</div>`;
		}
	}
	scenicArea.innerHTML = print;
	// areaAlinkClick()
	// onScenicItem();
}

// 天氣資料
function weather() {
	let weatherPrint = "";
	//夏至時間：以2021/7/21為今天
	let date = new Date(2021, 6, 21, 23, 59);
	let monthDate = date.getMonth() + 1;
	//補零
	function monthDateLen(monthDate) {
		return monthDate < 10 ? "0" + monthDate : monthDate;
	}
	let getdateDate = date.getDate();
	let dayList = ["日", "一", "二", "三", "四", "五", "六"];
	let todayDate = "星期" + dayList[date.getDay()];
	let tomorrowDate = "星期" + dayList[date.getDay() + 1];
	let acquiredDate = "星期" + dayList[date.getDay() + 2];
	let today = monthDateLen(monthDate) + "-" + getdateDate;
	let tomorrow = monthDateLen(monthDate) + "-" + (getdateDate + 1);
	let acquired = monthDateLen(monthDate) + "-" + (getdateDate + 2);

	for (let i = 0; i < weatherLocationLen; i++) {
		// let khWeather =
		let MinTodayPrint = "";
		let MinTomorrowPrint = "";
		let MinAcquiredPrint = "";
		let MaxTodayPrint = "";
		let MaxTomorrowPrint = "";
		let MaxAcquiredPrint = "";
		let UVITodayPrint = "";
		let ExposureTodayPrint = "";
		let ComplexTitlePrint = "";
		let ComplexTodayPrint = "";
		let IconTodayPrint = "";
		let IconTomorrowPrint = "";
		let IconAcquiredPrint = "";
		let ElementValueToday = "";

		// 天氣條件
		if (weatherLocation[i].locationName === "高雄市") {
			weatherBox.innerHTML = weatherPrint;
			let weatherKH = weatherLocation[i].weatherElement;
			let weatherLen = weatherKH.length;

			for (let j = 0; j < weatherLen; j++) {
				if (weatherKH[j].elementName === "MinT") {
					let weatherDay = weatherKH[j].time;
					let weatherDayTLen = weatherDay.length;


					for (let k = 0; k < weatherDayTLen; k++) {
						let weatherDayTime = weatherDay[k].endTime.substr(5, 5);
						if (weatherDayTime === today) {
							let MinTToday = weatherDay[k];
							MinTodayPrint += `${MinTToday.elementValue.value}`;
						}
						if (weatherDayTime === tomorrow) {
							let MinTTomorrow = weatherDay[k];
							MinTomorrowPrint += `${MinTTomorrow.elementValue.value}`;
						}
						if (weatherDayTime === acquired) {
							let MinTAcquired = weatherDay[k];
							MinAcquiredPrint += `${MinTAcquired.elementValue.value}`;
						}
					}
				}

				if (weatherKH[j].elementName === "MaxT") {
					let weatherDay = weatherKH[j].time;
					let weatherDayTLen = weatherDay.length;


					for (let k = 0; k < weatherDayTLen; k++) {
						// let weatherDayTime = weatherDay[k].endTime<weatherDay[k].endTime  ? + weatherDay[k].endTime :weatherDay[k].endTime

						let weatherDayTime = weatherDay[k].endTime.substr(5, 5);
						if (weatherDayTime === today) {
							let MaxTToday = weatherDay[k];
							MaxTodayPrint += `${MaxTToday.elementValue.value}`;
						}
						if (weatherDayTime === tomorrow) {
							let MaxTTomorrow = weatherDay[k];
							MaxTomorrowPrint += `${MaxTTomorrow.elementValue.value}`;
						}
						if (weatherDayTime === acquired) {
							let MaxTAcquired = weatherDay[k];
							MaxAcquiredPrint += `${MaxTAcquired.elementValue.value}`;
						}
					}
				}

				if (weatherKH[j].elementName === "UVI") {
					let weatherDay = weatherKH[j].time;
					let weatherDayTLen = weatherDay.length;



					for (let k = 0; k < weatherDayTLen; k++) {
						let weatherDayTime = weatherDay[k].endTime.substr(5, 5);
						if (weatherDayTime === today) {
							let UVIValue = weatherDay[k].elementValue;
							UVITodayPrint += `${UVIValue[0].measures}`;
							ExposureTodayPrint += `${UVIValue[1].value}`;
						}
					}

				}

				if (weatherKH[j].elementName === "WeatherDescription") {
					let weatherDay = weatherKH[j].time;
					let weatherDayTLen = weatherDay.length;


					ComplexTitlePrint += `${weatherKH[j].description}`;

					for (let k = 0; k < weatherDayTLen; k++) {
						let complexValue = weatherDay[k].elementValue;
						let weatherDayTime = weatherDay[k].endTime.substr(5, 5);
						let complex = weatherDay[k];
						let weatherIcon = complex;
						// (es7)includes 則不需要 判斷 !==-1

						// 假設狀態有100
						// Overcast 陰天
						// Cloudy 多雲的
						// Showers 陣雨
						// Thunderstorms 雷暴
						let keyword = complex.elementValue.value;
						let pushKeyWord = weatherIcon.elementValue;
						let weather1 = ["晴天"];
						let weather2 = ["多雲時晴", "晴時多雲"];
						let weather3 = ["多雲"];
						let weather5 = ["多雲時陰"];
						let weather7 = ["陰天"];
						let weather10 = [
							"陰時多雲短暫雨",
							"陰時多雲短暫陣雨",
							"晴午後陰短暫雨",
							"晴午後陰短暫陣雨",
							"陰午後短暫陣雨",
							"陰短暫陣雨",
							"陰短暫雨",
							"雨天",
						];
						let weather11 = [
							"多雲陣雨",
							"多雲短暫雨",
							"多雲短暫陣雨",
							"午後短暫陣雨",
							"短暫陣雨",
							"多雲時晴短暫陣雨",
							"多雲時晴短暫雨",
							"晴時多雲短暫陣雨",
							"晴短暫陣雨",
							"短暫雨",
							"多雲",
						];
						let weather12 = ["多雲時陰短暫雨", "多雲時陰短暫陣雨"];
						let weather14 = [
							"陰有陣雨",
							"陰有雨",
							"陰陣雨",
							"陣雨",
							"陰雨",
							"午後陣雨",
							"有雨",
						];
						let weather17 = ["陰短暫陣雨或雷雨"];
						let weather19 = ["晴午後多雲局部雨"];
						let weather20 = ["多雲午後局部雨"];
						let weather24 = ["晴時多雲"];
						let weather33 = ["多雲陣雨或雷雨", "多雲短暫陣雨或雷雨"];
						let weather34 = ["多雲時陰陣雨或雷雨"];
						// 假設關鍵字在10個內
						for (b = 0; b < 10; b++) {
							// console.log(keyword.indexOf(status[b]) !== -1)
							if (keyword.indexOf(weather34[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_34";
							} else if (keyword.indexOf(weather33[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_33";
							} else if (keyword.indexOf(weather24[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_24";
							} else if (keyword.indexOf(weather20[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_20";
							} else if (keyword.indexOf(weather19[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_19";
							} else if (keyword.indexOf(weather17[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_17";
							} else if (keyword.indexOf(weather14[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_14";
							} else if (keyword.indexOf(weather12[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_12";
							} else if (keyword.indexOf(weather11[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_11";
							} else if (keyword.indexOf(weather10[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_10";
							} else if (keyword.indexOf(weather7[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_7";
							} else if (keyword.indexOf(weather5[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_5";
							} else if (keyword.indexOf(weather3[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_3";
							} else if (keyword.indexOf(weather2[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_2";
							} else if (keyword.indexOf(weather1[b]) !== -1) {
								pushKeyWord["weatherIcons"] = "wt_1";
							}
						}
						if (weatherDayTime === today) {
							IconTodayPrint = complexValue.weatherIcons;
							ElementValueToday = complexValue.value
							// console.log(complexValue.value.length)
							let lenStr = 40;
							if (complexValue.value.length > lenStr) {
								ComplexTodayPrint = complexValue.value.substring(0, lenStr);
							}
							// TODO:ComplexTodayPrint 建議使用樣板字面值的寫法。
							// console.log(ElementValueToday)
						}
						if (weatherDayTime === tomorrow) {
							IconTomorrowPrint = complexValue.weatherIcons;
						}
						if (weatherDayTime === acquired) {
							IconAcquiredPrint = complexValue.weatherIcons;
						}

						weatherPrint = `
							<div class="title">${weatherLocation[i].locationName}天氣預報</div>
							<div class="container">
								<ul>
									<li>
										<dl>
											<dt><span>${today}</span><span>${todayDate}</span></dt>
											<dd>${MinTodayPrint}~${MaxTodayPrint}°C</dd>
											<dd><span class="weatherIcons ${IconTodayPrint}"></span></dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt><span>${tomorrow}</span><span>${tomorrowDate}</span></dt>
											<dd>${MinTomorrowPrint}~${MaxTomorrowPrint}°C</dd>
											<dd><span class="weatherIcons ${IconTomorrowPrint}"></span></dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt><span>${acquired}</span><span>${acquiredDate}</span></dt>
											<dd>${MinAcquiredPrint}~${MaxAcquiredPrint}°C</dd>
											<dd><span class="weatherIcons ${IconAcquiredPrint}"></span></dd>
										</dl>
									</li>
								</ul>
								<dl class="Exposure">
									<dt><i class="fas fa-umbrella-beach"></i>今日${UVITodayPrint}</dt>
									<dd>${ExposureTodayPrint}</dd>
								</dl>
								<dl class="Complex">
									<dt><i class="fas fa-temperature-low"></i>今日${ComplexTitlePrint}</dt>
									<dd>${ComplexTodayPrint}...<a class="alink" href="#">more</a></dd>
								</dl>
							</div>`;
						weatherBox.innerHTML = weatherPrint;
						// console.log(ElementValueToday)
						let alinkMore = document.querySelector(".weather .alink");
						let ComplexTodayText = document.querySelector(".weather .Complex dd");
						alinkMore.addEventListener('click', function () {
							ComplexTodayText.innerHTML = ElementValueToday;
							ComplexTodayText.parentNode.classList.remove("Complex");
							ComplexTodayText.parentNode.style.cssText = "height:auto";
						}, false);
					}
				}
			}


		}
	}
}
weather();

// [操作]頁數
function numPage(pagNum) {
	let pageItem = document.querySelectorAll(".page_num li");
	// [頁數]樣式
	for (let i = 0; i < pageItem.length; i++) {
		if (pagNum === parseFloat(pageItem[i].childNodes[0].innerHTML)) {
			pageItem[i].classList.add("now");
		} else if (pagNum === parseFloat(pageItem[i].childNodes[0].innerHTML)) {
			pageItem[i].classList.add("now");
		} else {
			pageItem[i].classList.remove("now");
		}
		pageItem[i].addEventListener('click', function (e) {
			if (e.target.nodeName !== "A") {
				return;
			}
			e.preventDefault();
			let pagNum = parseInt(e.target.innerHTML);
			// if(e.target.nodeName === 'A')

			changePage(pagNum);
		});
	}
}

// 總數／頁數
function pageAverage() {
	return Math.ceil(areaTemp.length / pageNumber);
}
// [操作]首頁
KH_Travel.addEventListener('click', indexHome, false);
function indexHome() {
	boxContainer.classList.remove("box_area");
	scenicArea.style.display = "none";
	scenicItem.style.display = "flex";
	areaTemp = khTravelDataArray;
	pageAverage(areaTemp);
	boxContainer.children[0].textContent = "高雄市";
	formBox.classList.add("areaBox");
	formBox.classList.remove("newBox", "scenicBox");

	if (boxContainerBody.children[0].nodeName !== "UL") {
		reBoxPrint();
	}
	changePage(1);
}
// TODO:changePage(currentPage)已換行。
// [操作]上一頁
function prevPage() {
	currentPage--;
	if (currentPage < 1) {
		currentPage = 1;
	}
	changePage(currentPage);
}
// [操作]下一頁
function nextPage() {
	currentPage++;
	if (currentPage > pageAverage()) {
		currentPage = pageAverage();
	}
	changePage(currentPage);
}
// 頁面顯示
function changePage(pagNum) {

	if (boxContainerFoot.style.display === "none") {
		boxContainerFoot.style.display = "block";
	}
	boxContainer.children[0].style.display = "inline-block";
	currentPage = pagNum;

	// pageItem列出
	let pageItemPint = [];
	for (
		let i = (pagNum - 1) * pageNumber;
		i < pagNum * pageNumber && i < areaTemp.length;
		i++
	) {
		pageItemPint.push(areaTemp[i]);
	}
	printData(pageItemPint);
	// pagePre disabled樣式
	if (pagNum === 1) {
		pagePre.childNodes[0].classList.add("disabled");
	} else {
		pagePre.childNodes[0].classList.remove("disabled");
	}
	// pageNext disabled樣式
	if (pagNum === pageAverage()) {
		pageNext.childNodes[0].classList.add("disabled");
	} else {
		pageNext.childNodes[0].classList.remove("disabled");
	}

	//頁數
	let stepPage = 3;
	let indexPage = pageAverage();
	let pageNumAll = areaTemp.length;
	pageNumTotal = indexPage > pageNumAll ? pageNumAll : indexPage;

	if (indexPage < stepPage * 2 + 6) {
		pageAdd(1, pageNumTotal + 1);
		pageBoxNum.innerHTML = pagesAll.pageAdd;
	} else if (pagNum < stepPage * 2 + 1) {
		pageAdd(1, stepPage * 2 + 4);
		pageAddLast();
		pageBoxNum.innerHTML = pagesAll.pageAdd + pagesAll.pageAddLast;
	} else if (pagNum >= indexPage - stepPage * 2) {
		pageAdd(indexPage - stepPage * 2 - 2, indexPage + 1);
		pageAddFirst();
		pageBoxNum.innerHTML = pagesAll.pageAddFirst + pagesAll.pageAdd;
	} else {
		pageAddFirst();
		pageAdd(pagNum - stepPage * 2 + 3, pagNum + stepPage * 2 - 2);
		pageAddLast();
		pageBoxNum.innerHTML =
			pagesAll.pageAddFirst + pagesAll.pageAdd + pagesAll.pageAddLast;
	}
	numPage(pagNum);
	pagePre.addEventListener('click', prevPage, false);
	pageNext.addEventListener('click', nextPage, false);
}
// TODO:函式 pageAdd、pageAddFirst、pageAddLast 的變數 pageTabs 建議使用樣板字面值的寫法。
function pageAdd(startPage, endPage) {
	let pageTabs = ``;
	for (let i = startPage; i < endPage; i++) {
		pageTabs += `<li><a href="#">${i}</a></li>`;
	}
	pagesAll["pageAdd"] = pageTabs;
}

function pageAddFirst() {
	let pageTabs = ``;
	pageTabs += `<li><a href="#">1</a></li><li>...</li>`;
	pagesAll["pageAddFirst"] = pageTabs;
}

function pageAddLast() {
	let pageTabs = ``;
	pageTabs += `<li>...</li><li><a href="#">${pageAverage()}</a></li>`;
	pagesAll["pageAddLast"] = pageTabs;
}

function pageFinish() {
	pageBoxNum.innerHTML =
		pagesAll.pageAddFirst + pagesAll.pageAdd + pagesAll.pageAddLast;
}
pageFinish()
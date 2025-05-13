const panelMathematical = document.querySelector('.panelMathematical');
const panelTool = document.querySelector('.panel-tool');
const calculatorInput = document.querySelector('.calculator-input');
const calculatorOperation = document.querySelector('.calculator-operation');
let result = "";
let inputNumber = "";

function panelNumber() {
  const fontIconName = [
    { fontIcon: '+', fontName: 'add' },
    { fontIcon: '×', fontName: 'close' },
    { fontIcon: '-', fontName: 'remove' }
  ];
  const toolIcon = ['0', '00', '.',
    { font: 'font', fontName: 'remove', fontIcon: '/' },
    'AC',
    { font: 'font', fontName: 'backspace' },
    { font: 'font', fontName: 'equal' }
  ];
  for (let i = 9; i > 0; i--) {
    let numItem = document.createElement('button');
    let iconItem = document.createElement('button');
    numItem.className = 'panel-item';
    numItem.textContent = i;
    panelMathematical.appendChild(numItem);
    numItem.addEventListener('click', () => handleNumClick(i.toString()));

    if (i % 3 === 1) {
      iconItem.className = 'panel-item panel-item-icon';
      let iconIndex = Math.floor((9 - i) / 3);
      iconItem.innerHTML = `<span class="material-symbols-outlined">${fontIconName[iconIndex].fontIcon}</span>`;
      panelMathematical.appendChild(iconItem);
      iconItem.addEventListener('click', () => {
        handleIconClick(fontIconName[iconIndex].fontIcon)
      });

    }
  }
  for (let i = 0; i < toolIcon.length; i++) {
    let toolItem = document.createElement('button');
    // 除
    if (typeof toolIcon[i] === 'object' && toolIcon[i].fontName === 'remove') {
      toolItem.className = 'panel-item panel-item-icon';
      toolItem.innerHTML = `<span class="icon-divide material-symbols-outlined">${toolIcon[i].fontName}</span>`;
      toolItem.addEventListener("click", () => handleIconClick(toolIcon[i].fontIcon));

    } else if (typeof toolIcon[i] === 'object' && toolIcon[i].fontName === 'equal') {
      // 等於
      toolItem.className = 'panel-item panel-item-row';
      toolItem.innerHTML = `<span class="material-symbols-outlined">${toolIcon[i].fontName}</span>`;
      toolItem.addEventListener("click", calculate);

    } else if (toolIcon[i] === 'AC') {
      // 清除
      toolItem.className = 'panel-item';
      toolItem.innerHTML = toolIcon[i];
      toolItem.addEventListener("click", cleanCalculate);

    } else if (toolIcon[i].fontName === 'backspace') {
      // 刪除
      toolItem.className = 'panel-item panel-item-icon';
      toolItem.innerHTML = `<span class="material-symbols-outlined">${toolIcon[i].fontName}</span>`;
      toolItem.addEventListener("click", delCalculate);

    } else if (toolIcon[i] === '.') {
      // 小數點
      toolItem.className = 'panel-item';
      toolItem.innerHTML = toolIcon[i];

      toolItem.addEventListener("click", () => handleIconClick(toolIcon[i]));
    } else {
      // 零
      toolItem.className = 'panel-item';
      toolItem.textContent = toolIcon[i];
      toolItem.addEventListener('click', () => handleNumClick(toolIcon[i].toString()));
    }
    panelTool.appendChild(toolItem);
  }
}

function delCalculate() {
  if (result.length <= 0) {
    calculatorInput.value = 0
  }
  result = result.slice(0, result.length - 1)
  calculatorOperation.innerHTML = result;
  calculatorInput.value = 0
}

function cleanCalculate() {
  result = ''
  calculatorOperation.innerHTML = result;
  calculatorInput.value = 0
}

function handleNumClick(num) {
  console.log(num)
  inputNumber += num;
  calculatorOperation.innerHTML += num;
  result += num;
  calculate()
  console.log('result' + result)
}

function handleIconClick(iconText) {
  let lastChar = result.trim().slice(-1);
  if (result.length >= 40) {
    calculate()
  }

  let NotRepeatingText = result.indexOf('.')
  console.log(NotRepeatingText)
  if (NotRepeatingText > -1) {
    return
  } else if (!["+", "×", "-", "/", "."].includes(lastChar)) {
    calculatorOperation.innerHTML += ` ${iconText} `;
    result += iconText;
    inputNumber = "";
  }
}

function calculate() {
  // let lastChar = result.trim().slice(-1);
  // if (["+", "×", "-", "/", "."].includes(lastChar)) {
  //   result = result.trim().slice(0, -1);
  //   calculatorOperation.innerHTML = `${result}`;
  // }
  try {
    let sanitizedResult = result.replace(/×/g, "*").replace(/÷/g, "/"); //轉換原本的符號
    let calculatedResult = eval(sanitizedResult); //這是計算書出的結果
    calculatorInput.value = formatWithCommas(calculatedResult);

  } catch (error) {
    console.error('計算錯誤:', error);
  }
}

const numberFormatter = pattern => number => {
  number = number.toString();
  while (pattern.test(number)) {
    number = number.replace(pattern, "$1,$2");
  }
  return number;
};

const formatWithCommas = numberFormatter(/(-?\d+)(\d{3})/);
// function numberWithCommas(x) {
//   console.log(x)
//   x = x.toString();
//   let pattern = /(-?\d+)(\d{3})/;
//   while (pattern.test(x))
//     x = x.replace(pattern, "$1,$2");
//   return x;
// }

panelNumber()
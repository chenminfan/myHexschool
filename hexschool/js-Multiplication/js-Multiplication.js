let multiplicationList = document.querySelector('.multiplication-list');
let box_title = document.querySelector('.box-title');

function createTable() {
  let number_before = 2;

  for (let i = 1; i <= 8; i++) {
    let number_after = 1;
    let box = document.createElement('div');
    box.className = 'box box-number';
    for (let j = 1; j <= 1; j++) {
      let box_list = document.createElement('div');
      box_list.className = 'box-list';
      box_list.innerHTML += `<div class="box-item"><div class="box-title">${number_before}</div></div>`;

      for (let k = 1; k <= 9; k++) {
        let box_item = document.createElement('div');
        box_item.className = 'box-item';
        let result = number_before * number_after;
        box_item.innerHTML += `${number_before} × ${number_after} ＝ ${result}`;
        box_list.appendChild(box_item);
        number_after++;
      }

      box.appendChild(box_list);
      number_before++;
    }
    multiplicationList.appendChild(box);

  }
}


createTable()
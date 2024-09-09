// 每個檔案只能一個預設匯出
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  myName: 'MIN',
  fn() {
    console.log('my name min')
  }
};


// 具名匯出：每個檔案能有多個具名匯出
export const myName = 'hi hi min min'
export function fn() {
  console.log('hi hi my name min min')
}
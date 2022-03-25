// module.exports = {extends: ['@commitlint/config-conventional']}
module.exports = {
    // 可選型別
    types: [{
            value: 'WIP',
            name: '💪  WIP: 暫存工作。'
        },
        {
            value: 'feat',
            name: '✨  feat: 新增功能。'
        },
        {
            value: 'fix',
            name: '🐞  fix: 修復 bug。'
        },
        {
            value: 'refactor',
            name: '🛠  refactor: 重構、優化程式碼，不是新功能或是修復 bug。'
        },
        {
            value: 'docs',
            name: '📚  docs: 修改文件。'
        },
        {
            value: 'test',
            name: '🏁  test: 新增或修改現有的測試'
        },
        {
            value: 'chore',
            name: '🗯  chore: 修改建置流程、包管理、構建過程或輔助工具的變動。不包含修改測試檔、src 裡的檔案。'
        },
        {
            value: 'style',
            name: '💅  style: 修改程式碼的風格，不會對產品有任何的功能變動 (空白鍵、格式化、分號...等)。'
        },
        {
            value: 'revert',
            name: '⏪  revert: 撤銷、復原一次 git commit。'
        }
    ],

    // 訊息步驟
    messages: {
        type: '請選擇提交型別:',
        customScope: '請輸入修改範圍(可選):',
        subject: '請簡要描述提交(必填):',
        body: '請輸入詳細描述(可選):',
        footer: '請輸入要關閉的issue(可選):',
        confirmCommit: '確認使用以上資訊提交？(y/n/e/h)'
    },
    // 跳過問題
    skipQuestions: ['body', 'footer'],
    // subject文字長度預設是72
    subjectLimit: 72
}
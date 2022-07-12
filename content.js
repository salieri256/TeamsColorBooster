chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request !== 'SET_COLOR') return;
    chrome.storage.sync.get(['__color'], items => {
        const unreadTeamElms = document.querySelectorAll('.team-name-unread')
        const reactedActionElms = document.querySelectorAll('.message-actions-reacted')
        unreadTeamElms.forEach(elm => {
            elm.style.color = items['__color'] + ' !important'
        })
        reactedActionElms.forEach(elm => {
            elm.style.color = items['__color'] + ' !important'
            elm.style.fontSize = '20px !important'
        })
    })
})

const colorTextElm = document.getElementById('color')
const changeBtnElm = document.getElementById('change')

changeBtnElm.onclick = () => {
    chrome.storage.sync.set({
        ['__color']: colorTextElm.value
    }, async () => {
        const queryOptions = {
            active: true,
            currentWindow: true
        }
        const [tab] = await chrome.tabs.query(queryOptions)
        chrome.tabs.sendMessage(tab.id, 'SET_COLOR')
    })
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        ['__color']: '#f00'
    })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.sendMessage(tabId, 'SET_COLOR')
})

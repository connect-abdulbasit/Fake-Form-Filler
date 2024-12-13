chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "fillAllForms",
    title: "Fill All Forms",
    contexts: ["all"],
  });
  chrome.contextMenus.create({
    id: "clearAllForms",
    title: "Clear All Forms",
    contexts: ["all"], // This menu will appear when text is selected
  });
});

// Listener for context menu item click
chrome.contextMenus.onClicked.addListener((info) => {
  // Check if the tab object is defined
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0]; // The active tab in the current window
    if (tab && tab.id) {
      // Inject content script into the active tab
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          files: ["content.js"],
        },
        () => {
          if (info.menuItemId === "fillAllForms") {
            chrome.tabs.sendMessage(tab.id, { action: "fillAllForms" });
          } else if (info.menuItemId === "clearAllForms") {
            chrome.tabs.sendMessage(tab.id, { action: "clearForm" });
          }
        }
      );
    }
  });
});

// Listener for icon click
chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.id) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["content.js"],
      },
      () => {
        // After script injection, send the message to content.js
        chrome.tabs.sendMessage(tab.id, { action: "fillAllForms" });
      }
    );
  }
});

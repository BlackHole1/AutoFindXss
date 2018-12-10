setTimeout(() => {
  chrome.runtime.sendMessage({
    identifier: Identifier,
    content: document.getElementsByTagName('html')[0].innerHTML.toString()
  });
}, 1000);

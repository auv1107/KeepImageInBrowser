function image_on_click(info, tab) {
    console.log("clicked");
    console.log("src " + info.srcUrl);
    console.log("src " + tab.url);
    var item = {"srcUrl": info.srcUrl, "tabUrl": tab.url, "tabTitle": tab.title};
    new LocalStorage().appendItem(item);
}

//var sep = chrome.contextMenus.create({"type":"separator","onclick":n});
var menu = chrome.contextMenus.create({"type":"normal","title":"keep image in browser", "contexts":["image"],"onclick":image_on_click});
console.log("menu");
//console.log("sep " + sep);

function fileTree(elementId) {
  NodeList.prototype.has = function(selector) {
    return Array.from(this).filter(e => e.querySelector(selector));
  };

  var element = document.getElementById(elementId);
  element.classList.add('file-list');
  var liElementsInideUl = element.querySelectorAll('li');
  liElementsInideUl.has('ul').forEach(li => {
    li.classList.add('folder-root');
    li.classList.add('closed');
    var spanFolderElementsInsideLi = li.querySelectorAll('span.folder-name');
    spanFolderElementsInsideLi.forEach(span => {
      if (span.parentNode.nodeName === 'LI') {
        span.onclick = function(e) {
          span.parentNode.classList.toggle('open');
        };
      }
    });
  });
}

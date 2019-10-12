A simple file tree view using JavaScript. [Demo](https://file-tree.netlify.com/)

Example usage:

```html
// import file-tree.css
<link rel="stylesheet" type="text/css" href="file-tree.css" />

// create folders and files
<ul id="file-tree" class="file-tree">
  <li><span>file</span></li>
  <li>
    <span class="folder-name">folder 1</span>
    <ul>
      <li><span>file 1</span></li>
      <li><span>file 2</span></li>
      <li>
        <span class="folder-name">sub-folder</span>
        <ul>
          <li><span>file</span></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

// import file-tree.js and initialize fileTree function
<script src="file-tree.js"></script>
<script type="text/javascript">
  window.onload = function() {
    // passing the id of parent UL element
    fileTree('file-tree');
  };
</script>
```

example also available in `index.html`,
`file-tree.css` uses icons which are available in `icons` folder, you can change the same to use custom icons.

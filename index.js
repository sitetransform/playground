function runCode() {

  var htmlCode = htmlEditor.getValue();
  var cssCode = cssEditor.getValue();
  var jsCode = jsEditor.getValue();
  var iframe = document.getElementById("output").contentWindow.document;

  iframe.open();
  if (document.getElementById("usesitetransform").checked) {
    iframe.write(`
      <html>
      <head>
      <link rel="stylesheet" href="https://sitetransform.github.io/sitetransform.css/dist/sitetransform.min.css">
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}</body>
      <script>${jsCode}<\/script>
      </html>
    `);
  }
  else {
    iframe.write(`
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}</body>
      <script>${jsCode}<\/script>
      </html>
    `);
  }
}

function openwindow() {
  var htmlCode = htmlEditor.getValue();
  var cssCode = cssEditor.getValue();
  var jsCode = jsEditor.getValue();
  if (document.getElementById("usesitetransform").checked) {
    var win = window.open("", "Title", "" + (screen.height - 400) + ",left=" + (screen.width - 840));
    win.document.body.innerHTML = `
    <html>
    <head>
    <link rel="stylesheet" href="https://sitetransform.github.io/sitetransform.css/dist/sitetransform.min.css">
      <style>${cssCode}</style>
    </head>
    <body>${htmlCode}</body>
    <script>${jsCode}<\/script>
    </html>
  `;
  }
  else {
    var win2 = window.open("", "Title", "" + (screen.height - 400) + ",left=" + (screen.width - 840));
    win2.document.body.innerHTML = `
    <html>
    <head>
      <style>${cssCode}</style>
    </head>
    <body>${htmlCode}</body>
    <script>${jsCode}<\/script>
    </html>
  `;
  }
}

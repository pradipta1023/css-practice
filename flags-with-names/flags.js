const flagsJson = JSON.parse(Deno.readTextFileSync("./flags.json"));

const flagsDiv = flagsJson.map((flag) =>
  ` <div class="flag-container">
        <img
          class="img-container"
          src="${flag.src}"
          alt="${flag.name}"
        >
        <p>${flag.name}</p>
      </div>`
);

const html = [
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <link rel="stylesheet" href="flags.css">
  <body>
    <div class="flags-container">`,
  ...flagsDiv,
  `</div>
  </body>
</html>
`,
];

const htmlContent = html.join("\n");

Deno.writeTextFileSync("./flags.html", htmlContent);

const players = JSON.parse(Deno.readTextFileSync("./batsman.json"));

const tableRows = players.map((player) =>
  `<tr>
          <td>${player.name}</td>
          <td>${player.country}</td>
          <td>${player.role}</td>
          <td>${player.matches}</td>
          <td>${player.runs}</td>
          <td>${player.average}</td>
          <td>${player.strike_rate}</td>
        </tr>`
);

const html = [
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <link rel="stylesheet" href="batsman.css">
  </head>
  <body>
    <h1>Batsman Table</h1>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>country</th>
          <th>role</th>
          <th>matches</th>
          <th>runs</th>
          <th>average</th>
          <th>strike_rate</th>
        </tr>
      </thead>
      <tbody>`,
  ...tableRows,
  `</tbody>
    </table>
  </body>
</html>
`,
];

const htmlContents = html.join("\n");
Deno.writeTextFileSync("./batsmen.html", htmlContents);

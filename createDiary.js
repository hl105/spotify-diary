const fs = require('fs');

const createDiaryPage = (number) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Track Top ${number}</title>
    <!-- Add any styles or links to stylesheets here -->
</head>
<body>
    <h2>so... why?</h2>
    <textarea placeholder="Enter your text here..."></textarea>
    <br>
    <input type="file" accept="image/*">
</body>
</html>`;
};

const createCss



for (let i = 1; i <= 25; i++) {
    fs.writeFileSync(`img${i}.html`, createDiaryPage(i));
    fs.writeFileSync(`img${i}.css`, createCss(i));
}
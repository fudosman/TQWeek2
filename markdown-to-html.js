const fs = require('fs');
const marked = require('marked');
const markdown = fs.readFileSync('path/to/markdown/file.md', 'utf8');
const html = marked(markdown);
fs.writeFileSync('path/to/output/file.html', html);
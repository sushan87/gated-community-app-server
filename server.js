const express = require('express');
const app = express();
const port = 5000;
// create contents
let contents = [
  { id: 1, title: 'content 1', content: 'Content 1' },
  { id: 2, title: 'content 2', content: 'Content 2' },
  { id: 3, title: 'content 3', content: 'Content 3' }
];
// create an endpoint to get all contents
app.get('/contents', (req, res) => {
  res.json(contents);
});
// create an endpoint to get an content by id
app.get('/contents/:id', (req, res) => {
  const content = contents.find(a => a.id === parseInt(req.params.id));
  if (!content) return res.status(404).send('content not found');
  res.json(content);
});
// create an endpoint to create an content
app.post('/contents', (req, res) => {
  const content = {
    id: contents.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  contents.push(content);
  res.json(content);
});
// create an endpoint to update an content
app.put('/contents/:id', (req, res) => {
  const content = contents.find(a => a.id === parseInt(req.params.id));
  if (!content) return res.status(404).send('content not found');
  content.title = req.body.title;
  content.content = req.body.content;
  res.json(content);
});
// create an endpoint to delete an content
app.delete('/contents/:id', (req, res) => {
  const content = contents.find(a => a.id === parseInt(req.params.id));
  if (!content) return res.status(404).send('content not found');
  const index = contents.indexOf(content);
  contents.splice(index, 1);
  res.json(content);
});
app.listen(port, () => console.log(`Sample API listening at http://localhost:${port}`));
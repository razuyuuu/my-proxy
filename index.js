const express = require('express');
const Unblocker = require('unblocker');

const app = express();
const unblocker = new Unblocker({ prefix: '/proxy/' });

app.use(unblocker);

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Web Portal</title></head>
    <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
      <h2>Enter a Website</h2>
      <form onsubmit="window.location.href='/proxy/' + document.getElementById('url').value; return false;">
        <input type="text" id="url" placeholder="https://example.com" style="padding: 10px; width: 300px;" required />
        <button type="submit" style="padding: 10px 20px;">Go</button>
      </form>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Running on port ' + port));

import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log();
  console.log(`escutando na porta${port}`);
  console.log(`http://localhost:${port}`);
});

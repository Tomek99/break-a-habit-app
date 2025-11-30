import app from './app';
import config from './config/config';

app.get('/', (req, res) => {
  res.send('nie!');
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

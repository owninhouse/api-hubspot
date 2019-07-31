import { PORT } from './config';

import App from './App';

import HubspotController from './controllers/hubspot/hubspot.controller';

const app = new App(
  [new HubspotController()],
  PORT,
  '0.0.0.0'
);

app.listen();

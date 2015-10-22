import { actions } from 'sdk';
import HomePage from './HomePage';

let component = {
  name: 'HomePage@alphateam.search-bar',
  constructor: HomePage
};

actions.ComponentActions.register(component);

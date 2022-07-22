import './index.css';
import {App} from './App';
import { appStore } from './App/Store/AppStore';


const root = document.getElementById('root');

if (!root) {
  throw new Error('The root el undef')
}
const app = new App();
root.innerHTML = app.render();

appStore.$render.subscribe(()=>{
  root.innerHTML = app.render();
});

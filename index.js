import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import './index.less';

registerMicroApps([
  {
    name: 'vue',
    entry: '//localhost:7101',
    container: '#subapp-container',
    activeRule: '/vue'
  },
  {
    name: 'vuer',
    entry: '//localhost:8080',
    container: '#subapp-container',
    activeRule: '/vue2'
  }
]);

setDefaultMountApp('/vue');

start();

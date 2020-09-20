import Router from './utils/router.js';
import LoginView from './views/LoginView/LoginView.js';
import RegView from './views/RegView/RegView.js';

console.log('Оно таки заработало!!!');

const app = document.getElementById('application');
const router = new Router(app);

const loginView = new LoginView(app, router, {});
const regView = new RegView(app, router, {});

router.addRoute('/', loginView);
router.addRoute('/reg', regView);

router.open(window.location.pathname);

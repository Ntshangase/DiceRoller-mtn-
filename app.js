import { routes } from './controllers/router.js';


class App {
    _routes = {}
    constructor(routes) {
        this._routes = routes;
    }

    run() {
        console.log(this._routes);
        console.log("My name is Ntshangase, a student from MTN App Academy and my Github username is simphiwe323i@gmail.com");
    }
}

window.app = new App(routes);
window.app.run();
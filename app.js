import { routes } from './controllers/router.js';
import selected from './controllers/roller.js'

class App {
    
    _routes = {}
    _hash = "";

    constructor(routes) {
        this._routes = routes;
    }

    handleRoutes() {

        this._hash = this.getCleanPath();
        if (this._hash === "") {
            this._hash = "/";
        }
        let self = this;
        window.addEventListener("popstate", function (ev) {

            ev.preventDefault();
            self._hash = self.getCleanPath();
            self.render();

        })

    }

    async loadView(path) {

        return await window.fetch("/views/" + path).then(function (r) {
            return r.text();
        });
    }

    async render() {

        const route = this._routes[this._hash];
        const data = route.render();
        const html = await this.loadView(data.view);
        document.getElementById("app").innerHTML = html;

        console.log(data, this._hash); 

    }

    getCleanPath() {
        let hash = window.location.hash;
        return hash.slice(1);
    }

    run() {
        console.log("My name is Ntshangase, a student from MTN App Academy and my Github username is simphiwe323i@gmail.com");
        this.handleRoutes();
        this.render();
        console.log(selected);
    }
}

window.app = new App(routes);
window.app.run();
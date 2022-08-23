import { routes } from './controllers/router.js';


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
        window.addEventListener("popstate", function(ev) {
            //console.log(ev);
            ev.preventDefault();
            self._hash = self.getCleanPath();
            self.render();

        })

    }

    async loadView(path) {
       return await window.fetch("/views"+path).then(function(r)  {
        return r.text();
       });
    }

    async render() {
        
        //console.log("TESTING"); 
        const route = this._routes[this._hash];
        //console.log(route, this._hash);
        const data = await route.render();
        console.log(this._hash);
        //console.log(data);
        const html = this.loadView(data.view);
        //console.log(html);
        document.getElementById("app").innerHTML = html;
          
    } 

    getCleanPath() {
        let hash = window.location.hash;
        return hash.slice(1);
    }

    run() {
        //console.log(this._routes);
        console.log("My name is Ntshangase, a student from MTN App Academy and my Github username is simphiwe323i@gmail.com");
        this.handleRoutes();
        this.render();
    }
}

window.app = new App(routes);
window.app.run();
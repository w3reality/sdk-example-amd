
const requirejs = window.requirejs;

const SDK = requirejs('w3reality-sdk');

class App extends SDK.App {
    // override
    static createWorld() {
        const world = SDK.App.createWorld();
        world.setSpawnPose([4.0, 1.5, 8, -Math.PI/16, -Math.PI/2, 0]);
        return world;
    }

    // override
    constructor(data, name) {
        super(data, name);

        const moduleUrl = "https://w3reality.github.io/sdk-example-amd/dist/mymodule-amd.js";
        // const moduleUrl = "/media/w3reality/apps/amd/dist/mymodule-amd.js"; // for debug

        requirejs([moduleUrl], (MyModule) => { // async loading
            // console.log('this:', this); // App

            const mm = new MyModule();
            this.mm = mm;

            this.setScene(mm.getScene());
        });
    }

    // override
    update() {
        super.update();
        if (this.mm) {
            this.mm.updateScene();
        }
    }

    // override
    free() {
        super.free();
    }
}

export default App;

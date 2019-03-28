define((require, exports, module) => {
    const THREE = window.THREE;

    class MyModule {
        constructor() {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0xcc00cc});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(0, 1, 7);
            const scene = new THREE.Scene();
            scene.add(cube);

            this.cube = cube;
            this.scene = scene;
        }

        getScene() { return this.scene; }

        updateScene() {
            const pos = this.cube.position;
            if (pos.x > 3) {
                pos.x = 0;
            } else {
                pos.x += 0.1;
            }
        }
    }

    return MyModule;
});

    import './style.css'
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
    // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
    import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader'
    import * as dat from 'dat.gui';
    import gsap from 'gsap'

    /**
     * Base
     */
    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 0, 5.5);
scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    // controls.enablePan = false
    // controls.enableZoom = false
    controls.enabled = false
    // const gui = new dat.GUI();


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha:true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Updated Snippet:
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;  // Adjust this value to control exposure
renderer.physicallyCorrectLights = false;


    // Create a particle system in the shape of small spheres
    const particleCount = 2000;
    const radius = 3;
    const particles = new THREE.Group();
    const particles2 = new THREE.Group();
    particles.position.set(1.35,0.7,3.7)
    let mainPosition = []
    let mainPosition2 = []
    let mainScales = []
    let mainScales2 = []
    const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uColor: { value: new THREE.Color('#003BFC') },
            uTime: { value: 0 },
        },
        vertexShader: `
            uniform float uTime;

            void main() {
                vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = 5.0; // Adjust the size of particles
                gl_Position = projectionMatrix * modelViewPosition;
            }
        `,
        fragmentShader: `
            uniform vec3 uColor;
            uniform float uTime;

            void main() {
                float alpha = mod(uTime * 0.2, 1.0); // Add pulsing effect
                vec3 glowColor = mix(uColor, vec3(0.0), alpha); // Create the glow effect

                gl_FragColor = vec4(glowColor, 5.0);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < particleCount; i++) {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        const sphereGeometry = new THREE.SphereGeometry(0.02, 32, 32); // Small sphere geometry
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#003BFC' });
        const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        mainPosition.push([x,y,z])
        let scale = Math.random()+0.2
        mainScales.push(scale)
        sphere.scale.set(scale,scale,scale)
        sphere.position.set(-1.4,-0.7,-0.5);
        particles.add(sphere);
    }
    for (let i = 0; i < particleCount; i++) {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);

        const sphereGeometry = new THREE.SphereGeometry(0.02, 32, 32); // Small sphere geometry
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#003BFC' });
        const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        mainPosition2.push([x,y,z])
        let scale = Math.random()+0.2
        mainScales2.push(scale)
        sphere.scale.set(scale,scale,scale)
        sphere.position.set(0,0,0);
        particles2.add(sphere);
    }
    scene.add(particles,particles2);

    // Create an animation
    const explosionSpeed = 0.005;
    const targetPositions = [];
    const targetPositions2 = [];

    for (let i = 0; i < particleCount; i++) {
        targetPositions.push(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        targetPositions2.push(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
    }


    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4); // Increased intensity to 0.5
    scene.add(ambientLight);       
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);  // Decreased intensity to 0.4
    directionalLight.position.set(2, 2, 5);  
    scene.add(directionalLight);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);  // Decreased intensity to 0.4
    directionalLight2.position.set(-2, -2, 5);  
    scene.add(directionalLight2);
    
    
    
new RGBELoader()
    .setDataType(THREE.UnsignedByteType)
    .load('/potsdamer_platz_4k.hdr', (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        // scene.background = envMap;
        scene.environment = envMap;

        texture.dispose();
        pmremGenerator.dispose();

        // Now that the environment is loaded, start your animation
        tick();
    });

// ...

// Call tick to start the animation
    const loader = new GLTFLoader();
    const modelPath = '/Wizard.glb'; // Replace with the path to your model
    let model;
    let loaded = false
    // document.querySelector('.loader').style.display = 'none'
    let left,right,head,stick
    loader.load(modelPath, (gltf) => {
        model = gltf.scene;
        console.log(gltf);
        head = gltf.scene.getObjectByName('Lập_Phương017');
        right = gltf.scene.getObjectByName('Lập_Phương018');
        left = gltf.scene.getObjectByName('Lập_Phương020');
        stick = gltf.scene.getObjectByName('Lập_Phương025');
        // Traverse the model and update materials
        model.traverse((child) => {
            if (child.isMesh) {
                child.material.roughness = 0.6;  // Increased roughness
                child.material.metalness = 0.8;  // Increased metalness
                child.material.needsUpdate = true;
            }
        });
        model.scale.set(0.01, 0.01, 0.01);
    
        // Rotate the individual parts in reverse (45 degrees to the right)
        if (head) {
            head.rotation.set(0, -Math.PI / 4, 0);
        }
        if (right) {
            right.rotation.set(0, -Math.PI / 4, 0);
        }
        if (left) {
            left.rotation.set(0, -Math.PI / 4, 0);
        }
        if (stick) {
            stick.rotation.set(0, -Math.PI / 4, 0);
        }
    
        model.position.set(0.8, 0, 4.4); // Adjusted the z-value to bring the model closer
        scene.add(gltf.scene);
        let time = 1.8; // reduced from 3 to 1.5 for a faster animation
        let delay = 0;
        gsap.to(head.position, time, {
            x: 0,
            y: 0,
            z: 0,
            delay: delay
        }).then(() => { loaded = true });
        gsap.to(left.position, time, {
            x: 0,
            y: 0,
            z: 0,
            delay: delay
        });
        gsap.to(right.position, time, {
            x: 0,
            y: 0,
            z: 0,
            delay: delay
        });
        gsap.to(stick.position, time, {
            x: 0,
            y: 0,
            z: 0,
            delay: delay
        });
    
        model.mixer = mixer;
    },
    function ( xhr ) {
        
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none'
        }, 1000);
    
    });
    


    // let inervalId = setInterval(e=>{
    //     if(loaded){
    //     setTimeout(() => {
    //         const animationAction = mixer.clipAction(gltf.animations[0]);
    //         animationAction.setEffectiveTimeScale(0.5)
    //         animationAction.clampWhenFinished = true;
    //         animationAction.loop = THREE.LoopOnce;
    //         animationAction.play();
    //     }, 10);
    //     clearInterval(inervalId)
    // }
    // },10)

    const hemisphereLight = new THREE.HemisphereLight(0x606060, 0x404040);
    scene.add(hemisphereLight);
    
    const clock = new THREE.Clock()
    let lastElapsedTime = 0
    let rotationSpeed = -0.1
    let mouse = { x: 0, y: 0 }
    window.addEventListener('mousemove',(e)=>{
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    })
    const tick = () => {
        window.requestAnimationFrame(tick);
    
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - lastElapsedTime;
        lastElapsedTime = elapsedTime;
    
        particleMaterial.uniforms.uTime.value = elapsedTime;
    
        if (model && model.mixer && loaded) {
            model.mixer.update(deltaTime);
        }
    
        if (model) {
            // Adjust position and scale based on window dimensions
            if (window.innerWidth <= 768) {  // Mobile
                model.position.set(0, 0, 4.4);
                model.scale.set(0.005, 0.005, 0.005);  // Adjust scale for mobile
            } else {  // Desktop
                model.position.set(0.8, 0, 4.4);
                model.scale.set(0.01, 0.01, 0.01);  // Restore original scale for desktop
            }
    
            const targetRotationY = THREE.MathUtils.clamp(mouse.x * Math.PI / 10, -Math.PI / 4, Math.PI / 4);
            const targetRotationX = THREE.MathUtils.clamp(-mouse.y * Math.PI / 10, -Math.PI / 4, Math.PI / 4);
    
            model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, targetRotationY, 0.05);
            model.rotation.x = THREE.MathUtils.lerp(model.rotation.x, targetRotationX, 0.05);
        }    
        if (loaded) {
            for (let i = 0; i < particleCount; i++) {
                const sphere = particles.children[i];
                const targetPosition = new THREE.Vector3(
                    targetPositions[i * 3],
                    targetPositions[i * 3 + 1],
                    targetPositions[i * 3 + 2]
                );
                sphere.position.lerp(targetPosition, explosionSpeed * elapsedTime);
            }
    
            for (let i = 0; i < particleCount; i++) {
                const sphere = particles2.children[i];
                const targetPosition = new THREE.Vector3(
                    targetPositions2[i * 3],
                    targetPositions2[i * 3 + 1],
                    targetPositions2[i * 3 + 2]
                );
                sphere.position.lerp(targetPosition, explosionSpeed * elapsedTime);
            }
        }
    
        particles.rotation.y = elapsedTime * rotationSpeed / 3;
        particles.rotation.x = -elapsedTime * rotationSpeed / 3;
        particles2.rotation.y = -elapsedTime * rotationSpeed / 3;
        particles2.rotation.x = -elapsedTime * rotationSpeed / 3;
    
    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);
};
    
    tick();    
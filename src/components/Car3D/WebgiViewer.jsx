import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Scene";
import { OrbitControls,Stars } from "@react-three/drei";



const WebgiViewer = () => {

    return (
        <div style={{
            width: '80vh', height: '50vh', border: "1px solid  black "
        }}>
            <Canvas className="canvas" camera = {{ position: [-8.0113620381,1.0677800043,-5.8887964948]  , fov: 50}}>
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-10,5, 10]} />
                <directionalLight position={[10,5, -10]} />
                <directionalLight position={[10,-5, 10]} />
                <directionalLight position={[-10,-5, 10]} />
                <directionalLight position={[10,-5, -10]} />
                <directionalLight position={[-10,-5, -10]} />
                <directionalLight position={[-20,30, -20]} />
                <directionalLight position={[-20,30, -20]} />

                <Suspense fallback={null}>
                    <Model />
                    
                </Suspense>

                
                <OrbitControls enableZoom={true} />

            </Canvas>
        </div>
    );
}


export default WebgiViewer;

/*const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            rect.width / rect.height,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(rect.width, rect.height);
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/');
        loader.setDRACOLoader(dracoLoader);

        loader.load("/scene.glb", (gltf) => {
            const model = gltf.scene;
            scene.add(model);
            gsap.to(model.rotation, { duration: 2, y: Math.PI * 2, repeat: -1, ease: 'power1.inOut' });
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            controls.dispose();
        };
    }, []);}
    /*
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);

    useImperativeHandle(ref, () => ({
        triggerPreview() {
            gsap.to(positionRef, {
                x: -0.0031027772,
                y: 0.5990645276,
                z: -9.9820394742,
                duration: 2,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });

            gsap.to(targetRef, {
                x: 0,
                y: 0,
                z: 0,
                duration: 2
            });
        }
    }));

    const memoizedScrollAnimation = useCallback(async () => {
        (position, target, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, onUpdate);
            }
        }
    }, []);

    const setupViewer = useCallback(async () => {

        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)

        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        // Import and add a GLB file.
        await manager.addFromPath("scene.glb")
        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }

        });
        memoizedScrollAnimation(position, target, onUpdate);
    }, []);
    useEffect(() => {
        setupViewer();
    }, []);
*/
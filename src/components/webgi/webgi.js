import React, { useRef, useCallback, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    GammaCorrectionPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
} from "webgi";
import './index.scss';

function WebgiViewer() {
    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        await viewer.addPlugin(AssetManagerPlugin);
        await viewer.addPlugin(GBufferPlugin);
        await viewer.addPlugin(new ProgressivePlugin(32));
        await viewer.addPlugin(new TonemapPlugin());
        await viewer.addPlugin(GammaCorrectionPlugin);
        await viewer.addPlugin(SSRPlugin);
        await viewer.addPlugin(SSAOPlugin);
        await viewer.addPlugin(BloomPlugin);
        viewer.renderer.refreshPipeline();

        await viewer.load("anim.glb");

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        window.scrollTo(0, 0);
        viewer.canvas.style.width = 800 + 'px';
        viewer.canvas.style.height = 800 + 'px';
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div id='web-gi-canvas-container'>
            <canvas id='web-gi-canvas' ref={canvasRef} />
        </div>
    );
}

export default WebgiViewer;

const cameraInitSmartphoneSupport = ()=>{
    const video = document.getElementById("camera");
    const cameraSetting = {
        audio: false,
        video: {
            facingMode: "environment"
        }
    };
    navigator.mediaDevices.enumerateDevices().then((e)=>{
        const d = document.getElementById("data");
        let f = "";
        if (d) for (const k of e)f += JSON.stringify(k.toJSON()) + "\n";
        d.innerText = f;
    });
    navigator.mediaDevices.getUserMedia(cameraSetting).then((mediaStream)=>{
        if (video) video.srcObject = mediaStream;
    }).catch((err)=>{
        console.log(err.toString());
    });
};

//# sourceMappingURL=index.377278e2.js.map

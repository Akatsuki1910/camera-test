const cameraInitSmartphoneSupport = () => {
  const video = document.getElementById('camera') as HTMLVideoElement;

  const cameraSetting = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices.enumerateDevices().then((e) => {
    const d = document.getElementById('data') as HTMLDivElement;
    let f = '';
    if (d) {
      for (const k of e) {
        if (k.kind === 'videoinput') {
          f += '##############\n';
          f += `deviceId: ${k.deviceId}\n`;
          f += `groupId: ${k.groupId}\n`;
          f += `kind: ${k.kind}\n`;
          f += `label: ${k.label}\n`;
          f += '##############\n';
        }
      }
    }
    d.innerText = f;
  });

  navigator.mediaDevices
    .getUserMedia(cameraSetting)
    .then((mediaStream) => {
      if (video) {
        video.srcObject = mediaStream;
      }
    })
    .catch((err) => {
      const d = document.getElementById('err') as HTMLDivElement;
      if (d) {
        d.innerHTML = err.toString();
      }
    });
};

const cameraInitSmartphoneSupport = async () => {
  const video = document.getElementById('camera') as HTMLVideoElement;

  const enumerate = await navigator.mediaDevices.enumerateDevices();
  const d = document.getElementById('data') as HTMLDivElement;
  const s = document.getElementById('s') as HTMLSelectElement;
  s.innerHTML = '';
  let f = '';
  if (d) {
    for (const k of enumerate) {
      if (k.kind === 'videoinput') {
        f += '##############\n';
        f += `deviceId: ${k.deviceId}\n`;
        f += `groupId: ${k.groupId}\n`;
        f += `label: ${k.label}\n`;
        f += '##############\n';

        s.innerHTML += `<option value=${k.deviceId}>${k.label}</option>`;
      }
    }
  }
  d.innerText = f;
  let mem: MediaStream;

  s.onchange = async () => {
    mem?.getTracks().forEach((track) => track.stop());
    video.srcObject = null;

    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          deviceId: '09DC87A1594033FE3A45B20E33B178C9ABBE21CD', // s.value,
        },
      })
      .then(async (v) => {
        window.alert('aaaa');
        const d = document.getElementById('now') as HTMLDivElement;
        let f = '';
        if (d) {
          f += '@@@\n';
          f += s.value + '\n';
          f += '@@@\n';
          d.innerHTML = f;
        }

        if (video) {
          mem = v;
          video.srcObject = v;
        }

        const enumerate = await navigator.mediaDevices.enumerateDevices();
        const dd = document.getElementById('data') as HTMLDivElement;
        s.innerHTML = '';
        let ff = '';
        if (dd) {
          for (const k of enumerate) {
            if (k.kind === 'videoinput') {
              ff += '##############\n';
              ff += `deviceId: ${k.deviceId}\n`;
              ff += `groupId: ${k.groupId}\n`;
              ff += `label: ${k.label}\n`;
              ff += '##############\n';

              s.innerHTML += `<option value=${k.deviceId}>${k.label}</option>`;
            }
          }
        }
        dd.innerText = ff;
      })
      .catch((err) => {
        const d = document.getElementById('err') as HTMLDivElement;
        if (d) {
          d.innerHTML = err.toString();
        }
      });
  };
  s.options[0].selected = true;
  s.dispatchEvent(new Event('change'));
};

const recordBtn = document.getElementById("recordBtn"),
  recordingTimeText = document.getElementById("RecodingTimeText");

let streamObject;
let audioRecorder;
let recordTimer;
let recordingTime = 1;

const handleAudioData = (event) => {
  const { data: audioFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(audioFile);
  link.download = "Audio.webm";
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  audioRecorder.stop();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getAudio);
  recordBtn.value = "Start Recording";
  clearInterval(recordTimer);
};

const startRecording = () => {
  audioRecorder = new MediaRecorder(streamObject, {
    mimeType: "audio/webm;codecs=opus"
  });
  audioRecorder.start();
  recordTimer = setInterval(() => {
    recordingTimeText.innerHTML = "Recording for " + recordingTime;
    recordingTime += 1;
  }, 1000);
  audioRecorder.addEventListener("dataavailable", handleAudioData);
  recordBtn.addEventListener("click", stopRecording);
};

const getAudio = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamObject = stream;
    recordBtn.value = "Stop Recording";
    startRecording();
  } catch (err) {
    recordBtn.value = "😥 Can't record";
  } finally {
    recordBtn.removeEventListener("click", getAudio);
  }
};

if (recordBtn) {
  recordBtn.addEventListener("click", getAudio);
}

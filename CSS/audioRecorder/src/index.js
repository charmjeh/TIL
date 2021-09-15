import "./styles.css";

const recordBtn = document.getElementById("recordBtn"),
  recordText = document.getElementById("recordText"),
  RecordingTime = document.getElementById("RecordingTime");

let audioRecorder;
let recordTimer;
let recordingTime = 0;

function stopRecording() {
  recordText.innerHTML = "Start Recording";
  recordingTime = 0;
  RecordingTime.innerHTML = "";
  clearInterval(recordTimer);
}

function startRecording() {
  recordText.innerHTML = "Stop Recording";
  audioRecorder.addEventListener("dataavailable", handleAudioData);
  recordTimer = setInterval(() => {
    recordingTime += 1;
    RecordingTime.innerHTML = `Recording for...${recordingTime}`;
  }, 1000);
}
function handleRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then((streamObject) => {
    if (audioRecorder && audioRecorder.state === "recording") {
      audioRecorder.stop();
      stopRecording();
    } else {
      audioRecorder = new MediaRecorder(streamObject, {
        mimeType: "audio/webm;codecs=opus"
      });
      audioRecorder.start();
      startRecording();
    }
  });
}

const handleAudioData = (event) => {
  const { data: audioFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(audioFile);
  link.download = "Audio.webm";
  document.body.appendChild(link);
  link.click();
};

recordBtn.addEventListener("click", handleRecording);

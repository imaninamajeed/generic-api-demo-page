Stream = require("node-rtsp-stream");

stream = new Stream({
  name: "RecoCloud",
  streamUrl: "rtsp://172.17.0.143:8554/stream3",
  wsPort: 6789,
  ffmpegOptions: {
    // options ffmpeg flags
    "-f": "mpegts", // output file format.
    "-codec:v": "mpeg1video", // video codec
    "-b:v": "1000k", // video bit rate
    "-stats": "",
    "-r": 25, // frame rate
    "-s": "640x480", // video size
    "-bf": 0,
    // audio
    "-codec:a": "mp2", // audio codec
    "-ar": 44100, // sampling rate (in Hz)(in Hz)
    "-ac": 1, // number of audio channels
    "-b:a": "128k", // audio bit rate
  },
});

stream.on("exitWithError", () => {
  // Initialize but cannot connect to rtsp stream
  console.log("Got exit errorr");
  throw "videoStream exited with error";
});

stream.on("ffmpegStderr", () => {
  console.log("Got errorr");
  throw "videoStream exited with error";
});


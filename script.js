fetch("https://nowplaying-api.tinyrobot.co/playbackstate?key=40ed5e70-a1bc-447f-80e2-56c2524fbbcb")
  .then(res => res.json())
  .then(data => {
    if (data.isPlaying) {
      document.getElementById("track-name").textContent = `🎶 ${data.songName}`;
      document.getElementById("artist-name").textContent = `by ${data.artists[0].name}`;
    } else {
      document.getElementById("track-name").textContent = "No music playing";
      document.getElementById("artist-name").textContent = "";
    }
  })
  .catch(err => {
    console.error("Error fetching now playing:", err);
    document.getElementById("track-name").textContent = "Error fetching track";
    document.getElementById("artist-name").textContent = "";
  });

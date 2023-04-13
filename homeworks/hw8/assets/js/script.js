function toggleSongs() {
    let songSecondHalf = document.getElementById('songs-second-half')
    songSecondHalf.classList.toggle('hidden');
}

document.getElementById("toggle-button").onclick = toggleSongs;
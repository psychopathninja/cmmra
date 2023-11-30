document.addEventListener('DOMContentLoaded', () => {
    const openCameraButton = document.getElementById('openCamera');

    openCameraButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            const video = document.createElement('video');
            video.srcObject = stream;
            document.body.appendChild(video);
            video.play();
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    });
});

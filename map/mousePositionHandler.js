let mouseposition={x:0,y:0};

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const panel = document.getElementById('panel');
    mouseposition.x=x;
    mouseposition.y=y;
});

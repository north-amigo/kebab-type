window.onload = function() {
    const capsStatus = document.querySelector('.caps-status')

    window.addEventListener('keydown', function(event) {
        if (event.getModifierState('CapsLock')) {
            capsStatus.innerText = 'включен';
        } else {
            capsStatus.innerText = 'выключен';
        }
    });
};
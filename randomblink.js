(function(window) {
    toggleItem = function() {
        var elements = document.getElementsByTagName('div')

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = Math.random() > 0.5  ? 'none' : 'block';
        }
    }
    setInterval(toggleItem, 10);
})(window);

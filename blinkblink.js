(function(window) {
    toggleItem = function() {
        var elements = document.getElementsByTagName('div')

        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (el.style.display === 'block') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
            }
        }
    }
    setInterval(toggleItem, 1000);
})(window);
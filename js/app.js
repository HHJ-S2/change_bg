(function() {

    
    var hexValue = document.getElementById('hex-value');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex() {
        var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        var hexColor = '#';

        for(var i = 0; i < 6; i++) {
            var random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];
        }

        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }
    

})();
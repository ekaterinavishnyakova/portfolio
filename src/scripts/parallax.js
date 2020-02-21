
var parallax = (function () {
    var layerGrass = document.querySelector('.mainidea-parallax__layer--grass');
    var layerMountains = document.querySelector('.mainidea-parallax__layer--mountains');
    var layerTrain = document.querySelector('.mainidea-parallax__layer--train');


    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0, ' + strafe + ', 0)';
            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(layerGrass, wScroll, 25);
            this.move(layerMountains, wScroll, 35);
            this.move(layerTrain, wScroll, 29);
        }
    }
}());

window.addEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
    console.log(wScroll);
});


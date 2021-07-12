define(function() {
    var unicodeGlyphs = {
        fullStar: "\uF005",
        halfStar: "\uF123",
        noStar: "\uF006"
    };

    var clearStars = function() {
        for (let stars = 1; stars <= 5; stars++) {
            this.view["imgStar" + [stars]].text = unicodeGlyphs.noStar;
        }
    };

    var calculateStars = function(starCount) {
        var roundedStarCount = Math.round(Number(starCount) * 2) / 2;
        starCount = roundedStarCount > 5 ? 5 : roundedStarCount;
        this._fraction = null;

        if (starCount <= 0 || Number.isNaN(starCount)) {
            this._clearStars();
            return;
        }
        if (Number.isInteger(starCount)) {
            this._fillStars(starCount);
        } else {
            var ceilStarCount = Math.ceil(starCount);
            this._fraction = 1 - Number((ceilStarCount - starCount).toFixed(2));
            this._fillStars(ceilStarCount);
        }
    };


    var fillStars = function(imgStarClickFunctionIndex) {
        this.view.wrapper.setEnabled(!this._isStatic);
        if (imgStarClickFunctionIndex === 1 && this._imgStarIndexStorage === 1 && !this._isStatic) {
            this._imgStarIndexStorage = 0;
            this._clearStars();
            return;
        }

        if (imgStarClickFunctionIndex === 1) {
            this._imgStarIndexStorage = 1;
        } else {
            this._imgStarIndexStorage = imgStarClickFunctionIndex;
        }

        this._clearStars();

        for (let index = 1; index <= imgStarClickFunctionIndex; index++) {
            this.view["imgStar" + [index]].text = unicodeGlyphs.fullStar;
            if (this._fraction && imgStarClickFunctionIndex === index) {
                this.view["imgStar" + [index]].text = this._fraction <= 0.25 ? unicodeGlyphs.noStar :
                    this._fraction >= 0.75 ? unicodeGlyphs.fullStar :
                        unicodeGlyphs.halfStar;
            }
        }
    };

    return {

        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._fillStars = fillStars;
            this._clearStars = clearStars.bind(this);
            this._calculateStars = calculateStars.bind(this);
            this._fraction = null;
            this._rating = "0";
            this._isStatic = false;
            this._imgStarIndexStorage = 0;

            this.view.imgStar1.onTouchStart = this._fillStars.bind(this, 1);
            this.view.imgStar2.onTouchStart = this._fillStars.bind(this, 2);
            this.view.imgStar3.onTouchStart = this._fillStars.bind(this, 3);
            this.view.imgStar4.onTouchStart = this._fillStars.bind(this, 4);
            this.view.imgStar5.onTouchStart = this._fillStars.bind(this, 5);
        },

        initGettersSetters: function() {
            defineGetter(this, 'isStatic', () => {
                return this._isStatic;
            });
            defineSetter(this, 'isStatic', value => {
                if (this._isStatic === value) {
                    return;
                }
                this._isStatic = value;
            });
            defineGetter(this, 'rating', () => {
                return this._rating;
            });
            defineSetter(this, 'rating', value => {
                this._rating = value;
                this._isStatic = true;
                this._calculateStars(this._rating);
            });
        },
    };
});
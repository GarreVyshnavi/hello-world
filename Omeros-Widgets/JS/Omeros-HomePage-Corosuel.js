var Omeros = Omeros || {};

Omeros.Carousel = {
    URL: { CarouselImages: Omeros.Constants.SPWebAbsoluteUrl + "/_api/web/lists/GetByTitle('" + Omeros.Constants.lists.CarouselImages + "')/items" },


    init: function () {

    },


    getImages: function () {
        Omeros.Utilities.getItemsFromList(Omeros.Carousel.URL.CarouselImages, function (result) {

        }, function (result) {

        }, []);
    },
};



$(document).ready(function() {

    var requestSettings = {
        url: "https://api.etsy.com/v2/listings/active.js?api_key=8lgogth28mqcq0an1vxl4fx1&keywords=whiskey&includes=Images,Shop",
        type: "GET",
        dataType: "jsonp",
        success: function(response) {

                response.results.forEach(function(result){
                  var itemTitle= (result.title);
                  var shopName = (result.Shop.shop_name);
                  var itemPrice = ('$'+(result.price));
                  var itemImage = (result.Images[0].url_170x135);
                  var itemUrl = (result.url);

                  var $newWhiskeyItem = $('<div class="whiskeyItem"></div>');
                  var $newPicture = $('<img src="' + itemImage + '"/>');
                  var $newTitle = $('<div class="title">' + itemTitle + '</div>');
                  var $newShopName = $('<div class="shopName">' + shopName + '</div>');
                  var $newPrice = $('<div class="price">' + itemPrice + '</div>');
                  var $newUrl = $('<a href="'+ itemUrl + '"></a>');
                  $newWhiskeyItem.prepend($newUrl, $newPicture, $newTitle, $newShopName, $newPrice);
                  var $whiskeyContainer = $('.whiskeyContainer').prepend($newWhiskeyItem);




                  // console.log($itemTitle);
                  // console.log($shopName);
                  // console.log($itemPrice);
                  // console.log($itemImage);

                });



    }
  };
    console.log($.ajax(requestSettings)); //<------need this
});

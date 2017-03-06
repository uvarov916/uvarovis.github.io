/* *********************************
 * VIEW
 * *********************************/

$(document).ready(function(){
    var listData = Controller.getListData();
    for (var i = 0; i < listData.length; i++) {
        $("#contacts").append('<div class="placeholder"></div><div class="cell-header" id="header' + i + '">' + listData[i].header + '</div>');
        for (var j = 0; j < listData[i].items.length; j++) {
            $("#contacts").append('<div class="contact-single">' + listData[i].items[j] + '</div>');
        };
    };
});
/* ******************
 * VIEW
 * ******************/
function createListView(listData, cellTmpl) {
    var htmlString = "";

    for (var i = 0; i < listData.length; i++) {
        htmlString += '<dl>';
        htmlString += '<dt>' + listData[i].header + '</dt>';
        for (var j = 0; j < listData[i].items.length; j++) {
            htmlString += '<dd>' + cellTmpl(listData[i].items[j]) + '</dd>';
        };
        htmlString += '</dl>';
    };

    return htmlString;
}

/* ******************
 * CONTROLLER
 * ******************/
function ListController(params) {
    var data = params.data;
    data.sort(params.sortFunc);
    
    // Group using given function
    var cellGroups = {};
    for (var i = 0; i < data.length; i++) {
        var groupName = params.groupFunc(data[i]);
        if (!cellGroups[groupName]) {
            cellGroups[groupName] = [];
        }
        cellGroups[groupName].push(data[i])
    }

    // Transform into array
    var listData = [];
    for (var key in cellGroups) {
        listData.push({
            "header": key,
            "items": cellGroups[key]
        });
    }
    // Sort by headers
    listData.sort((el1, el2) => {
        return el1.header < el2.header ? -1 : el1.header > el2.header ? 1 : 0;
    });

    // Add view to the page
    params.domLoc.html(createListView(listData, params.cellTmpl));
}
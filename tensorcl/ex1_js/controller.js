/* *********************************
 * CONTROLLER (EXAMPLE 1)
 * *********************************/

var Controller = new function() {
    // Returns data for the view to render
    this.getListData = function() {
        var cellGroups = {};
        var data = Model.getData();
        data.sort(comparePeople)
        
        // Split by first letter in last name
        for (var i = 0; i < data.length; i++) {
            var firstLetter = data[i].lastName[0];
            if (firstLetter in cellGroups) {
                cellGroups[firstLetter].push(data[i]);
            }
            else {
                cellGroups[firstLetter] = [data[i]];
            }
        }

        // Transform into appropriate format
        var listData = [];
        for (var key in cellGroups) {
            var o = {};
            o["header"] = key;
            o["items"] = [];
            for (var i = 0; i < cellGroups[key].length; i++) {
                o["items"].push(cellGroups[key][i].firstName + " <b>" + cellGroups[key][i].lastName + "</b>");
            }
            listData.push(o)
        }

        return listData;
    };
}

// Compares people by name
function comparePeople(a,b) {
    if (a.lastName < b.lastName)
        return -1;
    if (a.lastName > b.lastName)
        return 1;
    if (a.firstName < b.lastName)
        return -1;
    if (a.firstName > b.lastName)
        return 1;
    return 0;
}
/* *********************************
 * CONTROLLER (EXAMPLE 2)
 * *********************************/

var Controller = new function() {
    // Returns data for the view to render
    this.getListData = function() {
        var cellGroups = {};
        var data = Model.getData();
        data.sort(comparePeople)
        
        // Split by first letter in last name
        for (var i = 0; i < data.length; i++) {
            var comp = data[i].company;
            if (comp in cellGroups) {
                cellGroups[comp].push(data[i]);
            }
            else {
                cellGroups[comp] = [data[i]];
            }
        }

        // Transform into appropriate format
        var listData = [];
        for (var key in cellGroups) {
            var o = {};
            o["header"] = key;
            o["items"] = [];
            for (var i = 0; i < cellGroups[key].length; i++) {
                o["items"].push("<p>" + cellGroups[key][i].firstName + " " + cellGroups[key][i].lastName + "</p><p class='company'>" + cellGroups[key][i].company + "</p>");
            }
            listData.push(o)
        }

        return listData;
    };
}

// Compares people by company and name
function comparePeople(a,b) {
    if (a.company < b.company)
        return -1;
    if (a.company > b.company)
        return 1;
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
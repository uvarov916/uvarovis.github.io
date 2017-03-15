$(document).ready(function(){
    // Create first list
    model1 = Model("dataset1");
    list1 = ListController({
        "data": model1.getData(),
        "domLoc": $("#list1 .list-container"),
        "sortFunc": (el1, el2) => {
            if (el1.lastName < el2.lastName)
                return -1;
            if (el1.lastName > el2.lastName)
                return 1;
            if (el1.firstName < el2.firstName)
                return -1;
            if (el1.firstName > el2.firstName)
                return 1;
            return 0;
        },
        "groupFunc": (el) => {
            return el["lastName"][0]
        },
        "cellTmpl": (el) => {
            return el["firstName"] + " <b>" + el["lastName"] + "</b>";
        }
    });

    // Create second list
    model2 = Model("dataset2");
    list2 = ListController({
        "data": model2.getData(),
        "domLoc": $("#list2 .list-container"),
        "sortFunc": (el1, el2) => {
            if (el1.lastName < el2.lastName)
                return -1;
            if (el1.lastName > el2.lastName)
                return 1;
            if (el1.firstName < el2.firstName)
                return -1;
            if (el1.firstName > el2.firstName)
                return 1;
            return 0;
        },
        "groupFunc": (el) => {
            return el["company"];
        },
        "cellTmpl": (el) => {
            return "<p>" + el["firstName"] + " " + el["lastName"] + "</p><p class='company'>" + el["company"] + "</p>";
        }
    });
});
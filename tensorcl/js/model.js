function Model(dsName) {
    var data = readDataFromDB(dsName);

    return {
        getData: function() {
            return data;
        }
    }
}
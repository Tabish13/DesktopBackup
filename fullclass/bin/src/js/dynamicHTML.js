 function createOptions(id, arrayData) {
        for (var i = 0; i < arrayData.length; i++) {
            $(id).append('<option value=' + arrayData[i] + '>' + arrayData[i] + '</option>');
        }
    }
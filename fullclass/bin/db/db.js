var Datastore = require('nedb');

exports.studentsDB = function(academicYear, standard) {
    var students = new Datastore({ filename: './data/' + academicYear + '/students/' + standard + '', autoload: true });
    return students;
}

exports.teachersDB = function(academicYear) {
    var teachers = new Datastore({ filename: './data/' + academicYear + '/teachers', autoload: true });
    return teachers;
}

exports.enquiryDB = function(academicYear) {
    var enquiry = new Datastore({ filename: './data/' + academicYear + '/enquiry', autoload: true });
    return enquiry;
}

exports.config = function() {
    var serialNo = new Datastore({ filename: './data/config', autoload: true });
}

/*Increment param
increment if true will inc the the autoid 'i.e seq' by one and will return success msg
increment if false just give the current autoid value 'i.e seq'*/
var autoId = exports.autoId = function(increment, db, cb) {
    //standard = standard ? standard : '';
    //var db = new Datastore({ filename: './data/' + academicYear + '/' + dbName + '/' + standard + '', autoload: true });
    if (increment) {
        incAutoId(db, cb);
    } else {
        generateAutoID(db, cb);
    }
};

var generateAutoID = function(db, cb) {
    db.find({ _id: "__autoid__" }, function(err, results) {
        if (!err) {
            if (results.length > 0) {
                cb(null, results[0].seq);
            } else {

                incAutoId(db, function(err, status) {
                    if (!err) {
                        cb(null, 1);
                    }
                });
                /*db.insert({ _id: "__autoid__", seq:1}, function(err, result){
                	if(!err){
                		cb(null, result.seq);
                	}
                });*/
            }
        }
    });
};

var incAutoId = function(db, cb) {
    db.update({ _id: "__autoid__" }, { $inc: { seq: 1 } }, { upsert: true },
        function(err, numReplace, upsert) {
            if (!err) {
                cb(null, "success");
            }
        });
};

 function attendanceDataTable(data) {
     return $('#attendanceTable').DataTable({
         destroy: true,
         order: [
             [0, "asc"]
         ],
         aaData: data,
         columns: [{
             title: "Reg No",
             "mDataProp": "reg_no"
         }, {
             title: "Student Name",
             "mDataProp": function(row, type, val, meta) {
                 return row.studentDetails.first_name + " " + row.studentDetails.father_name + " " + row.studentDetails.last_name;
             }
         }, { title: "Absent" }],
         "columnDefs": [{
             "targets": -1,
             "data": null,
             "defaultContent": '<input type="checkbox" name="vehicle" value="absent"> Absent'
         }, {
             className: "dt-center",
             "targets": "_all"
         }],
         "scrollY": '50vh',
         "scrollCollapse": true,
         "paging": false
     });
 }

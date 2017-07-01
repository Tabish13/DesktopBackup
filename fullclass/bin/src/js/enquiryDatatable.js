 function enquiryDataTable(data) {
     return $('#enquiryTable').DataTable({
         destroy: true,
         order: [
             [0, "asc"]
         ],
         aaData: data,
         columns: [{
             title: "Enquiry No",
             "mDataProp": "enq_no"
         }, {
             title: "Name",
             "mDataProp": function(row, type, val, meta) {
                 return row.firstname+" "+row.fathername+" "+row.lastname;
             }
         }, {
             title: "Contact",
             "mDataProp": "contactno"
         }, {
             title: "Date",
             "mDataProp": "date"
         }, {
             title: "Standard",
             "mDataProp": "standard"
         }, {
             title: "Follow Up",
             "mDataProp": "followup"
         }, {
             title: "Status",
             "mDataProp": "status"
         }, { title: "Edit" }, { title: "Delete" }],
         "columnDefs": [{
             "targets": -2,
             "data": null,
             "defaultContent": '<div value="edit" class="mousePointer"> <span value="edit" class="glyphicon glyphicon-pencil" aria-hidden="true"></span></div>'
         }, {
             "targets": -1,
             "data": null,
             "defaultContent": '<div value="delete" class="mousePointer"><span value="delete" class="glyphicon glyphicon-trash" aria-hidden="true"></span></div>'
         }, {
             className: "dt-center",
             "targets": "_all"
         }],
         "scrollY": '50vh',
         "scrollCollapse": true,
         "paging": false
     });
 }

$(document).ready(function() {
    $("#fetch_student").click(function(e) {
        e.preventDefault();
        var startDate = $("#start_date").val();
        var endDate = $("#end_date").val();
        if (startDate === "" || endDate === "") {
            alert("Please select both start and end dates.");
        } else {
            $("#attendanceForm").submit();
        }
    });
});


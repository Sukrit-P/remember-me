<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
    var data0 = {numberId: "numberId", companyId : [{In_companyId1:"In_companyId1",In_companyId2:"In_companyId2"},"companyId"]};

    var json = JSON.stringify(data0);   //encode
    console.log(json);

    // var json2 = JSON.parse(json)        //decode
    // console.log(json2);

    $(function() {
        $.ajax({
            type: "POST",
            url: "server.php",
            data: {myObj:json},
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            success: function(msg) {
                alert(msg);
            }
        });
    });
</script>
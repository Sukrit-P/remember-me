<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <form action="request.php" id="register_form">
        <input class='formVal' type="text" name="first_name" placeholder="First Name">
        <input class='formVal' type="text" name="last_name" placeholder="LastName">
        <input type="submit" value="submit_now" onclick="myFunction(); return false;">
    </form>
    <script>
        function myFunction()
        {
            var elements = document.getElementsByClassName("formVal");
            var formData = new FormData(); 
            for(var i=0; i<elements.length; i++)
            {
                formData.append(elements[i].name, elements[i].value);
            }
            var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function()
                {
                    if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    {
                        alert(xmlHttp.responseText);
                    }
                }
                xmlHttp.open("post", "server.php"); 
                xmlHttp.send(formData); 
        }
    </script>
</body>
</html>
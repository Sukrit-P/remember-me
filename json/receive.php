<?php
    $requestPayload = file_get_contents("php://input");
    $obj = json_decode($requestPayload);  

    var_dump($obj);
    echo $obj->name;
<?php
    $serverName = "localhost";
    $userName   = "root";
    $userPass   = "";
    $dbName     = "pdo_db";

    try{
        $dbcon = new PDO("mysql:host=$serverName;dbname=$dbName", $userName, $userPass);

        $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo "Connect to database successful";
    } catch(PDOException $e) {
        echo "Failed connect to database" . $e->getMessage();
    }

    //explode and substr
?>
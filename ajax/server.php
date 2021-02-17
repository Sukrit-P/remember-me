<?php
   $obj = json_decode($_POST["myObj"]);
   echo $obj->companyId[0]->In_companyId1;
?>
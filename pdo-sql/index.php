<?php
    include('config.php');

    //?INSERT
    // $sql = "INSERT INTO users(name, email, date) VALUES(:name, :email, :date)";
    // $query = $dbcon->prepare($sql);
    // $query->bindParam(':name', $name, PDO::PARAM_STR);
    // $query->bindParam(':email', $email, PDO::PARAM_STR);
    // $query->bindParam(':date', $date, PDO::PARAM_STR);

    // $name = "name";
    // $email = "abc@abc";
    // $date = Date('Y-m-d');

    // $result = $query->execute();
    // if ($result) {
    //     echo "<script>alert('Successful to insert');</script>";
    // } else {
    //     echo "<script>alert('Failed to insert');</script>";
    // }


//?SELECT
    // $sql = "SELECT * FROM users WHERE email = :email";
    // $query = $dbcon->prepare($sql);
    // $query->bindParam(':email', $email, PDO::PARAM_STR);

    // $email = "abc@abc";

    // $query->execute();
    // $result = $query->fetchAll(PDO::FETCH_OBJ);
    // if ($query->rowCount() > 0) {
    //     foreach($result as $res) {
    //         echo $res->name . "<br>";
    //         echo $res->email . "<br>";
    //         echo $res->date . "<br>";
    //     }
    // }
//?SELECT table
    // $sql = "SELECT * FROM users WHERE email = :email";
    // $query = $dbcon->prepare($sql);
    // $query->execute();

    // while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
    //     <tr>
    //         <td>echo $row["email"];</td>
    //     </tr>
    // }


//?UPDATE
    // $sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
    // $query = $dbcon->prepare($sql);
    // $query->bindParam(':name', $name, PDO::PARAM_STR);
    // $query->bindParam(':email', $email, PDO::PARAM_STR);
    // $query->bindParam(':id', $id, PDO::PARAM_STR);

    // $name = "test";
    // $email = "test@abc";
    // $id = 1;

    // $query->execute();
    // if ($query->rowCount() > 0) {
    //     echo "<script>alert('Successful to Edit');</script>";
    // } else {
    //     echo "<script>alert('Failed to Edit');</script>";
    // }




//?DELETE
        $sql = "DELETE FROM users WHERE id = :id";
        $query = $dbcon->prepare($sql);
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        $id = 2;
        $query->execute();
        if ($query->rowCount() > 0 ) {
            echo "<script>alert('Successful to Delete');</script>";
        } else {
            echo "<script>alert('Failed to Delete');</script>";
        }
?>
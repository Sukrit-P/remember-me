<body>
    <script>
        let ToSend ={
            name: "Dom",
            age: 35,
            occupation: ["Web","Developer"]
        };

        const jsonString = JSON.stringify(ToSend);
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "receive.php");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonString);

        xhr
    </script>
</body>
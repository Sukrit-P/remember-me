<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<ul id="authors"></ul>
    <script>
        function createNode(element) {
            return document.createElement(element);
        }
        function append(parent ,el) {
            return parent.appendChild(el);
        }

        const ul = document.getElementById('authors');
        const url = 'https://randomuser.me/api/?results=10';

        fetch(url).then((res) => res.json()).then(function(data) {
            console.log(data);
            let authors = data.results;
            return authors.map(function(author) {
                let li = createNode('li');
                let img = createNode('img');
                let span = createNode('span');

                img.src = author.picture.medium;
                span.innerHTML = `${author.name.first} ${author.name.last}`;

                append(li, img);
                append(li, span);
                append(ul, li);
            })
        }).catch(function(error) {
            console.log(error);
        });
    </script>
</body>
</html>
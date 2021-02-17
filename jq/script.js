$(document).ready(function() { // https://www.thaicreate.com/jquery.html
    $('#idbtn').click(function() { //click, dblclick ดับเบิลคลิก, mouseenter เมาส์เลื่อนผ่าน, mouseleave เมาส์เลื่อนออก, mousedown ,mouseup ปล่อยคลิก
        $(this).hide(2000);  //2000=2 วินาที .hide นำออก
        //.toggle()          //สวิท
    });
    

    //Get HTML method text/html/val/attr
    $('#btn1').click(function() {
        alert("Text: " + $("#demo1").text());
    });
    $('#btn2').click(function() {
        alert("Text: " + $("#demo2").val());        //.attr() เอาค่า Attribute //TODO เช่น <a href="google.com"> /เอาค่าใน href จะออกมา/ .attr(href)
    });

    //SET HTML method text/html/val/attr
    $('#btn3').click(function() {
        $('p').text("SET HTML method text/html/val/attr");
    });

    //Add Element method append/prepend/before/after
    $('#btn4').click(function() {
        $('p').append("<b>append</b>"); //ต่อจากหลัง
        $('ol').append("<li>prepend</li>"); 
    });
    $('#btn5').click(function() {
        $('p').prepend("<b>append</b>"); //ต่อข้างหน้า
        $('ol').prepend("<li>prepend</li>"); 
    });
    $('#btn6').click(function() {
        $('.box').before("<b>before text</b>"); //ก่อนหน้า 
        $('.box').after("<b>before text</b>"); //หลัง
    });
    //Remove Element    $("val").remove(); ลบทั้งหมด/ .empty(); ลบเนื้อหาในแท็ก
});

// $(function() {       //ย่อ
// });

//Effect Fade      https://youtu.be/pDRH3l6iKZk?t=785   13.05
//Effect Animate   https://youtu.be/pDRH3l6iKZk?t=1191  19:51
//stop method      https://youtu.be/pDRH3l6iKZk?t=1430   23:50
//CSS Add/Remove/Toggle method https://youtu.be/pDRH3l6iKZk?t=2958 49:18 / .addClass .removeClass .toggleClass(สวิท)
//CSS Method       https://youtu.be/pDRH3l6iKZk?t=3157  52:37 
//Traversing        https://youtu.be/pDRH3l6iKZk?t=3271   54:35
//Traversing Siblings https://youtu.be/pDRH3l6iKZk?t=3899 1:04:59

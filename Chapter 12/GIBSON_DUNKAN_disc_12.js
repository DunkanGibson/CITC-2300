$(".computer div").hover(
    function(){
    $(this).next().slideDown(400);
    }, 
    function(){
    $(this).next().slideUp(400);
    });



// Smoothscroll Script...

//button click handler

$('nav ul li a').click(function(){
    let thisection = $(this).attr('href');
    let thislink = $(this);

    $('html , body').stop().animate({ 
        scrollTop: $(thisection).offset().top - 200},
        400 , 'easeOutCirc' , function(){

            $('nav ul li a').removeAttr('class');
            $(thislink).addClass('selected')
        })
})

$(window).on('load' , function(){
    let posts = $('selection');
    let pageTop;
    let postPos;

    $(window).scroll(function(){
       postpos = $(posts[0]).offset().top;
       pageTop = $(window).scrollTop();
       console.log(`${pageTop} and ${postPos}`)
    })
})
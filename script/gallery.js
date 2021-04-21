$('#website').on('click', function(){
    $('#head').hide(100);
    $('#tag').hide(100);
    $('#website').hide(100);
    $('.card').toggle(500);
    $('h3').show(1000);
    $('#closer').show(1000);
    $('#aud').show(1000);
    $("#background").css("background-image","url('../images/batman.jpg')",1000).css('margin-left','2rem')
});


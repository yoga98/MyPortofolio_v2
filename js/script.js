// Event Pada Link
$('.page-scroll').on('click', function(e) {
    var tujuan = $(this).attr('href');
    //tangkap element
    var elemetTujuan = $(tujuan);
    //pindah scrol
    $('html,body').animate({
        scrollTop: elemetTujuan.offset().top - 50
    }, 1000)
    e.preventDefault();
})
function isMobile() {
    let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return flag;
}
$(function (){
    $('.t4s-tab__title').on('click',function (event){
        event.stopImmediatePropagation()
    })
    var t3Clipboard = new ClipboardJS('.ug-product-copy-btn');
    t3Clipboard.on('success', function(e) {
        $('.ug-product-copy-btn').hide()
        $('.ug-product-copy-btned').show()
        setTimeout(function () {
            $('.ug-product-copy-btn').show()
            $('.ug-product-copy-btned').hide()
        },3000)
        e.clearSelection();
    });
    var discountClipboard = new ClipboardJS('.ug-product-discount-btn');
    discountClipboard.on('success', function(e) {
        $('.ug-product-discount-btn').hide()
        $('.ug-product-discount-btned').show()
        setTimeout(function () {
            $('.ug-product-discount-btn').show()
            $('.ug-product-discount-btned').hide()
        },3000)
        e.clearSelection();
    });
    $('.t4s-product-form__variants').before($('.ug-product-discount').clone())
  
    $('.t4s-pr__custom-liquid .ug-product-discount').remove()

    // school
    new ClipboardJS('.ug-school-discount-box button');
    $('.ug-school-discount-box button').click(function () {
        let that = $(this)
        that.text('COPIED').addClass('active')
        setTimeout(function () {
            that.text('COPY').removeClass('active')
        },3000)
    })
    new ClipboardJS('.copy-box button');
    $('.copy-box button').click(function () {
        let that = $(this)
        that.text('COPIED').addClass('active')
        setTimeout(function () {
            that.text('COPY').removeClass('active')
        },3000)
    })

    // GitHub异常


})

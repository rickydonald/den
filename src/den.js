/*!
 * The Den Project - v1.0
 * @author Ricky Donald, Developer at Heatbeat <www.rickydonald.com>
 * @org Crafted for YRDO's YR504 app as toast like Instagram
 * @license None
 * https://github.com/rickydonald/den
 */

function den(text, fade_out_duration = 3000) {
    $("body").append('<div class="den-wrapper"><div class="den"><div class="den-body"><p class="den-text mb-0">This Den</p></div></div></div>')
    const den = $('.den-wrapper')
    const den_text = $('.den-text')

    den.css('display', 'flex')
    den_text.html(text)

    setTimeout(function () {
        den.fadeOut(300)
    }, fade_out_duration)

    setTimeout(() => {
        den.remove()
    }, fade_out_duration + 150)
}
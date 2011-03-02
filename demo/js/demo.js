var btn1 = $('#button1');
var dmo1 = $('#demo1');
var cb11 = function() { dmo1.addClass('amped').text('Amazing transformation!'); }
var cb21 = function() { dmo1.removeClass('amped').text('And back again...'); }

var btn2 = $('#button2');
var dmo2 = $('#demo2');
var cb12 = function() { dmo2.addClass('amped').text('Amazing transformation!'); }
var cb22 = function() { dmo2.removeClass('amped').text('And back again...'); }

btn1.click(handleClickEvent1);

function handleClickEvent1(evt) {
  dmo1.shoji(400, cb11);
}

btn2.click(handleClickEvent2);

function handleClickEvent2(evt) {
  dmo2.fadeOut(400, function() {
    cb12();
    dmo2.fadeIn(400);
  })
}
$('.thumbnail').on('click', e  => {
    e.preventDefault();
  

const imgSrc = $(e.currentTarget).find('img').attr('src');
$('.hero img').attr('src', imgSrc);

const imgAlt = $(e.currentTarget).find('alt').attr('alt');
$('hero img').attr('img', imgAlt);

});
const petApp = {};

$(function() {

    $('button').on('click', function(event) {
    
        $('html, body').animate( {
            scrollTop: $('main').offset().top,
        })
    });

    // On change, grab the selected item from input
    $('input').on('change', function(event) {
        // console.log(this);

        const grabItem = $(this).val();
        // console.log(grabItem);

        // $(`.${grabItem}`) connects the value to a class 
        // '.' + grabItem (concat) and $`.${grabItem}` (temlit) is the same thing

        // toggleClass / addClass & removeClass at the same time
        // Upon click, $(`.${grabItem}`) adds the 'imageVisible' class to the selected value
        // It also removes the 'imageVisible' class from the rest of the siblings

        $(`.${grabItem}`).addClass('imageVisible');
        $(`.${grabItem}`).siblings().removeClass('imageVisible');    
        

    })
});
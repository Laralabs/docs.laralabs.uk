$( document ).ready(function() {
    var versionButton = $('.version-nav');
    var dropdown = $('.version-dropdown');
    dropdown.hide();

    versionButton.click(function() {
        dropdown.toggle(
            function(){
                dropdown.children().fadeIn('fast', function(){});
            },
            function(){
            });
    });
});
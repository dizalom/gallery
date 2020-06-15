$('img').each(function() {
        $(this)[0].oncontextmenu = function() {
        return false;
        };
    });
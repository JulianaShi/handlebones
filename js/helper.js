Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});

/**
 * If Greater Than
 * if_gt this compare=that
 */
Handlebars.registerHelper('if_gt', function(context, options) {
    if (context > options.hash.compare)
        return options.fn(this);
    return options.inverse(this);
});

/**
 * If Less Than
 * if_lt this compare=that
 */
Handlebars.registerHelper('if_lt', function(context, options) {
    if (context < options.hash.compare)
        return options.fn(this);
    return options.inverse(this);
});

/**
 * limits chars to whatever is input like  {{rawText description 300 }}
 */
Handlebars.registerHelper('rawText', function (text, charNum, options) {
    var regex = /(<([^>]+)>)/ig;
    var result = text.replace(regex, "");
    return result.substring(0, charNum);

});

/**
 * get array length like {{length arrayName}}
 */
Handlebars.registerHelper('length', function(array, options) {
        return array.length;
});

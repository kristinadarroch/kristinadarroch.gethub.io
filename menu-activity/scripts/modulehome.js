// a jQuery function to implement modularization 

$(function() {
    console.log("hello");
    $("#page-header").load("header.html");
    $("#page-nav").load("nav.html");
    $("#page-footer").load("footer.html");
});
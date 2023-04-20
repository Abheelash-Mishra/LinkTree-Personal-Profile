$("a.a__tag[href]").click(function(e){
    e.preventDefault();
    if (this.href) {
        var target = this.href;
        window.open(target, "_blank");
    }
});


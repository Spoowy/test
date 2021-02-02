(function() {
    $io.do = function(r) { console.log(r); };
    protos = [$bert];
    N2O_start();

    var notyf = new Notyf();
    // toastr fallback
    var toastr = function() {};
    toastr.error = function(msg) {console.log("error", msg);notyf.error(msg);};
    toastr.info = function(msg) {notyf.info(msg);};
    toastr.warning = function(msg) {notyf.warning(msg);};
    toastr.success = function(msg) {console.log("success",msg); notyf.success(msg);};

})();

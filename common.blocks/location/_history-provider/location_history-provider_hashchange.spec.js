window.history = {};

modules.define('spec', ['uri', 'location', 'jquery'], function(provide, Uri, location, $) {

describe('location hashchange', function() {
    
    it('should change location by path and emit event hashchange', function() {
        location.change({ url: '/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=a&ololo=123' });
        var u = Uri.parse(window.location.href);
        ('#' + u.getAnchor()).should.be.eql('#!/spec-js+browser-js+bemhtml.html?test=a&ololo=123');
    });
    
    it('should change location by params with forceParams flag and emit event hashchange', function() {
        location.change({ params: { test: [1, 2] }, forceParams: true });
        var u = Uri.parse(window.location.href);
        ('#' + u.getAnchor()).should.be.eql('#!/spec-js+browser-js+bemhtml.html?test=1&test=2');
    });
        
    it('should change location by params without forceParams flag and emit event hashchange', function() {
        location._state.params = { test: [1, 2] };
        location.change({ params: { param2: [22] } });
        var u = Uri.parse(window.location.href);
        ('#' + u.getAnchor()).should.be.eql('#!/spec-js+browser-js+bemhtml.html?test=1&test=2&param2=22');
    });

});

provide();

});

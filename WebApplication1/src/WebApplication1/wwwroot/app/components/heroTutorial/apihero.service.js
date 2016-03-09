System.register(["rxjs/Rx", "angular2/http", 'rxjs/Observable', "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, Observable_1, core_1;
    var ApiHeroService;
    return {
        setters:[
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ApiHeroService = (function () {
                function ApiHeroService(http) {
                    this.http = http;
                }
                ApiHeroService.prototype.getHerosJson = function () {
                    var data = this.http.get("api/hero")
                        .map(function (x) { return x.json().heros; })
                        .do(function (x) { return console.log(x); })
                        .catch(this.handlerror);
                    return data;
                };
                ApiHeroService.prototype.handlerror = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                //HandlJson is the call back method to operate the data from web service, input param is json type, no return value
                ApiHeroService.prototype.get = function (HendleJson) {
                    //this.http.get("api/hero").map(response => response.json()).subscribe(HendleJson);
                    var result = this.http.get("api/hero").map(function (x) { return x.json(); });
                    //console.log(result);
                    result.subscribe(HendleJson);
                };
                ApiHeroService.prototype.getHeroJson = function (id) {
                    return this.http.get("api/hero/" + id)
                        .map(function (x) { return x.json().hero; })
                        .do(function (x) { return console.log(function (x) { return x; }); })
                        .catch(this.handlerror);
                };
                ApiHeroService.prototype.getHero = function (id, HandleJson) {
                    var result = this.http.get("api/hero/" + id).map(function (x) { return x.json().data; });
                    result.subscribe(HandleJson);
                };
                ApiHeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApiHeroService);
                return ApiHeroService;
            })();
            exports_1("ApiHeroService", ApiHeroService);
        }
    }
});
//# sourceMappingURL=apihero.service.js.map
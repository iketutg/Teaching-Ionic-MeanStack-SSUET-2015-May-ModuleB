System.register(["angular2/platform/browser", "angular2/core", 'angular2/http', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, http_2, common_1;
    var RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp(http, fb) {
                    this.http = http;
                    this.fb = fb;
                    this.myForm = fb.group({
                        sku: ['ABC123', common_1.Validators.required],
                        sku1: ['ABC1234', common_1.Validators.required]
                    });
                    console.log(this.myForm.value);
                }
                RedditApp.prototype.onSubmit = function (event, form) {
                    console.log('you submitted value:', form);
                    /*
                            this.myForm =  this.fb.group({
                                'sku': ['', Validators.required],
                                'sku1': ['', Validators.required]
                            });
                            
                            
                            */
                    this.fb.control({
                        'sku': ""
                    });
                    this.sku = this.myForm.controls['sku'];
                    this.sku.updateValueAndValidity("");
                    this.sku.updateValueAndValidity("123");
                    console.log(this.myForm.controls.sku.value);
                    this.myForm.controls.sku.value = "Test";
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        host: {
                            class: "myClass"
                        },
                        template: "\n<div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: Sku</h2>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit($event, myForm.value)\" class=\"ui form\">\n\n        <div class=\"field\" >\n            <label for=\"skuInput\">SKU </label>\n            <input type=\"text\" id=\"skuInput\" placeholder=\"SKU\" [ngFormControl]=\"myForm.controls['sku']\" >\n        </div>\n        <div class=\"field\">\n            <label for=\"skuInput\">SKU</label>\n            <input type=\"text\" id=\"skuInput\" placeholder=\"SKU\" ngControl=\"sku1\">\n        </div>\n\n        <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_2.Http, common_1.FormBuilder])
                ], RedditApp);
                return RedditApp;
            })();
            browser_1.bootstrap(RedditApp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map
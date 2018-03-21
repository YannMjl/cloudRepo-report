webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************************/\n/* main app page css                                                                        */\n/********************************************************************************************/\nbody {\n  width: 60%;\n  margin: auto;\n  padding: 10px;\n}\n*{ text-align: center; }\nh1 {\n  color: #369;\n  font-size: 200%;\n  font-style: italic;\n  font-family: sans-serif;\n}\nnav a {\n  margin-top: 10px;\n  padding: 5px 10px;\n  border-radius: 4px;\n  display: inline-block;\n  text-decoration: none;\n  background-color: #eee;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active { color: #039be5; }\nnav a:visited, a:link { color: #607D8B; }\n/********************************************************************************************/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n\n<h1>{{ title }}</h1>\n\n<nav>\n  <a routerLink=\"/report\" routerLinkActive=\"active\">View full Report</a>\n  <a routerLink=\"/upload-file\" routerLinkActive=\"active\">Upload a file Report</a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CloudRepo - CSV Files reports';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_file_size_pipe__ = __webpack_require__("../../../../../src/app/shared/file-size.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_report_service__ = __webpack_require__("../../../../../src/app/shared/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload_file_upload_file_upload_module__ = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload_file_upload_file_upload_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload_file_upload_file_upload_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__display_by_date_display_by_date_component__ = __webpack_require__("../../../../../src/app/display-by-date/display-by-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__display_by_organization_report_detail_component__ = __webpack_require__("../../../../../src/app/display-by-organization/report-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular4_fusioncharts__ = __webpack_require__("../../../../angular4-fusioncharts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_fusioncharts_themes_fusioncharts_theme_fint__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import services and pipe


// import modules











// import app components





// chart module and others




__WEBPACK_IMPORTED_MODULE_20_angular4_fusioncharts__["a" /* FusionChartsModule */].fcRoot(__WEBPACK_IMPORTED_MODULE_18_fusioncharts__, __WEBPACK_IMPORTED_MODULE_19_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_21_fusioncharts_themes_fusioncharts_theme_fint__);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__shared_file_size_pipe__["a" /* FileSizePipe */],
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__file_upload_file_upload_component__["a" /* FileUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_17__display_by_organization_report_detail_component__["a" /* ReportDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__display_by_date_display_by_date_component__["a" /* DisplayByDateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload_file_upload_file_upload_module__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_20_angular4_fusioncharts__["a" /* FusionChartsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__shared_report_service__["a" /* ReportService */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9_ngx_progressbar__["a" /* NgProgressInterceptor */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/display-by-date/display-by-date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************************/\nh3 {\n  color: #80bfff;\n  text-align: center;\n}\nheader {\n  background: black;\n  text-align: center;\n}\n.container {\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\nbody { text-align: center; }\n/********************************************************************************************/\n/* css to display two blocks on the page                                                    */\n/********************************************************************************************/\n*{ text-align: center; }\n#left {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 50px;\n}\n#right {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n#first {\n    width: auto;\n    float: left;\n    height: auto;\n    text-align: center;\n}\n#second {\n    width: auto;\n    float: left;\n    height: auto;\n    padding-top: 10px;\n}\n#third {\n    float: left;\n    height: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding-right: 50px;\n}\n#forth {\n  float: left;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/********************************************************************************************/\n/* button CSS style                                                                         */\n/********************************************************************************************/\nbutton {\n    border: none;\n    color: white;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    padding: 15px 32px;\n    text-align: center;\n    border-radius: 12px;\n    text-decoration: none;\n    display: inline-block;\n    transition-duration: 0.4s;\n    -webkit-transition-duration: 0.4s; \n}\n.btnBack { background-color: #369; }\n.btnDelete { background-color: #b30000; }\nbutton:hover {\n    -webkit-box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n}\n/********************************************************************************************/\n/* Table CSS                                                                                */\n/********************************************************************************************/\n#repotable th {\n    color: white;\n    text-align: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background-color: #369;\n}\n#repotable td, #repotable th {\n    padding: 8px;\n    border: 1px solid #ddd;\n}\n#repotable tr:hover { background-color: #ddd; }\n#repotable tr:nth-child(even) { background-color: #f2f2f2; }\n#repotable { \n    width: -webkit-fit-content; \n    width: -moz-fit-content; \n    width: fit-content;\n    margin-bottom: 15px;\n    border-collapse: collapse;\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n}\n/********************************************************************************************/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-by-date/display-by-date.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"container\">\n\n    <h2> {{ date | date : \"MMMM d, y\" }} Report</h2>\n  \n    <div id=\"left\">\n  \n      <div ng-if=\"selecteddate\" ng-controller=\"datCtrl\">\n  \n        <div id=\"first\">\n  \n          <fusioncharts [id]=\"id\" [width]=\"width\" [height]=\"height\" [type]=\"type\" [dataFormat]=\"dataFormat\" [dataSource]=\"dataSource\"></fusioncharts>\n  \n          <div>\n            <button type=\"button\" class=\"btnBack\" (click)=\"goBack()\">Back</button>\n            <button type=\"button\" class=\"btnDelete\" (click)=\"deleteReport()\">\n              Delete {{ date | date : \"MMMM d, y\" }} Report\n            </button>\n          </div>\n  \n        </div>\n  \n        <div id=\"second\">\n  \n          <table id=\"repotable\" align=\"center\">\n  \n            <thead>\n              <tr>\n                <th>Organization</th>\n                <th>Size</th>\n              </tr>\n            </thead>\n  \n            <tr *ngFor=\"let report of reportByDate\">\n              <td>{{ report.organization }}</td>\n              <td>{{ report.size | fileSize }}</td>\n            </tr>\n          </table>\n  \n        </div>\n  \n      </div>\n  \n    </div>\n  \n  </div>\n\n</body>\n\n"

/***/ }),

/***/ "../../../../../src/app/display-by-date/display-by-date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayByDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_report_service__ = __webpack_require__("../../../../../src/app/shared/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayByDateComponent = (function () {
    function DisplayByDateComponent(location, route, reposervice) {
        this.location = location;
        this.route = route;
        this.reposervice = reposervice;
        this.reportByDateChart = [];
        this.width = 600;
        this.height = 400;
        this.id = 'chart1';
        this.type = 'column2d';
        this.dataFormat = 'json';
        this.date = this.route.snapshot.params['id'];
    }
    DisplayByDateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reposervice
            .getReportByDate(this.date)
            .subscribe(function (report) {
            _this.reverse = false;
            _this.reportByDate = report;
        });
        this.reposervice
            .getReportByDateChart(this.date)
            .subscribe(function (report) {
            _this.reportByDateChart = report;
            // check content of reportByDateChart
            console.log(_this.reportByDateChart);
            _this.dataSource = {
                'chart': {
                    'theme': 'fint',
                    // data value config
                    'showValues': '0',
                    // data labels config
                    'slantLabel': '1',
                    'labelFont': 'Arial',
                    'labelFontBold': '1',
                    'lableFontItalic': '1',
                    'labelFontAlpha': '70',
                    'labelDisplay': 'rotate',
                    // y Axis name config
                    'yAxisNameFont': 'Arial',
                    'yAxisNameFontBold': '1',
                    'yAxisNameFontSize': '15',
                    'yAxisNameFontItalic': '1',
                    'yAxisNameFontColor': '#993300',
                    'yAxisName': 'Size (memory used)',
                    // x Axis config
                    'xAxisName': 'Date',
                    'xAxisNameFont': 'Arial',
                    'xAxisNameFontBold': '1',
                    'xAxisNameFontSize': '15',
                    'xAxisNameFontItalic': '1',
                    'xAxisNameFontColor': '#993300',
                    // add gradient effect to data plots
                    'usePlotGradientColor': '1',
                    'plotGradientColor': '#ffffff',
                    // number format
                    'numberScaleUnit': ' KB, MB, GB',
                    'numberScaleValue': '1024,1024,1024'
                },
                'data': _this.reportByDateChart.map(function (item) {
                    return {
                        'label': item.organization,
                        'value': item.size,
                        // generate new color for each data display
                        'color': '#336699' + Math.floor(Math.random() * 16777215).toString(16)
                    };
                })
            };
            console.log(_this.dataSource);
        });
        this.order = 'report.organization';
    };
    DisplayByDateComponent.prototype.goBack = function () {
        this.location.back();
    };
    DisplayByDateComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    DisplayByDateComponent.prototype.deleteReport = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            console.log('delete report');
            this.reposervice
                .deleteReportByDate(this.date)
                .subscribe(function (report) { return (_this.reportByDate = report); });
            this.location.back();
        }
    };
    DisplayByDateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-display-by-date',
            template: __webpack_require__("../../../../../src/app/display-by-date/display-by-date.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-by-date/display-by-date.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_report_service__["a" /* ReportService */]])
    ], DisplayByDateComponent);
    return DisplayByDateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/display-by-organization/report-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************************/\nh3 {\n  color: #80bfff;\n  text-align: center;\n}\nheader {\n  background: black;\n  text-align: center;\n}\n.container {\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\nbody { text-align: center; }\n/********************************************************************************************/\n/* css to display two blocks on the page                                                    */\n/********************************************************************************************/\n*{ text-align: center; }\n#left {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 50px;\n}\n#right {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n#first {\n    width: auto;\n    float: left;\n    height: auto;\n    text-align: center;\n}\n#second {\n    width: auto;\n    float: left;\n    height: auto;\n    padding-top: 10px;\n}\n#third {\n    float: left;\n    height: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding-right: 50px;\n}\n#forth {\n  float: left;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/********************************************************************************************/\n/* button CSS style                                                                         */\n/********************************************************************************************/\nbutton {\n    border: none;\n    color: white;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    padding: 15px 32px;\n    text-align: center;\n    border-radius: 12px;\n    text-decoration: none;\n    display: inline-block;\n    transition-duration: 0.4s;\n    -webkit-transition-duration: 0.4s; /* Safari */\n}\n.btnBack { background-color: #369; }\n.btnDelete { background-color: #b30000; }\nbutton:hover {\n    -webkit-box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n}\n/********************************************************************************************/\n/* Table CSS                                                                                */\n/********************************************************************************************/\n#repotable th {\n    color: white;\n    text-align: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background-color: #369;\n}\n#repotable td, #repotable th {\n    padding: 8px;\n    border: 1px solid #ddd;\n}\n#repotable tr:hover { background-color: #ddd; }\n#repotable tr:nth-child(even) { background-color: #f2f2f2; }\n#repotable { \n    width: -webkit-fit-content; \n    width: -moz-fit-content; \n    width: fit-content;\n    margin-bottom: 15px;\n    border-collapse: collapse;\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n}\n/********************************************************************************************/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-by-organization/report-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"container\">\n\n    <h2> {{ orgName | uppercase }} Report</h2>\n\n    <div id=\"left\">\n\n      <div ng-if=\"selecteddate\" ng-controller=\"datCtrl\">\n\n        <div id=\"first\">\n\n          <fusioncharts [id]=\"id\" [width]=\"width\" [height]=\"height\" [type]=\"type\" [dataFormat]=\"dataFormat\" [dataSource]=\"dataSource\"></fusioncharts>\n\n          <div>\n            <button type=\"button\" class=\"btnBack\" (click)=\"goBack()\">Back</button>\n            <button type=\"button\" class=\"btnDelete\" (click)=\"deleteReport()\">\n               Delete {{ orgName }} Report\n            </button>\n          </div>\n\n        </div>\n\n        <div id=\"second\">\n\n          <table id=\"repotable\" align=\"center\">\n\n            <thead>\n              <tr>\n                <th>Organization</th>\n                <th>Size</th>\n              </tr>\n            </thead>\n\n            <tr *ngFor=\"let report of reportByNames\">\n              <td>{{ report.size | fileSize }}</td>\n              <td>{{ report.date | date : \"MMMM d, y\" }}</td>\n            </tr>\n          </table>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</body>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/display-by-organization/report-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_report_service__ = __webpack_require__("../../../../../src/app/shared/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportDetailComponent = (function () {
    function ReportDetailComponent(http, datePipe, location, route, reportService) {
        this.http = http;
        this.datePipe = datePipe;
        this.location = location;
        this.route = route;
        this.reportService = reportService;
        this.ReportByNamesChart = [];
        this.width = 600;
        this.height = 400;
        this.id = 'chart1';
        this.type = 'column2d';
        this.dataFormat = 'json';
        this.orgName = route.snapshot.params['id'];
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportService.getReportByName(this.orgName)
            .subscribe(function (report) {
            _this.reportByNames = report;
        });
        this.reportService
            .getReportByNameChart(this.orgName)
            .subscribe(function (report) {
            _this.ReportByNamesChart = report;
            console.log(_this.ReportByNamesChart);
            _this.dataSource = {
                'chart': {
                    'theme': 'fint',
                    // data value config
                    'rotateValues': '0',
                    'valueFontBold': '1',
                    'placeValuesInside': '0',
                    'valueFontColor': '#000099',
                    // data labels config
                    'slantLabel': '1',
                    'labelFont': 'Arial',
                    'labelFontBold': '1',
                    'lableFontItalic': '1',
                    'labelFontAlpha': '70',
                    'labelDisplay': 'rotate',
                    // y Axis name config
                    'yAxisNameFont': 'Arial',
                    'yAxisNameFontBold': '1',
                    'yAxisNameFontSize': '15',
                    'yAxisNameFontItalic': '1',
                    'yAxisNameFontColor': '#993300',
                    'yAxisName': 'Size (memory used)',
                    // x Axis config
                    'xAxisName': 'Date',
                    'xAxisNameFont': 'Arial',
                    'xAxisNameFontBold': '1',
                    'xAxisNameFontSize': '15',
                    'xAxisNameFontItalic': '1',
                    'xAxisNameFontColor': '#993300',
                    // add gradient effect to data plots
                    'usePlotGradientColor': '1',
                    'plotGradientColor': '#ffffff',
                    // number format
                    'numberScaleUnit': ' KB, MB, GB',
                    'numberScaleValue': '1024,1024,1024'
                },
                'data': _this.ReportByNamesChart.map(function (item) {
                    return {
                        'label': _this.datePipe.transform(item.date, 'MMMM d, y'),
                        'value': item.size,
                        // generate new color for each data display
                        'color': '#336699' + Math.floor(Math.random() * 16777215).toString(16)
                    };
                })
            };
            console.log(_this.dataSource);
        });
    };
    ReportDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReportDetailComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    ReportDetailComponent.prototype.deleteReport = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            console.log('delete report');
            this.reportService.deleteReportByName(this.orgName)
                .subscribe(function (report) { return (_this.reportByNames = report); });
            this.location.back();
        }
    };
    ReportDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]],
            selector: 'app-report-detail',
            template: __webpack_require__("../../../../../src/app/display-by-organization/report-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-by-organization/report-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_report_service__["a" /* ReportService */]])
    ], ReportDetailComponent);
    return ReportDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************************/\nh3 {\n  color: #80bfff;\n  text-align: center;\n}\nheader {\n  background: black;\n  text-align: center;\n}\n.container {\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\nbody { text-align: center; }\n/********************************************************************************************/\n/* css to display two blocks on the page                                                    */\n/********************************************************************************************/\n#left {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 50px;\n}\n#right {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n#first {\n    width: auto;\n    float: left;\n    height: auto;\n    text-align: center;\n}\n#second {\n    width: auto;\n    float: left;\n    height: auto;\n}\n#third {\n    float: left;\n    height: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding-right: 50px;\n}\n#forth {\n  float: left;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/********************************************************************************************/\n/* button CSS style                                                                         */\n/********************************************************************************************/\nbutton {\n    border: none;\n    color: white;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    padding: 15px 32px;\n    text-align: center;\n    border-radius: 12px;\n    text-decoration: none;\n    display: inline-block;\n    background-color: #369;\n    transition-duration: 0.4s;\n    -webkit-transition-duration: 0.4s; /* Safari */\n}\nbutton:hover {\n    -webkit-box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n}\n/********************************************************************************************/\n/* Upload Form CSS style                                                                    */\n/********************************************************************************************/\n.form-style-5 label {\n    display: block;\n    margin-bottom: 8px;\n}\n.form-style-5 legend {\n    font-size: 1.4em;\n    margin-bottom: 10px;\n}\n.form-style-5 fieldset{ border: none; }\n.form-style-5 select {\n    height:35px;\n    -webkit-appearance: menulist-button; \n}\n.form-style-5 input[type=\"submit\"]:hover,\n.form-style-5 input[type=\"button\"]:hover\n{\n    background: #109177;\n}\n.form-style-5 input[type=\"submit\"],\n.form-style-5 input[type=\"button\"]\n{\n    width: 100%;\n    color: #FFF;\n    margin: 0 auto;\n    display: block;\n    font-size: 18px;\n    position: relative;\n    text-align: center;\n    font-style: normal;\n    margin-bottom: 10px;\n    background: #1abc9c;\n    border-width: 1px 1px 3px;\n     border: 1px solid #16a085;\n    padding: 19px 39px 18px 39px;  \n}\n.form-style-5 .number \n{\n    width: 30px;\n    height: 30px;\n    color: #fff;\n    font-size: 0.8em;\n    margin-right: 4px;\n    line-height: 30px;\n    text-align: center;\n    display: inline-block;\n    background: #1abc9c;\n    border-radius: 15px 15px 15px 0px;\n    text-shadow: 0 1px 0 rgba(255,255,255,0.2);\n}\n.form-style-5\n{\n    padding: 20px;\n    max-width: 500px;\n    margin: 10px auto;\n    padding: 10px 20px;\n    border-radius: 8px;\n    background: #f4f7f8;\n    background: #f4f7f8;\n    font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.form-style-5 select:focus,\n.form-style-5 textarea:focus,\n.form-style-5 input[type=\"url\"]:focus,\n.form-style-5 input[type=\"text\"]:focus,\n.form-style-5 input[type=\"date\"]:focus,\n.form-style-5 input[type=\"time\"]:focus,\n.form-style-5 input[type=\"file\"]:focus,\n.form-style-5 input[type=\"email\"]:focus,\n.form-style-5 input[type=\"number\"]:focus,\n.form-style-5 input[type=\"search\"]:focus,\n.form-style-5 input[type=\"datetime\"]:focus \n{\n    background: #d2d9dd;\n}\n.form-style-5 select,\n.form-style-5 textarea,\n.form-style-5 input[type=\"url\"],\n.form-style-5 input[type=\"text\"],\n.form-style-5 input[type=\"date\"],\n.form-style-5 input[type=\"time\"],\n.form-style-5 input[type=\"file\"],\n.form-style-5 input[type=\"email\"],\n.form-style-5 input[type=\"number\"],\n.form-style-5 input[type=\"search\"],\n.form-style-5 input[type=\"datetime\"] \n{\n    margin: 0;\n    outline: 0;\n    width: 100%;\n    padding: 7px;\n    border: none;\n    font-size: 16px;\n    color:#8a97a0;\n    border-radius: 4px;\n    margin-bottom: 30px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    background-color: #e8eeef;\n    -webkit-box-sizing: border-box;\n    background: rgba(255,255,255,.1);\n    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n    font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/********************************************************************************************/\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"container\">\n\n    <div id=\"left\">\n\n      <div id=\"first\">\n\n        <div class=\"form-style-5\">\n          <form #myform=\"ngForm\" novalidate>\n            <fieldset>\n              <legend>\n                <span class=\"number\">1</span> Select Report Date </legend>\n              <label for=\"date\">'Date must be selected from the calender'</label>\n              <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"model\" required></my-date-picker>\n            </fieldset>\n\n            <fieldset>\n              <legend>\n                <span class=\"number\">2</span> Select File Report</legend>\n              <label for=\"file\">'file report must be CSV format'</label>\n              <!-- File input for upload without using the plugin. -->\n              <input id=\"photo\" type=\"file\" />\n            </fieldset>\n\n            <!-- button to trigger the file upload when submitted -->\n            <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"upload()\">\n              Upload file Report\n            </button>\n            <button type=\"button\" (click)=\"getReportByDate(reportDate)\" [routerLink]=\"['/detail-date', reportDate]\">\n              View Uploaded Report\n            </button>\n          </form>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</body>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_report_service__ = __webpack_require__("../../../../../src/app/shared/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// define the constant url we would be uploading to
var apiUrl = 'https://web-server-reports.herokuapp.com/file';
var FileUploadComponent = (function () {
    function FileUploadComponent(el, FB, http, repoService) {
        this.el = el;
        this.FB = FB;
        this.http = http;
        this.repoService = repoService;
        this.loading = false;
        this.myDatePickerOptions = {
            inline: false,
            height: '40px',
            width: '210px',
            dateFormat: 'yyyy-mm-dd'
        };
        this.model = { date: { year: 2018, month: 1, day: 1 } };
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        this.getReportByDate(this.reportDate);
    };
    FileUploadComponent.prototype.getReportByDate = function (date) {
        var _this = this;
        console.log('get report after upload');
        this.repoService.getReportByDate(date)
            .subscribe(function (report) { return _this.reportBydate = report; });
    };
    FileUploadComponent.prototype.upload = function () {
        // tslint:disable-next-line:prefer-const
        var inputEl = this.el.nativeElement.querySelector('#photo');
        var fileCount = inputEl.files.length;
        var formData = new FormData();
        this.reportDate = this.model.jsdate.toISOString();
        if (fileCount > 0) {
            formData.append('file', inputEl.files.item(0));
            formData.append('date', this.model.jsdate.toISOString());
            this.http
                .post(apiUrl, formData)
                .map(function (res) { return res.json(); })
                .subscribe(function (success) {
                alert('file uploaded succeful');
            }, function (error) { return alert(error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"])
    ], FileUploadComponent.prototype, "fileInput", void 0);
    FileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__("../../../../../src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__shared_report_service__["a" /* ReportService */]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************************/\nh3 {\n  color: #80bfff;\n  text-align: center;\n}\nheader {\n  background: black;\n  text-align: center;\n}\n.container {\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\nbody { text-align: center; }\n/********************************************************************************************/\n/* css to display two blocks on the page                                                    */\n/********************************************************************************************/\n*{ text-align: center; }\n#left {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 50px;\n}\n#right {\n  float: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n#first {\n    width: auto;\n    float: left;\n    height: auto;\n    text-align: center;\n}\n#second {\n    width: auto;\n    float: left;\n    height: auto;\n}\n#third {\n    float: left;\n    height: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding-right: 50px;\n}\n#forth {\n  float: left;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/********************************************************************************************/\n/* button CSS style                                                                         */\n/********************************************************************************************/\nbutton {\n    border: none;\n    color: white;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    padding: 15px 32px;\n    text-align: center;\n    border-radius: 12px;\n    text-decoration: none;\n    display: inline-block;\n    background-color: #b30000;\n    transition-duration: 0.4s;\n    -webkit-transition-duration: 0.4s; /* Safari */\n}\nbutton:hover {\n    -webkit-box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n}\n/********************************************************************************************/\n/* loader spinner css                                                                       */\n/********************************************************************************************/\n.loader {\n    top: 50%;\n    left: 50%;\n    width: 120px;\n    height: 120px;\n    position: fixed;\n    margin-top: -9em;                         /* set to a negative number 1/2 of the height */\n    margin-left: -15em;                        /* set to a negative number 1/2 of the width */\n    border-radius: 50%;\n    border: 16px solid #f3f3f3;\n    border-top: 16px solid #3498db;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n\n}\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n/********************************************************************************************/\n/* CSS style that display the list of organization in a fashiion way                        */\n/********************************************************************************************/\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.list-org {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 5px;\n    width: 15em;\n}\n.list-org li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em;\n    height: 1.6em;\n    border-radius: 4px;\n    font-weight: bold;\n}\n.list-org .text {\n    position: relative;\n    top: -3px;\n}\n.list-org li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.list-org li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n*{\n  text-align: center;\n}\n.org-list {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n/********************************************************************************************/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"container\">\n\n    <div id=\"left\">\n\n      <h2>Get report by organizarion or date</h2>\n\n      <div id=\"first\">\n        <ul class=\"list-org\">\n          <li *ngFor=\"let report of reports\" [class.selected]=\"report === selectedreport\" (click)=\"onSelect(report, getreportByName(report.organization))\" [routerLink]=\"['/detail', report.organization]\">\n            {{ report.organization }}\n          </li>\n        </ul>\n      </div>\n\n      <div id=\"second\" ng-controller=\"datCtrl\">\n        <ul class=\"list-org\">\n          <li *ngFor=\"let report of reportDate\" [class.selected]=\"report === selecteddate\" (click)=\"onSelectDate(report, getreportBydate(report.date))\" [routerLink]=\"['/detail-date', report.date]\">\n            {{ report.date | date : \"MMMM d, y\" }}\n          </li>\n        </ul>\n      </div>\n\n    </div>\n\n    <div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"deleteAllReport()\" [routerLink]=\"['/upload-file']\">\n        Delete All Reports\n      </button>\n    </div>\n\n  </div>\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_report_service__ = __webpack_require__("../../../../../src/app/shared/report.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsComponent = (function () {
    function ReportsComponent(reportService) {
        this.reportService = reportService;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        console.log('initialize get report');
        this.getReports();
        this.getDateInReport();
    };
    ReportsComponent.prototype.onSelect = function (report, name) {
        this.selectedreport = report;
        name = this.selectedreport.organization;
    };
    ReportsComponent.prototype.onSelectDate = function (report, date) {
        this.selecteddate = report;
        date = this.selecteddate.date;
    };
    ReportsComponent.prototype.getDateInReport = function () {
        var _this = this;
        console.log('get dates of reports');
        this.reportService
            .getDateInReport()
            .subscribe(function (reports) {
            _this.reportDate = reports;
        });
    };
    ReportsComponent.prototype.getReports = function () {
        var _this = this;
        console.log('get name of organization in the report');
        this.reportService
            .getReports()
            .subscribe(function (reports) {
            _this.reports = reports;
        });
    };
    ReportsComponent.prototype.getreportByName = function (name) {
        var _this = this;
        console.log('get report by org name');
        this.reportService
            .getReportByName(name)
            .subscribe(function (reports) { return (_this.reportsByName = reports); });
    };
    ReportsComponent.prototype.getreportBydate = function (date) {
        var _this = this;
        console.log('get report by date');
        this.reportService
            .getReportByDate(date)
            .subscribe(function (reports) { return (_this.reportsByDate = reports); });
    };
    ReportsComponent.prototype.deleteAllReport = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            console.log('delete report');
            this.reportService
                .deleteReport()
                .subscribe(function (report) { return (_this.reports = report); });
        }
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_report_service__["a" /* ReportService */]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display_by_organization_report_detail_component__ = __webpack_require__("../../../../../src/app/display-by-organization/report-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display_by_date_display_by_date_component__ = __webpack_require__("../../../../../src/app/display-by-date/display-by-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'root', pathMatch: 'full' },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_0__display_by_organization_report_detail_component__["a" /* ReportDetailComponent */], data: [{ isProd: true }] },
    { path: 'detail-date/:id', component: __WEBPACK_IMPORTED_MODULE_4__display_by_date_display_by_date_component__["a" /* DisplayByDateComponent */], data: [{ isProd: true }] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_3__reports_reports_component__["a" /* ReportsComponent */] },
    { path: 'upload-file', component: __WEBPACK_IMPORTED_MODULE_5__file_upload_file_upload_component__["a" /* FileUploadComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/file-size.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileSizePipe = (function () {
    function FileSizePipe() {
        this.units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        // tslint:disable-next-line:curly
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    FileSizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'fileSize'
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
    }
    ReportService.prototype.getReports = function () {
        var apiUrl = 'https://web-server-reports.herokuapp.com/report';
        return this.http.get(apiUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.getDateInReport = function () {
        var apiUrl = 'https://web-server-reports.herokuapp.com/date';
        return this.http.get(apiUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.getReportByNameChart = function (name) {
        var apiUrl = 'https://web-server-reports.herokuapp.com/org';
        return this.http.get(apiUrl + "/" + name)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.getReportByName = function (name) {
        var apiUrl = 'https://web-server-reports.herokuapp.com/name';
        return this.http.get(apiUrl + "/" + name)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.getReportByDateChart = function (date) {
        var apiUrl = 'https://web-server-reports.herokuapp.com/date';
        return this.http.get(apiUrl + "/" + date)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.getReportByDate = function (date) {
        var apiUrl = 'https://web-server-reports.herokuapp.com/date';
        return this.http.get(apiUrl + "/" + date)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.deleteReportByName = function (name) {
        var apiUrl = 'https://web-server-reports.herokuapp.com/delete-name';
        return this.http.get(apiUrl + "/" + name)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.deleteReportByDate = function (date) {
        var apiUrl = 'https://web-server-reports.herokuapp.com/delete-date';
        return this.http.get(apiUrl + "/" + date)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.deleteReport = function () {
        var apiUrl = 'https://web-server-reports.herokuapp.com/delete-all-record';
        return this.http.get(apiUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    ReportService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
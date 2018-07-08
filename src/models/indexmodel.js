"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indexmodel = function () {
    function indexmodel(ctx) {
        _classCallCheck(this, indexmodel);

        this.ctx = ctx;
    }

    _createClass(indexmodel, [{
        key: "updateNum",
        value: function updateNum() {
            var options = {
                uri: "http://localhost:8888/koa2/PRAISETHUMB/index.php",
                methods: "GET"
            };
            return new Promise(function (resolve, reject) {
                (0, _requestPromise2.default)(options).then(function (result) {
                    var info = JSON.parse(result);
                    if (info) {
                        resolve({ data: info.result });
                    } else {
                        reject({});
                    }
                    console.log(info);
                });
            });
        }
    }]);

    return indexmodel;
}();

exports.default = indexmodel;

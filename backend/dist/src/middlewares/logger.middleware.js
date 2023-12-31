"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogger = exports.logger = void 0;
const log4js_1 = __importDefault(require("log4js"));
log4js_1.default.configure("./config/log4js.json");
exports.logger = log4js_1.default.getLogger();
exports.httpLogger = log4js_1.default.getLogger("http");
//# sourceMappingURL=logger.middleware.js.map
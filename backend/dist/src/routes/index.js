"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
// Import route
const quote_route_1 = __importDefault(require("./quote.route"));
// Create router
exports.router = express_1.default.Router();
// Use route
exports.router.use('/api/quote', quote_route_1.default);
exports.default = exports.router;
//# sourceMappingURL=index.js.map
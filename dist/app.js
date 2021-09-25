"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var PORT = Number(process.env.PORT) || 5000;
app.get('/health', function (req, res) {
    res.send('Healthy?');
});
app.listen(PORT, function () {
    console.log("App is listening on port " + PORT + " !");
});
//# sourceMappingURL=app.js.map
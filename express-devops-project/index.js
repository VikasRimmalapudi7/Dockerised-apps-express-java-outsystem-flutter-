"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.json({
        data: "This is a express application."
    });
});
app.listen(3000, () => console.log(`Server is up and running on 3000`));

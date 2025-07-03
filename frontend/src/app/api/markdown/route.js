"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const server_1 = require("next/server");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
function GET(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const { searchParams } = new URL(request.url);
        const filename = searchParams.get("file");
        if (!filename) {
            return server_1.NextResponse.json({ error: "Missing file parameter" }, { status: 400 });
        }
        // Validate filename to prevent directory traversal
        const allowedFiles = ["terms-of-service.md", "privacy-policy.md"];
        if (!allowedFiles.includes(filename)) {
            return server_1.NextResponse.json({ error: "File not allowed" }, { status: 403 });
        }
        try {
            // Go up one level from frontend to reach the root directory where markdown files are located
            const filePath = path_1.default.join(process.cwd(), "..", filename);
            const content = yield promises_1.default.readFile(filePath, "utf8");
            return new server_1.NextResponse(content, {
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "public, max-age=3600", // Cache for 1 hour
                },
            });
        }
        catch (error) {
            console.error(`Error reading ${filename}:`, error);
            return server_1.NextResponse.json({ error: `Error reading ${filename}` }, { status: 500 });
        }
    });
}

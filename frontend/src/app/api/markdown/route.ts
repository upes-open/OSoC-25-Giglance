import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("file");

  if (!filename) {
    return NextResponse.json(
      { error: "Missing file parameter" },
      { status: 400 },
    );
  }

  // Validate filename to prevent directory traversal
  const allowedFiles = ["terms-of-service.md", "privacy-policy.md"];
  if (!allowedFiles.includes(filename)) {
    return NextResponse.json({ error: "File not allowed" }, { status: 403 });
  }

  try {
    // Go up one level from frontend to reach the root directory where markdown files are located
    const filePath = path.join(process.cwd(), "..", filename);
    const content = await fs.readFile(filePath, "utf8");

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return NextResponse.json(
      { error: `Error reading ${filename}` },
      { status: 500 },
    );
  }
}

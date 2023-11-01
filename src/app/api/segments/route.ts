import {NextResponse} from "next/server";
import segments from "@/app/api/segments/segments.json"

export async function GET(req: Request) {
    return NextResponse.json(segments)
}
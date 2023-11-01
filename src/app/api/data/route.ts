import {NextResponse} from "next/server";
import products from "@/app/api/data/data.json";


export async function GET(req: Request) {
    return NextResponse.json(products)
}
import {NextResponse} from "next/server";
import {products} from "@/app/api/products/product";


export async function GET(req: Request) {
    return NextResponse.json(products)
}
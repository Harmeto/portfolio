// app/api/blogs/[id]/route.ts
import { NextRequest } from "next/server";
import Blog from "@/models/blog";
import dbConnect from "@/lib/dbConnect";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const blog = await Blog.findById(params.id);
        if (!blog) {
            return Response.json(
                { success: false, error: 'Blog no encontrado' },
                { status: 404 }
            );
        }
        return Response.json({ success: true, data: blog });
    } catch (error) {
        return Response.json(
            { success: false, error: 'Error al obtener el blog', details: error },
            { status: 500 }
        );
    }
}
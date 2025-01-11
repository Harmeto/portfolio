import Blog from "@/models/blog";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
    await dbConnect();
    try {
        // Extraer el body
        const body = await req.json();
        
        // Crear el blog con el body extraído
        const blog = await Blog.create(body);
        
        return Response.json({success: true, data: blog});
    } catch (error) {
        return Response.json({
            success: false, 
            error: 'Error al crear el blog',
            details: error
        });
    }
}

export async function GET() {
    await dbConnect();
    try {
        // Obtener los 6 blogs más recientes ordenados por fecha de creación
        const blogs = await Blog.find({}).limit(6).sort({createdAt: -1});
        return Response.json({success: true, data: blogs});
    } catch (error) {
        return Response.json({success: false, error: 'Error al obtener los blogs'});
    }
}

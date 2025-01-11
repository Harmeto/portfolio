import mongoose from "mongoose";

export interface Blog extends mongoose.Document {
    title: string;
    description: string;
    image: string;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const blogSchema = new mongoose.Schema<Blog>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model<Blog>('Blog', blogSchema);


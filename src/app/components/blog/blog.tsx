import Image from "next/image";

export default function Blog({
    title,
    description,
    image,
    date,
    author,
}: {
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
}) {

    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 max-w-sm transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="relative flex flex-col justify-between w-full mt-2">
                <Image className="rounded-lg" src={image} alt={title} width={300} height={100} />
                <div className="flex justify-between w-full mt-2">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-300">{date}</p>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-300">{author}</p>
                </div>
            </div>
            <h1 className="text-xl font-bold mt-2 text-black dark:text-white">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
            <div className="flex justify-end mt-4">
                <button className="border border-gray-500 dark:border-purple-500 text-gray-500 dark:text-purple-500 hover:bg-gray-500 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 px-4 py-2 rounded-md">Leer más</button>
            </div>
        </div>
    )
}
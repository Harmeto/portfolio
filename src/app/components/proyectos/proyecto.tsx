import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Proyecto as ProyectoType } from "@/app/api/github/types/response";

export default async function Proyecto(props: ProyectoType) {
    return (
        <Link 
            href={props.html_url} 
            target="_blank" 
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 w-[300px] h-[400px] transition-transform transform hover:scale-105 hover:shadow-lg"
        >
            <h3 className="text-xl font-bold">{props.name}</h3>
            <p className="text-sm">{props.description}</p>
            <Image className="rounded-lg my-2 mx-auto" src="https://picsum.photos/id/30/200" alt="Proyecto" width={200} height={200} />
            {props.language && <p className="text-sm">Tecnología más utilizada: {props.language}</p>}
        </Link>
    )
}


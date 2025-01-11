import Image from "next/image";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import Link from "next/link";
export default function Profile() {
    
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg py-4 px-6 max-w-[90vw] mx-auto flex flex-col md:flex-row">
            <div className="flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-full p-2">
                <Image src="/profile.svg" alt="Profile" width={100} height={100} className="rounded-full" />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <div className="transition-all duration-300 ease-in-out text-gray-800 dark:text-white">
                    <h1 className="text-2xl font-bold">Carlos Salvo</h1>
                    <p className="text-sm">Software Engineer</p>
                    <p className="text-sm mt-2">
                        Desarrollador de software con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles.
                        Me especializo en el desarrollo de aplicaciones web y móviles, con un enfoque en la creación de interfaces de usuario intuitivas y eficientes.
                        Además, tengo experiencia en el desarrollo de aplicaciones de gestión empresarial y sistemas de información.
                        Me gusta trabajar en equipo y aprender nuevas tecnologías.
                        Me encanta la tecnología e innovación.
                    </p>
                </div>
                <div className="flex flex-row items-center justify-end mt-4 space-x-2">
                    <Link target="_blank" href="https://github.com/harmeto" className="text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white transition-all duration-300 ease-in-out flex items-center">
                        <Github />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/carlos-salvo-santa-cruz-6002401b2/" className="text-gray-800 dark:text-white px-4 py-2 rounded-md hover:text-white hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center">
                        <Linkedin />
                    </Link>
                    <Link href="mailto:bad.thg@gmail.com" className="text-gray-800 dark:text-white px-2 py-2 rounded-md hover:text-white hover:bg-gray-600 transition-all duration-300 ease-in-out flex items-center">
                        <Mail />
                    </Link>
                    <Link href="tel:+56948725341" className="text-gray-800 dark:text-white px-2 py-2 rounded-md hover:text-white hover:bg-gray-600 transition-all duration-300 ease-in-out flex items-center">
                        <Phone />
                    </Link>
                </div>
            </div>
        </div>
    )
}
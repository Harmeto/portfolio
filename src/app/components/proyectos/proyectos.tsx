import Proyecto from "./proyecto";

export default async function Proyectos() {
    const data = await fetch('http://localhost:3000/api/github');
    const json = await data.json();
    console.log(json);
    return (
        <div>
            <h3 className="text-2xl font-bold">Proyectos</h3>
            <div className="flex flex-wrap justify-center items-center gap-10 mt-2">
                {json.map((repo: any) => (
                    <Proyecto key={repo.id} {...repo} />
                ))}
            </div>
        </div>
    )
}


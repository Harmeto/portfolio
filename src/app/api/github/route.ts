'use server'

import { Proyecto } from "./types/response";

export async function GET(): Promise<Proyecto[]> {
    const response = await fetch('https://api.github.com/users/harmeto/repos');
    const data = await response.json();
    return data;
}


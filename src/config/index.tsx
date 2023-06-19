import { Client } from 'appwrite';

export const api = () => {

    const client = new Client();

    client
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || '')
        .setProject(process.env.NEXT_PUBLIC_PROJECT || '');
}
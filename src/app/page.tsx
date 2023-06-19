'use client'
import { Client, Databases } from 'appwrite';
import { useEffect, useState } from 'react';

export default function Home() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || '')
    .setProject(process.env.NEXT_PUBLIC_PROJECT || '');

  const databases = new Databases(client);
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const database = databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE || '',
      process.env.NEXT_PUBLIC_COLLECTION || ''
    );

    database.then(function (response) {
      console.log(response.documents);
      const titles = response.documents.map(document => document.title);
      console.log(titles);
      setTitles(titles);
    }, function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1 className='title'>Hi</h1>
      {titles.map(title => <p key={title}>{title}</p>)}
    </div>
  );
}

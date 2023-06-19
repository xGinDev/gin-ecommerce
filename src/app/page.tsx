'use client'
import { Client, Databases } from 'appwrite';
import { useEffect, useState } from 'react';

export default function Home() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648bd122df386ec45927');

  const databases = new Databases(client);
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const database = databases.listDocuments(
      '648f9ef1850979ebe44e',
      '648f9efe5de21dc11e95'
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

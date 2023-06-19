'use client'
import { Client, Databases, Storage } from 'appwrite';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Document {
  $id: string;
  title: string;
  image: string;
}

export default function Home() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648bd122df386ec45927');

  const databases = new Databases(client);
  const [titles, setTitles] = useState<Document[]>([]);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await databases.listDocuments(
          '648f9ef1850979ebe44e',
          '648f9efe5de21dc11e95'
        );
        const titles = response.documents.map((document) => ({
          $id: document.$id,
          title: document.title,
          image: document.image
        }));
        setTitles(titles);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const storage = new Storage(client);
    const bucket= storage.listFiles('6490b7c9c4064bfe3d64');
    console.log("bucket", bucket);
    const result = storage.getFilePreview('6490b7c9c4064bfe3d64', '[FILE_ID]');
  }, []);

  

  console.log("IMAGES", images);

  return (
    <div>
      <h1 className='title'>Hi</h1>
      {/* {images.map((image) => (
        <div key={image.$id}>
          <h2>{image.name}</h2>
          <Image src={Storage.getFilePreviewURL(image.$id)} alt={image.name} width={100} height={100} />
        </div>
      ))} */}
      {titles.map((document) => (
        <div key={document.$id}>
          <h2>{document.title}</h2>
          <Image src={document.image} alt={`Image for ${document.title}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}

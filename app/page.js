'use client'

import SkeletonDefaultPage from '@/components/Skeleton';
import { useEffect, useState } from 'react';

export default function Home() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchContent = async () => {
  //     try {
  //       const response = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_CMS_API_URL}/pages/content`); // Altere para o seu endpoint
  //       const data = await response.json();
  //       setContent(data.content); // Assumindo que o conteúdo é retornado em 'data.content'
  //     } catch (error) {
  //       console.error('Erro ao buscar o conteúdo:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchContent();
  // }, []);

  return (
    <div className={`flex flex-col artboard artboard-horizontal w-full bg-white rounded-lg shadow-inner border border-slate-150`}>
        
      {
        loading ? 
        <SkeletonDefaultPage />
        :
        <div className='flex justify-center'>Página principal (raíz)</div>
      }

    </div>
  )
}

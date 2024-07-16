'use client'

import SkeletonDefaultPage from '@/components/Skeleton';
import Error from '@/components/error';
import { useEffect, useState } from 'react';

export default function Page({params}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false)

  const slug = params.slug

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_API_CMS_URL}/pages/${slug}`); // Altere para o seu endpoint
        const data = await response.json();

        console.log(data)

        if(data.status) {
          setContent(data.content); // Assumindo que o conteúdo é retornado em 'data.content'
          setTitle(data.title)
        }else {
          setPageError(true)
        }
      } catch (error) {
        console.error('Erro ao buscar o conteúdo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (pageError) {
    return (
      <div className={`flex flex-col artboard artboard-horizontal w-full bg-white rounded-lg shadow-inner border border-slate-150`}>
        {
          <Error />
        }
      </div>
    );
  }

  return (
    <div className={`flex flex-col artboard artboard-horizontal w-full bg-white rounded-lg shadow-inner border border-slate-150`}>
      {
        loading === false && content ? 
        (
          <div className='py-8 px-4'>
            <h1 className='text-4xl font-bold text-center'>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )
        : 
        (
          <SkeletonDefaultPage />
        )
      }
    </div>
  )
}

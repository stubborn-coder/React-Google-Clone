import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import { Loading } from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); //images,new,videos
  useEffect(() => {
    if(searchTerm){
      if(location.pathname === '/images') {
        getResults(`imagesearch?tbm=isch&query=${searchTerm}`)
      }else if(location.pathname === '/search'){
        getResults(`search?query=${searchTerm}`)
      }
    }else{
      getResults('?search?query=JavascriptMastery&n=40')
    }
    // 
  }, [getResults,searchTerm,location.pathname]);

  if(isLoading) return <Loading />;
  console.log(location.pathname)
  switch(location.pathname){
    case '/search': 
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.items?.map(({link,title},index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href = {link} target="_blank" rel="nonreferrer">
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0,30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}

                </p>
              </a>
            </div>
          ))}
        </div>
      );
    
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
            {results?.items?.map(({thumbnailImageUrl,title,originalImageUrl},index) => (
              <a className='sm:p-3 p-5' href={originalImageUrl} key={index} target="_blank" rel='noreferrer'>
                <img src={thumbnailImageUrl} alt={title} loading="lazy"/>
                <p className='w-36 break-words text-sm mt-2'>
                  {title}
                </p>
              </a>
            ))}
        </div>
      );
      

      default:
      return "ERROR";

  }
}

import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
}

export default function Blog ({ allPostsData }) {
    return (
      <main>
        <section className="container flex flex-col items-center">
          <h2>Blog</h2>
          <p>Coffee-powered blog entries for maximum productivity☕</p>
          <div className="w-full max-w-4xl text-center">
            {allPostsData.map(({ id, date, title, meta_description, social_image, alt_text}) => (
              <div key={id}>
                <Link href={`blog/${id}`} className="items-center flex flex-col justify-center md:flex-row md:justify-between mb-6 hover:opacity-75 cursor-pointer">
                  <Image src={social_image} width="250" height="150" alt={alt_text} className="mb-4 rounded"/>    
                  <div className="flex flex-col">                   
                    <div className="text-xl font-semibold">{title}</div> 
                    <div>{meta_description}</div>
                  </div>
                  <div className="pb-4 inline-block">{date}</div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}
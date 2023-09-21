import { getAllPostIds, getPostData } from '@/lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
    return (
      <main className="bg-primary text-zinc-50 selection:bg-accent/75">
       <section className="container mx-auto flex flex-col items-center pt-32 pb-20 min-h-[100vh] gap-y-6">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          {postData.title}
        </h1>  
       </section>
      </main>
  );
}

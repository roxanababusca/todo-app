import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { TodoRow } from '../components/TodoRow';
import { AddItem } from '../components/AddItem';
import { LogoutButton } from '../components/LogoutButton';
import { TableHeadItems } from '../components/TableHeadItems';
import { useRouter } from 'next/router';
import clientPromise from '@/lib/mongodb';


export async function getServerSideProps(context) {
   const session = await getServerSession(
    context.req,
    context.res,
    authOptions
  );
    if (!session) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
    }

    const client = await clientPromise;
    const dbResult = await client
      .db("productivity")
      .collection("users")
      .findOne({ email: session.user.email }, { projection: { todos: 1 } });

    return { props: { todos: dbResult.todos ?? [] } };
}
  
export default function Dashboard({ todos }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (                     
      <main className="bg-zinc-200">
        <section className="container max-w-4xl">
          <div className="flex flex-col md:flex md:flex-row justify-between text-center">
            <h1> My Dream To-dos 🌠</h1>
            <div className="flex justify-center">
              <LogoutButton />
            </div>    
          </div>
          <AddItem refreshData={refreshData} />
          <div className="rounded-lg border border-violet-900">
            <table className="table-auto min-w-full divide-y divide-violet-900 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <TableHeadItems title="📕 Description"/>
                  <TableHeadItems title="🔥 Priority"/>
                  <TableHeadItems title="📅 Due"/>
                  <TableHeadItems title="✔️"/>
                </tr>
              </thead>
              <tbody className="divide-y divide-violet-800">
                {todos.map((todo) => (
                  <TodoRow key={todo.id} todo={todo} refreshData={refreshData} />
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-2xl">Status</div>
            <div>You have {todos.length} to-dos on your list!</div>
          </div>
        </section>
      </main>
    );
}

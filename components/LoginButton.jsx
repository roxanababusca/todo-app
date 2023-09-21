import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

export function LoginButton() {
    const { data: session } = useSession();

    if (session){
        return (
            <div className="flex flex-col">
                <p> Welcome back: {session.user.email} </p>
                <Link
                href="/dashboard"
                className="border border-zinc-200 rounded-lg text-lg cursor-pointer hover:text-slate-900 hover:border-violet-900 hover:bg-gradient-to-r hover:from-green-300 hover:via-blue-400 hover:to-purple-500"
                >
                View Todos
                </Link>
            </div>
        );
    }
    return (
        <div
        onClick={() => signIn()}
        className="border border-zinc-200 p-4 rounded-lg text-lg cursor-pointer hover:text-slate-900 hover:border-violet-900 hover:bg-gradient-to-r hover:from-green-300 hover:via-blue-400 hover:to-purple-500"
        >
        Sign In With Magic Link
        </div>
    );
}
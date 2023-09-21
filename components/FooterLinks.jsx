import Link from 'next/link';

export function FooterLinks({link, title}) {
    return(
        <li>
            <Link
            className="text-zinc-50 transition hover:text-zinc-50/75"
            href={link}
            >
            {title}
            </Link>
        </li>
    )
}
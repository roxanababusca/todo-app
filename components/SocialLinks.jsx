import Link from 'next/link';

export function SocialLinks({socialHandle, link, icon}) {
    return (
        <li>
            <Link
            href={link}
            rel="noreferrer"
            target="_blank"
            className="text-primary transition hover:text-primary/75"
            >
            <span className="sr-only">{socialHandle}</span>
            <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
                <path
                fillRule="evenodd"
                d={icon}
                clipRule="evenodd"
                />
            </svg>
            </Link>
        </li>
    );
}
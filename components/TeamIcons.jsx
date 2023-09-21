import Image from 'next/image';

export default function TeamIcons ({ picture }) {
    return (
        <Image
        alt="headshot of woman"
        src={picture}
        className="shadow-lg rounded-full mx-auto max-w-[120px] md:max-w-[170px]"
        />
    );
}
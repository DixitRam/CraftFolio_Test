import Image from 'next/image';

export function Project({ image, title, description, link }) {
    return (
        <a href={link}
            target="_blank" className="group flex flex-col gap-2">
            <div className="h-[400px] overflow-hidden rounded">
                <Image
                    src={image}
                    height={200}
                    width={500}
                    alt="Project Thumbnail"
                    loading="lazy"
                    className="h-full w-full object-cover duration-1000 group-hover:scale-110"
                />
            </div>
            <h3 className="pt-4 font-bold">{title}</h3>
            <p className="md:h-[50px]">
                {description}
            </p>
            <div className="group relative w-max">
                <p className="text-sm font-semibold">
                    Check website
                </p>
                <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
            </div>
        </a>
    )
}
import Image from 'next/image';

interface DeleteMovieCardContentProps {
    posterUrlPreview: string;
    nameRu: string;
}

export default function DeleteMovieCardContent({ posterUrlPreview, nameRu }: DeleteMovieCardContentProps) {
    return (
        <div style={{ display: 'grid', placeItems: 'center' }}>
            <h3>Вы действительно хотите удалить фильм?</h3>
            <Image src={posterUrlPreview} alt={nameRu} width={150} height={300} />
        </div>
    );
}

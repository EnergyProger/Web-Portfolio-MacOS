import type { IFile } from "@types";

interface Props {
  data: IFile;
}

const ImageViewerContent = ({ data }: Props) => {
  if (!data.imageUrl) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-black text-white">
        <p>No image data found</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-white">
      <div className="w-full">
        <picture>
          {data.imageUrl_webp && (
            <source type="image/webp" srcSet={data.imageUrl_webp} />
          )}
          <img
            src={data.imageUrl}
            alt={data.name}
            className="w-full max-h-[70vh] h-auto object-contain rounded"
          />
        </picture>
      </div>
    </div>
  );
};

export default ImageViewerContent;

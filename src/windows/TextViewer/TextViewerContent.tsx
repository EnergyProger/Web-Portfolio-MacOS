import type { IFile } from "@types";

interface Props {
  data: IFile;
}

const TextViewerContent = ({ data }: Props) => {
  return (
    <div className="p-5 space-y-6 bg-white">
      {data.imageUrl && (
        <div className="w-full">
          <picture>
            {data.imageUrl_webp && (
              <source type="image/webp" srcSet={data.imageUrl_webp} />
            )}
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-full max-h-[50vh] h-auto rounded"
            />
          </picture>
        </div>
      )}
      {data.subtitle && (
        <h3 className="text-lg font-semibold">{data.subtitle}</h3>
      )}
      {Array.isArray(data.description) && data.description.length > 0 && (
        <div className="space-y-3 leading-relaxed text-base text-gray-800">
          {data.description.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextViewerContent;

import { gallery } from "@config";
import useWindowStore from "@store/window";
import type { IGallery } from "@types";

const GalleryContent = () => {
  const { openWindow } = useWindowStore();

  const handleOpenWindowImageViewer = (item: IGallery) => {
    openWindow("imgfile", {
      id: item.id,
      name: "Gallery image",
      icon: "/images/image.png",
      icon_webp: "/images/image.webp",
      kind: "file",
      fileType: "img",
      imageUrl: item.img,
      imageUrl_webp: item.img_webp,
    });
  };

  return (
    <div className="photos">
      <ul>
        {gallery.map((item) => (
          <li key={item.id} onClick={() => handleOpenWindowImageViewer(item)}>
            <picture>
              <source type="image/webp" srcSet={item.img_webp} />
              <img
                src={item.img}
                alt={`Gallery image ${item.id}`}
                loading="lazy"
              />
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryContent;

import { photosLinks } from "@config";

const GallerySidebar = () => {
  return (
    <div className="sidebar">
      <h2>Gallery</h2>
      <ul>
        {photosLinks.map((item) => (
          <li key={item.id}>
            <img src={item.icon} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GallerySidebar;

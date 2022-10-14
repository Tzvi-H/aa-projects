import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find(
    (gallery) => gallery.galleryid === Number(galleryId)
  );

  return <h2>{gallery.name}</h2>;
};

export default GalleryView;

import { useProjectData } from "../hooks/useProjectData";

interface ProjectGalleryProps {
  projectName: string;
  fallbackImages: string[];
}

export default function ProjectGallery({ projectName, fallbackImages }: ProjectGalleryProps) {
  const { images, loading, error } = useProjectData(projectName);

  console.log(`[ProjectGallery] Project: ${projectName}, Images from Supabase: ${images.length}, Fallback images: ${fallbackImages.length}`);

  // Use Supabase images if available, otherwise use fallback images
  const displayImages = images.length > 0 ? images : fallbackImages;

  console.log(`[ProjectGallery] Displaying ${displayImages.length} images`);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-10">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    console.error(`[ProjectGallery] Error loading ${projectName} images:`, error);
  }

  if (displayImages.length === 0) {
    return (
      <div className="w-full flex items-center justify-center p-10">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {displayImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="w-full block leading-[0] m-0 p-0 align-top"
          style={{ display: 'block' }}
          onLoad={() => console.log(`[ProjectGallery] Image ${index + 1} loaded: ${image}`)}
          onError={() => console.error(`[ProjectGallery] Image ${index + 1} failed to load: ${image}`)}
        />
      ))}
    </div>
  );
}
export const UnDeuxTroisProject = {
  description: "un deux trois 프로젝트 설명입니다.",
  images: [],
};

export default function UnDeuxTrois() {
  return (
    <div className="w-full">
      {UnDeuxTroisProject.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="w-full block"
        />
      ))}
    </div>
  );
}

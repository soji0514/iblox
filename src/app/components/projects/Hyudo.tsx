export const HyudoProject = {
  description: "hyudo 프로젝트는 곧 업데이트 예정입니다.",
  images: [],
};

export default function Hyudo() {
  return (
    <div className="w-full">
      {HyudoProject.images.map((image, index) => (
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

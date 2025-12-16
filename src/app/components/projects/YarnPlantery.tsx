export const YarnPlanteryProject = {
  description: "yarn plantery 프로젝트 설명입니다.",
  images: [],
};

export default function YarnPlantery() {
  return (
    <div className="w-full">
      {YarnPlanteryProject.images.map((image, index) => (
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

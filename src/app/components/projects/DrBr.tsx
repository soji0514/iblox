export const DrBrProject = {
  description: "dr.br 프로젝트 설명입니다.",
  images: [],
};

export default function DrBr() {
  return (
    <div className="w-full">
      {DrBrProject.images.map((image, index) => (
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

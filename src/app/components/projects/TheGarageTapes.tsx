export const TheGarageTapesProject = {
  description: "the garage tapes 프로젝트는 곧 업데이트 예정입니다.",
  images: [],
};

export default function TheGarageTapes() {
  return (
    <div className="w-full">
      {TheGarageTapesProject.images.map((image, index) => (
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

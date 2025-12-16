export const ZeroOneZeroZeroProject = {
  description: "0100 프로젝트 설명입니다.",
  images: [],
};

export default function ZeroOneZeroZero() {
  return (
    <div className="w-full">
      {ZeroOneZeroZeroProject.images.map((image, index) => (
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

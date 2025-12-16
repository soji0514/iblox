export const ZeroOneZeroZeroProject = {
  description: "0100은 프리미엄 침구 브랜드입니다.",
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

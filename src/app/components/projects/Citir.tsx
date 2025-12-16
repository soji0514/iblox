export const CitirProject = {
  description: "시티르는 향을 통해 감각을 깨우는 바디·헤어 케어 브랜드입니다.  복잡한 루틴에 지친 현대인을 위해, 시티르는 매일의 작은 순간을 향기로운 리추얼로 바꿉니다.  가볍지만 깊이 있는 향, 손이 자주 가는 간결한 사용감으로  스스로를 돌보는 시간을 자연스럽고 아름답게 만들어 줍니다. 무게 없는 케어, 감각적인 일상 — 시티르가 만듭니다.",
  images: [],
};

export default function Citir() {
  return (
    <div className="w-full">
      {CitirProject.images.map((image, index) => (
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

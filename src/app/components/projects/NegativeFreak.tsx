export const NegativeFreakProject = {
  description: `네거티브 프릭은 'Unexpected Beauty(예상치 못한 아름다움)'를 슬로건으로 하는 100% AI 제작 가상의 뷰티 브랜드입니다. 기존 뷰티 시장이 강요하는 완벽,결점을 커버하는 키워드에 반기를 들고, 디지털 오류와 의도된 불완전함에서 오는 새로운 미학을 탐구합니다.\n\n제품 기획부터 네이밍, 패키지 디자인, 가상 모델, 비주얼 캠페인까지. 물리적 제약이 없는 가상 공간에서 AI 기술과 디렉터의 기획력만으로 탄생시킨 차세대 뷰티 브랜드입니다.`,
  images: [],
};

export default function NegativeFreak() {
  return (
    <div className="w-full">
      {NegativeFreakProject.images.map((image, index) => (
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

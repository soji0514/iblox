export const SinSuRuProject = {
  description: "신스루는 역사적 사실을 기반으로 제작한 가상의 이야기 ‘팩션'을 브랜드 스토리로 전개하는 프리미엄 홈 에스테틱 브랜드입니다.  신스루는 나다움을 찾는 여정을 함께하는 모든 이를 위한 특별한 선물이자 익숙한 듯 새로운 전통의 분위기를 자아냅니다. 기능적으로 효과적이면서도 누구나 간편하게 사용할 수 있는 직관적은 사용성으로 삶에 자연스레 스며들기를 바랍니다.",
  images: [],
};

export default function SinSuRu() {
  return (
    <div className="w-full">
      {SinSuRuProject.images.map((image, index) => (
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

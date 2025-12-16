export const PuresomeProject = {
  description: "자극적인 공포 소구 마케팅으로 즉각적인 구매를 유도하였으나, 가장 편안해야 할 욕실 공간에 ‘불안감'을 심어주는 브랜드 경험을 낳았고, 카테고리가 확장되며 팀마다 다른 톤앤매너를 사용하여 브랜드의 정체성이 모호해지고 있었던 퓨어썸에 긍정적인 이미지와 독립 브랜드로 새로 시작하기 위하여 브랜드 리뉴얼을 진행하였습니다.",
  images: [],
};

export default function Puresome() {
  return (
    <div className="w-full">
      {PuresomeProject.images.map((image, index) => (
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

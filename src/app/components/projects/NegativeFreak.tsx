import img031 from "figma:asset/fc512dd7c0a271090c4e716135374a28c457980e.png";
import img01 from "figma:asset/a8d0bf53be3c9b8927316f2d51f1ed699e1c795c.png";
import img05 from "figma:asset/f741bd2f9caa5e4afefd123a3f3af56cef6e6bdf.png";
import img02 from "figma:asset/9ded0bbf47eebdc1c006c0eb73cb3aee20df7a4f.png";
import img07 from "figma:asset/31ec893572695a172521336f173baf609697ed09.png";
import img04 from "figma:asset/c8069414fa87bd1fa4ea9101c433bccd7fd5b008.png";
import img06 from "figma:asset/90e2ab50faa5e707b87eed46ef10715a926f3d7b.png";
import img10 from "figma:asset/e4972b7b3de0df989290e80d24b9ed1eb34e8afb.png";
import img08 from "figma:asset/df95fd935492ec2ec86ec2967e2cb43b197d8651.png";
import imgNegativeFreak08 from "figma:asset/94101fd0d97045cd55281becef13ee5399572b55.png";
import img11 from "figma:asset/50c041ae2c6c807f54033574da043e14bdaeb2b4.png";
import img14 from "figma:asset/b2a97ced9e243666fc6e55e9411f283b984e39fd.png";
import img09 from "figma:asset/5d53f24cd755582d0c9ad871d1e8769ad770968d.png";
import img16 from "figma:asset/ab95ee436339ab26cbdfc902ec87682ec25be8a1.png";
import img12 from "figma:asset/497f7a2511da3f4f95285e6651a163a4f50223f5.png";
import imgNegativeFreak09 from "figma:asset/b8312906184bd6b9608fdf28ad4488c5fbe2eb85.png";
import img13 from "figma:asset/f61e5d1c5f7a27d54222a845b2208293d71a8cf9.png";
import img15 from "figma:asset/92fb95cc180f558ce566732a2abe0d72c7d56c33.png";
import imgNegativeFreak11 from "figma:asset/50a4324458595f278a807afc8c68d0d038395989.png";

export const NegativeFreakProject = {
  description: `네거티브 프릭은 'Unexpected Beauty(예상치 못한 아름다움)'를 슬로건으로 하는 100% AI 제작 가상의 뷰티 브랜드입니다. 기존 뷰티 시장이 강요하는 완벽,결점을 커버하는 키워드에 반기를 들고, 디지털 오류와 의도된 불완전함에서 오는 새로운 미학을 탐구합니다.\n\n제품 기획부터 네이밍, 패키지 디자인, 가상 모델, 비주얼 캠페인까지. 물리적 제약이 없는 가상 공간에서 AI 기술과 디렉터의 기획력만으로 탄생시킨 차세대 뷰티 브랜드입니다.`,
  images: [
    img031,
    img01,
    img05,
    img02,
    img07,
    img04,
    img06,
    img10,
    img08,
    imgNegativeFreak08,
    img11,
    img14,
    img09,
    img16,
    img12,
    imgNegativeFreak09,
    img13,
    img15,
    imgNegativeFreak11,
  ],
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

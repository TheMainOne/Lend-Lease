import { Container } from "components/GlobalStyles";
import {
  Goods,
  GoodsWrapper,
  GoodsText,
  GoodsTitle,
  GoodsThumb,
  GoodsItemTitle,
  GoodsItemText,
  GoodsList,
  GoodsButton,
} from "./Goods.styled";
import img1 from "../../images/masters/img1.jpg";
import img2 from "../../images/masters/img2.jpg";
import img3 from "../../images/masters/img3.jpg";

export const GoodsSection = () => {
  return (
    <Goods>
      <Container>
        <GoodsText>для справжніх поціновувачів</GoodsText>
        <GoodsTitle name="goods">Наші товари</GoodsTitle>
        <GoodsList>
          <GoodsWrapper>
            <img src={img1} alt="Goods" />
            <GoodsThumb>
              <GoodsItemTitle>Рюкзак польовий</GoodsItemTitle>
              <GoodsItemText>Пісочний колір</GoodsItemText>
            </GoodsThumb>
            <GoodsButton>Купити</GoodsButton>
          </GoodsWrapper>
          <GoodsWrapper>
            <img src={img2} alt="Goods" />
            <GoodsThumb>
              <GoodsItemTitle>Тактичний ліхтарик</GoodsItemTitle>
              <GoodsItemText>Чорний колір</GoodsItemText>
            </GoodsThumb>
            <GoodsButton>Купити</GoodsButton>
          </GoodsWrapper>
          <GoodsWrapper>
            <img src={img3} alt="Goods" />
            <GoodsThumb>
              <GoodsItemTitle>Тактичні окуляри</GoodsItemTitle>
              <GoodsItemText>Олива колір</GoodsItemText>
            </GoodsThumb>
            <GoodsButton>Купити</GoodsButton>
          </GoodsWrapper>
        </GoodsList>
      </Container>
    </Goods>
  );
};

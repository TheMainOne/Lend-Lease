import { useState } from "react";
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
import { ModalWindowForFirstItem } from "components/ModalWindow/ModalForFirstItem";

export const GoodsSection = () => {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const handleOpen = () => setOpenFirstModal(true);
  const handleClose = () => setOpenFirstModal(false);

  return (
    <Goods>
      <Container>
        <GoodsText>для справжніх поціновувачів</GoodsText>
        <GoodsTitle name="goods">Наші товари</GoodsTitle>
        <GoodsList>
          <GoodsWrapper>
            <img
              src={img1}
              alt="Goods"
              onClick={handleOpen}
              style={{ cursor: "pointer" }}
            />
            <GoodsThumb onClick={handleOpen}>
              <GoodsItemTitle>Рюкзак польовий</GoodsItemTitle>
              <GoodsItemText>Пісочний колір</GoodsItemText>
            </GoodsThumb>
            <GoodsButton href="https://t.me/mr_hyde880">Купити</GoodsButton>
          </GoodsWrapper>
          <GoodsWrapper>
            <img src={img2} alt="Goods" style={{ cursor: "pointer" }} />
            <GoodsThumb>
              <GoodsItemTitle>Тактичний ліхтарик</GoodsItemTitle>
              <GoodsItemText>Чорний колір</GoodsItemText>
            </GoodsThumb>
            <GoodsButton href="https://t.me/mr_hyde880">Купити</GoodsButton>
          </GoodsWrapper>
          <GoodsWrapper>
            <img src={img3} alt="Goods" style={{ cursor: "pointer" }} />
            <GoodsThumb>
              <GoodsItemTitle>Тактичні окуляри</GoodsItemTitle>
              <GoodsItemText>Олива колір</GoodsItemText>
            </GoodsThumb>
            <GoodsButton href="https://t.me/mr_hyde880">Купити</GoodsButton>
          </GoodsWrapper>
        </GoodsList>
        <ModalWindowForFirstItem
          openFirstModal={openFirstModal}
          handleClose={handleClose}
        />
      </Container>
    </Goods>
  );
};

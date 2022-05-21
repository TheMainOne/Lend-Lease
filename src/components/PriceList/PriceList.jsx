import { Container } from "components/GlobalStyles";
import {
  PriceListSection,
  PriceListText,
  PriceListTitle,
  PriceContainer,
  PriceItem,
  PriceItemUnderLine,
  PriceItemText,
  PriceListButton,
} from "./PriceList.styled";

export const PriceList = () => {
  return (
    <PriceListSection>
      <Container>
        <PriceListText>Проведи время в компании лучших мастеров</PriceListText>
        <PriceListTitle>Услуги и цены</PriceListTitle>
        <PriceContainer>
          <ul>
            <PriceItem>
              <PriceItemText>Мужская стрижка</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 300 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              <PriceItemText>Стрижка бороды</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Стрижка усов</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Бритье опасной бритвой</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Стрижка у стажера</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 50 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Стрижка под насадку</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Детская стрижка</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 300 грн.</PriceItemText>
            </PriceItem>
            <PriceItem>
              {" "}
              <PriceItemText>Камуфлирование седины</PriceItemText>
              <PriceItemUnderLine></PriceItemUnderLine>
              <PriceItemText>от 200 грн.</PriceItemText>
            </PriceItem>
          </ul>
        </PriceContainer>
        <PriceListButton>Онлайн-запись</PriceListButton>
      </Container>
    </PriceListSection>
  );
};

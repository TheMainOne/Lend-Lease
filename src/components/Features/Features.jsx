import { Container } from "components/GlobalStyles";
import {
  FeaturesSection,
  FeaturesText,
  FeaturesTitle,
  FeaturesSecondText,
  FeaturesList,
  FeaturesListItem,
  FeaturesListItemWrapper,
  FeaturesListItemText,
  FeaturesWrapper,
} from "./Features.styled";

export const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <FeaturesWrapper>
          <div>
            <FeaturesText>старая традиционная школа</FeaturesText>
            <FeaturesTitle>Почему приходят именно к нам?</FeaturesTitle>
            <FeaturesSecondText>
              О нас говорят только хорошее. <br />
              Но лучше 1 раз увидеть и прочувствовать, чем 10 раз прочитать.
            </FeaturesSecondText>
          </div>
          <FeaturesList>
            <FeaturesListItem>
              <FeaturesListItemWrapper>600</FeaturesListItemWrapper>
              <FeaturesListItemText>
                Довольных клиентов в день
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>50</FeaturesListItemWrapper>
              <FeaturesListItemText>
                Наград за отличный сервис
              </FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>20</FeaturesListItemWrapper>
              <FeaturesListItemText>Лучших мастеров Киева</FeaturesListItemText>
            </FeaturesListItem>
            <FeaturesListItem>
              <FeaturesListItemWrapper>100</FeaturesListItemWrapper>
              <FeaturesListItemText>
                Подарков постоянным клиентам
              </FeaturesListItemText>
            </FeaturesListItem>
          </FeaturesList>
        </FeaturesWrapper>
      </Container>
    </FeaturesSection>
  );
};

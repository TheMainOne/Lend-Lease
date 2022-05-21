import { Container } from "components/GlobalStyles";
import {
  AboutSectionStyled,
  AboutSectionTitle,
  AboutSectionText,
  AboutSectionSecondText,
  AboutSectionThirdText,
  AboutSectionButton,
  AboutSectionImageItem,
  AboutSectionImageList,
  AboutSectionWrapper,
} from "./About.styled";
import img1 from "../../images/about_us/tablet/img1.jpg";
import img2 from "../../images/about_us/tablet/img2.jpg";

export const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Container name="aboutUs">
        <AboutSectionWrapper>
          <AboutSectionImageList>
            <AboutSectionImageItem>
              <img src={img1} alt="Barber" />
            </AboutSectionImageItem>
            <AboutSectionImageItem>
              <img src={img2} alt="Barber" />
            </AboutSectionImageItem>
          </AboutSectionImageList>
          <div>
            <AboutSectionTitle>О нас</AboutSectionTitle>
            <AboutSectionText>Лучший Барбершоп твоего города</AboutSectionText>
            <AboutSectionSecondText>
              Если ты хочешь добавить в свой образ больше уверенности – тебе
              точно к нам.
            </AboutSectionSecondText>
            <AboutSectionThirdText>
              Мы команда, которая никогда не останавливается на достигнутом и
              жаждет перемен. И когда ты попадешь в руки нашего мастеро уже
              никогда не сможешь быть прежним. Мы команда, которая всегда с
              клиентами "на одной волне". Поэтому, мы всегда готовы
              усовершенствовать каждого, кто к нам приходит!
            </AboutSectionThirdText>
            <AboutSectionButton>Онлайн-запись</AboutSectionButton>
          </div>
        </AboutSectionWrapper>
      </Container>
    </AboutSectionStyled>
  );
};

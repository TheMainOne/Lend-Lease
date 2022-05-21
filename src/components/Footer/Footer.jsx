import { Container } from "components/GlobalStyles";
import {
  FooterSection,
  FooterTitle,
  FooterContactsList,
  FooterContactsListItem,
  FooterContactsListLink,
  FooterContactsListText,
  FooterSecondTitle,
  FooterSecondText,
  FooterWrapper,
} from "./Footer.styled";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <div>
            <FooterTitle name="footer">Контакты</FooterTitle>
            <div>
              <FooterContactsList>
                <FooterContactsListItem>
                  <FooterContactsListLink
                    href="https://goo.gl/maps/EHh9YuX74odmkXjB8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LocationOnOutlinedIcon />
                    <FooterContactsListText>
                      ул. Васильковая, 7А Киев, 08132
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
                <FooterContactsListItem>
                  <FooterContactsListLink href="tel:+380441111111">
                    <LocalPhoneSharpIcon />
                    <FooterContactsListText>
                      +38 044 111 11 11
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
                <FooterContactsListItem>
                  <FooterContactsListLink href="mailto:barbershop@email.com">
                    <EmailOutlinedIcon />
                    <FooterContactsListText>
                      barbershop@email.com
                    </FooterContactsListText>
                  </FooterContactsListLink>
                </FooterContactsListItem>
              </FooterContactsList>
            </div>
          </div>
          <div>
            <FooterSecondTitle>Время работы</FooterSecondTitle>
            <FooterSecondText>Ежедневно с 9:00 до 22:00</FooterSecondText>
          </div>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

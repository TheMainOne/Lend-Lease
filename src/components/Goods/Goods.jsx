import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "components/GlobalStyles";
import {
  Goods,
  GoodsWrapper,
  GoodsText,
  GoodsTitle,
  GoodsThumb,
  GoodsItemTitle,
  GoodsItemText,
  GoodsItemSocialMediasList,
  GoodsItemSocialMediasListItem,
  GoodsItemSocialMediasListLink,
  GoodsList,
} from "./Goods.styled";
import img1 from "../../images/masters/img1.jpg";
import img2 from "../../images/masters/img2.jpg";
import img3 from "../../images/masters/img3.jpg";

export const GoodsSection = () => {
  return (
    <Goods>
      <Container>
        <GoodsText>для настоящих ценителей атмосферы</GoodsText>
        <GoodsTitle name="goods">Наши мастера</GoodsTitle>
        <GoodsList>
          <GoodsWrapper>
            <img src={img1} alt="Goods" />
            <GoodsThumb>
              <GoodsItemTitle>John Smith</GoodsItemTitle>
              <GoodsItemText>Extreme Barber</GoodsItemText>
              <GoodsItemSocialMediasList>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
              </GoodsItemSocialMediasList>
            </GoodsThumb>
          </GoodsWrapper>
          <GoodsWrapper>
            <img src={img2} alt="Goods" />
            <GoodsThumb>
              <GoodsItemTitle>Michele Doe</GoodsItemTitle>
              <GoodsItemText>Extreme Barber</GoodsItemText>
              <GoodsItemSocialMediasList>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
              </GoodsItemSocialMediasList>
            </GoodsThumb>
          </GoodsWrapper>
          <GoodsWrapper>
            <img src={img3} alt="Goods" />
            <GoodsThumb>
              <GoodsItemTitle>Alan Black</GoodsItemTitle>
              <GoodsItemText>Extreme Barber</GoodsItemText>
              <GoodsItemSocialMediasList>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
                <GoodsItemSocialMediasListItem>
                  <GoodsItemSocialMediasListLink
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon
                      sx={{ color: "#303030", "&:hover": { color: "#FF6C00" } }}
                    />
                  </GoodsItemSocialMediasListLink>
                </GoodsItemSocialMediasListItem>
              </GoodsItemSocialMediasList>
            </GoodsThumb>
          </GoodsWrapper>
        </GoodsList>
      </Container>
    </Goods>
  );
};

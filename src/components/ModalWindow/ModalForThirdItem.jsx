import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ModalList,
  ModalListItem,
  ModalLinkButton,
  BoxWrapper,
} from "./ModalForFirstItem.styled";
import image1 from "../../images/modalThird/image.jpg";
import image2 from "../../images/modalThird/image1.jpg";
import image3 from "../../images/modalThird/image2.jpg";
import image4 from "../../images/modalThird/image3.jpg";

export const ModalWindowForThirdItem = ({
  openThirdModal,
  handleCloseThirdModal,
}) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");
  const DesktopMediaWidth = useMediaQuery("(min-width:1024px)");

  const images = [
    {
      original: image1,
    },
    {
      original: image2,
    },
    {
      original: image3,
    },
    {
      original: image4,
    },
  ];

  return (
    <Modal
      open={openThirdModal}
      onClose={handleCloseThirdModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={[
          {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "#ffffff",
            outline: "none",
            padding: "25px",
            color: "#303030",
          },
          TabletMediaWidth && {
            width: 700,
            display: "flex",
            alignItems: "center",
          },
          DesktopMediaWidth && {
            width: 1000,
          },
        ]}
      >
        <BoxWrapper>
          <CloseIcon
            fontSize="large"
            sx={[
              {
                cursor: "pointer",
                color: "#000000",
                marginLeft: "300px",
                marginTop: "10px",
                marginBottom: "15px",
              },
              TabletMediaWidth && {
                marginLeft: "675px",
                marginTop: "0px",
              },
              DesktopMediaWidth && {
                marginLeft: "480px",
                marginBottom: "28px",
                width: 1000,
              },
            ]}
            onClick={handleCloseThirdModal}
          />
          <ModalList>
            <ModalListItem>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inherit",
                  fontSize: "16px",
                  letterSpacing: "0.03em",
                }}
              >
                Активні тактичні навушники (колір: олива, чорний)
                <br />
                Ціна: 2700 грн.
                <br />
                <br />
                Характеристики:
                <br />- Шумопоглинання: 22db
                <br />
                - AUX вихід та перехідник
                <br />- Тип батарейки ААА
                <br />- Маса: 380гр.
                <br />
                <br /> Доставка:
                <br /> Новою Поштою по Україні, або самовивіз зі складу в Києві.
              </Typography>
            </ModalListItem>
            <ModalListItem>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inherit",
                  fontSize: "14px",
                  letterSpacing: "0.03em",
                  color: "#ff6c00",
                }}
              >
                Активні навушники для стрільби з шумопоглинанням до 22db.
                Навушники оснащені двома всеспрямованими мікрофонами з
                динамічним діапазоном, регулятором гучності, аудіовходом і
                звукоізоляційним корпусом. Звуковий стиск забезпечує 2
                мілісекундний час реакції.
                <br />
                Для роботи використовує 2 батарейки типу ААА
              </Typography>
            </ModalListItem>
          </ModalList>
          <ModalLinkButton href="https://t.me/LendLease_Ukraine">
            Купити
          </ModalLinkButton>
        </BoxWrapper>
        <Box
          sx={[
            {
              display: "none",
            },
            TabletMediaWidth && {
              display: "block",
              marginLeft: "30px",
            },
          ]}
        >
          {" "}
          <ImageGallery
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            items={images}
          />
        </Box>
      </Box>
    </Modal>
  );
};

// export const ModalWindowForThirdItem = ({
//   openThirdModal,
//   handleCloseThirdModal,
// }) => {
//   const TabletMediaWidth = useMediaQuery("(min-width:768px)");

//   return (
//     <Modal
//       open={openThirdModal}
//       onClose={handleCloseThirdModal}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box
//         sx={[
//           {
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 350,
//             bgcolor: "#ffffff",
//             outline: "none",
//             padding: "15px",
//             color: "#303030",
//           },
//           TabletMediaWidth && {
//             width: 500,
//           },
//         ]}
//       >
//         <CloseIcon
//           fontSize="large"
//           sx={[
//             {
//               cursor: "pointer",
//               color: "#000000",
//               marginLeft: "300px",
//               marginTop: "10px",
//               marginBottom: "15px",
//             },
//             TabletMediaWidth && {
//               marginLeft: "460px",
//               marginTop: "0px",
//             },
//           ]}
//           onClick={handleCloseThirdModal}
//         />
//         <ModalList>
//           <ModalListItem>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "inherit",
//                 fontSize: "16px",
//                 letterSpacing: "0.03em",
//               }}
//             >
//               Тактичні окуляри (Олива колір) <br />
//               Ціна: 5200грн <br /> Характеристика товару: <br /> - матеріал:
//               Полікарбонат <br />
//               - Розміри: 200х240 мм Вага: 60 г <br />
//               - Дві лінзи
//               <br />- секретна застежка
//             </Typography>
//           </ModalListItem>
//           <ModalListItem>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "inherit",
//                 fontSize: "14px",
//                 letterSpacing: "0.03em",
//                 color: "#ff6c00",
//               }}
//             >
//               Окуляри поляризаційні Select — це поєднання сучасного стилю й
//               захисту від сонця. Завдяки лінзам із коефіцієнтом UV 400 очі
//               будуть повністю захищені від шкідливого ультрафіолетового
//               випромінювання, а їхні противідблискові властивості допоможуть
//               чіткіше розгледіти все, що є під поверхнею води.
//             </Typography>
//           </ModalListItem>
//         </ModalList>
//         <ModalLinkButton href="https://t.me/mr_hyde880">Купити</ModalLinkButton>
//       </Box>
//     </Modal>
//   );
// };

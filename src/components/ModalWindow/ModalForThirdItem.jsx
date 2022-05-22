import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ModalList,
  ModalListItem,
  ModalLinkButton,
} from "./ModalForFirstItem.styled";

export const ModalWindowForThirdItem = ({
  openThirdModal,
  handleCloseThirdModal,
}) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");

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
            height: 500,
            bgcolor: "#ffffff",
            outline: "none",
            padding: "15px",
            color: "#303030",
          },
          TabletMediaWidth && {
            width: 500,
          },
        ]}
      >
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
              marginLeft: "460px",
              marginTop: "0px",
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
              Тактичні окуляри (Олива колір) <br />
              Ціна: 5200грн <br /> Характеристика товару: <br /> - матеріал:
              Полікарбонат <br />
              - Розміри: 200х240 мм Вага: 60 г <br />
              - Дві лінзи
              <br />- секретна застежка
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
              Окуляри поляризаційні Select — це поєднання сучасного стилю й
              захисту від сонця. Завдяки лінзам із коефіцієнтом UV 400 очі
              будуть повністю захищені від шкідливого ультрафіолетового
              випромінювання, а їхні противідблискові властивості допоможуть
              чіткіше розгледіти все, що є під поверхнею води.
            </Typography>
          </ModalListItem>
        </ModalList>
        <ModalLinkButton href="https://t.me/mr_hyde880">Купити</ModalLinkButton>
      </Box>
    </Modal>
  );
};

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

export const ModalWindowForFirstItem = ({ openFirstModal, handleClose }) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");

  return (
    <Modal
      open={openFirstModal}
      onClose={handleClose}
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
          onClick={handleClose}
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
              Навушники оснащені двома всеспрямованими мікрофонами з динамічним
              діапазоном, регулятором гучності, аудіовходом і звукоізоляційним
              корпусом. Звуковий стиск забезпечує 2 мілісекундний час реакції.
              <br />
              Для роботи використовує 2 батарейки типу ААА
            </Typography>
          </ModalListItem>
        </ModalList>
        <ModalLinkButton href="https://t.me/mr_hyde880">Купити</ModalLinkButton>
      </Box>
    </Modal>
  );
};

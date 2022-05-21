import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalList, ModalListItem } from "./ModalForFirstItem.styled";

export const ModalWindowForFirstItem = ({ openFirstModal, handleClose }) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");
  console.log(TabletMediaWidth);
  return (
    <Modal
      open={openFirstModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box
        sx={{
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
        }}
          > */}

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
          sx={{
            cursor: "pointer",
            color: "#000000",
            marginLeft: "280px",
            marginTop: "85px",
            marginBottom: "30px",
          }}
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
              Рюкзак польовий (пісочний колір) <br />
              - Характеристика товару: <br /> - матеріал: еластан <br /> -
              Об'єм: 10 л
              <br />
              - Розміри: 400х240 мм Вага: 600 г <br />
              - Два відділення
              <br />- Дві зовнішні кишені
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
              Рюкзак Tactical Cargo Pack 10L Multicam від 8Fields володіє
              непоганим функціоналом. Він може використовуватися як тактичний
              або звичайний міський рюкзак. Дана модель має два відділення на
              блискавках.
            </Typography>
          </ModalListItem>
        </ModalList>
      </Box>
    </Modal>
  );
};

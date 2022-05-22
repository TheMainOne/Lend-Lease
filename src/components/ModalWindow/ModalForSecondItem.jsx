import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ModalList,
  ModalListItem,
  ModalLinkButton,
} from "./ModalForSecondItem.styled";

export const ModalWindowForSecondItem = ({
  openSecondModal,
  handleCloseSecondModal,
}) => {
  const TabletMediaWidth = useMediaQuery("(min-width:768px)");

  return (
    <Modal
      open={openSecondModal}
      onClose={handleCloseSecondModal}
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
          onClick={handleCloseSecondModal}
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
              Тактичний ліхтарик (чорний колір) <br />
              Ціна: 1300грн <br /> Характеристика товару: <br /> - матеріал:
              пластик <br /> - тип батарейки: ААА
              <br />
              - Розміри: 100х140 мм Вага: 200 г <br />
              - три режими <br />- дальність 25 м.
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
              Компанія Fenix випустила механічний поворотний ліхтар кишенькового
              формату. Ця компактна модель генерує солідну яскравість світла, на
              три тисячі люменів максимально. Найбільша дистанція дії — 405
              метрів.
            </Typography>
          </ModalListItem>
        </ModalList>
        <ModalLinkButton href="https://t.me/mr_hyde880">Купити</ModalLinkButton>
      </Box>
    </Modal>
  );
};

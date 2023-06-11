import { openModal } from "@/recoil/commonRecoilState";
import { Modal } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";

export default function ModalWallet() {
  const [open, setOpen] = useRecoilState(openModal);
  return (
    <Modal
      open={open.open}
      onClose={() => {
        setOpen({ ...open, open: false });
      }}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div>{open.component}</div>
    </Modal>
  );
}

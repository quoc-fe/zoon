import { openModal } from "@/recoil/commonRecoilState";
import { Connectors } from "@/utils/connector";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useRecoilState } from "recoil";
import { useAccount, useConnect, useDisconnect, useNetwork } from "wagmi";
export default function ConnectWallet() {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const { connectAsync, error } = useConnect();
  const { chain } = useNetwork();

  const [open, setOpen] = useRecoilState(openModal);
  const handleConnect = async (connector) => {
    try {
      await connectAsync({ connector });
    } catch (err) {
      if (err.message === "Connector not found") {
        const location2 = location.href;
        location2.replace(/https:\/\//g, "");
        window.open("https://metamask.app.link/dapp/" + location2, "_blank");
      }
    }
  };
  return (
    <div className="min-w-[320px] bg-white shadow-wallet border border-[rgb(231,227,235)] rounded-[32px] overflow-hidden">
      <div className="flex items-center justify-between py-3 px-[24px] bg-connect-wallet border-b border-[rgb(231,227,235)]">
        <h2 className="font-bold text-xl">Connect Wallet</h2>
        <button
          onClick={() => {
            setOpen({ ...open, open: false });
          }}
        >
          <MdClose className="text-2xl text-[rgb(31,199,212)]" />
        </button>
      </div>
      <div className="pt-[24px] grid grid-cols-2">
        <button
          className="flex flex-col items-center py-4 px-[24px] hover:opacity-80"
          onClick={() => {
            setOpen({ ...open, open: false });
            handleConnect(Connectors[0]);
          }}
        >
          <svg
            viewBox="0 0 40 40"
            width="40px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-bczRLJ hjvUNK"
          >
            <path
              d="M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z"
              fill="#E17726"
            ></path>
            <path
              d="M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z"
              fill="#E27625"
            ></path>
            <path
              d="M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z"
              fill="#E27625"
            ></path>
            <path
              d="M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z"
              fill="#E27625"
            ></path>
            <path
              d="M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z"
              fill="#E27625"
            ></path>
            <path
              d="M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z"
              fill="#E27625"
            ></path>
            <path
              d="M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z"
              fill="#E27625"
            ></path>
            <path
              d="M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z"
              fill="#E27625"
            ></path>
            <path
              d="M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z"
              fill="#D5BFB2"
            ></path>
            <path
              d="M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z"
              fill="#D5BFB2"
            ></path>
            <path
              d="M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z"
              fill="#233447"
            ></path>
            <path
              d="M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z"
              fill="#233447"
            ></path>
            <path
              d="M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z"
              fill="#CC6228"
            ></path>
            <path
              d="M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z"
              fill="#CC6228"
            ></path>
            <path
              d="M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z"
              fill="#CC6228"
            ></path>
            <path
              d="M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z"
              fill="#CC6228"
            ></path>
            <path
              d="M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z"
              fill="#E27525"
            ></path>
            <path
              d="M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z"
              fill="#E27525"
            ></path>
            <path
              d="M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z"
              fill="#E27525"
            ></path>
            <path
              d="M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z"
              fill="#E27525"
            ></path>
            <path
              d="M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z"
              fill="#F5841F"
            ></path>
            <path
              d="M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z"
              fill="#F5841F"
            ></path>
            <path
              d="M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z"
              fill="#C0AC9D"
            ></path>
            <path
              d="M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z"
              fill="#161616"
            ></path>
            <path
              d="M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z"
              fill="#763E1A"
            ></path>
            <path
              d="M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z"
              fill="#763E1A"
            ></path>
            <path
              d="M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z"
              fill="#F5841F"
            ></path>
            <path
              d="M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z"
              fill="#F5841F"
            ></path>
            <path
              d="M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z"
              fill="#F5841F"
            ></path>
          </svg>
          <div font-size="14px" color="text" class="sc-gsnTZi kAJfza">
            Metamask
          </div>
        </button>
        <button
          className="flex flex-col items-center py-4 px-[24px] hover:opacity-80"
          onClick={() => {
            setOpen({ ...open, open: false });
            handleConnect(Connectors[1]);
          }}
        >
          <svg
            viewBox="0 0 40 40"
            width="40px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-bczRLJ hjvUNK"
          >
            <path
              d="M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z"
              fill="#3389FB"
            ></path>
          </svg>
          <div font-size="14px" color="text" class="sc-gsnTZi kAJfza">
            WalletConnect
          </div>
        </button>
        <button
          className="flex flex-col items-center py-4 px-[24px] hover:opacity-80"
          onClick={() => {
            setOpen({ ...open, open: false });
            handleConnect(Connectors[0]);
          }}
        >
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            width="40px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-bczRLJ hjvUNK"
          >
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="416.6229"
              y1="16.304"
              x2="416.6229"
              y2="985.446"
            >
              <stop offset="0.3" stop-color="#ff1b2d"></stop>
              <stop offset="0.4381" stop-color="#fa1a2c"></stop>
              <stop offset="0.5939" stop-color="#ed1528"></stop>
              <stop offset="0.7581" stop-color="#d60e21"></stop>
              <stop offset="0.9272" stop-color="#b70519"></stop>
              <stop offset="1" stop-color="#a70014"></stop>
            </linearGradient>
            <path
              d="M335.4 781.8c-55.3-65.3-91.1-161.7-93.5-270v-23.6c2.4-108.3 38.2-204.7 93.5-270C407.2 125.1 513.8 66 632.8 66c73.2 0 141.8 22.4 200.4 61.3C745.2 48.5 629.2.5 501.9 0H500C223.9 0 0 223.9 0 500c0 268.2 211.1 487 476.2 499.4 7.9.4 15.8.6 23.8.6 128 0 244.8-48.1 333.2-127.2-58.6 38.8-127.1 61.2-200.4 61.2-119 0-225.6-59.1-297.4-152.2z"
              fill="url(#a)"
            ></path>
            <linearGradient
              id="b"
              gradientUnits="userSpaceOnUse"
              x1="667.7092"
              y1="73.4257"
              x2="667.7092"
              y2="930.5844"
            >
              <stop offset="0" stop-color="#9c0000"></stop>
              <stop offset="0.7" stop-color="#ff4b4b"></stop>
            </linearGradient>
            <path
              d="M335.4 218.2c45.9-54.2 105.1-86.8 169.9-86.8 145.6 0 263.5 165 263.5 368.6s-118 368.6-263.5 368.6c-64.7 0-124-32.7-169.9-86.8C407.2 874.9 513.8 934 632.8 934c73.2 0 141.8-22.4 200.4-61.2C935.6 781.2 1000 648.1 1000 500c0-148.1-64.4-281.2-166.8-372.7C774.6 88.4 706.1 66 632.8 66c-119 0-225.6 59.1-297.4 152.2z"
              fill="url(#b)"
            ></path>
          </svg>
          <div font-size="14px" color="text" class="sc-gsnTZi kAJfza">
            Opera Wallet
          </div>
        </button>
        <button className="flex flex-col items-center py-4 px-[24px] hover:opacity-80">
          <svg
            viewBox="0 0 24 24"
            width="40px"
            color="textSubtle"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-bczRLJ fIQKIW"
          >
            <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
          </svg>
          <div font-size="14px" color="text" class="sc-gsnTZi kAJfza">
            More
          </div>
        </button>
      </div>
    </div>
  );
}

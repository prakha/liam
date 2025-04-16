import type { FC } from 'react'

interface Props {
  jackInBoxClassName?: string
  cross1ClassName?: string
  plus1ClassName?: string
  plus2ClassName?: string
  cross2ClassName?: string
  largeCrossClassName?: string
  width?: number
  height?: number
}

export const JackInBox: FC<Props> = ({
  width = 82,
  height = 88,
  jackInBoxClassName,
  cross1ClassName,
  plus1ClassName,
  plus2ClassName,
  cross2ClassName,
  largeCrossClassName,
}) => (
  <div className={jackInBoxClassName}>
    {/* Main box SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 82 88"
      fill="none"
      role="img"
      aria-label="Jack in the box illustration"
    >
      <title>Jack in the box illustration</title>
      <path d="M73.3396 31.1109L76.8896 29.3709L66.5 21.501" fill="#141616" />
      <path
        d="M73.3396 31.1109L76.8896 29.3709L66.5 21.501"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1802 27.1406L9.49023 32.2206L34.7502 48.1606"
        fill="#141616"
      />
      <path
        d="M17.1802 27.1406L9.49023 32.2206L34.7502 48.1606"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.4602 49.7707L9.49023 32.2207V67.9207L36.1802 86.6607L36.4602 49.7707Z"
        fill="#141616"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.7502 48.1607L9.49023 32.2207"
        stroke="#141616"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M36.1797 86.6611L36.4597 49.7711L76.8897 29.3711V62.3811L36.1797 86.6611Z"
        fill="#141616"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.5 49.0007L9.49 32.2207L1 43.9307L27.67 61.7907L36.18 49.5507"
        fill="#141616"
      />
      <path
        d="M36.5 49.0007L9.49 32.2207L1 43.9307L27.67 61.7907L36.18 49.5507"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76.8896 29.3711L77.2796 36.4411L80.5996 37.6511L76.8896 29.3711Z"
        fill="#141616"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask id="path-11-inside-1_1115_5521" fill="white">
        <path d="M51.8503 0.570904C55.6703 -0.239096 57.2403 6.1109 57.7303 8.4009C57.8003 8.7209 58.0103 8.9809 58.3003 9.1509C63.0803 11.9709 67.9303 24.6909 71.0403 27.3709C74.1503 30.0509 75.5603 38.9309 71.0403 40.0609C66.5203 41.1909 64.8 36.001 64.8 36.001L47 45.001C47 45.001 49.3156 49.9149 43.5 51.501C37.6844 53.087 34.7403 48.1609 34.7403 48.1609L16.0703 36.3809C16.0703 36.3809 16.8803 26.8209 17.8903 24.1809C17.9903 23.9209 18.0103 23.6609 17.9703 23.3809C17.6903 21.5709 16.9203 14.7509 20.4803 12.5209C24.6103 9.9409 30.1703 15.0209 31.5603 14.7409C32.9503 14.4609 36.6503 9.5509 45.8403 8.4009C46.4203 8.3309 46.8703 7.8809 46.9303 7.3009C47.2103 4.2309 48.0703 1.3709 51.8203 0.570904" />
      </mask>
      <g filter="url(#filter0_i_1115_5521)">
        <path
          d="M51.8503 0.570904C55.6703 -0.239096 57.2403 6.1109 57.7303 8.4009C57.8003 8.7209 58.0103 8.9809 58.3003 9.1509C63.0803 11.9709 67.9303 24.6909 71.0403 27.3709C74.1503 30.0509 75.5603 38.9309 71.0403 40.0609C66.5203 41.1909 64.8 36.001 64.8 36.001L47 45.001C47 45.001 49.3156 49.9149 43.5 51.501C37.6844 53.087 34.7403 48.1609 34.7403 48.1609L16.0703 36.3809C16.0703 36.3809 16.8803 26.8209 17.8903 24.1809C17.9903 23.9209 18.0103 23.6609 17.9703 23.3809C17.6903 21.5709 16.9203 14.7509 20.4803 12.5209C24.6103 9.9409 30.1703 15.0209 31.5603 14.7409C32.9503 14.4609 36.6503 9.5509 45.8403 8.4009C46.4203 8.3309 46.8703 7.8809 46.9303 7.3009C47.2103 4.2309 48.0703 1.3709 51.8203 0.570904"
          fill="#141616"
        />
      </g>
      <path
        d="M57.7303 8.4009L56.7524 8.61014L56.7534 8.6146L57.7303 8.4009ZM58.3003 9.1509L58.8084 8.28962L58.806 8.28821L58.3003 9.1509ZM64.8 36.001L65.7492 35.6863C65.6577 35.4101 65.4504 35.1875 65.1814 35.0766C64.9124 34.9656 64.6084 34.9773 64.3488 35.1086L64.8 36.001ZM47 45.001L46.5488 44.1086L45.6808 44.5474L46.0954 45.4272L47 45.001ZM34.7403 48.1609L35.5987 47.6479L35.4761 47.4427L35.2739 47.3152L34.7403 48.1609ZM16.0703 36.3809L15.0739 36.2965L15.0226 36.9022L15.5367 37.2266L16.0703 36.3809ZM17.8903 24.1809L16.957 23.8219L16.9563 23.8236L17.8903 24.1809ZM17.9703 23.3809L18.9603 23.2395L18.9586 23.228L17.9703 23.3809ZM20.4803 12.5209L19.9505 11.6728L19.9495 11.6734L20.4803 12.5209ZM45.8403 8.4009L45.7205 7.4081L45.7161 7.40864L45.8403 8.4009ZM46.9303 7.3009L47.9251 7.40381L47.9262 7.39173L46.9303 7.3009ZM52.0577 1.54915C52.697 1.4136 53.2223 1.56479 53.7131 1.93161C54.237 2.32318 54.7222 2.96697 55.1538 3.78851C56.0165 5.43059 56.5093 7.47401 56.7524 8.61014L58.7082 8.19167C58.4613 7.0378 57.9241 4.76122 56.9243 2.8583C56.4247 1.90734 55.7705 0.972384 54.9104 0.329573C54.0171 -0.337983 52.9136 -0.676795 51.6429 -0.407345L52.0577 1.54915ZM56.7534 8.6146C56.8919 9.24791 57.3023 9.72503 57.7946 10.0136L58.806 8.28821C58.7616 8.26215 58.7368 8.23711 58.7243 8.22093C58.7128 8.2061 58.7091 8.19569 58.7072 8.18721L56.7534 8.6146ZM57.7922 10.0122C58.8015 10.6077 59.9017 11.7897 61.0589 13.3953C62.2011 14.9801 63.3307 16.8788 64.4272 18.8076C65.5116 20.715 66.5783 22.6787 67.552 24.3039C68.5095 25.9019 69.4703 27.338 70.3875 28.1284L71.6931 26.6134C71.0554 26.0638 70.2437 24.9049 69.2677 23.276C68.308 21.6743 67.2803 19.7793 66.1659 17.8192C65.0637 15.8805 63.8901 13.903 62.6814 12.2259C61.4877 10.5697 60.1891 9.10414 58.8084 8.28962L57.7922 10.0122ZM70.3875 28.1284C71.0029 28.6588 71.5973 29.5601 72.0616 30.7021C72.5208 31.8315 72.8227 33.123 72.9037 34.3624C72.9854 35.6118 72.8384 36.7369 72.4693 37.5754C72.1126 38.3855 71.5698 38.8978 70.7978 39.0908L71.2828 41.031C72.7708 40.659 73.7467 39.6375 74.2998 38.3811C74.8404 37.153 74.994 35.6788 74.8994 34.2319C74.8042 32.7751 74.4529 31.2735 73.9143 29.9488C73.3808 28.6367 72.6327 27.423 71.6931 26.6134L70.3875 28.1284ZM70.7978 39.0908C69.0214 39.5349 67.8214 38.7764 66.9831 37.8024C66.5563 37.3064 66.2432 36.7703 66.0358 36.3509C65.9331 36.1432 65.8588 35.9693 65.8113 35.8505C65.7875 35.7912 65.7707 35.746 65.7604 35.7177C65.7552 35.7035 65.7517 35.6936 65.7499 35.6882C65.749 35.6856 65.7484 35.684 65.7483 35.6837C65.7483 35.6835 65.7483 35.6837 65.7485 35.6841C65.7485 35.6843 65.7486 35.6846 65.7488 35.685C65.7488 35.6852 65.7489 35.6855 65.749 35.6856C65.7491 35.686 65.7492 35.6863 64.8 36.001C63.8508 36.3156 63.8509 36.316 63.8511 36.3165C63.8511 36.3166 63.8513 36.3171 63.8514 36.3174C63.8516 36.3181 63.8519 36.3189 63.8522 36.3197C63.8527 36.3214 63.8534 36.3234 63.8542 36.3258C63.8558 36.3304 63.8578 36.3363 63.8603 36.3434C63.8652 36.3577 63.8719 36.3767 63.8805 36.4003C63.8976 36.4474 63.9221 36.5127 63.9542 36.5931C64.0185 36.7537 64.1139 36.9764 64.2431 37.2376C64.4994 37.7559 64.899 38.4467 65.4672 39.107C66.6191 40.4454 68.5392 41.7169 71.2828 41.031L70.7978 39.0908ZM64.3488 35.1086L46.5488 44.1086L47.4512 45.8934L65.2512 36.8934L64.3488 35.1086ZM47 45.001C46.0954 45.4272 46.0952 45.4268 46.095 45.4263C46.0949 45.4262 46.0947 45.4258 46.0946 45.4255C46.0944 45.425 46.0942 45.4246 46.094 45.4242C46.0937 45.4235 46.0935 45.4231 46.0934 45.4229C46.0933 45.4226 46.0936 45.4234 46.0945 45.4253C46.0962 45.4291 46.0998 45.4372 46.105 45.4494C46.1154 45.4738 46.1321 45.5142 46.1527 45.5688C46.1942 45.6784 46.2504 45.8423 46.3031 46.0452C46.4103 46.4576 46.494 46.9957 46.4362 47.553C46.3796 48.0986 46.1893 48.6551 45.7491 49.1562C45.3059 49.6607 44.5476 50.1787 43.2369 50.5362L43.7631 52.4657C45.3602 52.0302 46.4933 51.3392 47.2516 50.4763C48.0128 49.6099 48.3341 48.6406 48.4255 47.7594C48.5157 46.89 48.384 46.1004 48.2388 45.5419C48.1653 45.2594 48.086 45.027 48.0235 44.8617C47.9922 44.7788 47.9649 44.7121 47.9442 44.6637C47.9338 44.6395 47.9252 44.6198 47.9185 44.6049C47.9151 44.5975 47.9122 44.5912 47.9099 44.5861C47.9088 44.5836 47.9077 44.5814 47.9068 44.5795C47.9064 44.5785 47.906 44.5777 47.9056 44.5769C47.9054 44.5765 47.9052 44.5759 47.9051 44.5757C47.9048 44.5752 47.9046 44.5747 47 45.001ZM43.2369 50.5362C40.6724 51.2356 38.7863 50.5059 37.5162 49.6089C36.8711 49.1532 36.383 48.6511 36.0571 48.2629C35.8949 48.0697 35.7751 47.9073 35.6982 47.7971C35.6598 47.7421 35.6322 47.7003 35.6156 47.6745C35.6073 47.6615 35.6017 47.6527 35.5989 47.6481C35.5975 47.6458 35.5967 47.6446 35.5967 47.6446C35.5967 47.6446 35.5969 47.6448 35.5972 47.6454C35.5974 47.6457 35.5976 47.646 35.5978 47.6464C35.5979 47.6466 35.5982 47.647 35.5982 47.6471C35.5985 47.6475 35.5987 47.6479 34.7403 48.1609C33.8819 48.6739 33.8822 48.6744 33.8825 48.6748C33.8826 48.675 33.8829 48.6755 33.8831 48.6758C33.8835 48.6766 33.884 48.6773 33.8845 48.6782C33.8856 48.68 33.8868 48.682 33.8882 48.6843C33.8911 48.689 33.8947 48.6949 33.899 48.7019C33.9077 48.7159 33.9193 48.7344 33.934 48.7572C33.9634 48.8028 34.0047 48.8653 34.0582 48.9418C34.165 49.0948 34.3206 49.3049 34.5253 49.5488C34.9331 50.0346 35.5446 50.6649 36.3624 51.2425C38.0183 52.4121 40.512 53.3524 43.7631 52.4657L43.2369 50.5362ZM35.2739 47.3152L16.6039 35.5352L15.5367 37.2266L34.2067 49.0066L35.2739 47.3152ZM16.0703 36.3809C17.0667 36.4653 17.0667 36.4653 17.0667 36.4653C17.0667 36.4652 17.0668 36.4652 17.0668 36.4651C17.0668 36.4648 17.0668 36.4644 17.0669 36.4639C17.067 36.4629 17.0671 36.4612 17.0673 36.459C17.0677 36.4546 17.0682 36.448 17.069 36.4391C17.0705 36.4214 17.0728 36.3949 17.0759 36.36C17.082 36.2903 17.0911 36.1873 17.103 36.0551C17.127 35.7906 17.1623 35.4093 17.2079 34.9433C17.2991 34.0107 17.4311 32.7412 17.5943 31.3909C17.7577 30.039 17.9514 28.6148 18.1654 27.3704C18.3835 26.1021 18.6105 25.0971 18.8243 24.5382L16.9563 23.8236C16.6651 24.5847 16.4121 25.7647 16.1943 27.0314C15.9724 28.3221 15.7741 29.7829 15.6088 31.1509C15.4432 32.5206 15.3096 33.8061 15.2174 34.7485C15.1713 35.22 15.1355 35.6062 15.1112 35.8748C15.099 36.0092 15.0897 36.1142 15.0835 36.1858C15.0803 36.2216 15.078 36.2491 15.0763 36.2677C15.0755 36.277 15.0749 36.2841 15.0745 36.2889C15.0743 36.2913 15.0742 36.2932 15.0741 36.2944C15.074 36.2951 15.074 36.2955 15.0739 36.2959C15.0739 36.2961 15.0739 36.2962 15.0739 36.2963C15.0739 36.2964 15.0739 36.2965 16.0703 36.3809ZM18.8237 24.5399C18.9938 24.0976 19.0206 23.6621 18.9603 23.2395L16.9804 23.5223C17 23.6597 16.9869 23.7442 16.957 23.8219L18.8237 24.5399ZM18.9586 23.228C18.8239 22.3574 18.575 20.2949 18.7805 18.2063C18.9921 16.0562 19.6502 14.2209 21.0112 13.3684L19.9495 11.6734C17.7504 13.0509 17.0135 15.7407 16.7901 18.0105C16.5607 20.3419 16.8368 22.5944 16.9821 23.5338L18.9586 23.228ZM21.0101 13.369C22.6141 12.367 24.5988 12.786 26.6461 13.6842C27.6519 14.1254 28.5479 14.6233 29.3708 15.041C29.7653 15.2413 30.158 15.4303 30.5114 15.5594C30.8212 15.6725 31.2904 15.8154 31.7578 15.7212L31.3628 13.7606C31.4827 13.7364 31.4741 13.7818 31.1976 13.6808C30.9648 13.5957 30.6628 13.454 30.2761 13.2576C29.5365 12.8822 28.5237 12.3239 27.4496 11.8527C25.3368 10.9258 22.4766 10.0948 19.9505 11.6728L21.0101 13.369ZM31.7578 15.7212C32.1286 15.6465 32.4726 15.4475 32.7396 15.2746C33.0269 15.0885 33.3498 14.8473 33.688 14.5921C34.3795 14.0702 35.2251 13.421 36.3057 12.7449C38.4527 11.4015 41.5382 9.94705 45.9645 9.39317L45.7161 7.40864C40.9524 8.00476 37.5929 9.58026 35.2449 11.0494C34.078 11.7795 33.1636 12.4822 32.4832 12.9957C32.1355 13.2581 31.8695 13.4554 31.6525 13.5959C31.4152 13.7496 31.3395 13.7653 31.3628 13.7606L31.7578 15.7212ZM45.9601 9.3937C46.9948 9.26883 47.816 8.45726 47.925 7.4038L45.9356 7.19801C45.9246 7.30455 45.8458 7.39298 45.7205 7.40811L45.9601 9.3937ZM47.9262 7.39173C48.0625 5.8968 48.3319 4.59932 48.9317 3.59889C49.5006 2.65008 50.4112 1.89401 52.0289 1.5489L51.6117 -0.407088C49.4794 0.0477949 48.085 1.12173 47.2164 2.57042C46.3788 3.96749 46.0781 5.63501 45.9344 7.21008L47.9262 7.39173Z"
        fill="#1DED83"
        mask="url(#path-11-inside-1_1115_5521)"
      />
      <path
        d="M70.5 27.501C73.71 30.271 74.7997 38.6511 71.0397 39.5611C64.8597 41.0611 64.5 31.501 64.5 31.501"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.49 41.4912C42.49 41.4912 51.73 47.5212 43.91 50.6012C38.49 52.7312 34.5 47.5012 34.5 47.5012"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.1001 21.8008C56.6701 21.8008 57.8101 22.7408 58.1601 23.9808C58.5001 25.1908 57.7501 25.6508 57.5001 25.8008C57.2601 25.9508 57.0401 26.0208 56.8501 26.0208C56.2601 26.0208 55.7801 25.2208 55.5601 24.4308C55.2501 23.3008 55.4301 22.1308 55.9601 21.8208C55.9901 21.8008 56.0301 21.7908 56.1001 21.7908M56.1001 20.8008C55.8701 20.8008 55.6501 20.8508 55.4501 20.9708C53.5001 22.1208 54.4601 27.0308 56.8401 27.0308C57.2001 27.0308 57.5901 26.9208 58.0101 26.6608C60.8801 24.9208 58.1001 20.8008 56.0901 20.8008H56.1001Z"
        fill="#1DED83"
      />
      <path
        d="M42.4604 26.5508C43.2404 26.5508 44.0304 27.7208 44.1304 29.0008C44.1904 29.7508 44.0504 31.0508 42.4904 31.2808C42.3604 31.3008 42.2304 31.3108 42.1204 31.3108C41.8104 31.3108 40.9904 31.3108 40.8704 29.8708C40.7404 28.3408 41.5904 26.6808 42.3204 26.5608C42.3704 26.5608 42.4204 26.5508 42.4704 26.5508M42.4604 25.5508C42.3604 25.5508 42.2604 25.5508 42.1504 25.5808C39.7204 25.9808 38.5304 32.3108 42.1104 32.3108C42.2704 32.3108 42.4504 32.3008 42.6304 32.2708C46.6904 31.6608 45.2004 25.5508 42.4604 25.5508Z"
        fill="#1DED83"
      />
      <defs>
        <filter
          id="filter0_i_1115_5521"
          x="16.0703"
          y="0.5"
          width="57.8555"
          height="51.3154"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="14.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.113725 0 0 0 0 0.929412 0 0 0 0 0.513726 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1115_5521"
          />
        </filter>
      </defs>
    </svg>

    {/* Cross SVG 1 */}
    <svg
      className={cross1ClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <title>Decorative cross icon 1</title>
      <path
        d="M0.629883 5.08984H2.30988"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.12012 5.08984H9.80012"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.21973 0.5V2.18"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.21973 7.99023V9.67023"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Plus SVG 1 */}
    <svg
      className={plus1ClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="8"
      viewBox="0 0 7 8"
      fill="none"
      aria-hidden="true"
    >
      <title>Decorative plus icon 1</title>
      <path
        d="M3.74023 1.29004V6.76005"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.47 4.02002H1"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Plus SVG 2 */}
    <svg
      className={plus2ClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      aria-hidden="true"
    >
      <title>Decorative plus icon 2</title>
      <path
        d="M3.72998 0.5V5.97"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.47 3.24023H1"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Cross SVG 2 */}
    <svg
      className={cross2ClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <title>Decorative cross icon 2</title>
      <path
        d="M0.769531 5.09961H2.44954"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.24951 5.09961H9.93951"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34961 0.509766V2.19977"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34961 8V9.68"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Large Cross SVG */}
    <svg
      className={largeCrossClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <title>Decorative large cross icon</title>
      <path
        d="M1 7.22021H4.06999"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3701 7.22021H14.4301"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.72021 0.5V3.57"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.72021 10.8701V13.9301"
        stroke="#1DED83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

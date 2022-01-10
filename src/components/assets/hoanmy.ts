import hoanmy1 from "./hoanmy1.webp";
import hoanmy2 from "./hoanmy2.webp";
import hoanmy3 from "./hoanmy3.webp";
import hoanmy4 from "./hoanmy4.webp";
import hoanmy5 from "./hoanmy5.webp";

type SlideData = {
  id: number;
  params: {
    bg: {
      image: string;
    };
  };
  layers: {
    1: {
      text: string;
    };
  };
};
export type HoanMySlidesData = {
  slides: SlideData[];
};
export const hoanmyDemo: HoanMySlidesData = {
  slides: [
    {
      id: 12,
      params: {
        bg: {
          image: hoanmy1,
        },
      },
      layers: {
        1: {
          text: "Kiến trúc Gamma sang trọng",
        },
      },
    },
    {
      id: 13,
      params: {
        bg: {
          image: hoanmy2,
        },
      },
      layers: {
        1: {
          text: "Nội thất Megasuite tinh tế hoàn mỹ",
        },
      },
    },
    {
      id: 14,
      params: {
        bg: {
          image: hoanmy3,
        },
      },
      layers: {
        1: {
          text: "Vị trí song thuỷ, quỹ đất vàng khan hiếm tại trung tâm Đà Nẵng",
        },
      },
    },
    {
      id: 15,
      params: {
        bg: {
          image: hoanmy4,
        },
      },
      layers: {
        1: {
          text: "Bất động sản trung tâm với tổ hợp Mega",
        },
      },
    },
    {
      id: 16,
      params: {
        bg: {
          image: hoanmy5,
        },
      },
      layers: {
        1: {
          text: "Điểm hẹn Networking của giới tinh hoa",
        },
      },
    },
  ],
};

import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const ve2DGD = veContext?.veList?.quantity2DGD as number;
  const ve2DGDTV = veContext?.veList?.quantity2DGDTV as number;

  const [chooseK12, setChooseK12] = useState<string>("k1,k2");
  const [chooseK34, setChooseK34] = useState<string>("k3,k4");
  const [chooseK56, setChooseK56] = useState<string>("k5,k6");
  const [chooseK78, setChooseK78] = useState<string>("k7,k8");
  const [chooseK910, setChooseK910] = useState<string>("k9,k10");
  const [chooseK1112, setChooseK1112] = useState<string>("k11,k12");
  const [chooseK1314, setChooseK1314] = useState<string>("k13,k14");
  const [chooseK1516, setChooseK1516] = useState<string>("k15,k16");

  const [chooseJ1, setChooseJ1] = useState<string>("J1");
  const [chooseJ2, setChooseJ2] = useState<string>("J2");
  const [chooseJ3, setChooseJ3] = useState<string>("J3");
  const [chooseJ4, setChooseJ4] = useState<string>("J4");
  const [chooseJ5, setChooseJ5] = useState<string>("J5");
  const [chooseJ6, setChooseJ6] = useState<string>("J6");
  const [chooseJ7, setChooseJ7] = useState<string>("J7");
  const [chooseJ8, setChooseJ8] = useState<string>("J8");
  const [chooseJ9, setChooseJ9] = useState<string>("J9");
  const [chooseJ10, setChooseJ10] = useState<string>("J10");
  const [chooseJ11, setChooseJ11] = useState<string>("J11");
  const [chooseJ12, setChooseJ12] = useState<string>("J12");
  const [chooseJ13, setChooseJ13] = useState<string>("J13");
  const [chooseJ14, setChooseJ14] = useState<string>("J14");

  const [chooseI1, setChooseI1] = useState<string>("I1");
  const [chooseI2, setChooseI2] = useState<string>("I2");
  const [chooseI3, setChooseI3] = useState<string>("I3");
  const [chooseI4, setChooseI4] = useState<string>("I4");
  const [chooseI5, setChooseI5] = useState<string>("I5");
  const [chooseI6, setChooseI6] = useState<string>("I6");
  const [chooseI7, setChooseI7] = useState<string>("I7");
  const [chooseI8, setChooseI8] = useState<string>("I8");
  const [chooseI9, setChooseI9] = useState<string>("I9");
  const [chooseI10, setChooseI10] = useState<string>("I10");
  const [chooseI11, setChooseI11] = useState<string>("I11");
  const [chooseI12, setChooseI12] = useState<string>("I12");
  const [chooseI13, setChooseI13] = useState<string>("I13");
  const [chooseI14, setChooseI14] = useState<string>("I14");

  const [chooseH1, setChooseH1] = useState<string>("H1");
  const [chooseH2, setChooseH2] = useState<string>("H2");
  const [chooseH3, setChooseH3] = useState<string>("H3");
  const [chooseH4, setChooseH4] = useState<string>("H4");
  const [chooseH5, setChooseH5] = useState<string>("H5");
  const [chooseH6, setChooseH6] = useState<string>("H6");
  const [chooseH7, setChooseH7] = useState<string>("H7");
  const [chooseH8, setChooseH8] = useState<string>("H8");
  const [chooseH9, setChooseH9] = useState<string>("H9");
  const [chooseH10, setChooseH10] = useState<string>("H10");
  const [chooseH11, setChooseH11] = useState<string>("H11");
  const [chooseH12, setChooseH12] = useState<string>("H12");
  const [chooseH13, setChooseH13] = useState<string>("H13");
  const [chooseH14, setChooseH14] = useState<string>("H14");

  const [chooseG1, setChooseG1] = useState<string>("G1");
  const [chooseG2, setChooseG2] = useState<string>("G2");
  const [chooseG3, setChooseG3] = useState<string>("G3");
  const [chooseG4, setChooseG4] = useState<string>("G4");
  const [chooseG5, setChooseG5] = useState<string>("G5");
  const [chooseG6, setChooseG6] = useState<string>("G6");
  const [chooseG7, setChooseG7] = useState<string>("G7");
  const [chooseG8, setChooseG8] = useState<string>("G8");
  const [chooseG9, setChooseG9] = useState<string>("G9");
  const [chooseG10, setChooseG10] = useState<string>("G10");
  const [chooseG11, setChooseG11] = useState<string>("G11");
  const [chooseG12, setChooseG12] = useState<string>("G12");

  const [chooseF1, setChooseF1] = useState<string>("F1");
  const [chooseF2, setChooseF2] = useState<string>("F2");
  const [chooseF3, setChooseF3] = useState<string>("F3");
  const [chooseF4, setChooseF4] = useState<string>("F4");
  const [chooseF5, setChooseF5] = useState<string>("F5");
  const [chooseF6, setChooseF6] = useState<string>("F6");
  const [chooseF7, setChooseF7] = useState<string>("F7");
  const [chooseF8, setChooseF8] = useState<string>("F8");
  const [chooseF9, setChooseF9] = useState<string>("F9");
  const [chooseF10, setChooseF10] = useState<string>("F10");
  const [chooseF11, setChooseF11] = useState<string>("F11");
  const [chooseF12, setChooseF12] = useState<string>("F12");

  const [chooseE1, setChooseE1] = useState<string>("E1");
  const [chooseE2, setChooseE2] = useState<string>("E2");
  const [chooseE3, setChooseE3] = useState<string>("E3");
  const [chooseE4, setChooseE4] = useState<string>("E4");
  const [chooseE5, setChooseE5] = useState<string>("E5");
  const [chooseE6, setChooseE6] = useState<string>("E6");
  const [chooseE7, setChooseE7] = useState<string>("E7");
  const [chooseE8, setChooseE8] = useState<string>("E8");
  const [chooseE9, setChooseE9] = useState<string>("E9");
  const [chooseE10, setChooseE10] = useState<string>("E10");
  const [chooseE11, setChooseE11] = useState<string>("E11");
  const [chooseE12, setChooseE12] = useState<string>("E12");

  const [chooseD1, setChooseD1] = useState<string>("D1");
  const [chooseD2, setChooseD2] = useState<string>("D2");
  const [chooseD3, setChooseD3] = useState<string>("D3");
  const [chooseD4, setChooseD4] = useState<string>("D4");
  const [chooseD5, setChooseD5] = useState<string>("D5");
  const [chooseD6, setChooseD6] = useState<string>("D6");
  const [chooseD7, setChooseD7] = useState<string>("D7");
  const [chooseD8, setChooseD8] = useState<string>("D8");
  const [chooseD9, setChooseD9] = useState<string>("D9");
  const [chooseD10, setChooseD10] = useState<string>("D10");
  const [chooseD11, setChooseD11] = useState<string>("D11");
  const [chooseD12, setChooseD12] = useState<string>("D12");

  const [chooseC1, setChooseC1] = useState<string>("C1");
  const [chooseC2, setChooseC2] = useState<string>("C2");
  const [chooseC3, setChooseC3] = useState<string>("C3");
  const [chooseC4, setChooseC4] = useState<string>("C4");
  const [chooseC5, setChooseC5] = useState<string>("C5");
  const [chooseC6, setChooseC6] = useState<string>("C6");
  const [chooseC7, setChooseC7] = useState<string>("C7");
  const [chooseC8, setChooseC8] = useState<string>("C8");
  const [chooseC9, setChooseC9] = useState<string>("C9");
  const [chooseC10, setChooseC10] = useState<string>("C10");
  const [chooseC11, setChooseC11] = useState<string>("C11");
  const [chooseC12, setChooseC12] = useState<string>("C12");

  const [chooseB1, setChooseB1] = useState<string>("B1");
  const [chooseB2, setChooseB2] = useState<string>("B2");
  const [chooseB3, setChooseB3] = useState<string>("B3");
  const [chooseB4, setChooseB4] = useState<string>("B4");
  const [chooseB5, setChooseB5] = useState<string>("B5");
  const [chooseB6, setChooseB6] = useState<string>("B6");
  const [chooseB7, setChooseB7] = useState<string>("B7");
  const [chooseB8, setChooseB8] = useState<string>("B8");
  const [chooseB9, setChooseB9] = useState<string>("B9");
  const [chooseB10, setChooseB10] = useState<string>("B10");
  const [chooseB11, setChooseB11] = useState<string>("B11");
  const [chooseB12, setChooseB12] = useState<string>("B12");

  const [chooseA1, setChooseA1] = useState<string>("A1");
  const [chooseA2, setChooseA2] = useState<string>("A2");
  const [chooseA3, setChooseA3] = useState<string>("A3");
  const [chooseA4, setChooseA4] = useState<string>("A4");
  const [chooseA5, setChooseA5] = useState<string>("A5");
  const [chooseA6, setChooseA6] = useState<string>("A6");
  const [chooseA7, setChooseA7] = useState<string>("A7");
  const [chooseA8, setChooseA8] = useState<string>("A8");
  const [chooseA9, setChooseA9] = useState<string>("A9");
  const [chooseA10, setChooseA10] = useState<string>("A10");
  const [chooseA11, setChooseA11] = useState<string>("A11");
  const [chooseA12, setChooseA12] = useState<string>("A12");

  const [chooseList, setChooseList] = useState<any>([]);
  const listVe: any = [];

  // console.log(listGheDoiSelected);

  useEffect(() => {
    const gheDoi = document.querySelectorAll(".ghe-doi") as any;
    const gheDon = document.querySelectorAll(".ghe-don") as any;
    if (ve2D > 0 || ve2DTV > 0) {
      gheDoi.forEach((ghe: HTMLElement) => {
        ghe.classList.add("ghe-ko-the-chon");
      });
    } else if (ve2DGD > 0 || ve2DGDTV > 0) {
      gheDon.forEach((ghe: HTMLElement) => {
        ghe.classList.add("ghe-ko-the-chon");
      });
    }
  });

  const handleK1 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK12(chooseK12);
      setChooseList([...chooseList, chooseK12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK12;
        })
      );
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK2 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK34(chooseK34);
      setChooseList([...chooseList, chooseK34]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK34;
        })
      );
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK3 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK56(chooseK56);
      setChooseList([...chooseList, chooseK56]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK56;
        })
      );
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK4 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK78(chooseK78);
      setChooseList([...chooseList, chooseK78]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK78;
        })
      );
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK5 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK910(chooseK910);
      setChooseList([...chooseList, chooseK910]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK910;
        })
      );
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK6 = (event: any) => {
    event.target.classList.toggle("selected");
    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (event.target.classList.contains("selected")) {
      setChooseK1112(chooseK1112);
      setChooseList([...chooseList, chooseK1112]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK1112;
        })
      );
    }

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK7 = (event: any) => {
    event.target.classList.toggle("selected");
    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (event.target.classList.contains("selected")) {
      setChooseK1314(chooseK1314);
      setChooseList([...chooseList, chooseK1314]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK1314;
        })
      );
    }

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    (event.target as HTMLElement).classList.toggle("selected");

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseK1516(chooseK1516);
      setChooseList([...chooseList, chooseK1516]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseK1516;
        })
      );
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (ve2DGD > 0) {
      if (listGheDoiSelected.length > ve2DGD) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > ve2DGDTV) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  return (
    <div className="choose-ghe">
      <h2>
        CHỌN GHẾ:{" "}
        {chooseList.map((ghe: string) => {
          return <span>{ghe}</span>;
        })}
      </h2>
      <div className="choose-ghe-content">
        <ul className="choose-ghe-content-k">
          <li>K</li>
          <li
            onClick={(event) => {
              handleK1(event);
            }}
            className="ghe-doi"
          >
            1 2
          </li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li
            onClick={(event) => {
              handleK2(event);
            }}
            className="ghe-doi"
          >
            3 4
          </li>

          <li
            onClick={(event) => {
              handleK3(event);
            }}
            className="ghe-doi"
          >
            5 6
          </li>

          <li
            onClick={(event) => {
              handleK4(event);
            }}
            className="ghe-doi"
          >
            7 8
          </li>

          <li
            onClick={(event) => {
              handleK5(event);
            }}
            className="ghe-doi"
          >
            9 10
          </li>

          <li
            onClick={(event) => {
              handleK6(event);
            }}
            className="ghe-doi"
          >
            11 12
          </li>

          <li
            onClick={(event) => {
              handleK7(event);
            }}
            className="ghe-doi"
          >
            13 14
          </li>

          <li
            onClick={(event) => {
              handleK8(event);
            }}
            className="ghe-doi"
          >
            15 16
          </li>

          <li className="ghe-bo"></li>
          <li>K</li>
        </ul>

        <ul className="choose-ghe-content-J">
          <li>J</li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ1(event);
            }}
          >
            1
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ2(event);
            }}
          >
            2
          </li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ3(event);
            }}
          >
            3
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ4(event);
            }}
          >
            4
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ5(event);
            }}
          >
            5
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ6(event);
            }}
          >
            6
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ7(event);
            }}
          >
            7
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ8(event);
            }}
          >
            8
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ9(event);
            }}
          >
            9
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ10(event);
            }}
          >
            10
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ11(event);
            }}
          >
            11
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ12(event);
            }}
          >
            12
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ13(event);
            }}
          >
            13
          </li>
          <li
            className="ghe-don"
            onClick={(event) => {
              handleJ14(event);
            }}
          >
            14
          </li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>J</li>
        </ul>

        <ul className="choose-ghe-content-I">
          <li>I</li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-don">13</li>
          <li className="ghe-don">14</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>I</li>
        </ul>

        <ul className="choose-ghe-content-H">
          <li>H</li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-don">13</li>
          <li className="ghe-don">14</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>H</li>
        </ul>

        <ul className="choose-ghe-content-G">
          <li>G</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>G</li>
        </ul>

        <ul className="choose-ghe-content-F">
          <li>F</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>F</li>
        </ul>

        <ul className="choose-ghe-content-E">
          <li>E</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>E</li>
        </ul>

        <ul className="choose-ghe-content-D">
          <li>D</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>D</li>
        </ul>

        <ul className="choose-ghe-content-C">
          <li>C</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>C</li>
        </ul>

        <ul className="choose-ghe-content-B">
          <li>B</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>B</li>
        </ul>

        <ul className="choose-ghe-content-A">
          <li>A</li>

          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don">1</li>
          <li className="ghe-don">2</li>
          <li className="ghe-don">3</li>
          <li className="ghe-don">4</li>
          <li className="ghe-don">5</li>
          <li className="ghe-don">6</li>
          <li className="ghe-don">7</li>
          <li className="ghe-don">8</li>
          <li className="ghe-don">9</li>
          <li className="ghe-don">10</li>
          <li className="ghe-don">11</li>
          <li className="ghe-don">12</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>A</li>
        </ul>

        <div className="man-hinh">
          <h4>Màn hình</h4>
          <span></span>
        </div>

        <div className="chu-thich">
          <ul>
            <li className="ghe-dang-chon">
              <span></span>
              <p>Ghế đang chọn</p>
            </li>

            <li className="ghe-da-ban">
              <span></span>
              <p>Ghế đã bán</p>
            </li>

            <li className="co-the-chon">
              <span></span>
              <p>Có thể chọn</p>
            </li>

            <li className="ko-the-chon">
              <span></span>
              <p>Không thể chọn</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChooseGhe;

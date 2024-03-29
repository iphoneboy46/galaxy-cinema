import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";
import { GheContext } from "../GheContext/GheContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const ve2DGD = veContext?.veList?.quantity2DGD as number;
  const ve2DGDTV = veContext?.veList?.quantity2DGDTV as number;
  const ve2DGDHD = veContext?.veList?.quantity2DGDHD as number;
  const totalGheTong = veContext?.veList?.totalGheTong as number;

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

  const gheContext = useContext(GheContext);
  let setChooseList = gheContext?.setChooseList as any;
  let chooseList = gheContext?.chooseList as any;


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

  const handleK1 = (event: React.MouseEvent<HTMLElement, MouseEvent> ) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
   

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalG totalGheTong      ) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }


  };

  const handleK2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {

    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }


    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if ((event.target as HTMLElement).classList.contains("selected")) {
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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDTV > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);

        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };

  const handleK8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2DGD > 0 || ve2DGDTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

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
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DGDHD > 0) {
      if (listGheDoiSelected.length > totalGheTong) {
        setChooseList([]);
        listGheDoiSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  };


  const handleJ1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ1(chooseJ1);
      setChooseList([...chooseList, chooseJ1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length >  totalGheTong  ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ2(chooseJ2);
      setChooseList([...chooseList, chooseJ2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ3(chooseJ3);
      setChooseList([...chooseList, chooseJ3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ4(chooseJ4);
      setChooseList([...chooseList, chooseJ4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ5(chooseJ5);
      setChooseList([...chooseList, chooseJ5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ6(chooseJ6);
      setChooseList([...chooseList, chooseJ6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ7(chooseJ7);
      setChooseList([...chooseList, chooseJ7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ8(chooseJ8);
      setChooseList([...chooseList, chooseJ8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ9(chooseJ9);
      setChooseList([...chooseList, chooseJ9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ10(chooseJ10);
      setChooseList([...chooseList, chooseJ10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ11(chooseJ11);
      setChooseList([...chooseList, chooseJ11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ12(chooseJ12);
      setChooseList([...chooseList, chooseJ12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ13 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ13(chooseJ13);
      setChooseList([...chooseList, chooseJ13]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ13;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length > totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleJ14 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseJ14(chooseJ14);
      setChooseList([...chooseList, chooseJ14]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseJ14;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI1(chooseI1);
      setChooseList([...chooseList, chooseI1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI2(chooseI2);
      setChooseList([...chooseList, chooseI2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI3(chooseI3);
      setChooseList([...chooseList, chooseI3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI4(chooseI4);
      setChooseList([...chooseList, chooseI4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI5(chooseI5);
      setChooseList([...chooseList, chooseI5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI6(chooseI6);
      setChooseList([...chooseList, chooseI6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI7(chooseI7);
      setChooseList([...chooseList, chooseI7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI8(chooseI8);
      setChooseList([...chooseList, chooseI8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI9(chooseI9);
      setChooseList([...chooseList, chooseI9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI10(chooseI10);
      setChooseList([...chooseList, chooseI10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI11(chooseI11);
      setChooseList([...chooseList, chooseI11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI12(chooseI12);
      setChooseList([...chooseList, chooseI12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI13 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI13(chooseI13);
      setChooseList([...chooseList, chooseI13]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI13;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleI14 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseI14(chooseI14);
      setChooseList([...chooseList, chooseI14]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseI14;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH1(chooseH1);
      setChooseList([...chooseList, chooseH1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH2(chooseH2);
      setChooseList([...chooseList, chooseH2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH3(chooseH3);
      setChooseList([...chooseList, chooseH3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH4(chooseH4);
      setChooseList([...chooseList, chooseH4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH5(chooseH5);
      setChooseList([...chooseList, chooseH5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH6(chooseH6);
      setChooseList([...chooseList, chooseH6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH7(chooseH7);
      setChooseList([...chooseList, chooseH7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH8(chooseH8);
      setChooseList([...chooseList, chooseH8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH9(chooseH9);
      setChooseList([...chooseList, chooseH9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH10(chooseH10);
      setChooseList([...chooseList, chooseH10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH11(chooseH11);
      setChooseList([...chooseList, chooseH11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH12(chooseH12);
      setChooseList([...chooseList, chooseH12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH13 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH13(chooseH13);
      setChooseList([...chooseList, chooseH13]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH13;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleH14 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseH14(chooseH14);
      setChooseList([...chooseList, chooseH14]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseH14;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG1(chooseG1);
      setChooseList([...chooseList, chooseG1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG2(chooseG2);
      setChooseList([...chooseList, chooseG2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG3(chooseG3);
      setChooseList([...chooseList, chooseG3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG4(chooseG4);
      setChooseList([...chooseList, chooseG4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG5(chooseG5);
      setChooseList([...chooseList, chooseG5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG6(chooseG6);
      setChooseList([...chooseList, chooseG6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG7(chooseG7);
      setChooseList([...chooseList, chooseG7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG8(chooseG8);
      setChooseList([...chooseList, chooseG8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG9(chooseG9);
      setChooseList([...chooseList, chooseG9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG10(chooseG10);
      setChooseList([...chooseList, chooseG10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG11(chooseG11);
      setChooseList([...chooseList, chooseG11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleG12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseG12(chooseG12);
      setChooseList([...chooseList, chooseG12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseG12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF1(chooseF1);
      setChooseList([...chooseList, chooseF1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF2(chooseF2);
      setChooseList([...chooseList, chooseF2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF3(chooseF3);
      setChooseList([...chooseList, chooseF3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF4(chooseF4);
      setChooseList([...chooseList, chooseF4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF5(chooseF5);
      setChooseList([...chooseList, chooseF5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF6(chooseF6);
      setChooseList([...chooseList, chooseF6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF7(chooseF7);
      setChooseList([...chooseList, chooseF7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF8(chooseF8);
      setChooseList([...chooseList, chooseF8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF9(chooseF9);
      setChooseList([...chooseList, chooseF9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF10(chooseF10);
      setChooseList([...chooseList, chooseF10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF11(chooseF11);
      setChooseList([...chooseList, chooseF11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleF12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseF12(chooseF12);
      setChooseList([...chooseList, chooseF12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseF12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE1(chooseE1);
      setChooseList([...chooseList, chooseE1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE2(chooseE2);
      setChooseList([...chooseList, chooseE2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE3(chooseE3);
      setChooseList([...chooseList, chooseE3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE4(chooseE4);
      setChooseList([...chooseList, chooseE4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE5(chooseE5);
      setChooseList([...chooseList, chooseE5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE6(chooseE6);
      setChooseList([...chooseList, chooseE6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE7(chooseE7);
      setChooseList([...chooseList, chooseE7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE8(chooseE8);
      setChooseList([...chooseList, chooseE8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE9(chooseE9);
      setChooseList([...chooseList, chooseE9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE10(chooseE10);
      setChooseList([...chooseList, chooseE10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE11(chooseE11);
      setChooseList([...chooseList, chooseE11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleE12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseE12(chooseE12);
      setChooseList([...chooseList, chooseE12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseE12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD1(chooseD1);
      setChooseList([...chooseList, chooseD1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD2(chooseD2);
      setChooseList([...chooseList, chooseD2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD3(chooseD3);
      setChooseList([...chooseList, chooseD3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD4(chooseD4);
      setChooseList([...chooseList, chooseD4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD5(chooseD5);
      setChooseList([...chooseList, chooseD5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD6(chooseD6);
      setChooseList([...chooseList, chooseD6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD7(chooseD7);
      setChooseList([...chooseList, chooseD7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD8(chooseD8);
      setChooseList([...chooseList, chooseD8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD9(chooseD9);
      setChooseList([...chooseList, chooseD9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD10(chooseD10);
      setChooseList([...chooseList, chooseD10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD11(chooseD11);
      setChooseList([...chooseList, chooseD11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleD12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseD12(chooseD12);
      setChooseList([...chooseList, chooseD12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseD12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC1(chooseC1);
      setChooseList([...chooseList, chooseC1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC2(chooseC2);
      setChooseList([...chooseList, chooseC2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC3(chooseC3);
      setChooseList([...chooseList, chooseC3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC4(chooseC4);
      setChooseList([...chooseList, chooseC4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC5(chooseC5);
      setChooseList([...chooseList, chooseC5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC6(chooseC6);
      setChooseList([...chooseList, chooseC6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC7(chooseC7);
      setChooseList([...chooseList, chooseC7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC8(chooseC8);
      setChooseList([...chooseList, chooseC8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC9(chooseC9);
      setChooseList([...chooseList, chooseC9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC10(chooseC10);
      setChooseList([...chooseList, chooseC10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC11(chooseC11);
      setChooseList([...chooseList, chooseC11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleC12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseC12(chooseC12);
      setChooseList([...chooseList, chooseC12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseC12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB1(chooseB1);
      setChooseList([...chooseList, chooseB1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB2(chooseB2);
      setChooseList([...chooseList, chooseB2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB3(chooseB3);
      setChooseList([...chooseList, chooseB3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB4(chooseB4);
      setChooseList([...chooseList, chooseB4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB5(chooseB5);
      setChooseList([...chooseList, chooseB5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB6(chooseB6);
      setChooseList([...chooseList, chooseB6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB7(chooseB7);
      setChooseList([...chooseList, chooseB7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB8(chooseB8);
      setChooseList([...chooseList, chooseB8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB9(chooseB9);
      setChooseList([...chooseList, chooseB9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB10(chooseB10);
      setChooseList([...chooseList, chooseB10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB11(chooseB11);
      setChooseList([...chooseList, chooseB11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleB12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseB12(chooseB12);
      setChooseList([...chooseList, chooseB12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseB12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA1 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }
  
    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA1(chooseA1);
      setChooseList([...chooseList, chooseA1]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA1;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA2 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA2(chooseA2);
      setChooseList([...chooseList, chooseA2]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA2;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA3 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA3(chooseA3);
      setChooseList([...chooseList, chooseA3]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA3;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA4 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA4(chooseA4);
      setChooseList([...chooseList, chooseA4]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA4;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA5 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA5(chooseA5);
      setChooseList([...chooseList, chooseA5]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA5;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA6 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA6(chooseA6);
      setChooseList([...chooseList, chooseA6]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA6;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA7 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA7(chooseA7);
      setChooseList([...chooseList, chooseA7]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA7;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA8 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA8(chooseA8);
      setChooseList([...chooseList, chooseA8]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA8;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA9 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA9(chooseA9);
      setChooseList([...chooseList, chooseA9]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA9;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA10 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA10(chooseA10);
      setChooseList([...chooseList, chooseA10]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA10;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA11 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA11(chooseA11);
      setChooseList([...chooseList, chooseA11]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA11;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  const handleA12 = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(ve2D > 0 || ve2DTV > 0){
      (event.target as HTMLElement).classList.toggle("selected");
    }

    if ((event.target as HTMLElement).classList.contains("selected")) {
      setChooseA12(chooseA12);
      setChooseList([...chooseList, chooseA12]);
    } else {
      setChooseList(
        chooseList.filter((choose: string) => {
          return choose !== chooseA12;
        })
      );
    }

    const listGheDonSelected = document.querySelectorAll(
      ".ghe-don.selected"
    ) as any;

    if (ve2D > 0) {
      if (listGheDonSelected.length  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }

    if (ve2DTV > 0) {
      if (listGheDonSelected.length >  totalGheTong      ) {
        setChooseList([]);
        listGheDonSelected.forEach((ghe: HTMLElement) => {
          ghe.classList.remove("selected");
        });
      }
    }
  }

  

  
  
  return (
    <div className="choose-ghe">
      <h2>
        CHỌN GHẾ:{" "}
        {chooseList.toString()}
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
          <li className="ghe-don" onClick={(event) => {
              handleI1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleI2(event);
            }}>2</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don" onClick={(event) => {
              handleI3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleI4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleI5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleI6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleI7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleI8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleI9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleI10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleI11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleI12(event);
            }}>12</li>
          <li className="ghe-don" onClick={(event) => {
              handleI13(event);
            }}>13</li>
          <li className="ghe-don" onClick={(event) => {
              handleI14(event);
            }}>14</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li>I</li>
        </ul>

        <ul className="choose-ghe-content-H">
          <li>H</li>
          <li className="ghe-don" onClick={(event) => {
              handleH1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleH2(event);
            }}>2</li>
          <li className="ghe-bo"></li>
          <li className="ghe-bo"></li>
          <li className="ghe-don" onClick={(event) => {
              handleH3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleH4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleH5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleH6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleH7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleH8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleH9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleH10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleH11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleH12(event);
            }}>12</li>
          <li className="ghe-don" onClick={(event) => {
              handleH13(event);
            }}>13</li>
          <li className="ghe-don" onClick={(event) => {
              handleH14(event);
            }}>14</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleG1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleG2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleG3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleG4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleG5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleG6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleG7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleG8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleG9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleG10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleG11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleG12(event);
            }}>12</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleF1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleF2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleF3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleF4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleF5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleF6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleF7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleF8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleF9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleF10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleF11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleF12(event);
            }}>12</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleE1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleE2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleE3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleE4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleE5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleE6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleE7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleE8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleE9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleE10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleE11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleE12(event);
            }}>12</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleD1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleD2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleD3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleD4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleD5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleD6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleD7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleD8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleD9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleD10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleD11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleD12(event);
            }}>12</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleC1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleC2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleC3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleC4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleC5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleC6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleC7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleC8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleC9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleC10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleC11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleC12(event);
            }}>12</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleB1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleB2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleB3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleB4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleB5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleB6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleB7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleB8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleB9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleB10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleB11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleB12(event);
            }}>12</li>
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
          <li className="ghe-don" onClick={(event) => {
              handleA1(event);
            }}>1</li>
          <li className="ghe-don" onClick={(event) => {
              handleA2(event);
            }}>2</li>
          <li className="ghe-don" onClick={(event) => {
              handleA3(event);
            }}>3</li>
          <li className="ghe-don" onClick={(event) => {
              handleA4(event);
            }}>4</li>
          <li className="ghe-don" onClick={(event) => {
              handleA5(event);
            }}>5</li>
          <li className="ghe-don" onClick={(event) => {
              handleA6(event);
            }}>6</li>
          <li className="ghe-don" onClick={(event) => {
              handleA7(event);
            }}>7</li>
          <li className="ghe-don" onClick={(event) => {
              handleA8(event);
            }}>8</li>
          <li className="ghe-don" onClick={(event) => {
              handleA9(event);
            }}>9</li>
          <li className="ghe-don" onClick={(event) => {
              handleA10(event);
            }}>10</li>
          <li className="ghe-don" onClick={(event) => {
              handleA11(event);
            }}>11</li>
          <li className="ghe-don" onClick={(event) => {
              handleA12(event);
            }}>12</li>
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

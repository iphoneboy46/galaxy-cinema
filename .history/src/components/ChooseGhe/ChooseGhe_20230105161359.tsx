import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const [chooseGhek, setChooseGhek] = useState<string[]>();
  const [chooseK12, setChooseK12] = useState<string>("k1,k2");
  const [chooseK34, setChooseK34] = useState<string>("k3,k4");
  const [chooseK56, setChooseK56] = useState<string>("k5,k6");
  const [chooseK78, setChooseK78] = useState<string>("k7,k8");
  const [chooseK910, setChooseK910] = useState<string>("k9,k10");
  const [chooseK1112, setChooseK1112] = useState<string>("k11,k12");
  const [chooseK1314, setChooseK1314] = useState<string>("k13,k14");
  const [chooseK1516, setChooseK1516] = useState<string>("k15,k16");
  const [chooseK1718, setChooseK1718] = useState<string>("k17,k18");



  const [chooseList, setChooseList] = useState<any>([]);
  const listVe: any = [];

  // console.log(listGheDoiSelected);
 

  const handleK1 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK12("K1,K2")
      setChooseList([...chooseList, chooseK12]);
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    if (listGheDoiSelected.length > ve2D) {
      setChooseList([])
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  console.log(chooseList);

  const handleK2 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK34("K3,K4")
      setChooseList([...chooseList, chooseK34]);
    }else{
      setChooseList([])
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      setChooseList([])
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK3 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK56("K5,K6")
      setChooseList([...chooseList, chooseK56]);
    }else{
      setChooseList([])
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      setChooseList([])

      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK4 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK78("K7,K8")
      setChooseList([...chooseList, chooseK78]);
    }else{
      setChooseList([])
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      setChooseList([])
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK5 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK910("K9,K10");
      setChooseList([...chooseList, chooseK910]);
    } else {
      setChooseList([])
    }

    const listGheDoiSelected = document.querySelectorAll(".ghe-doi.selected") as any;
    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      setChooseList([])
      
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK6 = (event: any) => {
    event.target.classList.toggle("selected");
    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (event.target.classList.contains("selected")) {
      setChooseK1112("K11,K12");
      setChooseList([...chooseList, chooseK1112]);
    } else {
      setChooseList([])
    }

    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      setChooseList([])
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK7 = (event: any) => {
    event.target.classList.toggle("selected");
    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;

    if (event.target.classList.contains("selected")) {
      setChooseK1314("K13,K14");
      setChooseList([...chooseList, chooseK1314]);
    } else {
      setChooseList([])
    }

    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK8 = (event: any) => {
    event.target.classList.toggle("selected");
    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2D) {
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  // useEffect(() => {
  //   // if (ve2D === 2) {
  //   //   if (listGheDoiSelected.length > 4) {
  //   //     // quantity 2
  //   //     if (chooseQuantity2 && chooseQuantity22) {
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity2 && chooseQuantity23) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity2 && chooseQuantity24) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity2 && chooseQuantity25) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity2 && chooseQuantity26) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity2 && chooseQuantity27) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity2 && chooseQuantity28) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity25(false);
  //   //     }
  //   //     // quantity22
  //   //     if (chooseQuantity22 && chooseQuantity2) {
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity22 && chooseQuantity23) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity22 && chooseQuantity24) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity22 && chooseQuantity25) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity22 && chooseQuantity26) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity22 && chooseQuantity27) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity22 && chooseQuantity28) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity25(false);
  //   //     }
  //   //     // quantity22
  //   //     if (chooseQuantity23 && chooseQuantity2) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity23 && chooseQuantity22) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity23 && chooseQuantity24) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity23 && chooseQuantity25) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity23 && chooseQuantity26) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity23 && chooseQuantity27) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity23 && chooseQuantity28) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity25(false);
  //   //     }
  //   //     // quantity 24
  //   //     if (chooseQuantity24 && chooseQuantity2) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity24 && chooseQuantity22) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity24 && chooseQuantity23) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity24 && chooseQuantity25) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity24 && chooseQuantity26) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity24 && chooseQuantity27) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity24 && chooseQuantity28) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     // quantity 25
  //   //     if (chooseQuantity25 && chooseQuantity2) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity25 && chooseQuantity22) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity25 && chooseQuantity23) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity25 && chooseQuantity24) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity25 && chooseQuantity26) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity25 && chooseQuantity27) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity25 && chooseQuantity28) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     // quantity 26
  //   //     if (chooseQuantity26 && chooseQuantity2) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity26 && chooseQuantity22) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity26 && chooseQuantity23) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity26 && chooseQuantity24) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity26 && chooseQuantity25) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity27(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity26 && chooseQuantity27) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity26 && chooseQuantity28) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     // quantity 27
  //   //     if (chooseQuantity27 && chooseQuantity2) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity27 && chooseQuantity22) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity27 && chooseQuantity23) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity27 && chooseQuantity24) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity27 && chooseQuantity25) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity27 && chooseQuantity26) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity28(false);
  //   //     }
  //   //     if (chooseQuantity27 && chooseQuantity28) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //     }
  //   //     // quantity 28
  //   //     if (chooseQuantity28 && chooseQuantity2) {
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     if (chooseQuantity28 && chooseQuantity22) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     if (chooseQuantity28 && chooseQuantity23) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     if (chooseQuantity28 && chooseQuantity24) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     if (chooseQuantity28 && chooseQuantity25) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity26(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     if (chooseQuantity28 && chooseQuantity26) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity27(false);
  //   //     }
  //   //     if (chooseQuantity28 && chooseQuantity27) {
  //   //       setChooseQuantity2(false);
  //   //       setChooseQuantity23(false);
  //   //       setChooseQuantity22(false);
  //   //       setChooseQuantity24(false);
  //   //       setChooseQuantity25(false);
  //   //       setChooseQuantity26(false);
  //   //     }
  //   //   }
  //   // }
  //   // if (ve2D === 3) {
  //   //   if (listGheDoiSelected.length > 6) {
  //   //     // quantity 3
  //   //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity33) {
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity34) {
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity35) {
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity36) {
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity37) {
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity38) {
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity34) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity35) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity36) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity37) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity38) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity35) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity36) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity37) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity38) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity35 && chooseQuantity36) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity35 && chooseQuantity37) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity35 && chooseQuantity38) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity36 && chooseQuantity37) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity36 && chooseQuantity38) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity37(false);
  //   //     }
  //   //     if (chooseQuantity3 && chooseQuantity37 && chooseQuantity38) {
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //     }
  //   //     // quantity 32
  //   //     if (chooseQuantity32 && chooseQuantity33 && chooseQuantity34) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity32 && chooseQuantity34 && chooseQuantity35) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity32 && chooseQuantity34 && chooseQuantity36) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity32 && chooseQuantity35 && chooseQuantity36) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity32 && chooseQuantity36 && chooseQuantity37) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity32 && chooseQuantity37 && chooseQuantity38) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //     }
  //   //     // quantity 33
  //   //     if (chooseQuantity33 && chooseQuantity34 && chooseQuantity35) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity36(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity33 && chooseQuantity35 && chooseQuantity36) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity33 && chooseQuantity36 && chooseQuantity37) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity33 && chooseQuantity37 && chooseQuantity38) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity36(false);
  //   //     }
  //   //     // quantity 34
  //   //     if (chooseQuantity34 && chooseQuantity35 && chooseQuantity36) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity34 && chooseQuantity36 && chooseQuantity37) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity37(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity34 && chooseQuantity37 && chooseQuantity38) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity35(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     // quantity 35
  //   //     if (chooseQuantity35 && chooseQuantity36 && chooseQuantity37) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity38(false);
  //   //     }
  //   //     if (chooseQuantity35 && chooseQuantity37 && chooseQuantity38) {
  //   //       setChooseQuantity3(false);
  //   //       setChooseQuantity32(false);
  //   //       setChooseQuantity33(false);
  //   //       setChooseQuantity34(false);
  //   //       setChooseQuantity36(false);
  //   //     }
  //   //   }
  //   // }
  // });

  useEffect(() => {});

  return (
    <div className="choose-ghe">
      <h2>CHỌN GHẾ: {
          chooseList.map((ghe:string)=>{
            return <span>
              {ghe}
            </span>
          })
        }</h2>
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

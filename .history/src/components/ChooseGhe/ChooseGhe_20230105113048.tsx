import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const [chooseGhek, setChooseGhek] = useState<boolean>(false);
  const [chooseQuantity1, setChooseQuantity1] = useState<number>(0);

  const [chooseQuantity2, setChooseQuantity2] = useState<boolean>(false);
  const [chooseQuantity22, setChooseQuantity22] = useState<boolean>(false);
  const [chooseQuantity23, setChooseQuantity23] = useState<boolean>(false);
  const [chooseQuantity24, setChooseQuantity24] = useState<boolean>(false);
  const [chooseQuantity25, setChooseQuantity25] = useState<boolean>(false);
  const [chooseQuantity26, setChooseQuantity26] = useState<boolean>(false);
  const [chooseQuantity27, setChooseQuantity27] = useState<boolean>(false);
  const [chooseQuantity28, setChooseQuantity28] = useState<boolean>(false);

  const [chooseQuantity3, setChooseQuantity3] = useState<boolean>(false);
  const [chooseQuantity32, setChooseQuantity32] = useState<boolean>(false);
  const [chooseQuantity33, setChooseQuantity33] = useState<boolean>(false);
  const [chooseQuantity34, setChooseQuantity34] = useState<boolean>(false);
  const [chooseQuantity35, setChooseQuantity35] = useState<boolean>(false);
  const [chooseQuantity36, setChooseQuantity36] = useState<boolean>(false);
  const [chooseQuantity37, setChooseQuantity37] = useState<boolean>(false);
  const [chooseQuantity38, setChooseQuantity38] = useState<boolean>(false);

  const [chooseQuantity4, setChooseQuantity4] = useState<number>(0);
  const [chooseQuantity5, setChooseQuantity5] = useState<number>(0);
  const [chooseQuantity6, setChooseQuantity6] = useState<number>(0);
  const [chooseQuantity7, setChooseQuantity7] = useState<number>(0);
  const [chooseQuantity8, setChooseQuantity8] = useState<number>(0);

  const [chooseList, setChooseList] = useState<any>([]);

  console.log(ve2D);

  const handleK1 = (event : React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (ve2D === 1) {
      if()
      setChooseQuantity1(1);
    }

    if (ve2D === 2) {
      setChooseQuantity2(true);
    }

    if (ve2D === 3) {
      setChooseQuantity3(true);
    }
  };

  const handleK2 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(2);
    }

    if (ve2D === 2) {
      setChooseQuantity22(true);
    }

    if (ve2D === 3) {
      setChooseQuantity32(true);
    }
  };

  const handleK3 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(3);
    }

    if (ve2D === 2) {
      setChooseQuantity23(true);
    }

    if (ve2D === 3) {
      setChooseQuantity33(true);
    }
  };

  const handleK4 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(4);
    }

    if (ve2D === 2) {
      setChooseQuantity24(true);
    }

    if (ve2D === 3) {
      setChooseQuantity34(true);
    }
  };

  const handleK5 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(5);
    }
    if (ve2D === 2) {
      setChooseQuantity25(true);
    }

    if (ve2D === 3) {
      setChooseQuantity35(true);
    }
  };

  const handleK6 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(6);
    }
    if (ve2D === 2) {
      setChooseQuantity26(true);
    }

    if (ve2D === 3) {
      setChooseQuantity36(true);
    }
  };

  const handleK7 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(7);
    }
    if (ve2D === 2) {
      setChooseQuantity27(true);
    }

    if (ve2D === 3) {
      setChooseQuantity37(true);
    }
  };

  const handleK8 = () => {
    if (ve2D === 1) {
      setChooseQuantity1(8);
    }
    if (ve2D === 2) {
      setChooseQuantity28(true);
    }

    if (ve2D === 3) {
      setChooseQuantity38(true);
    }
  };

  useEffect(() => {
    
    // if (ve2D === 2) {
    //   if (listGheDoiSelected.length > 4) {
    //     // quantity 2

    //     if (chooseQuantity2 && chooseQuantity22) {
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity2 && chooseQuantity23) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity2 && chooseQuantity24) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity2 && chooseQuantity25) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity2 && chooseQuantity26) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity2 && chooseQuantity27) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity2 && chooseQuantity28) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity25(false);
    //     }

    //     // quantity22

    //     if (chooseQuantity22 && chooseQuantity2) {
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity22 && chooseQuantity23) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity22 && chooseQuantity24) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity22 && chooseQuantity25) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity22 && chooseQuantity26) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity22 && chooseQuantity27) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity22 && chooseQuantity28) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity25(false);
    //     }

    //     // quantity22

    //     if (chooseQuantity23 && chooseQuantity2) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity23 && chooseQuantity22) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity23 && chooseQuantity24) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity23 && chooseQuantity25) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity23 && chooseQuantity26) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity23 && chooseQuantity27) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity23 && chooseQuantity28) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity25(false);
    //     }

    //     // quantity 24

    //     if (chooseQuantity24 && chooseQuantity2) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity24 && chooseQuantity22) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity24 && chooseQuantity23) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity24 && chooseQuantity25) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity24 && chooseQuantity26) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity24 && chooseQuantity27) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity24 && chooseQuantity28) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //     }

    //     // quantity 25

    //     if (chooseQuantity25 && chooseQuantity2) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity25 && chooseQuantity22) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity25 && chooseQuantity23) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity25 && chooseQuantity24) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity25 && chooseQuantity26) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity25 && chooseQuantity27) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity25 && chooseQuantity28) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity27(false);
    //     }

    //     // quantity 26

    //     if (chooseQuantity26 && chooseQuantity2) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity26 && chooseQuantity22) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity26 && chooseQuantity23) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity26 && chooseQuantity24) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity26 && chooseQuantity25) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity27(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity26 && chooseQuantity27) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity26 && chooseQuantity28) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //     }

    //     // quantity 27

    //     if (chooseQuantity27 && chooseQuantity2) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity27 && chooseQuantity22) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity27 && chooseQuantity23) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity27 && chooseQuantity24) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity27 && chooseQuantity25) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity27 && chooseQuantity26) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity28(false);
    //     }

    //     if (chooseQuantity27 && chooseQuantity28) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //     }

    //     // quantity 28

    //     if (chooseQuantity28 && chooseQuantity2) {
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //     }

    //     if (chooseQuantity28 && chooseQuantity22) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //     }

    //     if (chooseQuantity28 && chooseQuantity23) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //     }

    //     if (chooseQuantity28 && chooseQuantity24) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity27(false);
    //     }

    //     if (chooseQuantity28 && chooseQuantity25) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity26(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity27(false);
    //     }

    //     if (chooseQuantity28 && chooseQuantity26) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity27(false);
    //     }

    //     if (chooseQuantity28 && chooseQuantity27) {
    //       setChooseQuantity2(false);
    //       setChooseQuantity23(false);
    //       setChooseQuantity22(false);
    //       setChooseQuantity24(false);
    //       setChooseQuantity25(false);
    //       setChooseQuantity26(false);
    //     }
    //   }
    // }

    // if (ve2D === 3) {
    //   if (listGheDoiSelected.length > 6) {
    //     // quantity 3
    //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity33) {
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity34) {
    //       setChooseQuantity33(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity35) {
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity36) {
    //       setChooseQuantity35(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity37) {
    //       setChooseQuantity36(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity38(false);
    //     }
    //     if (chooseQuantity3 && chooseQuantity32 && chooseQuantity38) {
    //       setChooseQuantity37(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity34) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity35) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity36) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity37) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity33 && chooseQuantity38) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity35) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity36) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity37) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity34 && chooseQuantity38) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity35 && chooseQuantity36) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity35 && chooseQuantity37) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity35 && chooseQuantity38) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity36 && chooseQuantity37) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity36 && chooseQuantity38) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity37(false);
    //     }

    //     if (chooseQuantity3 && chooseQuantity37 && chooseQuantity38) {
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //     }

    //     // quantity 32
    //     if (chooseQuantity32 && chooseQuantity33 && chooseQuantity34) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity32 && chooseQuantity34 && chooseQuantity35) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity32 && chooseQuantity34 && chooseQuantity36) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity32 && chooseQuantity35 && chooseQuantity36) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity32 && chooseQuantity36 && chooseQuantity37) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity32 && chooseQuantity37 && chooseQuantity38) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //     }

    //     // quantity 33
    //     if (chooseQuantity33 && chooseQuantity34 && chooseQuantity35) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity36(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity33 && chooseQuantity35 && chooseQuantity36) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity33 && chooseQuantity36 && chooseQuantity37) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity33 && chooseQuantity37 && chooseQuantity38) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity36(false);
    //     }

    //     // quantity 34
    //     if (chooseQuantity34 && chooseQuantity35 && chooseQuantity36) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity34 && chooseQuantity36 && chooseQuantity37) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity37(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity34 && chooseQuantity37 && chooseQuantity38) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity35(false);
    //       setChooseQuantity38(false);
    //     }

    //     // quantity 35
    //     if (chooseQuantity35 && chooseQuantity36 && chooseQuantity37) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity38(false);
    //     }

    //     if (chooseQuantity35 && chooseQuantity37 && chooseQuantity38) {
    //       setChooseQuantity3(false);
    //       setChooseQuantity32(false);
    //       setChooseQuantity33(false);
    //       setChooseQuantity34(false);
    //       setChooseQuantity36(false);
    //     }
    //   }
    // }
  });

  return (
    <div className="choose-ghe">
      <h2>CHỌN GHẾ:</h2>
      <div className="choose-ghe-content">
        <ul className="choose-ghe-content-k">
          <li>K</li>
          <li
            onClick={(event) => {
              handleK1(event);
            }}
            className={
              chooseQuantity1 === 1 || chooseQuantity2 || chooseQuantity3
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            1
          </li>
          <li
            onClick={(event) => {
              handleK1(event);
            }}
            className={
              chooseQuantity1 === 1 || chooseQuantity2 || chooseQuantity3
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            2
          </li>
          <li className="ghe-bo"></li>
          <li
            onClick={() => {
              handleK2();
            }}
            className={
              chooseQuantity1 === 2 || chooseQuantity22 || chooseQuantity32
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            3
          </li>
          <li
            onClick={() => {
              handleK2();
            }}
            className={
              chooseQuantity1 === 2 || chooseQuantity22 || chooseQuantity32
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            4
          </li>
          <li
            onClick={() => {
              handleK3();
            }}
            className={
              chooseQuantity1 === 3 || chooseQuantity23 || chooseQuantity33
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            5
          </li>
          <li
            onClick={() => {
              handleK3();
            }}
            className={
              chooseQuantity1 === 3 || chooseQuantity23 || chooseQuantity33
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            6
          </li>
          <li
            onClick={() => {
              handleK4();
            }}
            className={
              chooseQuantity1 === 4 || chooseQuantity24 || chooseQuantity34
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            7
          </li>
          <li
            onClick={() => {
              handleK4();
            }}
            className={
              chooseQuantity1 === 4 || chooseQuantity24 || chooseQuantity34
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            8
          </li>
          <li
            onClick={() => {
              handleK5();
            }}
            className={
              chooseQuantity1 === 5 || chooseQuantity25 || chooseQuantity35
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            9
          </li>
          <li
            onClick={() => {
              handleK5();
            }}
            className={
              chooseQuantity1 === 5 || chooseQuantity25 || chooseQuantity35
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            10
          </li>
          <li
            onClick={() => {
              handleK6();
            }}
            className={
              chooseQuantity1 === 6 || chooseQuantity26 || chooseQuantity36
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            11
          </li>
          <li
            onClick={() => {
              handleK6();
            }}
            className={
              chooseQuantity1 === 6 || chooseQuantity26 || chooseQuantity36
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            12
          </li>
          <li
            onClick={() => {
              handleK7();
            }}
            className={
              chooseQuantity1 === 7 || chooseQuantity27 || chooseQuantity37
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            13
          </li>
          <li
            onClick={() => {
              handleK7();
            }}
            className={
              chooseQuantity1 === 7 || chooseQuantity27 || chooseQuantity37
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            14
          </li>
          <li
            onClick={() => {
              handleK8();
            }}
            className={
              chooseQuantity1 === 8 || chooseQuantity28 || chooseQuantity38
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            15
          </li>
          <li
            onClick={() => {
              handleK8();
            }}
            className={
              chooseQuantity1 === 8 || chooseQuantity28 || chooseQuantity38
                ? "ghe-doi selected"
                : "ghe-doi"
            }
          >
            16
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

import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const ve2DGD = veContext?.veList?.quantity2DGD as number;
  


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
 
  useEffect(()=>{
    const gheDoi = document.querySelectorAll(".ghe-doi") as any;
    if(ve2D > 0 || ve2DTV > 0){
      gheDoi.forEach((ghe:HTMLElement)=>{
        ghe.classList.add("ghe-ko-the-chon")
      })
    }
  })


  const handleK1 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK12("K1,K2")
      setChooseList([...chooseList, chooseK12]);
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    if (listGheDoiSelected.length > ve2DGD) {
      setChooseList([])
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

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
    if (listGheDoiSelected.length > ve2DGD) {
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
    if (listGheDoiSelected.length > ve2DGD) {
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
    if (listGheDoiSelected.length > ve2DGD) {
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
    if (listGheDoiSelected.length > ve2DGD) {
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
    if (listGheDoiSelected.length > ve2DGD) {
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
    if (listGheDoiSelected.length > ve2DGD) {
      setChooseList([])

      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  const handleK8 = (event: any) => {
    event.target.classList.toggle("selected");

    if (event.target.classList.contains("selected")) {
      setChooseK1516("K15,K16");
      setChooseList([...chooseList, chooseK1516]);
    } else {
      setChooseList([])
    }

    const listGheDoiSelected = document.querySelectorAll(
      ".ghe-doi.selected"
    ) as any;
    console.log(listGheDoiSelected);
    if (listGheDoiSelected.length > ve2DGD) {
      setChooseList([])
      listGheDoiSelected.forEach((ghe: HTMLElement) => {
        ghe.classList.remove("selected");
      });
    }
  };

  

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

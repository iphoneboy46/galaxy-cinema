import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const [chooseGhek, setChooseGhek] = useState<string>("");
  const [chooseGheDoiActive, setChooseGheDoiActive] = useState<number>(0);
  const [chooseGheDoiActive2, setChooseGheDoiActive2] = useState<number>(0);


  const [chooseList, setChooseList] = useState<any>([]);

  // useEffect(() => {
  //   if (ve2D > 0 || ve2DTV > 0) {
  //     const dayK = document.querySelectorAll(".ghe-doi") as any;
  //     dayK.forEach((k: any) => {
  //       k.classList.add("ghe-ko-the-chon");
  //     });
  //   }

  //   if (ve2D > 0) {
  //     setChooseGhe(ve2D);
  //   }
  // });

  // useEffect(() => {
  //   let ghedon = document.querySelectorAll(".ghe-don") as any;
  //   let ghedonActive = document.querySelectorAll(".ghe-don.selected") as any;
  //   const container = document.querySelector(
  //     ".choose-ghe-content"
  //   ) as HTMLDivElement;
  //   console.log(chooseList);

  //   container.onclick = (event: any) => {
  //     if (event.target.classList.contains("ghe-don")) {
  //       if (chooseList.length < chooseGhe) {
  //         event.target.classList.add("selected");
  //         setChooseList((choose: any) => {
  //           return [...choose, event.target];
  //         });
  //       }
  //     }
  //   };

  //   container.ondblclick = (event: any) => {
  //     if (event.target.classList.contains("selected")) {
  //       event.target.classList.remove("selected");
  //       setChooseList(
  //         chooseList.filter((choose: any, index: any) => {
  //           return index;
  //         })
  //       );
  //     }
  //   };
  // });

  const handleK1 = () =>{
    setChooseGhek("K1")
    setChooseGheDoiActive(1)
  }

  const handleK2 = () =>{
    setChooseGhek("K2")
    setChooseGheDoiActive(2)
    setChooseGheDoiActive(2)
    
  }

  const handleK3 = () =>{
    setChooseGhek("K3")
    setChooseGheDoiActive(3)
    
  }

  const handleK4 = () =>{
    setChooseGhek("K4")
    setChooseGheDoiActive(4)
    
  }

  const handleK5 = () =>{
    setChooseGhek("K5")
    setChooseGheDoiActive(5)
    
  }

  const handleK6 = () =>{
    setChooseGhek("K6")
    setChooseGheDoiActive(6)
    
  }

  const handleK7 = () =>{
    setChooseGhek("K7")
    setChooseGheDoiActive(7)
    
  }

  const handleK8 = () =>{
    setChooseGhek("K8")
    setChooseGheDoiActive(8)
    
  }

  const handleK9 = () =>{
    setChooseGhek("K9")
    setChooseGheDoiActive(9)
    
  }

  const handleK10 = () =>{
    setChooseGhek("K10")
    setChooseGheDoiActive(10)

    
  }

  const handleK11 = () =>{
    setChooseGhek("K11")
    setChooseGheDoiActive(11)
    
  }

  const handleK12 = () =>{
    setChooseGhek("K12")
    setChooseGheDoiActive(12)
    
  }

  const handleK13 = () =>{
    setChooseGhek("K13")
    setChooseGheDoiActive(13)
    
  }

  const handleK14 = () =>{
    setChooseGhek("K14")
    setChooseGheDoiActive(14)
    
  }

  const handleK15 = () =>{
    setChooseGheDoiActive(15)
    setChooseGhek("K15")
    
  }

  const handleK16 = () =>{
    setChooseGhek("K16")
    setChooseGheDoiActive(16)
    
  }

  console.log(chooseGhek);

  return (
    <div className="choose-ghe">
      <h2>CHỌN GHẾ:</h2>
      <div className="choose-ghe-content">
        <ul className="choose-ghe-content-k">
          <li>K</li>
          <li onClick={()=>{handleK1()}} className={chooseGheDoiActive === 1 ? "ghe-doi selected" :  "ghe-doi"}>1</li>
          <li onClick={()=>{handleK2()}} className={chooseGheDoiActive === 2 || chooseGheDoiActive2 === 2 ? "ghe-doi selected" :  "ghe-doi"}>2</li>
          <li  className="ghe-bo"></li>
          <li onClick={()=>{handleK3()}} className={chooseGheDoiActive === 3 ? "ghe-doi selected" :  "ghe-doi"}>3</li>
          <li onClick={()=>{handleK4()}} className={chooseGheDoiActive === 4 ? "ghe-doi selected" :  "ghe-doi"}>4</li>
          <li onClick={()=>{handleK5()}} className={chooseGheDoiActive === 5 ? "ghe-doi selected" :  "ghe-doi"}>5</li>
          <li onClick={()=>{handleK6()}} className={chooseGheDoiActive === 6 ? "ghe-doi selected" :  "ghe-doi"}>6</li>
          <li onClick={()=>{handleK7()}} className={chooseGheDoiActive === 7 ? "ghe-doi selected" :  "ghe-doi"}>7</li>
          <li onClick={()=>{handleK8()}} className={chooseGheDoiActive === 8 ? "ghe-doi selected" :  "ghe-doi"}>8</li>
          <li onClick={()=>{handleK9()}} className={chooseGheDoiActive === 9 ? "ghe-doi selected" :  "ghe-doi"}>9</li>
          <li onClick={()=>{handleK10()}} className={chooseGheDoiActive === 10 ? "ghe-doi selected" :  "ghe-doi"}>10</li>
          <li onClick={()=>{handleK11()}} className={chooseGheDoiActive === 11 ? "ghe-doi selected" :  "ghe-doi"}>11</li>
          <li onClick={()=>{handleK12()}} className={chooseGheDoiActive === 12 ? "ghe-doi selected" :  "ghe-doi"}>12</li>
          <li onClick={()=>{handleK13()}} className={chooseGheDoiActive === 13 ? "ghe-doi selected" :  "ghe-doi"}>13</li>
          <li onClick={()=>{handleK14()}} className={chooseGheDoiActive === 14 ? "ghe-doi selected" :  "ghe-doi"}>14</li>
          <li onClick={()=>{handleK15()}} className={chooseGheDoiActive === 15 ? "ghe-doi selected" :  "ghe-doi"}>15</li>
          <li onClick={()=>{handleK16()}} className={chooseGheDoiActive === 16 ? "ghe-doi selected" :  "ghe-doi"}>16</li>
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

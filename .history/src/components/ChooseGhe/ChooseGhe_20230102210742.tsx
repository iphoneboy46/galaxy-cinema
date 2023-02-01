import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const [chooseGhek, setChooseGhek] = useState<string>("");
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
  }

  const handleK2 = () =>{
    setChooseGhek("K2")
    
  }

  const handleK3 = () =>{
    setChooseGhek("K3")
    
  }

  const handleK4 = () =>{
    setChooseGhek("K4")
    
  }

  const handleK5 = () =>{
    setChooseGhek("K5")
    
  }

  const handleK6 = () =>{
    setChooseGhek("K6")
    
  }

  const handleK7 = () =>{
    setChooseGhek("K7")
    
  }

  const handleK8 = () =>{
    setChooseGhek("K8")
    
  }

  const handleK9 = () =>{
    setChooseGhek("K9")
    
  }

  const handleK10 = () =>{
    setChooseGhek("K10")
    
  }

  const handleK11 = () =>{
    
  }

  const handleK12 = () =>{
    
  }

  const handleK13 = () =>{
    
  }

  const handleK14 = () =>{
    
  }

  const handleK15 = () =>{
    
  }

  const handleK16 = () =>{
    
  }

  return (
    <div className="choose-ghe">
      <h2>CHỌN GHẾ:</h2>
      <div className="choose-ghe-content">
        <ul className="choose-ghe-content-k">
          <li>K</li>
          <li onClick={()=>{handleK1()}} className="ghe-doi">1</li>
          <li onClick={()=>{handleK2()}} className="ghe-doi">2</li>
          <li  className="ghe-bo"></li>
          <li onClick={()=>{handleK3()}} className="ghe-doi">3</li>
          <li onClick={()=>{handleK4()}} className="ghe-doi">4</li>
          <li onClick={()=>{handleK5()}} className="ghe-doi">5</li>
          <li onClick={()=>{handleK6()}} className="ghe-doi">6</li>
          <li onClick={()=>{handleK7()}} className="ghe-doi">7</li>
          <li onClick={()=>{handleK8()}} className="ghe-doi">8</li>
          <li onClick={()=>{handleK9()}} className="ghe-doi">9</li>
          <li onClick={()=>{handleK10()}} className="ghe-doi">10</li>
          <li onClick={()=>{handleK11()}} className="ghe-doi">11</li>
          <li onClick={()=>{handleK12()}} className="ghe-doi">12</li>
          <li onClick={()=>{handleK13()}} className="ghe-doi">13</li>
          <li onClick={()=>{handleK14()}} className="ghe-doi">14</li>
          <li onClick={()=>{handleK15()}} className="ghe-doi">15</li>
          <li onClick={()=>{handleK16()}} className="ghe-doi">16</li>
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

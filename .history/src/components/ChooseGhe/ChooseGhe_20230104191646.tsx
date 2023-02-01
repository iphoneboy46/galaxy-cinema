import React, { useContext, useEffect, useState } from "react";
import "./ChooseGhe.scss";
import { VeContext } from "../VeContext/VeContext";

function ChooseGhe() {
  const veContext = useContext(VeContext);
  const ve2D = veContext?.veList?.quantity2D as number;
  const ve2DTV = veContext?.veList?.quantity2DTV as number;
  const [chooseGhek, setChooseGhek] = useState<string>("");
  const [chooseQuantity1, setChooseQuantity1] = useState<number>(0);
  const [chooseQuantity2, setChooseQuantity2] = useState<number>(0);
  const [chooseQuantity22, setChooseQuantity22] = useState<number>(0);

  const [chooseQuantity3, setChooseQuantity3] = useState<number>(0);
  const [chooseQuantity4, setChooseQuantity4] = useState<number>(0);
  const [chooseQuantity5, setChooseQuantity5] = useState<number>(0);
  const [chooseQuantity6, setChooseQuantity6] = useState<number>(0);
  const [chooseQuantity7, setChooseQuantity7] = useState<number>(0);
  const [chooseQuantity8, setChooseQuantity8] = useState<number>(0);


  const [chooseList, setChooseList] = useState<any>([]);

  const handleK1 = () =>{
    if(ve2D === 1) {
      setChooseQuantity1(1)
    }
  }

  const handleK2 = () =>{
    if(ve2D === 1) {
      setChooseQuantity1(2)
    }
  }

  const handleK3 = () =>{
    
  }

  const handleK4 = () =>{
    
  }

  const handleK5 = () =>{
    
  }

  const handleK6 = () =>{
    
  }

  const handleK7 = () =>{
    
  }


  const handleK8 = () =>{
    
  }


  
  
    return (
      <div className="choose-ghe">
        <h2>CHỌN GHẾ:</h2>
        <div className="choose-ghe-content">
          <ul className="choose-ghe-content-k">
            <li>K</li>
            <li
              onClick={() => {
                handleK1();
              }}
              className={
                chooseQuantity1 === 1
                  ? "ghe-doi selected"
                  : "ghe-doi"
              }
            >
              1
            </li>
            <li
              onClick={() => {
                handleK1();
              }}
              className={
                chooseQuantity1 === 1 || chooseQuantity2
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
                chooseQuantity1 === 2 || chooseQuantity2
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
                chooseQuantity1 === 2 || chooseQuantity2
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
                chooseQuantity1 === 3 || chooseQuantity3
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
                chooseQuantity1 === 3 || chooseQuantity3
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
                chooseQuantity1 === 4 || chooseQuantity4
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
                chooseQuantity1 === 4 || chooseQuantity4
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
                chooseQuantity1 === 5 || chooseQuantity5
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
                chooseQuantity1 === 5 || chooseQuantity5
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
                chooseQuantity1 === 6 || chooseQuantity6
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
                chooseQuantity1 === 6 || chooseQuantity6
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
                chooseQuantity1 === 7 || chooseQuantity7
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
                chooseQuantity1 === 7 || chooseQuantity7
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
                chooseQuantity1 === 8 || chooseQuantity8
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
                chooseQuantity1 === 8 || chooseQuantity8
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

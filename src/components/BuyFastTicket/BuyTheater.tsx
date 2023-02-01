import React, { ChangeEvent, useState } from "react";
import Select from "react-select";
import { NullList, ShowTimeList1, ShowTimeList2, ShowTimeList3, ShowTimeList4 } from "../SelectValue/DataList";

interface BuyMovieProps {
  resultTimes: {}[];
  resultDates: {}[];
  MovieList: {}[];
  CinemaList: {}[];
  setShowtime: any;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

function BuyTheater({
  resultTimes,
  resultDates,
  MovieList,
  CinemaList,
  setShowtime,
  setDate,
}: BuyMovieProps) {
  const [movieName, setMovieName] = useState("");
  const [rapName, setRapName] = useState("");
  const [day, setDay] = useState("");

  switch (rapName) {
    case "Galaxy Nguyễn Du":
    case "Galaxy Tân Bình":
    case "Galaxy Kinh Dương Vương":
    case "Galaxy Quang Trung": 
    case "Galaxy Buôn Ma Thuộc": 

    {

      setShowtime(ShowTimeList2);
      break;
    }

    case "Galaxy Mipec Long Biên":
    case "alaxy Đà Nẵng":
    case "Galaxy Cà Mau":
    case "Galaxy Bến Tre":
    case "Galaxy Vinh":

       {
      setShowtime(ShowTimeList3);
      break;
    }

    case "Galaxy Trung Chánh":
    case "Galaxy Huỳnh Tấn Phát":
    case "Galaxy Long Xuyên":
    case "Galaxy Hải Phòng":

       {
      setShowtime(ShowTimeList1);
      break;
    }

    default:
      setShowtime(ShowTimeList4);
  }

  const d = new Date();
const month = d.getMonth() + 1;

  switch (day) {
    case `Thứ tư , 01/${month}/2022`:
      setDate(`2022/${month}/01`);
      break;
    case `Thứ năm , 02/${month}/2022`:
      setDate(`2022/${month}/02`);
      break;
    case `Thứ sáu , 03/${month}/2022`:
      setDate(`2022/${month}/03`);
      break;
    case `Thứ bảy , 04/${month}/2022`:
      setDate(`2022/${month}/04`);
      break;
    case `Chủ nhật , 05/${month}/2022`:
      setDate(`2022/${month}/5`);
      break;
    case `Thứ hai, 06/${month}/2022`:
      setDate(`2022/${month}/06`);
      break;
    case `Thứ ba , 07/${month}/2022`:
      setDate(`2022/${month}/07`);
      break;
    case `Thứ tư , 08/${month}/2022`:
      setDate(`2022/${month}/08`);
      break;
    case `Thứ năm , 09/${month}/2022`:
      setDate(`2022/${month}/09`);
      break;
    case `Thứ sáu , 10/${month}/2022`:
      setDate(`2022/${month}/10`);
      break;
    case `Thứ bảy , 11/${month}/2022`:
      setDate(`2022/${month}/11`);
      break;
    case `Chủ nhật , 12/${month}/2022`:
      setDate(`2022/${month}/12`);
      break;
    case `Thứ hai , 13/${month}/2022`:
      setDate(`2022/${month}/13`);
      break;
    case `Thứ ba , 14/${month}/2022`:
      setDate(`2022/${month}/14`);
      break;
    case `Thứ tư , 15/${month}/2022`:
      setDate(`2022/${month}/04`);
      break;
    case `Thứ năm , 16/${month}/2022`:
      setDate(`2022/${month}/16`);
      break;
    case `Thứ sáu , 17/${month}/2022`:
      setDate(`2022/${month}/17`);
      break;
    case `Thứ bảy , 18/${month}/2022`:
      setDate(`2022/${month}/18`);
      break;
    case `Chủ nhật , 19/${month}/2022`:
      setDate(`2022/${month}/19`);
      break;
    case `Thứ hai , 20/${month}/2022`:
      setDate(`2022/${month}/20`);
      break;
    case `Thứ ba , 21/${month}/2022`:
      setDate(`2022/${month}/21`);
      break;
    case `Thứ tư , 22/${month}/2022`:
      setDate(`2022/${month}/22`);
      break;
    case `Thứ năm , 23/${month}/2022`:
      setDate(`2022/${month}/23`);
      break;
    case `Thứ sáu , 24/${month}/2022`:
      setDate(`2022/${month}/24`);
      break;
    case `Thứ bảy , 25/${month}/2022`:
      setDate(`2022/${month}/25`);
      break;
    case `Chủ nhật , 26/${month}/2022`:
      setDate(`2022/${month}/26`);
      break;
    case `Thứ hai , 27/${month}/2022`:
      setDate(`2022/${month}/27`);
      break;
    case `Thứ ba , 28/${month}/2022`:
      setDate(`2022/${month}/28`);
      break;
    // case "Thứ năm , 29/12/2022":
    //   setDate("2022/12/29");
    //   break;
    // case "Thứ sáu , 30/12/2022":
    //   setDate("2022/12/30");
    //   break;
    // case "Thứ bảy , 31/12/2022":
    //   setDate("2022/12/31");
    //   break;
    default:
      setDate("");
  }
  const handleChangeMovie = (
    event: ChangeEvent<HTMLSelectElement> | any
  ): void => {
    setMovieName(event.value);
  };

  const handleChangeRap = (
    event: ChangeEvent<HTMLSelectElement> | any
  ): void => {
    setRapName(event.value);
  };

  const handleChangeDay = (
    event: ChangeEvent<HTMLSelectElement> | any
  ): void => {
    setDay(event.value);
  };
  return (
    <div className="buy-movie">
      <div className="movie-select">
        <Select
          placeholder="Chọn rạp"
          onChange={handleChangeRap}
          options={CinemaList}
        />
      </div>
      <div className="movie-select">
        {rapName !== "" ? (
          <Select
            placeholder="Chọn phim"
            onChange={handleChangeMovie}
            options={MovieList}
          />
        ) : (
          <Select
            placeholder="Chọn phim"
            onChange={handleChangeMovie}
            options={NullList}
          />
        )}
      </div>
      <div className="movie-select">
        {movieName !== "" ? (
          <Select
            placeholder="Chọn ngày"
            onChange={handleChangeDay}
            options={resultDates}
          />
        ) : (
          <Select
            placeholder="Chọn ngày"
            onChange={handleChangeDay}
            options={NullList}
          />
        )}
      </div>

      <div className="movie-select">
        {day !== "" ? (
          <Select placeholder="Chọn suất" options={resultTimes} />
        ) : (
          <Select placeholder="Chọn suất" options={NullList} />
        )}
      </div>
    </div>
  );
}

export default BuyTheater;

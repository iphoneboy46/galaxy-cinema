import React, { ChangeEvent, useEffect, useState } from "react";
import Select from "react-select";
import {
  NullList,
  ShowTimeList1,
  ShowTimeList2,
  ShowTimeList3,
  ShowTimeList4,
  ShowTimeList5,
} from "../SelectValue/DataList";

interface BuyMovieProps {
  resultTimes: {}[];
  resultDates: {}[];
  MovieList: {}[];
  CinemaList: {}[];
  setShowtime: any;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

function BuyMovie({
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
    case "Galaxy Tân Bình":
    case "Galaxy Kinh Dương Vương":
    case "Galaxy Cà Mau":
    case "Galaxy Huỳnh Tấn Phát": {
      setShowtime(ShowTimeList2);
      break;
    }

    case "Galaxy Mipec Long Biên":
    case "Galaxy Đà Nẵng":
    case "Galaxy Vinh":
    case "Galaxy Nguyễn Du": {
      setShowtime(ShowTimeList3);
      break;
    }

    case "Galaxy Trung Chánh":
    case "Galaxy Hải Phòng":
    case "Galaxy Bến Tre": {
      setShowtime(ShowTimeList1);
      break;
    }

    case "Galaxy Buôn Ma Thuột":
    case "Galaxy Long Xuyên":
    case "Galaxy Quang Trung": {
      setShowtime(ShowTimeList5);
      break;
    }

    default:
      setShowtime(ShowTimeList4);
  }

  const d = new Date();
  const month = d.getMonth() + 1;

  const year = d.getFullYear();
  console.log(year);

  switch (day) {
    case `Thứ tư , 01/${month}/${year}`:
      setDate(`${year}/${month}/01`);
      break;
    case `Thứ năm , 02/${month}/${year}`:
      setDate(`${year}/${month}/02`);
      break;
    case `Thứ sáu , 03/${month}/${year}`:
      setDate(`${year}/${month}/03`);
      break;
    case `Thứ bảy , 04/${month}/${year}`:
      setDate(`${year}/${month}/04`);
      break;
    case `Chủ nhật , 05/${month}/${year}`:
      setDate(`${year}/${month}/05`);
      break;
    case `Thứ hai, 06/${month}/${year}`:
      setDate(`${year}/${month}/06`);
      break;
    case `Thứ ba , 07/${month}/${year}`:
      setDate(`${year}/${month}/07`);
      break;
    case `Thứ tư , 08/${month}/${year}`:
      setDate(`${year}/${month}/08`);
      break;
    case `Thứ năm , 09/${month}/${year}`:
      setDate(`${year}/${month}/09`);
      break;
    case `Thứ sáu , 10/${month}/${year}`:
      setDate(`${year}/${month}/10`);
      break;
    case `Thứ bảy , 11/${month}/${year}`:
      setDate(`${year}/${month}/11`);
      break;
    case `Chủ nhật , 12/${month}/${year}`:
      setDate(`${year}/${month}/12`);
      break;
    case `Thứ hai , 13/${month}/${year}`:
      setDate(`${year}/${month}/13`);
      break;
    case `Thứ ba , 14/${month}/${year}`:
      setDate(`${year}/${month}/14`);
      break;
    case `Thứ tư , 15/${month}/${year}`:
      setDate(`${year}/${month}/04`);
      break;
    case `Thứ năm , 16/${month}/${year}`:
      setDate(`${year}/${month}/16`);
      break;
    case `Thứ sáu , 17/${month}/${year}`:
      setDate(`${year}/${month}/17`);
      break;
    case `Thứ bảy , 18/${month}/${year}`:
      setDate(`${year}/${month}/18`);
      break;
    case `Chủ nhật , 19/${month}/${year}`:
      setDate(`${year}/${month}/19`);
      break;
    case `Thứ hai , 20/${month}/${year}`:
      setDate(`${year}/${month}/20`);
      break;
    case `Thứ ba , 21/${month}/${year}`:
      setDate(`${year}/${month}/21`);
      break;
    case `Thứ tư , 22/${month}/${year}`:
      setDate(`${year}/${month}/22`);
      break;
    case `Thứ năm , 23/${month}/${year}`:
      setDate(`${year}/${month}/23`);
      break;
    case `Thứ sáu , 24/${month}/${year}`:
      setDate(`${year}/${month}/24`);
      break;
    case `Thứ bảy , 25/${month}/${year}`:
      setDate(`${year}/${month}/25`);
      break;
    case `Chủ nhật , 26/${month}/${year}`:
      setDate(`${year}/${month}/26`);
      break;
    case `Thứ hai , 27/${month}/${year}`:
      setDate(`${year}/${month}/27`);
      break;
    case `Thứ ba , 28/${month}/${year}`:
      setDate(`${year}/${month}/28`);
      break;
    case `Thứ tư , 29/${month}/${year}`:
      setDate(`${year}/${month}/29`);
      break;
    case `Thứ năm, 30/${month}/${year}`:
      setDate(`${{ year }}/${month}}/30`);
      break;
    case `Thứ sáu , 31/${month}/${year}`:
      setDate(`${year}/${month}/31`);
      break;
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

  console.log(day);

  return (
    <div className="buy-movie">
      <div className="movie-select">
        <Select
          placeholder="Chọn phim"
          onChange={handleChangeMovie}
          options={MovieList}
        />
      </div>
      <div className="movie-select">
        {movieName !== "" ? (
          <Select
            placeholder="Chọn rạp"
            onChange={handleChangeRap}
            options={CinemaList}
          />
        ) : (
          <Select placeholder="Chọn rạp" options={NullList} />
        )}
      </div>
      <div className="movie-select">
        {rapName !== "" ? (
          <Select
            placeholder="Chọn ngày"
            onChange={handleChangeDay}
            options={resultDates}
          />
        ) : (
          <Select placeholder="Chọn ngày" options={NullList} />
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

export default BuyMovie;

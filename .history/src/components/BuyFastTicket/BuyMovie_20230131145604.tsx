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

  switch (day) {
    case "Thứ năm , 01/12/2022":
      setDate("2022/12/01");
      break;
    case "Thứ sáu , 02/12/2022":
      setDate("2022/12/02");
      break;
    case "Thứ bảy , 03/12/2022":
      setDate("2022/12/03");
      break;
    case "Chủ Nhật , 04/12/2022":
      setDate("2022/12/04");
      break;
    case "Thứ hai , 05/12/2022":
      setDate("2022/12/5");
      break;
    case "Thứ ba, 06/12/2022":
      setDate("2022/12/06");
      break;
    case "Thứ tư , 07/12/2022":
      setDate("2022/12/07");
      break;
    case "Thứ năm , 08/12/2022":
      setDate("2022/12/08");
      break;
    case "Thứ sáu , 09/12/2022":
      setDate("2022/12/09");
      break;
    case "Thứ bảy , 10/12/2022":
      setDate("2022/12/10");
      break;
    case "Chủ nhật , 11/12/2022":
      setDate("2022/12/11");
      break;
    case "Thứ hai , 12/12/2022":
      setDate("2022/12/12");
      break;
    case "Thứ ba , 13/12/2022":
      setDate("2022/12/13");
      break;
    case "Thứ tư , 14/12/2022":
      setDate("2022/12/14");
      break;
    case "Thứ năm , 15/12/2022":
      setDate("2022/12/04");
      break;
    case "Thứ sáu , 16/12/2022":
      setDate("2022/12/16");
      break;
    case "Thứ bảy , 17/12/2022":
      setDate("2022/12/17");
      break;
    case "Chủ nhật , 18/12/2022":
      setDate("2022/12/18");
      break;
    case "Thứ hai , 19/12/2022":
      setDate("2022/12/19");
      break;
    case "Thứ ba , 20/12/2022":
      setDate("2022/12/20");
      break;
    case "Thứ tư , 21/12/2022":
      setDate("2022/12/21");
      break;
    case "Thứ năm , 22/12/2022":
      setDate("2022/12/22");
      break;
    case "Thứ sáu , 23/12/2022":
      setDate("2022/12/23");
      break;
    case "Thứ bảy , 24/12/2022":
      setDate("2022/12/24");
      break;
    case "Chủ nhật , 25/12/2022":
      setDate("2022/12/25");
      break;
    case "Thứ hai , 26/12/2022":
      setDate("2022/12/26");
      break;
    case "Thứ ba , 27/12/2022":
      setDate("2022/12/27");
      break;
    case "Thứ tư , 28/12/2022":
      setDate("2022/12/28");
      break;
    case "Thứ năm , 29/12/2022":
      setDate("2022/12/29");
      break;
    case "Thứ sáu , 30/12/2022":
      setDate("2022/12/30");
      break;
    case "Thứ bảy , 31/12/2022":
      setDate("2022/12/31");
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

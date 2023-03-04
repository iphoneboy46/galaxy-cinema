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
import { MovieShowingData } from "../../data/Data";

interface BuyMovieProps {
  resultTimes: {}[];
  resultDates: {}[];
  MovieList: {}[];
  CinemaList: {}[];
  setShowtime: any;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setMovieFast: React.Dispatch<React.SetStateAction<{}>>;
}

function BuyMovie({
  resultTimes,
  resultDates,
  MovieList,
  CinemaList,
  setShowtime,
  setDate,
  setMovieFast,
}: BuyMovieProps) {
  const [movieName, setMovieName] = useState("");
  const [rapName, setRapName] = useState("");
  const [day, setDay] = useState("");
  const [suat, setSuat] = useState("");
  const [rapSo, setRapSo] = useState<any>();

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
  let month = d.getMonth() + 1;
  let monthConvert = month.toString().length > 1 ? month : "0" + month;

  const year = d.getFullYear();

  switch (day) {
    case `Thứ tư , 01/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/01`);
      break;
    case `Thứ năm , 02/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/02`);
      break;
    case `Thứ sáu , 03/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/03`);
      break;
    case `Thứ bảy , 04/${monthConvert}/${year}`:
      console.log("Ádasdasds");
      setDate(`${year}/${monthConvert}/04`);
      break;
    case `Chủ nhật , 05/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/05`);
      break;
    case `Thứ hai, 06/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/06`);
      break;
    case `Thứ ba , 07/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/07`);
      break;
    case `Thứ tư , 08/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/08`);
      break;
    case `Thứ năm , 09/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/09`);
      break;
    case `Thứ sáu , 10/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/10`);
      break;
    case `Thứ bảy , 11/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/11`);
      break;
    case `Chủ nhật , 12/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/12`);
      break;
    case `Thứ hai , 13/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/13`);
      break;
    case `Thứ ba , 14/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/14`);
      break;
    case `Thứ tư , 15/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/04`);
      break;
    case `Thứ năm , 16/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/16`);
      break;
    case `Thứ sáu , 17/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/17`);
      break;
    case `Thứ bảy , 18/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/18`);
      break;
    case `Chủ nhật , 19/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/19`);
      break;
    case `Thứ hai , 20/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/20`);
      break;
    case `Thứ ba , 21/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/21`);
      break;
    case `Thứ tư , 22/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/22`);
      break;
    case `Thứ năm , 23/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/23`);
      break;
    case `Thứ sáu , 24/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/24`);
      break;
    case `Thứ bảy , 25/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/25`);
      break;
    case `Chủ nhật , 26/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/26`);
      break;
    case `Thứ hai , 27/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/27`);
      break;
    case `Thứ ba , 28/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/28`);
      break;
    case `Thứ tư , 29/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/29`);
      break;
    case `Thứ năm, 30/${monthConvert}/${year}`:
      setDate(`${{ year }}/${monthConvert}}/30`);
      break;
    case `Thứ sáu , 31/${monthConvert}/${year}`:
      setDate(`${year}/${monthConvert}/31`);
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

  const handleSuat = (event: ChangeEvent<HTMLSelectElement> | any): void => {
    setSuat(event.value);
  };
  let format = day.split(",");
  console.log(format[0]);

  let dateFormat = format[1];
  let thuFormat = format[0].trim();
  console.log(dateFormat);

  useEffect(() => {
    MovieShowingData.map((mv) => {
      switch (rapName) {
        case "Galaxy Nguyễn Du": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }
        case "Galaxy Tân Bình": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Kinh Dương Vương": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Quang Trung": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Bến Tre": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Mipec Long Biên": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Đà Nẵng": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Cà Mau": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Trung Chánh": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Huỳnh Tấn Phát": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Vinh": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }

        case "Galaxy Hải Phòng": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }
        case "Galaxy Nguyễn Văn Quás": {
          let rapFil = mv.galaxyND.find((time) => {
            if (time.value === suat) {
              return time.rap;
            }
          });
          setRapSo(rapFil?.rap);
          break;
        }
        case "Galaxy Buôn Ma Thuột": {
          let rapFil =  mv.galaxyND.find((time)=>{
              if(time.value === suat){
                return time.rap
              }
            })
          setRapSo(rapFil?.rap)
          break
          }
        default:
          setRapSo("");
      }
    });
  }, [rapName, suat]);
  console.log(rapSo);

  useEffect(() => {
    let rapRandom = Math.ceil(Math.random() * 8);

    MovieShowingData.map((movie) => {
      console.log(movie);
      if (movie.name === movieName) {
        setMovieFast({
          name1: movie.name,
          name2: movie.name2,
          nameUrl: movie.nameUrl,
          age: movie.age,
          img: movie.img1,
          suatchieu: suat,
          rap: rapSo,
          galaxy: rapName,
          thu: thuFormat,
          date: dateFormat,
        });
      }
    });
  }, [movieName, rapName, day, suat]);

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
          <Select
            placeholder="Chọn suất"
            options={resultTimes}
            onChange={handleSuat}
          />
        ) : (
          <Select placeholder="Chọn suất" options={NullList} />
        )}
      </div>
    </div>
  );
}

export default BuyMovie;

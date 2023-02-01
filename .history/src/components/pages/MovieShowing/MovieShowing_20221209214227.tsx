import React, { useState } from "react";
import ButtonOutline from "../../Button/ButtonOutline";
import { MovieShowing } from "../../../data/Data";

import "./MovieShowing.scss";
import { Link } from "react-router-dom";

function MovieShowingPage() {
  return (
    <div className="movie-showing-container">
      <div className="movie-content-choose">
        <Link to="/phimdangchieu" className="movie-content-show active">
          PHIM ĐANG CHIẾU
          <span></span>
        </Link>
        <Link to="/phimsapchieu" className="movie-content-wait">
          PHIM SẮP CHIẾU
          <span></span>
        </Link>
      </div>
      <div className="movie-showing">
        {MovieShowing.map((movie, index) => {
          return (
            <div key={index} className="movie-showing-page-content">
              <div className="movie-showing-page-content-img">
                <img src={movie.img2} alt="" />
                <div className="btn-outline">
                  <div className="btn">
                    <ButtonOutline name={movie.name} />
                  </div>
                </div>
              </div>

              <h3>{movie.name}</h3>
              <h3>{movie.name2}</h3>
            </div>
          );
        })}
      </div>
      <div className="movie-showing-description">
        <h1>GALAXY CINEMA</h1>
        <p>
          <strong>Galaxy Cinema</strong> luôn cập nhật nhanh nhất những bộ phim
          chiếu rạp mới nhất, hấp dẫn nhất sắp ra mắt trong thời gian tới. Các
          bộ phim sắp chiếu tại Galaxy Cinema luôn đủ mọi thể loại được ưa
          chuộng nhất bao gồm hành động, kinh dị, phiêu lưu, hoạt hình…phù hợp
          cho mọi lứa tuổi, đến từ Hollywood và nhiều quốc gia khác, thật dễ
          dàng để lựa chọn phim hay theo sở thích của bạn tại website Galaxy
          Cinema. <br /> <br />
          Mỗi bộ phim mới cập nhật lên website sẽ hiển thị đầy đủ thông tin từ
          tựa phim, nội dung phim, ngày công chiếu giúp bạn thuận tiện trong
          việc theo dõi. Ngoài ra, Galaxy Cinema sẽ luôn cập nhật và tạo thuận
          tiện giúp bạn nhanh tay đặt lấy suất phim mới nhất, phù hợp nhất để
          thưởng thức. <br /> <br />
          2020 vốn là năm hốt bạc của các studio với hàng loạt bom tấn điện ảnh
          xếp hàng ra rạp chỉ xê xích vài tuần. Thế nhưng, cơn hồng thủy mang
          tên đại dịch Covid-19 quét ngang, các siêu phẩm kéo nhau bay sạch, làm
          đảo lộn lịch chiếu không chỉ năm nay mà vài năm tiếp theo. Chính vì
          thế, lịch chiếu phim 2021 & 2022 đã được các hãng lên kế hoạch xong
          xuôi nay phải “gồng gánh” thêm hàng chục thương hiệu phim nặng ký
          khác.
          <br /> <br />
          Hãy cùng Galaxy Cinema lướt sơ danh sách các phim hay
          không-thể-không-mua-vé vào năm 2022 nhé!
          <br />
          <br />
          <strong>Avatar 2 </strong>
          <br />
          <br />
          Năm 2009, bom tấn Avatar của đạo diễn James Cameron công phá phòng vé
          với doanh thu cao kỷ lục. Avatar như một cột mốc đáng nhớ trong lịch
          sử điện ảnh, được xem như cuộc cách mạng của công nghệ CGI và cả kỹ
          xảo 3D. <br />
          <br />
          Thành công ngoài mong đợi trong “canh bạc” mạo hiểm mang tên Avatar
          chính là động lực để James Cameron tự tin với ý tưởng thực hiện{" "}
          <strong>Avatar 2</strong>. <br />
          <br />
          Phần phim mới rất có thể sẽ khai thác về thế giới dưới nước trên
          Pandora. Bối cảnh tại một vùng vịnh và lấy mốc thời gian cặp đôi Jake
          Sully và Neytiri đã có con với nhau. Đúng vào lúc này, mối đe dọa từ
          loài người ở Trái Đất đang cận kề, việc này bắt buộc họ phải tìm cách
          bảo vệ hành tinh của mình. <br />
          <br />
          Do luôn có sự hứng thú với đại dương to lớn, nên chủ đề của Avatar 2
          được di chuyển xuống biển. Một hồ nước khổng lồ được xây dựng với mục
          đích phục vụ cho công tác quay phim. Bên cạnh đó, nhiều thiết bị ghi
          hình tối tân nhất cũng được trang bị để đảm bảo cho khâu hình ảnh chỉn
          chu nhất. <br />
          <br />
          Có thể thấy <strong>Avatar 2</strong> hứa hẹn sẽ là siêu phẩm được
          mong chờ nhất trong thời gian sắp tới. Tác phẩm dự kiến khởi chiếu vào
          cuối năm 2022. Ngoài ra phần 3, 4, 5 cũng được ấn định ra rạp lần lượt
          vào 2024 – 2026 – 2028. <br />
          <br />
          <strong>Cô Gái Từ Quá Khứ Vũ</strong> <br />
          <br />
          trụ mỹ nhân của bộ đôi đạo diễn Bảo Nhân - Nam Cito (loạt phim Gái Già
          Lắm Chiêu) sẽ chính thức khởi động với phần phim đầu tiên mang tên Cô
          Gái Từ Quá Khứ. Ninh Dương Lan Ngọc tiếp tục vào vai Ms.Q, nhưng không
          phải trong một bộ phim chick-flick hài hước sang chảnh, mà là một tác
          phẩm tâm lý nặng đô. Đảm nhận nhân vật phản diện chính của phim là nữ
          diễn viên trẻ Kaity Nguyễn. Với màn lột xác của cả hai nữ diễn viên
          đắt giá nhất hiện nay, Cô Gái Từ Quá Khứ sẽ có mặt ở phòng vé Việt từ
          18.11.2022. <br />
          <br />
          <strong>Black Panther: Wakanda Forever </strong>
          <br />
          <br />
          Với kinh phí 200 triệu $, Black Panther làm dậy sóng phòng vé, càn
          quét hơn 1,3 tỷ $ tại các rạp chiếu phim toàn cầu. Phim còn nhận 3
          Oscar cũng như vinh dự nằm trong danh sách đề cử Phim hay nhất Oscar
          2019. <strong>Black Panther: Wakanda Forever</strong> phải thay đổi
          bởi vì thế giới mất đi diễn viên Chadwick Boseman. Ngôi sao đoản mệnh
          đã thổi hồn vào nhân vật Báo Đen, đưa ông hoàng Wakanda bước ra từ
          comic và trở thành nguồn cảm hứng cho rất nhiều người dân da màu.{" "}
          <br />
          <br />
          Thông qua teaser đầu tiên, Marvel lần nữa khẳng định một ai khác thay
          thế Chadwick Boseman. T’Challa qua đời và dân Wakanda khóc thương cho
          anh. Hình ảnh bức tranh vị vua vĩ đại được vẽ trên tường gây xúc động
          mạnh, hơn cả cảnh tượng Spider-Man ngồi trước chân dung Iron Man. Bởi
          lẽ, không chỉ tưởng nhớ T’Challa, Marvel đang vinh danh Chadwick. Hiện
          chưa rõ vì vua vĩ đại mất vì lí do gì. Nhiều khả năng, anh hi sinh
          trong trận chiến với Namor vùng Atlantis. <br />
          <br />
          Sau đỉnh điểm ở cuộc chiến đánh bại Thanos trong Avengers: Endgame, vũ
          trụ điện ảnh Marvel vướng nhiều ý kiến trái chiều. Shang-Chi And The
          Legend Of The Ten Rings, Eternals hay thậm chí là Doctor Strange In
          The Multiverse Of Madness… đều gặp cảnh chê bai. Thor: Ragnarok bị chế
          giễu quá hài hước, ngay cả Spider-Man: No Way Home cũng gặp các bình
          luận dè bỉu fan service quá đà. <br />
          <br />
          Là bộ phim kết thúc Phase 4, <strong>Wakanda Forever</strong> gánh
          trách nhiệm nặng nề khôi phục niềm tin của fan dành cho MCU. Câu
          chuyện đỉnh cao, dàn diễn viên hợp vai, thời điểm trình chiếu hợp lí…
          Thiên thời địa lợi nhân hòa đều có đủ. Hãy chờ xem Marvel sẽ làm ăn ra
          sao! <br />
          <br />
          <strong>Đảo Độc Đắc </strong> <br />
          Năm 2019, Thất Sơn Tâm Linh đã gieo rắc nỗi ám ảnh kinh hoàng cho
          nhiều người. Khi nỗi sợ vẫn chưa vơi thì giờ đây Thiên Linh Cái đã trở
          lại với diện mạo mới mang tên{" "}
          <strong>
            Linh Cái đã trở lại với diện mạo mới mang tên Đảo Độc Đắc: Tử Mẫu
            Thiên Linh Cái Linh Cái đã trở lại với diện mạo mới mang tên{" "}
          </strong>
          . <br />
          <br />
          Tiếp tục nói về thế giới tâm linh với thuật bùa ngải và những trò mê
          tín dị đoan. Nội dung của Đảo Độc Đắc vẫn chưa được hé lộ, nhưng với
          bốn chữ Tử Mẫu Thiên Linh Cái cũng đủ hình dung được đồ tà ác ghê rợn
          của bùa chú lần này. Có sự góp mặt của dàn diễn viên triển vọng như
          Trần Nghĩa, Tiểu Vy, Sam, Trần Phong…, Đảo Độc Đắc nhiều khả năng sẽ
          ra mắt trong năm 2022. <br /><br />
          <strong>John Wick: Chapter 4 </strong> <br /><br />
          Xuất phát từ một phim độc
          lập lấy đề tài báo thù quen thuộc, thế nhưng kịch bản xuất sắc và diễn
          xuất cuốn hút của Keanu Reeves đã đưa John Wick thành công rực rỡ và
          trở thành một thương hiệu hành động hấp dẫn. <br /><br />
          Sau những lần truy đuổi
          đẫm máu, Jardani Jovonovich đã bị dồn đến đường cùng trong John Wick
          3, phần 4 có lẽ nào là thời điểm trận chiến cuối cùng nổ ra. Hội Tối
          Thượng vừa có quyền vừa có tiền là thế lực bất khả chiến bại, làm cách
          nào để đánh bại bọn chúng? <br /><br />
          Điều đáng tiếc duy nhất là công chúng sẽ
          chẳng có cơ hội chứng kiến chính Keanu Reeves đối đầu Keanu Reeves.
          Lịch chiếu của John Wick: Chapter 4 hiện tại dự kiến ra mắt vào năm
          2023., hy vọng lần này chàng sát thủ với chiếc bút chì chết chóc sẽ
          không lỡ hẹn với khán giả.
        </p>
      </div>
    </div>
  );
}

export default MovieShowingPage;

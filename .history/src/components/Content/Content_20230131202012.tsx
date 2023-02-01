import React from "react";
import { Link } from "react-router-dom";
import MovieContent from "../MovieContent/MovieContent";

import MovieBlog from "../pages/MovieBlog/MovieBlog";
import TinKhuyenMai from "../TinKhuyenMai/TinKhuyenMai";
import "./Content.scss";
import CmtMovie from "../cmtMovie/CmtMovie";

function Content() {
  return (
    <div className="content">
      <MovieContent />
      <div className="movie-block">
        <div className="movie-block-left">
          <CmtMovie />
        </div>
        <div className="movie-block-right">
          <MovieBlog />
        </div>
      </div>
      <div className="movie-khuyenmai">
        <TinKhuyenMai />
      </div>
      <div className="galaxy-description">
        <Link to="">GALAXY CINEMA</Link>
        <span></span>
        <p>
          <strong>Galaxy Cinema</strong> là một trong những công ty tư nhân đầu tiên về điện ảnh
          được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10
          địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp
          chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,<strong> Galaxy Cinema</strong> còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất
          lượng dịch vụ hàng đầu.
        </p> <br />
        <p>
          Đến website <strong>galaxycine.vn</strong>, khách hàng sẽ dễ dàng tham khảo các phim
          hay nhất, phim mới nhất đang chiếu hoặc sắp chiếu luôn được cập nhật
          thường xuyên. Lịch chiếu tại tất cả hệ thống rạp chiếu phim của <strong>Galaxy Cinema</strong> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.
        </p><br />
        <p>
        Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái ngộ với Người Nhện qua Spider-Man: No Way Home hoặc Doctor Strange 2. Ngoài ra 007: No Time To Die, Turning Red, Minions: The Rise Of Gru..., là những tác phẩm hứa hẹn sẽ gây bùng nổ phòng vé trong thời gian tới.
        </p><br />
        <p>
        Giờ đây đặt vé tại <strong>Galaxy Cinema </strong>càng thêm dễ dàng chỉ với vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của <strong>Galaxy Cinema</strong>. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của Galaxy Cinema hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
        </p>
        <p>
        Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của <strong>Galaxy Cinema</strong> sẽ gửi ngay vào điện thoại và hộp mail của bạn.
        </p><br />
        <p>
        <strong>Galaxy Cinema </strong>luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho các khách hàng.
        </p><br />
        <p>
        Trang web <strong>galaxycine.vn</strong> còn có mục Góc Điện Ảnh - nơi lưu trữ dữ liệu về phim, diễn viên và đạo diễn, những bài viết chuyên sâu về điện ảnh, hỗ trợ người yêu phim dễ dàng hơn trong việc lựa chọn phim và bổ sung thêm kiến thức về điện ảnh cho bản thân. Ngoài ra, vào mỗi tháng, Galaxy Cinema cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng .
        </p><br />
        <p>
        Hiện nay, <strong>Galaxy Cinema</strong> đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất
        </p>
      </div>
    </div>
  );
}

export default Content;

import React from "react";
import { Link } from "react-router-dom";
import "./MovieBlog.scss";
import BuyFastTicket from "../../BuyFastTicket/BuyFastTicket";
import MovieShowingList2 from "../../MovieShowingList2/MovieShowingList2";

function MovieBlog() {
  return (
    <>
      <div className="movie-blog">
        <div className="movie-blog-left">
          <Link to="">Blog điện ảnh</Link>
          <span></span>
          <div className="movie-blog-left-item">
            <div className="movie-blog-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/11/30/450_1669779325936.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/movie-blog/avatar-va-nhung-tua-phim-bat-khan-gia-doi-dai-co"
                className="movie-blog-item-hover"
              ></a>
            </div>
            <div className="movie-blog-left-item-right">
              <a
                className="movie-blog-a"
                href="https://www.galaxycine.vn/movie-blog/avatar-va-nhung-tua-phim-bat-khan-gia-doi-dai-co"
              >
                Avatar Và Những Tựa Phim Bắt Khán Giả Đợi Dài Cổ
              </a>
              <div className="movie-blog-item-des">
                <div className="movie-blog-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 1k
                  </div>
                </div>
                <div className="movie-blog-item-view">
                  <i className="fa-regular fa-eye"></i>
                  795
                </div>
              </div>
              <div className="movie-blog-item-tt">
                Hãy cùng điểm danh những tựa phim từng chịu số phận “ngâm kho”
                trong lịch sử!
              </div>
            </div>
          </div>
          <div className="movie-blog-left-item">
            <div className="movie-blog-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/11/28/c68689cbe6e14fbf3dc6a69214dbd82a-706x397_1669620867264.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/movie-blog/the-dark-knight-tuong-dai-cua-the-loai-sieu-anh-hung"
                className="movie-blog-item-hover"
              ></a>
            </div>
            <div className="movie-blog-left-item-right">
              <a
                className="movie-blog-a"
                href="https://www.galaxycine.vn/movie-blog/the-dark-knight-tuong-dai-cua-the-loai-sieu-anh-hung"
              >
                The Dark Knight: Tượng Đài Của Thể Loại Siêu Anh Hùng
              </a>
              <div className="movie-blog-item-des">
                <div className="movie-blog-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 0k
                  </div>
                </div>
                <div className="movie-blog-item-view">
                  <i className="fa-regular fa-eye"></i>
                  263
                </div>
              </div>
              <div className="movie-blog-item-tt">
                Kể từ khi ra mắt của <strong>The Dark Knight</strong>, vẫn chưa có
                một tác phẩm nào về đề tài siêu anh hùng có thể vượt qua. Bộ phim
                hoàn hảo về mọi mặt từ cốt truyện, diễn xuất, và cả những tên tuổi
                xuất hiện trong bộ phim.
              </div>
            </div>
          </div>
          <div className="movie-blog-left-item">
            <div className="movie-blog-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/11/17/boc-trung-phuc-sinh-black-panther-wakanda-forever-9_1668663696350.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/movie-blog/boc-trung-phuc-sinh-black-panther-wakanda-forever"
                className="movie-blog-item-hover"
              ></a>
            </div>
            <div className="movie-blog-left-item-right">
              <a
                className="movie-blog-a"
                href="https://www.galaxycine.vn/movie-blog/boc-trung-phuc-sinh-black-panther-wakanda-forever"
              >
                [Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái Già Lắm Chiêu?
              </a>
              <div className="movie-blog-item-des">
                <div className="movie-blog-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 806
                  </div>
                </div>
                <div className="movie-blog-item-view">
                  <i className="fa-regular fa-eye"></i>
                  730
                </div>
              </div>
              <div className="movie-blog-item-tt">
                Cùng tìm hiểu những chi tiết ẩn thú vị của{" "}
                <strong>Black Panther: Wakanda Forever!</strong>
              </div>
            </div>
          </div>
          <div className="movie-blog-left-item">
            <div className="movie-blog-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/11/6/450_1667726503015.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://cdn.galaxycine.vn/media/2022/11/6/450_1667726503015.jpg"
                className="movie-blog-item-hover"
              ></a>
            </div>
            <div className="movie-blog-left-item-right">
              <a
                className="movie-blog-a"
                href="https://cdn.galaxycine.vn/media/2022/11/6/450_1667726503015.jpg"
              >
                Avatar Và Hậu Trường Chưa Kể (P1)
              </a>
              <div className="movie-blog-item-des">
                <div className="movie-blog-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 1.9k
                  </div>
                </div>
                <div className="movie-blog-item-view">
                  <i className="fa-regular fa-eye"></i>
                  1356
                </div>
              </div>
              <div className="movie-blog-item-tt">
                <strong> Avatar: The Way Of Water</strong> dự kiến ra mắt vào
                tháng 12.2022. Trước khi có cơ hội chiêm ngưỡng hành tinh Pandora
                tuyệt đẹp, hãy cùng khám phá một số thông tin hậu trường thú vị về
                Avatar.
              </div>
            </div>
          </div>
        </div>
        <div className="movie-blog-right">
            <div className="movie-blog-right-top">
              <BuyFastTicket />
            </div>
            <div className="movie-blog-right-bottom">
            <MovieShowingList2 />
            </div>
          </div>
      </div>
      <div className="movie-blog-content">
      <Link to="">GALAXY CINEMA</Link>
      <span></span>
      <p>
      Những khi tới rạp chiếu phim để thưởng thức các tác phẩm đang làm mưa làm gió, ít nhiều gì ở phía người xem luôn đọng lại nhiều cảm xúc và suy nghĩ. Có những phim khiến công chúng bàn tán suốt về ý nghĩa thật sự mà nó mang tới. Cũng có lúc người ta nhăn nhó bởi vì quá nhiều tình tiết phức tạp được cài cắm, bắt buộc cần có kiến thức nền về điện ảnh mới có thể thấu hiểu.
      </p>
      <br />
      <p>
      Điện ảnh ngay từ những ngày đầu hình thành đã được xem là loại hình giải trí vô cùng tiềm năng. Trải nghiệm do phim ảnh mang tới là muôn vạn điều thú vị. Có lẽ vậy nên với những ai chỉ xem phim trên tinh thần “vui là chính”, thì chỉ cần đấy không phải một tác phẩm quá tệ đã đủ làm hài lòng họ. Lại có khán giả cho rằng điện ảnh là một loại hình nghệ thuật bao quát hết tất cả các hình thức nghệ thuật khác, họ xem phim để khám phá, tìm tòi tầng tầng lớp lớp ý nghĩa ẩn sâu sau những câu thoại và cảnh quay.
      </p>
      <br />
      <p>
      Đắn đo khi lựa chọn phim để xem, hoặc muốn hiểu rõ hơn về các thông điệp ẩn mà đạo diễn cài cắm. Galaxy Cinema sẽ cho bạn vài gợi ý với những bài bình luận phim mới nhất, đi cùng các đánh giá kèm sự phân tích mang tính chuyên môn đối với những tác phẩm đang ra mắt tại rạp chiếu phim. Được viết bởi những cây bút có kinh nghiệm và chuyên sâu về kiến thức điện ảnh, bạn sẽ dễ dàng tìm được những bài bình luận hoặc phân tích với đa dạng thể loại từ hành động, tình cảm…, đến khoa học viễn tưởng, kinh dị.
      </p>
      </div>
    </>
  );
}

export default MovieBlog;

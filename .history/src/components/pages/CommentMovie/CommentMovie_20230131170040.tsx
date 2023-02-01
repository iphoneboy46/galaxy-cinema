import React from "react";
import { Link } from "react-router-dom";
import "./CommentMovie.scss";
import BuyFastTicket from "../../BuyFastTicket/BuyFastTicket";
import MovieShowingList2 from "../../MovieShowingList2/MovieShowingList2";

function CommentMovie() {
  return (
   <>
      <div className="comment-movie">
        <div className="comment-movie-left">
          <Link to="">BÌNH LUẬN PHIM</Link>
          <span></span>
          <div className="comment-movie-left-item">
            <div className="comment-movie-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/11/11/black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang-2_1668181423298.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/binh-luan-phim/review-black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang"
                className="comment-movie-item-hover"
              ></a>
            </div>
            <div className="comment-movie-left-item-right">
              <a
                className="comment-movie-a"
                href="https://www.galaxycine.vn/binh-luan-phim/review-black-panther-wakanda-forever-bao-den-tim-duoc-nguoi-ke-vi-xung-dang"
              >
                [Review] Black Panther Wakanda Forever: Báo Đen Tìm Được Người Kế
                Vị Xứng Đáng?
              </a>
              <div className="comment-movie-item-des">
                <div className="comment-movie-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 2.4k
                  </div>
                </div>
                <div className="comment-movie-item-view">
                  <i className="fa-regular fa-eye"></i>
                  2957
                </div>
                <div className="comment-movie-item-rating">
                  <i className="fa-solid fa-star"></i>
                  8.7/<p>10(525)</p>
                </div>
              </div>
              <div className="comment-movie-item-tt">
                Mất đi ngôi sao quan trọng nhất, Marvel gặp rất nhiều khó khăn khi
                thực hiện <strong>Black Panther: Wakanda Forever!</strong>
              </div>
            </div>
          </div>
          <div className="comment-movie-left-item">
            <div className="comment-movie-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/10/27/black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong--5_1666852856433.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/binh-luan-phim/review-black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong"
                className="comment-movie-item-hover"
              ></a>
            </div>
            <div className="comment-movie-left-item-right">
              <a
                className="comment-movie-a"
                href="https://www.galaxycine.vn/binh-luan-phim/review-black-adam-cuu-tinh-cho-vu-tru-dc-mo-rong"
              >
                [Review] Black Adam: Cứu Tinh Cho Vũ Trụ DC Mở Rộng?
              </a>
              <div className="comment-movie-item-des">
                <div className="comment-movie-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 1.6k
                  </div>
                </div>
                <div className="comment-movie-item-view">
                  <i className="fa-regular fa-eye"></i>
                  2733
                </div>
                <div className="comment-movie-item-rating">
                  <i className="fa-solid fa-star"></i>
                  8.0/<p>10(653)</p>
                </div>
              </div>
              <div className="comment-movie-item-tt">
                15 năm kể từ ngày được chọn diễn<strong> Black Adam</strong>,
                Dwayne Johnson và các nhà làm phim WB rốt cuộc đã thành công đưa
                gã mặc đồ đen lên màn ảnh rộng.
              </div>
            </div>
          </div>
          <div className="comment-movie-left-item">
            <div className="comment-movie-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/10/17/co-gai-tu-qua-khu-dap-do-hoan-toan-gai-gia-lam-chieu--1_1665989638939.jpeg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/binh-luan-phim/co-gai-tu-qua-khu-dap-do-hoan-toan-gai-gia-lam-chieu"
                className="comment-movie-item-hover"
              ></a>
            </div>
            <div className="comment-movie-left-item-right">
              <a
                className="comment-movie-a"
                href="https://www.galaxycine.vn/binh-luan-phim/co-gai-tu-qua-khu-dap-do-hoan-toan-gai-gia-lam-chieu"
              >
                [Review] Cô Gái Từ Quá Khứ: Đạp Đổ Hoàn Toàn Gái Già Lắm Chiêu?
              </a>
              <div className="comment-movie-item-des">
                <div className="comment-movie-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 3.4k
                  </div>
                </div>
                <div className="comment-movie-item-view">
                  <i className="fa-regular fa-eye"></i>
                  8965
                </div>
                <div className="comment-movie-item-rating">
                  <i className="fa-solid fa-star"></i>
                  7.2/<p>10(379)</p>
                </div>
              </div>
              <div className="comment-movie-item-tt">
                <strong>Cô Gái Từ Quá Khứ</strong> giúp bộ đôi Bảo Nhân – Nam Cito
                mở màn Vũ trụ Mỹ Nhân thành công nhưng lại "vắt chanh bỏ vỏ” Vũ
                trụ Gái Già?
              </div>
            </div>
          </div>
          <div className="comment-movie-left-item">
            <div className="comment-movie-left-item-img">
              <div>
                <img
                  src="https://cdn.galaxycine.vn/media/2022/10/10/450_1665404205929.jpg"
                  alt=""
                />
              </div>
              <a
                href="https://www.galaxycine.vn/binh-luan-phim/review-cuoi-loi-nguyen-se-khong-dung-lai"
                className="comment-movie-item-hover"
              ></a>
            </div>
            <div className="comment-movie-left-item-right">
              <a
                className="comment-movie-a"
                href="https://www.galaxycine.vn/binh-luan-phim/review-cuoi-loi-nguyen-se-khong-dung-lai"
              >
                [Review] Cười: Lời Nguyền Sẽ Không Dừng Lại!
              </a>
              <div className="comment-movie-item-des">
                <div className="comment-movie-item-like">
                  <div className="like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    Thích 623
                  </div>
                </div>
                <div className="comment-movie-item-view">
                  <i className="fa-regular fa-eye"></i>
                  3006
                </div>
                <div className="comment-movie-item-rating">
                  <i className="fa-solid fa-star"></i>
                  8.3/<p>10(153)</p>
                </div>
              </div>
              <div className="comment-movie-item-tt">
                Nếu chẳng may bị ám bởi một lời nguyền ma quái, không thể sống sót
                quá một tuần thì phải làm thế nào đây?
              </div>
            </div>
          </div>
        </div>
        <div className="comment-movie-right">
          <div className="comment-movie-right-top">
            <BuyFastTicket />
          </div>
          <div className="comment-movie-right-bottom">
          <MovieShowingList2 />
          </div>
        </div>
      </div>
      <div className="comment-movie-content">
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

export default CommentMovie;

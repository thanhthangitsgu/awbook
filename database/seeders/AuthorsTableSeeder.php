<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $author = [
            [
                'name'=>'Nguyễn Nhật Ánh',
                'pseudonym'=>'Chu Đình Ngạn',
                'gender'=>'Nam',
                'year_of_birth'=>'1955',
                'year_of_death'=>null,
                'native_place'=>'Việt Nam',
                'introduce'=>'Năm 2015 là một năm đại thắng của nhà văn Nguyễn Nhật Ánh với sự thành công của bộ phim được chuyển thể từ tác phẩm đình đám cùng tên "Tôi thấy hoa vàng trên cỏ xanh". Bộ phim thu về doanh thu khủng nhờ sự hấp dẫn mà câu chuyện mang lại. Bên cạnh sự phủ sóng mạnh mẽ của “Tôi thấy hoa vàng trên cỏ xanh”, những cuốn sách khác của nhà văn Nguyễn Nhật Ánh như: “Bảy bước tới mùa hè”, “Cô gái đến từ hôm qua”… cũng nhanh chóng trở thành “best-seller” ngay từ khi mới ra mắt. Mắt biếc là tiểu thuyết của nhà văn Nguyễn Nhật Ánh trong loạt truyện viết về tình yêu thanh thiếu niên của tác giả này cùng với Thằng quỷ nhỏ, Cô gái đến từ hôm qua,... Đây được xem là một trong những tác phẩm tiêu biểu của Nguyễn Nhật Ánh, từng được dịch giả Kato Sakae dịch để giới thiệu với độc giả Nhật Bản với tựa đề Tsuburana hitomi. Tác phẩm này được chuyển thể thành phim do Victor Vũ làm đạo diễn, khởi chiếu chính thức vào ngày 20 tháng 12 năm 2019.'
            ],
            [
                'name'=>'Hạ Trịnh Minh Trang',
                'pseudonym'=>'Trang Hạ',
                'gender'=>'Nữ',
                'year_of_birth'=>'1975',
                'year_of_death'=>null,
                'native_place'=>'Việt Nam',
                'introduce'=>'Các tác phẩm của cô luôn đề cao giá trị nhân cách của người phụ nữ và đề cập đến những số phận phụ nữ bất hạnh nên luôn được độc giả hết sức đón nhận. Dẫu vậy, cô vẫn nhận được một vài ý kiến trái chiều cho rằng các tác phẩm của chị không mang tính chất nghệ thuật văn học mà chỉ là một thứ văn học rẻ tiền, mang tính giải trí. Trước luồng dư luận như vậy, chị vẫn thẳng thắn đón nhận mọi ý kiến đóng góp và đứng lên bảo vệ lập trường của bản thân. Chị cho rằng mình đang hoạt động văn học một cách nghiêm túc, cố gắng đem lại những giá trị nhất định cho xã hội và chị hoàn toàn tự hào vì điều đó.'
            ],
            [
                'name'=>'Nguyễn Phong Việt',
                'pseudonym'=>'Me Quê',
                'gender'=>'Nam',
                'year_of_birth'=>'1980',
                'year_of_death'=>null,
                'native_place'=>'Tuy Hòa - Phú Yên - Việt Nam',
                'introduce'=>'Nguyễn Phong Việt là một tác giả trẻ được nhiều người biết đến và yêu mến qua các tác phẩm nổi tiếng như "Đi qua thương nhớ", "Sinh ra là để cô đơn" hay mới đây nhất là "Sống một cuộc đời bình thường" cũng được nhiều người đón nhận. Dù đạt được nhiều thành công trong vai trò là một nhà thơ nhưng Nguyễn Phong Việt từng tâm sự anh chỉ là một người làm thơ nghiệp dư, chỉ viết theo những cảm xúc của riêng mình.'
            ],
            [
                'name'=>'Quách Lê Anh Khang',
                'pseudonym'=>'Anh Khang',
                'gender'=>'Nam',
                'year_of_birth'=>'1987',
                'year_of_death'=>null,
                'native_place'=>'TP.Hồ Chí Minh - Việt Nam',
                'introduce'=>'Xuất thân là một học sinh chuyên Văn của trường Trung học Phổ thông Chuyên Lê Hồng Phong Tp. Hồ Chí Minh, Anh Khang được nhiều bạn bè đồng trang lứa biết đến với các thành tích nổi bật như Huy chương vàng Olympics Truyền thống 30/4, Thủ khoa kỳ thi Học sinh Giỏi Thành phố, Giải III Học sinh Giỏi Quốc gia và được tuyển thẳng vào Đại Học Khoa học Xã hội & Nhân Văn.'
            ],
            [
                'name'=>'Lê Văn Trương',
                'pseudonym'=>'Hamlet Trương',
                'gender'=>'Nam',
                'year_of_birth'=>'1988',
                'year_of_death'=>NULL,
                'native_place'=>'TP.Hồ Chí Minh - Việt Nam',
                'introduce'=>'Hamlet Trương hoạt động ở nhiều lĩnh vực: ca sĩ, nhạc sĩ, nhà văn và MC. Hamlet Trương bắt đầu sáng tác từ 2006, những ca khúc mang về ít nhiều thành công cho nhiều ca sĩ. Năm 2012 bắt đầu sự nghiệp ca hát và xây dựng hình ảnh một chàng trai lãng mạn hát các ca khúc tự sáng tác. Bên cạnh đó Hamlet Trương còn là một trong những nhà văn trẻ có lượng sách tiêu thụ lớn nhất của Việt Nam.'
            ],
            [
                'name'=>'Cao Bích Thủy',
                'pseudonym'=>'Iris Cao',
                'gender'=>'Nữ',
                'year_of_birth'=>'1988',
                'year_of_death'=>null,
                'native_place'=>'TP.Hồ Chí Minh - Việt Nam',
                'introduce'=>'Cô là nhà văn trẻ được bạn đọc yêu thích, được đánh giá là cô gái có ngoại hình và tính cách không liên quan. Vẻ ngoài mạnh mẽ, cá tính - từng là vận động viên bóng rổ thi đấu dưới màu áo đội tuyển thành phố, nhưng cô lại có tâm hồn đa cảm. Nếu bạn làm fan trung thành của các tác phẩm văn học hiện đại thấm đẫm những cảm xúc chân thật về tình yêu và cuộc sống thì không thể nào bỏ qua nhà văn Iris Cao. Với trải nghiệm phong phú trong cuộc sống, nữ nhà văn đã viết nên những quyển sách đầy triết lý, mang đến những cảm xúc chân thật cho đọc giả.'
            ],
            [
                'name'=>'Nguyễn Ngọc Sơn',
                'pseudonym'=>'Sơn Paris',
                'gender'=>'Nam',
                'year_of_birth'=>'1994',
                'year_of_death'=>null,
                'native_place'=>'Việt Nam',
                'introduce'=>'Từng là thủ khoa Học viện Ngoại giao và gặt hái được nhiều thành tích đáng nể, nhưng Sơn Paris lựa chọn viết sách là con đường lớn nhất cho mình. Sách của Sơn Paris luôn nằm trong những tác phẩm được đón đợi nhất, đặc biệt phù hợp với lứa tuổi học sinh và độc giả nữ.'
            ],
            [
                'name'=>'Dương Thụy',
                'pseudonym'=>'',
                'gender'=>'Nữ',
                'year_of_birth'=>'1975',
                'year_of_death'=>null,
                'native_place'=>'TP.Hồ Chí Minh - Việt Nam',
                'introduce'=>'Được sinh ra trong một gia đình tri thức và có khiếu viết văn, ngay từ năm lớp 10, Dương Thụy đã có truyện ngắn đầu tay Búp bê băng giá. Cô tốt nghiệp Cử Nhân văn chương Pháp tại Đại Học Khoa Học Xã Hội và Nhân Văn TP.HCM và thạc sĩ Quản trị kinh doanh tại Trung Tâm Pháp - Việt Đào Tạo về Quản Lý. Dương Thụy cũng từng nhận được học bổng của chính phủ Bỉ và tốt nghiệp Thạc sĩ Quản Trị Kinh Doanh của trường Đại Học Liege năm 2002. Cô từng có thời gian làm phóng viên của báo Sinh Viên Việt Nam - Hoa Học Trò nhưng đã dừng việc viết báo mà chuyển sang môi trường doanh nghiệp với nhiều thử thách hơn.'
            ],
            [
                'name'=>'Nguyễn Hoàng Nguyên',
                'pseudonym'=>'Rosie Nguyễn',
                'gender'=>'Nữ',
                'year_of_birth'=>'1987',
                'year_of_death'=>null,
                'native_place'=>'Việt Nam',
                'introduce'=>'Sau khi tốt nghiệp chuyên ngành Kinh tế đối ngoại tại Đại học Ngoại Thương, Rosie Nguyễn đã là việc cho 3 công ty khác nhau trong vòng 6 năm. Tuy có công việc ổn định, nhưng Rosie Nguyễn cảm thấy cuộc sống của mình nhàm chán và đơn điệu. Cô chỉ biết về lĩnh vực mà mình được đào tạo, không có chút kiến thức nào về các vấn đề xã hội, cô cảm thấy bản thân vô cùng lạc hậu. Do đó, cô bắt đầu phát triển bản thân thông qua việc đọc.'
            ],
        ];
  
        foreach ($author as $key => $value) {
            Author::create($value);
        }
    }
}
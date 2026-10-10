// Tiếng Việt. Cùng cấu trúc với ko.mjs / en.mjs.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 ngôn ngữ (tiếng Anh, Hàn, Nhật, Trung giản thể và phồn thể, Đức, Pháp, Tây Ban Nha, Bồ Đào Nha, Ý)';
const ONDEVICE = 'Xử lý trên thiết bị · không kết nối mạng';
const ONE_TIME = 'Mua một lần · tối đa ₩10,000';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Kết nối thị trường với thế giới.',
  translationNote: 'Trang này là bản dịch. Nếu có khác biệt so với bản gốc tiếng Hàn, bản gốc tiếng Hàn được ưu tiên áp dụng.',

  ui: {
    skip: 'Chuyển đến nội dung', menu: 'Menu', language: 'Ngôn ngữ', mainNav: 'Chính', breadcrumb: 'Đường dẫn', toc: 'Mục lục', homeAria: 'Trang chủ EarnToLink',
    nav: { services: 'Dịch vụ', products: 'Sản phẩm', about: 'Giới thiệu', principles: 'Cách chúng tôi làm việc', news: 'Tin tức', contact: 'Liên hệ' },
    home: 'Trang chủ', privacy: 'Chính sách quyền riêng tư', terms: 'Điều khoản', rss: 'RSS',
    footer: { services: 'Dịch vụ', products: 'Sản phẩm', company: 'Công ty', policy: 'Chính sách' },
    biz: { name: 'Tên doanh nghiệp', rep: 'Người đại diện', no: 'Mã số đăng ký kinh doanh', tax: 'Loại thuế', kinds: 'Ngành nghề', mail: 'Email' },
    rights: '© 2026 EarnToLink. Bảo lưu mọi quyền.',
    view: 'Chi tiết', all: 'Tất cả sản phẩm', allServices: 'Tất cả dịch vụ', email: 'Email', mailBtn: 'Gửi email cho chúng tôi', projectBtn: 'Bắt đầu dự án',
    platform: 'Nền tảng', status: 'Trạng thái', features: 'Tính năng', specs: 'Thông số', related: 'Sản phẩm khác', privacyNote: 'Quyền riêng tư',
    productIllustration: 'Hình minh họa sản phẩm: ',
    heroLabel: 'Hình minh họa EarnToLink kết nối với các thị trường bằng 14 ngôn ngữ',
    newsFeedTitle: 'Tin tức EarnToLink', newsFeedDesc: 'Tin tức từ EarnToLink (언투링크)',
    notFound: { title: 'Không tìm thấy trang', text: 'Địa chỉ đã thay đổi hoặc trang không tồn tại.', home: 'Về trang chủ' },
  },

  status: { soon: 'Sắp ra mắt', dev: 'Đang phát triển', live: 'Đã ra mắt' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Người nộp thuế thông thường (Hàn Quốc)',
    form: 'Loại hình doanh nghiệp', formValue: 'Doanh nghiệp cá nhân (Hàn Quốc)', kindsLabel: 'Ngành nghề đã đăng ký', site: 'Website',
    kinds: ['Phát triển và cung cấp phần mềm ứng dụng (chính)', 'Bán lẻ thương mại điện tử', 'Môi giới bán lẻ thương mại điện tử'],
  },

  categories: {
    mobile: { name: 'Ứng dụng di động', plat: 'Android · iOS' },
    desktop: { name: 'Ứng dụng máy tính', plat: 'macOS · Windows' },
  },

  home: {
    title: 'EarnToLink (언투링크) | Kết nối thị trường với thế giới',
    desc: 'EarnToLink kết nối thị trường với thế giới: phát triển sản phẩm web, di động và máy tính, chuyển đổi AI và tự động hóa, bản địa hóa sang 14 ngôn ngữ, ra mắt trên các kho ứng dụng toàn cầu, tích hợp và vận hành thương mại.',
    eyebrow: 'Phần mềm · Chuyển đổi AI · Mở rộng toàn cầu',
    h1: 'Kết nối thị trường<br>với thế giới.',
    lead: 'Từ lên kế hoạch, phát triển đến tự động hóa AI, bản địa hóa và ra mắt trên các kho ứng dụng toàn cầu, một đội ngũ đồng hành cùng sản phẩm của bạn đến cùng.',
    meta: ['Web · Di động · Máy tính', 'AI · Tự động hóa', '14 ngôn ngữ'],
    stats: [['14', 'Ngôn ngữ website'], ['6', 'Lĩnh vực dịch vụ'], ['5', 'Sản phẩm tự phát triển'], ['4', 'Kho ứng dụng phát hành']],
    services: { eyebrow: 'Dịch vụ', title: 'Sáu lĩnh vực dịch vụ', text: 'Chúng tôi xây dựng, tự động hóa, đưa ra thế giới và giúp sản phẩm tiếp tục phát triển.' },
    why: { eyebrow: 'Vì sao chọn EarnToLink', title: 'Hướng đến thị trường toàn cầu ngay từ đầu', text: 'Sáu cam kết chúng tôi giữ trong mọi dự án.' },
    how: { eyebrow: 'Quy trình', title: 'Từ buổi trao đổi đầu tiên đến vận hành', text: 'Sáu bước, mỗi bước được xác nhận trước khi sang bước tiếp theo.' },
    apps: { eyebrow: 'Sản phẩm tự phát triển', title: 'Sản phẩm do chúng tôi tự xây dựng', text: 'Các ứng dụng của riêng chúng tôi, làm theo cùng tiêu chuẩn với dự án cho khách hàng. Tất cả sắp ra mắt.' },
    co: { eyebrow: 'Công ty', title: 'EarnToLink', text: 'Doanh nghiệp cá nhân tại Hàn Quốc. Phát triển và cung cấp phần mềm ứng dụng.' },
    news: { eyebrow: 'Tin tức', title: 'Tin mới nhất' },
  },

  services: {
    title: 'Dịch vụ',
    desc: 'Dịch vụ của EarnToLink: phát triển sản phẩm, chuyển đổi AI và tự động hóa, bản địa hóa, ra mắt trên kho ứng dụng toàn cầu, thương mại và bán hàng xuyên biên giới, vận hành và tăng trưởng.',
    eyebrow: 'Dịch vụ', h1: 'Dịch vụ', lead: 'Sáu lĩnh vực. Chỉ chọn những gì bạn cần.',
    whoLabel: 'Phù hợp khi', scopeLabel: 'Chúng tôi làm gì', deliverLabel: 'Sản phẩm bàn giao', otherLabel: 'Dịch vụ khác',
    items: {
      product: {
        name: 'Phát triển sản phẩm', short: 'Dịch vụ web, ứng dụng di động, ứng dụng máy tính và hệ thống nội bộ, từ lên kế hoạch đến ra mắt.',
        lead: 'Chúng tôi biến ý tưởng thành sản phẩm mà người dùng thực sự dùng. Lên kế hoạch, thiết kế màn hình, thiết kế hình ảnh, phát triển và kiểm thử diễn ra như một quy trình liền mạch.',
        who: ['Bạn đang xây dựng một dịch vụ mới từ đầu', 'Bạn muốn ra mắt quy mô nhỏ trước để thử thị trường', 'Bạn muốn chuyển công việc từ bảng tính và chat sang một hệ thống thực thụ'],
        scope: [
          ['Dịch vụ web', 'Website dịch vụ, tài khoản và thanh toán, trang quản trị.'],
          ['Ứng dụng di động', 'Ứng dụng Android và iOS, xây dựng từ một mã nguồn chung.'],
          ['Ứng dụng máy tính', 'Ứng dụng Windows và macOS, gồm cả công cụ về tệp và ổ đĩa.'],
          ['Hệ thống nội bộ', 'Quản lý công việc, quyết toán, kho hàng và công cụ chăm sóc khách hàng.'],
        ],
        deliver: ['Danh sách tính năng và thiết kế màn hình', 'Mã nguồn và cấu hình triển khai', 'Kiểm thử tự động', 'Hướng dẫn vận hành'],
      },
      ax: {
        name: 'Chuyển đổi AI và tự động hóa', short: 'Tác tử AI và tự động hóa giúp giảm công việc lặp lại và thay đổi cách đội ngũ vận hành.',
        lead: 'Chúng tôi tìm ra những công việc lặp lại và chuyển sang AI và tự động hóa. Một bản demo nhỏ hoạt động được sẽ chứng minh hiệu quả trước khi phát triển đầy đủ.',
        who: ['Đội ngũ của bạn lặp lại cùng những câu trả lời hỗ trợ, tài liệu hoặc việc làm sạch dữ liệu', 'Bạn muốn tìm kiếm tài liệu và dữ liệu nội bộ bằng AI', 'Mọi người phải sao chép cùng một thông tin giữa nhiều công cụ'],
        scope: [
          ['Tác tử AI', 'Trả lời bước đầu, tóm tắt, soạn thảo và phân loại.'],
          ['Tự động hóa tài liệu và dữ liệu', 'Đọc biểu mẫu, làm sạch bảng dữ liệu, tạo báo cáo.'],
          ['Tìm kiếm tri thức nội bộ', 'Câu trả lời dựa trên chính tài liệu của bạn (RAG).'],
          ['Tích hợp công cụ', 'Liên kết tự động giữa email, chat, bảng tính và hệ thống nội bộ.'],
        ],
        deliver: ['Đánh giá quy trình làm việc', 'Một bản demo hoạt động được', 'Tự động hóa vận hành thực tế và hướng dẫn sử dụng', 'Chỉ số để đo hiệu quả'],
      },
      localization: {
        name: 'Bản địa hóa và mở rộng toàn cầu', short: 'Đưa dịch vụ của bạn sang từ 14 ngôn ngữ trở lên và được tìm thấy ở từng quốc gia.',
        lead: 'Không chỉ là dịch thuật. Chúng tôi điều chỉnh cấu trúc ngôn ngữ, định dạng ngày, số và tiền tệ, cùng khả năng hiển thị trên công cụ tìm kiếm theo từng quốc gia.',
        who: ['Dịch vụ của bạn chỉ có một ngôn ngữ và bạn muốn mở ra nước ngoài', 'Bạn đã dịch nhưng công cụ tìm kiếm nước ngoài không tìm thấy bạn', 'Bạn cần thanh toán và định dạng khác nhau theo từng quốc gia'],
        scope: [
          ['Cấu trúc đa ngôn ngữ', 'Trích xuất chuỗi văn bản, chuyển đổi ngôn ngữ, URL theo từng ngôn ngữ.'],
          ['SEO đa ngôn ngữ', 'hreflang, sitemap theo từng ngôn ngữ, đăng ký với công cụ tìm kiếm.'],
          ['Định dạng địa phương', 'Ngày, số, tiền tệ và địa chỉ.'],
          ['Kiểm soát chất lượng bản dịch', 'Bảng thuật ngữ và kiểm tra tự động các chuỗi bị thiếu theo từng ngôn ngữ.'],
        ],
        deliver: ['Trang và URL theo từng ngôn ngữ', 'Bảng thuật ngữ', 'Công cụ kiểm tra chuỗi theo từng ngôn ngữ', 'Đăng ký với công cụ tìm kiếm'],
      },
      launch: {
        name: 'Ra mắt trên kho ứng dụng toàn cầu', short: 'Ra mắt và xử lý quy trình duyệt trên App Store, Google Play, Microsoft Store và Mac App Store.',
        lead: 'Chúng tôi lo việc đăng ký lên kho ứng dụng, phản hồi kết quả duyệt và trang cửa hàng bằng từng ngôn ngữ, rồi tiếp tục phát hành bản cập nhật sau khi ra mắt.',
        who: ['Bạn đã có ứng dụng nhưng việc đăng ký lên kho ứng dụng bị kẹt', 'Ứng dụng của bạn bị từ chối khi duyệt', 'Bạn cần trang cửa hàng cho từng quốc gia'],
        scope: [
          ['Đăng ký lên kho ứng dụng', 'Thiết lập tài khoản nhà phát triển, thông tin ứng dụng, xếp hạng độ tuổi, nhãn quyền riêng tư.'],
          ['Xử lý quy trình duyệt', 'Kiểm tra chính sách, phân tích lý do bị từ chối, sửa và gửi lại.'],
          ['Bản địa hóa trang cửa hàng', 'Mô tả và ảnh chụp màn hình theo từng ngôn ngữ.'],
          ['Thiết lập thanh toán', 'Mua hàng trong ứng dụng, bậc giá, định giá theo quốc gia.'],
        ],
        deliver: ['Ứng dụng của bạn được đăng trên các kho ứng dụng', 'Trang cửa hàng theo từng ngôn ngữ', 'Lịch sử duyệt', 'Quy trình phát hành bản cập nhật'],
      },
      commerce: {
        name: 'Thương mại và bán hàng xuyên biên giới', short: 'Kết nối sản phẩm của bạn với khách hàng ở nước ngoài bằng kênh bán hàng và công cụ vận hành.',
        lead: 'Chúng tôi xây dựng cửa hàng trực tuyến, dữ liệu sản phẩm đa ngôn ngữ cùng các tích hợp thanh toán, vận chuyển và kế toán mà việc bán hàng ra nước ngoài cần.',
        who: ['Bạn đang bán trong nước và muốn bán ra nước ngoài', 'Bạn phải chỉnh sửa dữ liệu sản phẩm riêng cho từng kênh', 'Bạn đối chiếu đơn hàng, tồn kho và quyết toán thủ công'],
        scope: [
          ['Kênh bán hàng', 'Cửa hàng riêng của bạn được kết nối với các sàn thương mại điện tử nước ngoài.'],
          ['Dữ liệu sản phẩm đa ngôn ngữ', 'Tên, mô tả, tùy chọn và bảng kích cỡ theo từng ngôn ngữ.'],
          ['Đồng bộ đơn hàng và tồn kho', 'Tự động đồng bộ đơn hàng và hàng tồn kho giữa các kênh.'],
          ['Quyết toán và báo cáo', 'Tự động tổng hợp doanh thu, phí và các khoản chi trả.'],
        ],
        deliver: ['Kênh bán hàng và các tích hợp', 'Dữ liệu sản phẩm đa ngôn ngữ', 'Đồng bộ đơn hàng và tồn kho', 'Báo cáo quyết toán'],
      },
      operate: {
        name: 'Vận hành và tăng trưởng', short: 'Sau khi ra mắt: sửa lỗi, cải thiện tốc độ, thêm tính năng, rà soát chi phí.',
        lead: 'Ra mắt chỉ là bắt đầu. Chúng tôi theo dõi các chỉ số, giảm lỗi, bổ sung những gì người dùng cần và kiểm soát chi phí hạ tầng.',
        who: ['Bạn cần người tiếp quản một dịch vụ do đơn vị khác xây dựng', 'Lỗi và màn hình chậm cứ lặp lại', 'Chi phí máy chủ liên tục tăng'],
        scope: [
          ['Xử lý lỗi', 'Đọc nhật ký lỗi, tìm nguyên nhân, phát hành bản sửa.'],
          ['Hiệu năng', 'Màn hình và truy vấn nhanh hơn.'],
          ['Phát triển tính năng', 'Thêm và lược bớt tính năng dựa trên dữ liệu sử dụng.'],
          ['Rà soát chi phí', 'Xem xét việc sử dụng đám mây và tiết kiệm chi phí.'],
        ],
        deliver: ['Báo cáo vận hành hằng tháng', 'Nhật ký xử lý lỗi', 'Các bản phát hành cải tiến', 'Kết quả rà soát chi phí'],
      },
    },
  },

  why: [
    ['Đa ngôn ngữ ngay từ đầu', 'Cấu trúc đa ngôn ngữ được đưa vào từ giai đoạn thiết kế, nên thêm ngôn ngữ về sau không bao giờ phải xây dựng lại.'],
    ['Thống nhất phạm vi trước', 'Tính năng, tiến độ và chi phí được chốt bằng văn bản trước khi bắt đầu. Mọi thay đổi đều được thống nhất trước khi thực hiện.'],
    ['Bạn sở hữu mã nguồn và tài khoản', 'Mã nguồn, tên miền, tài khoản kho ứng dụng và đám mây được tạo dưới tên bạn và bàn giao cho bạn.'],
    ['Kiểm thử nằm trong bàn giao', 'Đã bao gồm kiểm thử tự động cho các tính năng cốt lõi và kiểm tra chuỗi bị thiếu theo từng ngôn ngữ.'],
    ['Tiến độ hằng tuần', 'Mỗi tuần bạn được xem các màn hình đang hoạt động và phần việc còn lại.'],
    ['Chỉ dữ liệu cần thiết', 'Dữ liệu cá nhân được giới hạn ở mức các tính năng cần, và xử lý trên thiết bị bất cứ khi nào có thể.'],
  ],

  steps: [
    ['Tư vấn', 'Mục tiêu, thị trường mục tiêu và thời hạn.'],
    ['Phạm vi và báo giá', 'Danh sách tính năng, tiến độ và chi phí bằng văn bản.'],
    ['Demo', 'Các màn hình và luồng cốt lõi chạy được trước tiên.'],
    ['Xây dựng và kiểm thử', 'Cập nhật hằng tuần, kiểm thử tự động.'],
    ['Bản địa hóa và ra mắt', 'Trang theo từng ngôn ngữ, đăng ký kho ứng dụng và công cụ tìm kiếm.'],
    ['Vận hành và cải tiến', 'Chỉ số, xử lý lỗi, tăng trưởng.'],
  ],

  cta: { title: 'Bắt đầu dự án', text: 'Hãy gửi email cho chúng tôi về điều bạn muốn xây dựng, thị trường mục tiêu và mốc thời gian.' },

  products: {
    title: 'Sản phẩm',
    desc: 'Sản phẩm tự phát triển của EarnToLink: hai ứng dụng di động (Roll Tidy, Roll Flick) và ba ứng dụng máy tính (Space Map, Dupeless, Archive Fix). Tất cả sắp ra mắt.',
    eyebrow: 'Sản phẩm tự phát triển', h1: 'Sản phẩm', lead: 'Hai ứng dụng di động và ba ứng dụng máy tính. Tất cả sắp ra mắt.', tabsLabel: 'Danh mục',
    groups: { mobile: 'Android · iOS. Dọn dẹp ảnh.', desktop: 'macOS · Windows. Ổ đĩa, tệp, tệp nén.' },
    prin: { eyebrow: 'Nguyên tắc sản phẩm', title: 'Nhỏ gọn và trung thực', text: 'Chung cho cả năm ứng dụng của chúng tôi.' },
    principles: [
      ['Trên thiết bị', 'Tệp và ảnh chỉ được phân tích trên thiết bị. Không có gì được gửi lên máy chủ.'],
      ['Không quảng cáo, không theo dõi', 'Không quảng cáo, phân tích, báo cáo sự cố hay tài khoản.'],
      ['Mua một lần', 'Không đăng ký định kỳ. Tối đa ₩10,000 cho mỗi ứng dụng.'],
      ['Xóa có thể khôi phục', 'Tệp và ảnh đã xóa được chuyển vào thùng rác và có thể khôi phục.'],
    ],
    featTitle: 'Tính năng của {name}',
    privacy: {
      mobile: 'Ảnh chỉ được phân tích trên thiết bị và không bao giờ được gửi đi đâu.',
      desktop: 'Tệp chỉ được xử lý trên thiết bị và không bao giờ được gửi đi đâu.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Ảnh giống nhau, ảnh mờ, ảnh chụp màn hình và video dung lượng lớn',
        lead: 'Phân tích thư viện ảnh ngay trên thiết bị và gom những thứ có thể bỏ đi theo từng danh mục.',
        features: [
          ['Nhóm ảnh giống nhau', 'Gom các ảnh chụp trong vòng 90 giây và trông giống nhau, dựa trên mã băm chênh lệch 64 bit.'],
          ['Ảnh đẹp nhất', 'Gợi ý giữ lại ảnh nét nhất trong mỗi nhóm. Ảnh yêu thích không bao giờ là ứng viên để xóa.'],
          ['Ảnh mờ', 'Tìm ảnh mờ so với toàn bộ thư viện. Ảnh quá tối hoặc quá sáng sẽ được bỏ qua.'],
          ['Ảnh chụp màn hình', 'Thu thập ảnh từ album ảnh chụp màn hình.'],
          ['Video dung lượng lớn', 'Sắp xếp video theo dung lượng ước tính, lớn nhất trước.'],
          ['Xóa có thể khôi phục', 'Chuyển mục vào thùng rác của Android hoặc Đã xóa gần đây của iOS (30 ngày).'],
        ],
        specs: [['Nền tảng', 'Android · iOS'], ['Xử lý', ONDEVICE], ['Xóa', 'Chuyển vào thùng rác hệ thống'], ['Ngôn ngữ', APP_LANGS], ['Giá', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Vuốt qua từng ảnh một: giữ lại hoặc xóa',
        lead: 'Chia ảnh theo tháng chụp, rồi để bạn quyết định từng ảnh một.',
        features: [
          ['Theo tháng', 'Nhóm ảnh theo tháng chụp, gần đây nhất trước.'],
          ['Vuốt', 'Vuốt trái để đánh dấu xóa, vuốt phải để giữ lại.'],
          ['Hoàn tác', 'Hoàn lại quyết định gần nhất.'],
          ['Xem lại trước khi xóa', 'Cuối mỗi tháng, xem lại các ảnh đã đánh dấu rồi dọn dẹp trong một bước.'],
          ['Tiến độ', 'Số ảnh đã dọn, chuỗi ngày liên tiếp và các tháng đã hoàn thành. Chỉ lưu trên thiết bị.'],
          ['Trên thiết bị', 'Ảnh không bao giờ được gửi lên máy chủ.'],
        ],
        specs: [['Nền tảng', 'Android · iOS'], ['Xử lý', ONDEVICE], ['Xóa', 'Chuyển vào thùng rác hệ thống'], ['Ngôn ngữ', APP_LANGS], ['Giá', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Sơ đồ treemap các thư mục và tệp đang chiếm dung lượng ổ đĩa',
        lead: 'Quét một thư mục và hiển thị dung lượng bằng diện tích, để dọn những mục lớn nhất trước.',
        features: [
          ['Treemap', 'Treemap dạng squarified, tô màu theo loại tệp: video, hình ảnh, âm thanh, tài liệu, tệp nén, chương trình, khác.'],
          ['Ba chế độ xem', 'Bản đồ, các tệp lớn nhất và dung lượng theo loại.'],
          ['Thư mục nhanh', 'Home, Downloads, Desktop, Documents, Pictures, Videos, ổ C (Windows).'],
          ['Điều hướng', 'Đi sâu vào thư mục con và quay lại thư mục cha.'],
          ['Finder · Explorer', 'Hiển thị mục đã chọn trong Finder hoặc Explorer.'],
          ['Chuyển vào Thùng rác', 'Mục đã xóa có thể khôi phục từ Thùng rác. Thư mục không có quyền truy cập sẽ được bỏ qua và đếm lại.'],
        ],
        specs: [['Nền tảng', 'macOS · Windows'], ['Xử lý', ONDEVICE], ['Xóa', 'Chuyển vào Thùng rác'], ['Ngôn ngữ', APP_LANGS], ['Giá', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Tìm các tệp có nội dung giống hệt nhau và dọn dẹp',
        lead: 'So sánh nội dung chứ không phải tên: trước tiên là dung lượng, rồi 64 KB đầu và cuối, sau đó là SHA-256.',
        features: [
          ['So sánh ba giai đoạn', 'Danh sách tệp, so sánh nhanh (64 KB đầu và cuối), so sánh đầy đủ (SHA-256).'],
          ['Nhiều thư mục', 'Nhiều thư mục tìm kiếm, dung lượng tệp tối thiểu, bỏ qua tệp ẩn.'],
          ['Tự động chọn', 'Giữ lại tệp cũ nhất, mới nhất hoặc có đường dẫn ngắn nhất.'],
          ['Luôn giữ lại một tệp', 'Mỗi nhóm phải còn lại ít nhất một tệp.'],
          ['Chuyển vào Thùng rác', 'Chỉ các tệp đã chọn được chuyển vào Thùng rác. Có thể khôi phục.'],
          ['Finder · Explorer', 'Mở trực tiếp vị trí của tệp.'],
        ],
        specs: [['Nền tảng', 'macOS · Windows'], ['Xử lý', ONDEVICE], ['So sánh', 'Dung lượng → 64 KB đầu/cuối → SHA-256'], ['Ngôn ngữ', APP_LANGS], ['Giá', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Giải nén và tạo tệp nén mà không bị lỗi tên tệp tiếng Hàn',
        lead: 'Phát hiện tên tệp CP949 trong các tệp ZIP tạo trên Windows tiếng Hàn và khôi phục chúng. Xây dựng trên 7-Zip.',
        features: [
          ['Sửa tên tiếng Hàn', 'Kiểm tra các mục ZIP không có cờ UTF-8 và tự động chuyển đổi tên CP949 (Windows tiếng Hàn).'],
          ['16 định dạng', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Tạo tệp nén', 'ZIP hoặc 7Z, với mức nén nhanh, thường hoặc tối đa.'],
          ['Mật khẩu AES-256', 'AES-256 cho ZIP; 7Z còn mã hóa cả tên tệp.'],
          ['Kéo và thả', 'Tệp nén được giải nén, các tệp khác được nén lại.'],
          ['Đã kèm 7-Zip 26.04', 'Không cần cài đặt riêng.'],
        ],
        specs: [['Nền tảng', 'macOS · Windows'], ['Xử lý', ONDEVICE], ['Bộ máy', '7-Zip 26.04 (LGPL)'], ['Ngôn ngữ', APP_LANGS], ['Giá', ONE_TIME]],
      },
    },
  },

  about: {
    title: 'Giới thiệu',
    desc: 'Giới thiệu về EarnToLink (언투링크): doanh nghiệp phần mềm kết nối thị trường với thế giới. Sứ mệnh, dịch vụ, nguyên tắc và thông tin doanh nghiệp.',
    eyebrow: 'Giới thiệu', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) là doanh nghiệp phần mềm kết nối thị trường với thế giới.',
    mission: {
      eyebrow: 'Sứ mệnh', title: 'Kết nối thị trường với thế giới',
      body: [
        'Những sản phẩm và dịch vụ tốt thường bị giữ lại trong một quốc gia và một ngôn ngữ. EarnToLink xây dựng phần mềm để thu hẹp khoảng cách đó.',
        'Chúng tôi xây dựng sản phẩm, giúp vận hành nhẹ nhàng hơn bằng AI và tự động hóa, rồi đưa chúng đến thị trường toàn cầu qua nhiều ngôn ngữ và kho ứng dụng. Sau khi ra mắt, chúng tôi tiếp tục cải thiện dựa trên dữ liệu.',
        'Chúng tôi cũng xây dựng ứng dụng của riêng mình theo cùng tiêu chuẩn. Trạng thái được hiển thị đúng như thực tế: sản phẩm chưa phát hành được ghi là sắp ra mắt.',
      ],
    },
    do: { eyebrow: 'Dịch vụ', title: 'Chúng tôi làm gì', text: 'Ngành nghề đã đăng ký: phát triển và cung cấp phần mềm ứng dụng (chính), bán lẻ thương mại điện tử, môi giới bán lẻ thương mại điện tử.' },
    why: { eyebrow: 'Nguyên tắc', title: 'Cách chúng tôi làm việc' },
    info: { eyebrow: 'Công ty', title: 'Thông tin doanh nghiệp' },
  },

  principles: {
    title: 'Cách chúng tôi làm việc',
    desc: 'Cách EarnToLink làm việc: đa ngôn ngữ ngay từ đầu, thống nhất phạm vi trước, bạn sở hữu mã nguồn và tài khoản, đã bao gồm kiểm thử. Quy trình và điều khoản hợp đồng.',
    eyebrow: 'Cách chúng tôi làm việc', h1: 'Cách chúng tôi làm việc', lead: 'Nguyên tắc, quy trình và điều khoản hợp đồng.',
    why: { eyebrow: 'Nguyên tắc', title: 'Sáu cam kết', text: 'Áp dụng cho mọi dự án.' },
    steps: { eyebrow: 'Quy trình', title: 'Các bước', text: 'Từ tư vấn đến vận hành.' },
    terms: { eyebrow: 'Hợp đồng', title: 'Điều khoản hợp đồng và giá', rows: [
      ['Dự án', 'Phạm vi, tiến độ, chi phí và điều kiện thanh toán được chốt trong hợp đồng cho từng dự án'],
      ['Thay đổi phạm vi', 'Thay đổi và chi phí phát sinh được thống nhất trước khi tiếp tục công việc'],
      ['Quyền sở hữu', 'Mã nguồn và tài khoản được chuyển giao cho khách hàng sau khi thanh toán hoàn tất'],
      ['Ứng dụng của chúng tôi', 'Mua một lần · tối đa ₩10,000 mỗi ứng dụng · không đăng ký định kỳ · thanh toán qua từng kho ứng dụng'],
    ] },
  },

  contact: {
    title: 'Liên hệ',
    desc: `Liên hệ EarnToLink về dự án, sản phẩm, quyền riêng tư hoặc hợp tác: ${EMAIL}`,
    eyebrow: 'Liên hệ', h1: 'Liên hệ', lead: 'Qua email. Chúng tôi trả lời bằng tiếng Hàn hoặc tiếng Anh.',
    topics: [
      ['code', 'Dự án', 'Phát triển sản phẩm, tự động hóa AI, bản địa hóa, ra mắt trên kho ứng dụng, thương mại, vận hành'],
      ['package', 'Sản phẩm', 'Tính năng, ngày phát hành và lỗi trong ứng dụng của chúng tôi'],
      ['receipt', 'Thanh toán', 'Thanh toán và hoàn tiền của ứng dụng tuân theo chính sách của từng kho ứng dụng'],
      ['shield', 'Quyền riêng tư', 'Yêu cầu truy cập, chỉnh sửa, xóa hoặc ngừng xử lý'],
      ['users', 'Hợp tác', 'Cộng tác và các đề xuất khác'],
    ],
    brief: { title: 'Nên có trong yêu cầu về dự án', items: ['Điều bạn muốn xây dựng và lý do', 'Thị trường và ngôn ngữ mục tiêu', 'Mốc thời gian mong muốn', 'Dịch vụ hoặc tài liệu tham khảo'] },
  },

  news: {
    'business-areas': { title: 'Các lĩnh vực dịch vụ của chúng tôi', summary: 'Phát triển sản phẩm, chuyển đổi AI, bản địa hóa, ra mắt trên kho ứng dụng, thương mại, vận hành.',
      body: ['Tổng quan về các lĩnh vực dịch vụ của EarnToLink.', 'Có sáu lĩnh vực: phát triển sản phẩm, chuyển đổi AI và tự động hóa, bản địa hóa và mở rộng toàn cầu, ra mắt trên kho ứng dụng toàn cầu, thương mại và bán hàng xuyên biên giới, vận hành và tăng trưởng.', 'Yêu cầu về dự án xin gửi đến hello@earntolink.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com đã hoạt động', summary: 'Website EarnToLink đã hoạt động với 14 ngôn ngữ.',
      body: ['Website EarnToLink, earntolink.com, đã chính thức hoạt động.', 'Website giới thiệu các lĩnh vực dịch vụ, sản phẩm tự phát triển, thông tin công ty, chính sách quyền riêng tư và thông tin liên hệ.', 'Website có các ngôn ngữ: tiếng Hàn, Anh, Nhật, Trung (giản thể và phồn thể), Tây Ban Nha, Pháp, Đức, Bồ Đào Nha, Ý, Việt, Indonesia, Thái và Nga.'] },
    'product-lineup': { title: 'Sản phẩm tự phát triển của chúng tôi', summary: 'Hai ứng dụng di động và ba ứng dụng máy tính.',
      body: ['Tình trạng hiện tại của các sản phẩm tự phát triển.', 'Các ứng dụng di động Roll Tidy và Roll Flick cùng các ứng dụng máy tính Space Map, Dupeless và Archive Fix sắp ra mắt.'] },
  },
  newsPage: { title: 'Tin tức', desc: 'Tin tức EarnToLink: lĩnh vực dịch vụ, ra mắt website và tình trạng sản phẩm.' },

  privacy: {
    title: 'Chính sách quyền riêng tư',
    desc: 'Chính sách quyền riêng tư của EarnToLink cho website, email liên hệ và các ứng dụng của chúng tôi. Có hiệu lực từ ngày 10 tháng 10 năm 2026.',
    eyebrow: 'Chính sách', lead: 'Có hiệu lực từ ngày 10 tháng 10 năm 2026',
    sections: [
      { id: 'general', h: '1. Quy định chung', html: `<p>EarnToLink (언투링크, "EarnToLink") bảo vệ thông tin cá nhân theo Luật Bảo vệ thông tin cá nhân của Hàn Quốc. Chính sách này áp dụng cho website earntolink.com và các ứng dụng do EarnToLink tạo ra.</p><p>Tóm tắt: website không dùng đăng ký tài khoản, biểu mẫu, cookie, phân tích hay quảng cáo. Các ứng dụng của chúng tôi chỉ xử lý tệp và ảnh trên thiết bị và không bao giờ gửi đi đâu.</p>` },
      { id: 'site', h: '2. Website', html: `<ul><li>Không có đăng ký tài khoản, đăng nhập hay biểu mẫu.</li><li>Không có cookie, công cụ phân tích hay mã quảng cáo.</li><li>Website được phục vụ bởi GitHub Pages (GitHub, Inc.). GitHub có thể xử lý nhật ký truy cập như địa chỉ IP phục vụ vận hành và bảo mật, theo <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>.</li><li>Phông chữ Pretendard được tải từ CDN jsDelivr, nơi có thể nhận thông tin yêu cầu như địa chỉ IP của trình duyệt của bạn.</li><li>Nếu sau này có áp dụng cookie hoặc công cụ phân tích, chính sách này sẽ được cập nhật trước.</li></ul>` },
      { id: 'email', h: '3. Email liên hệ', html: `<table><tr><th>Mục</th><th>Mục đích</th><th>Thời gian lưu giữ</th></tr><tr><td>Địa chỉ email, tên hiển thị, nội dung tin nhắn và tệp đính kèm</td><td>Đọc và trả lời yêu cầu, tư vấn dự án, xử lý yêu cầu</td><td>Xóa ngay sau khi xử lý xong. Nếu có hợp đồng, được lưu trong thời hạn hợp đồng và thời gian luật pháp yêu cầu</td></tr></table><p>Email liên hệ được tiếp nhận và lưu trữ trong Gmail do Google LLC cung cấp.</p>` },
      { id: 'apps', h: '4. Các ứng dụng của chúng tôi', html: `<p>Các ứng dụng được áp dụng: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Tất cả sắp ra mắt.</p><div class="table-scroll"><table><tr><th>Ứng dụng</th><th>Dữ liệu được xử lý</th><th>Nơi xử lý</th><th>Gửi ra bên ngoài</th></tr><tr><td>Roll Tidy</td><td>Ảnh và video trong thư viện mà bạn cấp quyền truy cập</td><td>Trên thiết bị</td><td>Không</td></tr><tr><td>Roll Flick</td><td>Ảnh trong thư viện mà bạn cấp quyền truy cập</td><td>Trên thiết bị</td><td>Không</td></tr><tr><td>Space Map</td><td>Tên, dung lượng và loại của các tệp trong thư mục bạn chọn</td><td>Trên thiết bị</td><td>Không</td></tr><tr><td>Dupeless</td><td>Dung lượng tệp và mã băm nội dung trong thư mục bạn chọn</td><td>Trên thiết bị</td><td>Không</td></tr><tr><td>Archive Fix</td><td>Tệp nén và tệp bạn chọn</td><td>Trên thiết bị</td><td>Không</td></tr></table></div><ul><li>Các ứng dụng không kết nối mạng và không bao giờ tải tệp hay ảnh lên.</li><li>Không có tài khoản, quảng cáo, phân tích, báo cáo sự cố hay theo dõi.</li><li>Tệp và ảnh đã xóa được chuyển vào thùng rác hệ thống (Đã xóa gần đây trên iOS) và có thể khôi phục.</li><li>Cài đặt, bản ghi tiến độ (Roll Flick) và bộ nhớ đệm phân tích ảnh (Roll Tidy: mã băm, độ nét, độ sáng) được giữ trong bộ nhớ ứng dụng trên thiết bị.</li><li>Thanh toán do từng kho ứng dụng xử lý. EarnToLink không bao giờ nhận thông tin thanh toán.</li></ul>` },
      { id: 'projects', h: '5. Dự án của khách hàng', html: `<p>Khi một dự án của khách hàng liên quan đến dữ liệu cá nhân của khách hàng, phạm vi và phương thức xử lý tuân theo hợp đồng và thỏa thuận xử lý dữ liệu với khách hàng đó.</p>` },
      { id: 'third', h: '6. Cung cấp cho bên thứ ba', html: `<p>Chúng tôi không cung cấp thông tin cá nhân cho bên thứ ba, trừ khi pháp luật yêu cầu.</p>` },
      { id: 'rights', h: '7. Quyền của bạn', html: `<p>Bạn có thể yêu cầu truy cập, chỉnh sửa, xóa hoặc tạm ngừng xử lý bất cứ lúc nào. Hãy gửi yêu cầu đến ${mail}; chúng tôi sẽ xử lý ngay.</p>` },
      { id: 'destroy', h: '8. Xóa dữ liệu', html: `<p>Thông tin cá nhân được hủy ngay khi hết thời hạn lưu giữ hoặc đã đạt được mục đích. Tệp điện tử được xóa để không thể khôi phục.</p>` },
      { id: 'security', h: '9. Bảo mật', html: `<p>Quyền truy cập email liên hệ chỉ giới hạn ở người đại diện, và chúng tôi không thu thập thông tin cá nhân nhiều hơn mức cần thiết.</p>` },
      { id: 'officer', h: '10. Người phụ trách quyền riêng tư', html: `<table><tr><th>Họ tên</th><td>Juhwan Ma (Người đại diện)</td></tr><tr><th>Email</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Biện pháp khắc phục (Hàn Quốc)', html: `<ul><li>Trung tâm tiếp nhận báo cáo xâm phạm thông tin cá nhân: privacy.kisa.or.kr, 118 (tại Hàn Quốc)</li><li>Ủy ban hòa giải tranh chấp thông tin cá nhân: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Thay đổi', html: `<p>Chính sách này có hiệu lực từ ngày 10 tháng 10 năm 2026. Các thay đổi sẽ được đăng trên trang này kèm ngày có hiệu lực.</p>` },
    ],
  },

  terms: {
    title: 'Điều khoản',
    desc: 'Điều khoản sử dụng website EarnToLink. Có hiệu lực từ ngày 10 tháng 10 năm 2026.',
    eyebrow: 'Chính sách', lead: 'Có hiệu lực từ ngày 10 tháng 10 năm 2026',
    sections: [
      { id: 'purpose', h: '1. Mục đích', html: '<p>Các điều khoản này quy định điều kiện sử dụng earntolink.com, website do EarnToLink vận hành.</p>' },
      { id: 'content', h: '2. Quyền đối với nội dung', html: '<p>Quyền đối với văn bản, hình ảnh và mã trên trang này thuộc về EarnToLink. Nhãn hiệu của bên thứ ba hiển thị tại đây thuộc về chủ sở hữu của chúng.</p>' },
      { id: 'accuracy', h: '3. Thông tin sản phẩm và dịch vụ', html: '<p>Trạng thái sản phẩm, tính năng và mô tả dịch vụ chính xác tại thời điểm biên soạn. Tính năng, giá và lịch trình của các sản phẩm chưa phát hành có thể thay đổi.</p>' },
      { id: 'projects', h: '4. Hợp đồng dự án', html: '<p>Các dịch vụ phát triển, tự động hóa, bản địa hóa, ra mắt và vận hành tuân theo hợp đồng của từng dự án. Nếu các điều khoản này khác với hợp đồng, hợp đồng được ưu tiên áp dụng.</p>' },
      { id: 'apps', h: '5. Sử dụng ứng dụng', html: '<p>Mỗi ứng dụng còn chịu sự điều chỉnh của điều khoản của kho ứng dụng phân phối nó (App Store, Google Play, Microsoft Store và các kho khác) cùng các thông báo riêng của ứng dụng.</p>' },
      { id: 'links', h: '6. Liên kết bên ngoài', html: '<p>Các trang bên ngoài tuân theo điều khoản và chính sách riêng của chúng.</p>' },
      { id: 'liability', h: '7. Giới hạn trách nhiệm', html: '<p>Trong phạm vi pháp luật cho phép, EarnToLink không chịu trách nhiệm đối với các thiệt hại gián tiếp phát sinh từ việc sử dụng trang này.</p>' },
      { id: 'law', h: '8. Luật điều chỉnh', html: '<p>Các điều khoản này được điều chỉnh bởi pháp luật của Đại Hàn Dân Quốc.</p>' },
      { id: 'contact', h: '9. Liên hệ', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Kết nối thị trường với thế giới.', s: 'Phát triển sản phẩm · Chuyển đổi AI · Bản địa hóa<br>Ra mắt kho ứng dụng · Thương mại · Vận hành', tags: ['Web · Ứng dụng · Máy tính', 'AI · Tự động hóa', '14 ngôn ngữ'] },
};

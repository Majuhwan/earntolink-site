// Tiếng Việt. Cùng cấu trúc với ko.mjs / en.mjs.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 ngôn ngữ (tiếng Anh, Hàn, Nhật, Trung giản thể và phồn thể, Đức, Pháp, Tây Ban Nha, Bồ Đào Nha, Ý)';
const ONDEVICE = 'Xử lý trên thiết bị · không kết nối mạng';
const ONE_TIME = 'Mua một lần · tối đa ₩10,000';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Doanh thu quảng cáo, thiết kế bài bản.",
  translationNote: 'Trang này là bản dịch. Nếu có khác biệt so với bản gốc tiếng Hàn, bản gốc tiếng Hàn được ưu tiên áp dụng.',

  ui: {
    skip: 'Chuyển đến nội dung', menu: 'Menu', language: 'Ngôn ngữ', mainNav: 'Chính', breadcrumb: 'Đường dẫn', toc: 'Mục lục', homeAria: 'Trang chủ EarnToLink',
    nav: { services: "Dịch vụ", products: 'Sản phẩm', about: 'Giới thiệu', principles: 'Cách chúng tôi làm việc', news: 'Tin tức', contact: 'Liên hệ' },
    home: 'Trang chủ', privacy: 'Chính sách quyền riêng tư', terms: 'Điều khoản', rss: 'RSS',
    footer: { services: "Dịch vụ", products: 'Sản phẩm', company: 'Công ty', policy: 'Chính sách' },
    biz: { name: 'Tên doanh nghiệp', rep: 'Người đại diện', no: 'Mã số đăng ký kinh doanh', tax: 'Loại thuế', kinds: 'Ngành nghề', mail: 'Email' },
    rights: '© 2026 EarnToLink. Bảo lưu mọi quyền.',
    view: 'Chi tiết', all: 'Tất cả sản phẩm', allServices: "Tất cả dịch vụ", email: 'Email', mailBtn: 'Gửi email cho chúng tôi', projectBtn: "Đặt lịch tư vấn",
    platform: 'Nền tảng', status: 'Trạng thái', features: 'Tính năng', specs: 'Thông số', related: 'Sản phẩm khác', privacyNote: 'Quyền riêng tư',
    productIllustration: 'Hình minh họa sản phẩm: ',
    heroLabel: 'Hình minh họa bảng điều khiển doanh thu quảng cáo từ website, ứng dụng và thương mại điện tử',
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
    "title": "EarnToLink | Tư vấn doanh thu quảng cáo cho website, ứng dụng và nền tảng thương mại",
    "desc": "EarnToLink là đơn vị tư vấn doanh thu quảng cáo. Chúng tôi đánh giá và thiết kế cách website, ứng dụng và nền tảng thương mại tạo thu nhập từ quảng cáo: lựa chọn và cấu hình nền tảng, tuân thủ chính sách và quyền riêng tư, retail media và vận hành quảng cáo thường xuyên.",
    "eyebrow": "Tư vấn nền tảng doanh thu quảng cáo cho doanh nghiệp",
    "h1": "Doanh thu quảng cáo,<br>thiết kế bài bản.",
    "lead": "Chúng tôi giúp website, ứng dụng và nền tảng thương mại tạo nguồn thu ổn định từ quảng cáo. Chúng tôi đánh giá hiện trạng của Quý khách, chọn nền tảng và vị trí quảng cáo phù hợp, rồi đồng hành qua các đợt rà soát chính sách và công tác vận hành hằng ngày.",
    "meta": [
      "Website và truyền thông",
      "Ứng dụng di động",
      "Thương mại và retail media"
    ],
    "stats": [
      [
        "6",
        "Lĩnh vực tư vấn"
      ],
      [
        "3",
        "Kênh doanh thu: web, ứng dụng, thương mại"
      ],
      [
        "6",
        "Bước trong mỗi dự án"
      ],
      [
        "14",
        "Ngôn ngữ của website"
      ]
    ],
    "services": {
      "eyebrow": "Dịch vụ",
      "title": "Sáu lĩnh vực tư vấn",
      "text": "Từ đánh giá, cấu hình nền tảng đến rà soát chính sách và vận hành. Quý khách chỉ cần chọn phần mình cần."
    },
    "why": {
      "eyebrow": "Vì sao chọn EarnToLink",
      "title": "Doanh thu và uy tín, cùng được bảo vệ",
      "text": "Sáu nguyên tắc chúng tôi giữ trong mọi dự án."
    },
    "how": {
      "eyebrow": "Quy trình",
      "title": "Từ cuộc trao đổi đầu tiên đến vận hành lâu dài",
      "text": "Sáu bước, mỗi bước đều được đối chiếu với số liệu trước khi sang bước tiếp theo."
    },
    "co": {
      "eyebrow": "Công ty",
      "title": "EarnToLink",
      "text": "Doanh nghiệp cá nhân tại Hàn Quốc. Tư vấn doanh thu quảng cáo và phát triển phần mềm."
    },
    "news": {
      "eyebrow": "Tin tức",
      "title": "Tin mới nhất"
    }
  },

  services: {
    "title": "Dịch vụ",
    "desc": "Dịch vụ của EarnToLink: đánh giá và chiến lược doanh thu quảng cáo, kiếm tiền cho website và truyền thông, kiếm tiền cho ứng dụng, retail media và phát triển nền tảng quảng cáo, tuân thủ chính sách quảng cáo và quyền riêng tư, vận hành và báo cáo quảng cáo.",
    "eyebrow": "Dịch vụ",
    "h1": "Dịch vụ",
    "lead": "Sáu lĩnh vực. Quý khách chỉ chọn phần cần thiết.",
    "whoLabel": "Phù hợp khi",
    "scopeLabel": "Chúng tôi làm gì",
    "deliverLabel": "Quý khách nhận được",
    "otherLabel": "Dịch vụ khác",
    "items": {
      "strategy": {
        "name": "Đánh giá và chiến lược doanh thu quảng cáo",
        "short": "Rà soát lưu lượng truy cập, vị trí quảng cáo, cấu hình nền tảng và chỉ số doanh thu, từ đó định hướng mô hình doanh thu.",
        "lead": "Trước hết, chúng tôi xác định doanh thu quảng cáo đến từ đâu và thất thoát ở đâu. Số liệu được ghi nhận trên một mốc chuẩn thống nhất, sau đó chúng tôi xếp thứ tự ưu tiên và lập kế hoạch hành động.",
        "who": [
          "Quý khách đang chạy quảng cáo nhưng thu nhập thấp hơn kỳ vọng",
          "Quý khách đang cân nhắc đổi hoặc bổ sung nền tảng quảng cáo",
          "Doanh thu quảng cáo cần được đưa vào kế hoạch kinh doanh"
        ],
        "scope": [
          [
            "Rà soát hiện trạng",
            "Cơ cấu lưu lượng, vị trí quảng cáo, cấu hình nền tảng và dòng doanh thu."
          ],
          [
            "Chỉ số then chốt",
            "Mốc chuẩn cho RPM trang, tỷ lệ hiển thị, tỷ lệ lấp đầy và khả năng hiển thị."
          ],
          [
            "Mô hình doanh thu",
            "Cách phối hợp phù hợp giữa quảng cáo, tiếp thị liên kết, gói đăng ký và quảng cáo bán trực tiếp."
          ],
          [
            "Kế hoạch hành động",
            "Thứ tự ưu tiên, tiến độ và tác động dự kiến của từng hạng mục cải thiện."
          ]
        ],
        "deliver": [
          "Báo cáo đánh giá",
          "Bảng mốc chuẩn các chỉ số",
          "Đề xuất mô hình doanh thu",
          "Kế hoạch hành động theo giai đoạn"
        ]
      },
      "web": {
        "name": "Kiếm tiền cho website và truyền thông",
        "short": "Chuẩn bị hồ sơ xét duyệt, thiết kế vị trí quảng cáo và cân bằng giữa tốc độ tải trang với doanh thu cho blog, trang tin và trang thông tin.",
        "lead": "Thay vì thêm nhiều quảng cáo hơn, chúng tôi tìm những vị trí không làm gián đoạn việc đọc. Chúng tôi phụ trách toàn bộ từ chuẩn bị xét duyệt, thiết kế vị trí đến cấu hình programmatic.",
        "who": [
          "Quý khách đang chuẩn bị cho đợt xét duyệt của nền tảng quảng cáo",
          "Quảng cáo làm trang tải chậm hơn hoặc tăng tỷ lệ thoát",
          "Quý khách muốn chạy song song nhiều mạng quảng cáo"
        ],
        "scope": [
          [
            "Chuẩn bị xét duyệt",
            "Kiểm tra cấu trúc site, các trang bắt buộc và chất lượng nội dung, sau đó nộp đăng ký."
          ],
          [
            "Thiết kế vị trí",
            "Vị trí, kích thước và khoảng cách quảng cáo theo mạch nội dung."
          ],
          [
            "Tốc độ tải trang",
            "Lazy loading và chống dịch chuyển bố cục để trang luôn nhanh."
          ],
          [
            "Cấu hình programmatic",
            "Thiết lập ad server, header bidding và quy tắc giá sàn."
          ]
        ],
        "deliver": [
          "Danh mục kiểm tra xét duyệt",
          "Kế hoạch vị trí quảng cáo",
          "Cấu hình quảng cáo và hướng dẫn triển khai",
          "Báo cáo so sánh trước và sau"
        ]
      },
      "app": {
        "name": "Kiếm tiền cho ứng dụng",
        "short": "Định dạng quảng cáo, mediation và tần suất hiển thị trong ứng dụng di động, thiết kế theo cách người dùng thực sự sử dụng.",
        "lead": "Chúng tôi xác định thời điểm và vị trí xuất hiện của quảng cáo banner, interstitial và rewarded, đồng thời tăng doanh thu mà vẫn theo dõi sát tỷ lệ giữ chân người dùng.",
        "who": [
          "Quý khách lần đầu đưa quảng cáo vào ứng dụng",
          "Điểm đánh giá hoặc tỷ lệ giữ chân giảm sau khi có quảng cáo",
          "Quý khách muốn kết hợp nhiều mạng quảng cáo qua mediation"
        ],
        "scope": [
          [
            "Thiết kế định dạng quảng cáo",
            "Vị trí và thời điểm hiển thị của quảng cáo banner, interstitial, rewarded và native."
          ],
          [
            "Mediation",
            "Thiết lập thứ tự ưu tiên và đấu giá giữa các mạng quảng cáo."
          ],
          [
            "Tần suất và trải nghiệm",
            "Giới hạn tần suất, bảo vệ phiên đầu tiên và không hiển thị quảng cáo cho người dùng trả phí."
          ],
          [
            "Quảng cáo song hành với mua hàng trong ứng dụng",
            "Gói gỡ quảng cáo và cách kết hợp giữa quảng cáo rewarded với giao dịch mua."
          ]
        ],
        "deliver": [
          "Sơ đồ vị trí quảng cáo",
          "Kế hoạch thiết lập mediation",
          "Tài liệu quy tắc tần suất",
          "Bảng so sánh tỷ lệ giữ chân và doanh thu"
        ]
      },
      "retail": {
        "name": "Retail media và phát triển nền tảng quảng cáo",
        "short": "Hỗ trợ sàn thương mại và các nền tảng xây dựng sản phẩm cùng bộ máy vận hành quảng cáo để người bán và thương hiệu có thể quảng cáo trên nền tảng.",
        "lead": "Chúng tôi biến lưu lượng và dữ liệu của nền tảng thành sản phẩm quảng cáo, đồng thời cùng Quý khách xây dựng chính sách giá, cách thức bán hàng và báo cáo hiệu quả.",
        "who": [
          "Quý khách muốn mở mảng kinh doanh quảng cáo trên sàn hoặc nền tảng của mình",
          "Quý khách đang bán và xuất hóa đơn quảng cáo cho người bán bằng thủ công",
          "Nhà quảng cáo yêu cầu báo cáo chứng minh hiệu quả"
        ],
        "scope": [
          [
            "Thiết kế sản phẩm quảng cáo",
            "Các vị trí có thể bán như đầu trang tìm kiếm, sản phẩm được tài trợ, banner và email."
          ],
          [
            "Định giá và bán hàng",
            "Sản phẩm đấu giá, giá cố định và theo thời gian, kèm quy tắc định giá."
          ],
          [
            "Dữ liệu và đo lường",
            "Lượt hiển thị, lượt nhấp và ghi nhận chuyển đổi mua hàng, đo lường trong khuôn khổ quy định về quyền riêng tư."
          ],
          [
            "Mô hình vận hành",
            "Tiếp nhận nhà quảng cáo, duyệt quảng cáo, thanh toán và báo cáo hiệu quả."
          ]
        ],
        "deliver": [
          "Danh mục sản phẩm quảng cáo và bảng giá",
          "Mô hình lãi lỗ của mảng quảng cáo",
          "Tiêu chuẩn đo lường và mẫu báo cáo",
          "Quy trình vận hành"
        ]
      },
      "policy": {
        "name": "Tuân thủ chính sách quảng cáo và quyền riêng tư",
        "short": "Rà soát chính sách, hỗ trợ khi bị từ chối, quản lý sự đồng ý, ads.txt và chính sách quyền riêng tư.",
        "lead": "Một tài khoản an toàn quan trọng hơn doanh thu. Chúng tôi phát hiện sớm rủi ro về chính sách, và khi đơn đăng ký bị từ chối hoặc tài khoản bị hạn chế, chúng tôi xác định nguyên nhân và phản hồi.",
        "who": [
          "Đơn xét duyệt quảng cáo của Quý khách bị từ chối hoặc tài khoản bị hạn chế",
          "Quý khách cần quản lý sự đồng ý cho khách truy cập từ các khu vực khác",
          "Chính sách quyền riêng tư cần cập nhật trước khi quảng cáo chạy chính thức"
        ],
        "scope": [
          [
            "Rà soát chính sách",
            "Rủi ro chính sách trong nội dung, vị trí quảng cáo và nguồn lưu lượng."
          ],
          [
            "Từ chối và hạn chế",
            "Phân tích nguyên nhân, khắc phục và gửi yêu cầu xem xét lại."
          ],
          [
            "Quản lý sự đồng ý",
            "Thông báo đồng ý theo khu vực, liên kết với cấu hình quảng cáo."
          ],
          [
            "Tệp và tài liệu bắt buộc",
            "ads.txt, app-ads.txt, chính sách quyền riêng tư và thông báo cookie."
          ]
        ],
        "deliver": [
          "Danh mục kiểm tra chính sách",
          "Hồ sơ phản hồi",
          "Thiết lập quản lý sự đồng ý",
          "Tệp và tài liệu bắt buộc"
        ]
      },
      "ops": {
        "name": "Vận hành và tư vấn báo cáo quảng cáo",
        "short": "Mỗi tháng chúng tôi đọc chỉ số doanh thu, chạy thử nghiệm và xử lý những điểm cần sửa, kể cả lưu lượng không hợp lệ và chênh lệch thanh toán.",
        "lead": "Doanh thu quảng cáo không phải là thiết lập một lần rồi thôi. Chúng tôi rà soát chỉ số hằng tháng và chỉ giữ lại những thay đổi đã được thử nghiệm chứng minh hiệu quả.",
        "who": [
          "Doanh thu quảng cáo của Quý khách biến động mạnh theo từng tháng",
          "Quý khách đang tổng hợp báo cáo của nhiều nền tảng bằng thủ công",
          "Chưa có ai trong đội ngũ phụ trách vận hành quảng cáo"
        ],
        "scope": [
          [
            "Rà soát hằng tháng",
            "Biến động của doanh thu, lượt hiển thị, đơn giá và tỷ lệ lấp đầy, cùng nguyên nhân."
          ],
          [
            "Thử nghiệm",
            "Thử nghiệm so sánh vị trí, định dạng quảng cáo và quy tắc giá."
          ],
          [
            "Báo cáo hợp nhất",
            "Doanh thu từ mọi nền tảng trong một báo cáo duy nhất."
          ],
          [
            "Kiểm tra chất lượng",
            "Lưu lượng không hợp lệ, chất lượng quảng cáo và chênh lệch thanh toán."
          ]
        ],
        "deliver": [
          "Báo cáo vận hành hằng tháng",
          "Nhật ký thử nghiệm",
          "Báo cáo hợp nhất",
          "Danh sách hạng mục cần cải thiện"
        ]
      }
    }
  },

  why: [
    [
      "Doanh thu hài hòa với trải nghiệm người dùng",
      "Thay vì thêm quảng cáo, chúng tôi tìm những vị trí giữ cho trang nhanh và hành trình của người dùng liền mạch."
    ],
    [
      "Đo lường, không phỏng đoán",
      "Chúng tôi ghi nhận số liệu mốc chuẩn trước khi bắt đầu và so sánh mọi thay đổi trên cùng một cơ sở."
    ],
    [
      "Tư vấn độc lập",
      "Chúng tôi không nhận hoa hồng giới thiệu từ nền tảng quảng cáo, nên các phương án luôn được so sánh công bằng."
    ],
    [
      "Tuân thủ chính sách trước hết",
      "Chúng tôi chỉ tăng doanh thu trong khuôn khổ chính sách quảng cáo và quy định về quyền riêng tư. Không câu nhấp chuột, không lưu lượng không hợp lệ."
    ],
    [
      "Tài khoản và dữ liệu thuộc về Quý khách",
      "Tài khoản quảng cáo, thông tin thanh toán và báo cáo đều được tạo và lưu giữ dưới tên Quý khách."
    ],
    [
      "Cập nhật hằng tuần",
      "Mỗi tuần chúng tôi gửi báo cáo về những gì đã thay đổi, số liệu biến động ra sao và bước tiếp theo."
    ]
  ],

  steps: [
    [
      "Trao đổi ban đầu",
      "Dịch vụ, quy mô lưu lượng và mục tiêu của Quý khách."
    ],
    [
      "Đánh giá",
      "Rà soát vị trí quảng cáo, cấu hình và chỉ số doanh thu, ghi nhận mốc chuẩn."
    ],
    [
      "Thiết kế",
      "Nền tảng quảng cáo, vị trí hiển thị và kế hoạch tuân thủ."
    ],
    [
      "Thiết lập và thử nghiệm",
      "Áp dụng thay đổi và so sánh trước và sau."
    ],
    [
      "Xét duyệt và triển khai",
      "Rà soát chính sách, quản lý sự đồng ý và các tệp bắt buộc."
    ],
    [
      "Vận hành",
      "Rà soát hằng tháng, thử nghiệm và báo cáo."
    ]
  ],

  cta: {
    "title": "Trao đổi với chúng tôi về doanh thu quảng cáo",
    "text": "Vui lòng gửi email cho chúng tôi website hoặc ứng dụng của Quý khách, lưu lượng hằng tháng và vấn đề đang gặp phải."
  },

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
    "title": "Giới thiệu",
    "desc": "Giới thiệu EarnToLink: đơn vị tư vấn giúp website, ứng dụng và nền tảng thương mại tạo thu nhập từ quảng cáo. Sứ mệnh, dịch vụ, nguyên tắc và thông tin doanh nghiệp.",
    "eyebrow": "Giới thiệu",
    "h1": "EarnToLink",
    "lead": "EarnToLink là đơn vị tư vấn doanh thu quảng cáo, giúp doanh nghiệp thiết kế cách tạo thu nhập từ quảng cáo.",
    "mission": {
      "eyebrow": "Sứ mệnh",
      "title": "Quảng cáo làm doanh nghiệp vững mạnh hơn",
      "body": [
        "Nhiều doanh nghiệp xây dựng được nội dung và dịch vụ tốt nhưng thu nhập từ quảng cáo vẫn thấp. Vị trí quảng cáo chưa phù hợp, cấu hình đã lỗi thời, hoặc một vấn đề chính sách đang kìm hãm doanh thu.",
        "EarnToLink đo lường vị thế hiện tại của Quý khách, chọn nền tảng và vị trí quảng cáo phù hợp, đồng thời hỗ trợ vận hành hằng ngày trong khuôn khổ chính sách và quy định về quyền riêng tư. Kết quả của mỗi thay đổi đều được trình bày trên cùng một mốc chuẩn.",
        "Dựa trên kinh nghiệm tự xây dựng và vận hành website, ứng dụng, chúng tôi giữ một nguyên tắc: kiếm tiền không được làm hỏng trải nghiệm người dùng."
      ]
    },
    "do": {
      "eyebrow": "Dịch vụ",
      "title": "Chúng tôi làm gì",
      "text": "Ngành nghề đã đăng ký: phát triển và cung cấp phần mềm ứng dụng (chính), bán lẻ thương mại điện tử, môi giới bán lẻ thương mại điện tử."
    },
    "why": {
      "eyebrow": "Nguyên tắc",
      "title": "Nguyên tắc của chúng tôi"
    },
    "info": {
      "eyebrow": "Công ty",
      "title": "Thông tin doanh nghiệp"
    }
  },

  principles: {
    "title": "Cách chúng tôi làm việc",
    "desc": "Cách EarnToLink làm việc: doanh thu hài hòa với trải nghiệm người dùng, kết quả đo lường được, tư vấn độc lập và tuân thủ chính sách. Các bước và điều khoản hợp đồng.",
    "eyebrow": "Cách chúng tôi làm việc",
    "h1": "Cách chúng tôi làm việc",
    "lead": "Nguyên tắc, quy trình và điều khoản hợp đồng.",
    "why": {
      "eyebrow": "Nguyên tắc",
      "title": "Sáu nguyên tắc",
      "text": "Áp dụng cho mọi dự án."
    },
    "steps": {
      "eyebrow": "Quy trình",
      "title": "Các bước",
      "text": "Từ cuộc trao đổi đầu tiên đến vận hành."
    },
    "terms": {
      "eyebrow": "Hợp đồng",
      "title": "Điều khoản hợp đồng",
      "rows": [
        [
          "Dự án",
          "Mỗi dự án có hợp đồng riêng quy định phạm vi, tiến độ, chi phí và điều kiện thanh toán"
        ],
        [
          "Thay đổi phạm vi",
          "Thay đổi và chi phí phát sinh được thống nhất trước khi tiếp tục công việc"
        ],
        [
          "Quyền sở hữu",
          "Tài khoản quảng cáo, báo cáo và tài liệu thiết lập đứng tên Quý khách"
        ],
        [
          "Phí",
          "Không nhận hoa hồng giới thiệu từ nền tảng quảng cáo · phí tư vấn được nêu rõ trong hợp đồng"
        ]
      ]
    }
  },

  contact: {
    "title": "Liên hệ",
    "desc": "Liên hệ EarnToLink về tư vấn doanh thu quảng cáo, sản phẩm, quyền riêng tư hoặc hợp tác. hello@earntolink.com",
    "eyebrow": "Liên hệ",
    "h1": "Liên hệ",
    "lead": "Chúng tôi tiếp nhận yêu cầu qua email và phản hồi bằng tiếng Hàn hoặc tiếng Anh.",
    "topics": [
      [
        "chart",
        "Tư vấn",
        "Đánh giá doanh thu quảng cáo, kiếm tiền cho web và ứng dụng, retail media, vấn đề chính sách, tư vấn vận hành"
      ],
      [
        "package",
        "Sản phẩm",
        "Tính năng, ngày phát hành và lỗi của các ứng dụng do chúng tôi tự phát triển"
      ],
      [
        "receipt",
        "Thanh toán",
        "Thanh toán và hoàn tiền trong ứng dụng tuân theo chính sách của từng kho ứng dụng"
      ],
      [
        "shield",
        "Quyền riêng tư",
        "Yêu cầu truy cập, chỉnh sửa, xóa hoặc ngừng xử lý dữ liệu cá nhân"
      ],
      [
        "users",
        "Hợp tác",
        "Đề xuất hợp tác và các đề xuất khác"
      ]
    ],
    "brief": {
      "title": "Thông tin nên cung cấp",
      "items": [
        "Quý khách đang vận hành gì (website, ứng dụng hay nền tảng thương mại) và địa chỉ",
        "Số lượt truy cập hoặc người dùng hoạt động mỗi tháng",
        "Các nền tảng quảng cáo đang sử dụng và vấn đề đang gặp",
        "Thời gian mong muốn"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink tập trung vào tư vấn doanh thu quảng cáo",
      "summary": "Đánh giá và chiến lược, kiếm tiền cho web và ứng dụng, retail media, tuân thủ chính sách và tư vấn vận hành.",
      "body": [
        "EarnToLink đã tập trung dịch vụ của mình vào tư vấn doanh thu quảng cáo.",
        "Hiện chúng tôi cung cấp sáu dịch vụ: đánh giá và chiến lược doanh thu quảng cáo, kiếm tiền cho website và truyền thông, kiếm tiền cho ứng dụng, retail media và phát triển nền tảng quảng cáo, tuân thủ chính sách quảng cáo và quyền riêng tư, vận hành và tư vấn báo cáo quảng cáo.",
        "Để được tư vấn, xin gửi email đến hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com đã hoạt động",
      "summary": "Website EarnToLink đã hoạt động với 14 ngôn ngữ.",
      "body": [
        "Website EarnToLink, earntolink.com, đã chính thức hoạt động.",
        "Website giới thiệu các dịch vụ, sản phẩm tự phát triển, thông tin công ty, chính sách quyền riêng tư và thông tin liên hệ.",
        "Website có các ngôn ngữ: tiếng Hàn, Anh, Nhật, Trung (giản thể và phồn thể), Tây Ban Nha, Pháp, Đức, Bồ Đào Nha, Ý, Việt, Indonesia, Thái và Nga."
      ]
    },
    "product-lineup": {
      "title": "Sản phẩm tự phát triển của chúng tôi",
      "summary": "Hai ứng dụng di động và ba ứng dụng máy tính.",
      "body": [
        "Tình trạng hiện tại của các sản phẩm tự phát triển.",
        "Các ứng dụng di động Roll Tidy và Roll Flick cùng các ứng dụng máy tính Space Map, Dupeless và Archive Fix sắp ra mắt."
      ]
    }
  },
  newsPage: {
    "title": "Tin tức",
    "desc": "Tin tức EarnToLink: cập nhật dịch vụ, ra mắt website và tình trạng sản phẩm."
  },

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
      { id: 'accuracy', h: '3. Thông tin sản phẩm và dịch vụ', html: "<p>Tình trạng sản phẩm, tính năng và mô tả dịch vụ chính xác tại thời điểm biên soạn. Tính năng, giá và lịch trình của các sản phẩm chưa phát hành có thể thay đổi.</p>" },
      { id: 'projects', h: '4. Hợp đồng dự án', html: "<p>Các dịch vụ đánh giá, tư vấn, thiết lập quảng cáo và tư vấn vận hành được thực hiện theo hợp đồng của từng dự án. Nếu các điều khoản này khác với hợp đồng thì hợp đồng được ưu tiên áp dụng. Doanh thu quảng cáo phụ thuộc vào thị trường quảng cáo và chính sách của nền tảng; mọi ước tính trong báo cáo đánh giá hoặc đề xuất của chúng tôi không phải là cam kết.</p>" },
      { id: 'apps', h: '5. Sử dụng ứng dụng', html: '<p>Mỗi ứng dụng còn chịu sự điều chỉnh của điều khoản của kho ứng dụng phân phối nó (App Store, Google Play, Microsoft Store và các kho khác) cùng các thông báo riêng của ứng dụng.</p>' },
      { id: 'links', h: '6. Liên kết bên ngoài', html: '<p>Các trang bên ngoài tuân theo điều khoản và chính sách riêng của chúng.</p>' },
      { id: 'liability', h: '7. Giới hạn trách nhiệm', html: '<p>Trong phạm vi pháp luật cho phép, EarnToLink không chịu trách nhiệm đối với các thiệt hại gián tiếp phát sinh từ việc sử dụng trang này.</p>' },
      { id: 'law', h: '8. Luật điều chỉnh', html: '<p>Các điều khoản này được điều chỉnh bởi pháp luật của Đại Hàn Dân Quốc.</p>' },
      { id: 'contact', h: '9. Liên hệ', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Doanh thu quảng cáo, thiết kế bài bản.",
    "s": "Đánh giá doanh thu quảng cáo · Kiếm tiền cho web và ứng dụng<br>Retail media · Tuân thủ chính sách · Vận hành",
    "tags": [
      "Website và truyền thông",
      "Ứng dụng di động",
      "Thương mại"
    ]
  },
};

# 📦 Common Module

Thư mục `common` chứa tất cả các **hằng số, enum, interface và utility function** dùng chung toàn bộ dự án `sevago-library`. Mọi logic/type nào được tái sử dụng ở nhiều nơi đều nên đặt tại đây.

---

## � Mục lục

- [const/](#-const)
  - [apps.const.ts](#appsconsts)
  - [color.const.ts](#colorconsts)
  - [other.const.ts](#otherconsts)
  - [icons.const.ts](#iconsconsts)
  - [mode.const.ts](#modeconsts)
  - [style.const.ts](#styleconsts)
- [enums/](#-enums)
  - [api.enum.ts](#apienums)
  - [system.enum.ts](#systemenums)
  - [other.enum.ts](#otherenums)
- [interfaces/](#-interfaces)
  - [api.interface.ts](#apiinterfacets)
  - [other.interface.ts](#otherinterfacets)
  - [file.interface.ts](#fileinterfacets)
- [utils/](#-utils)
  - [array.util.ts](#arrayutilts)
  - [object.util.ts](#objectutilts)
  - [string.util.ts](#stringutilts)
  - [time.util.ts](#timeutilts)
  - [number.util.ts](#numberutilts)
  - [delay.util.ts](#delayutilts)
  - [file.util.ts](#fileutilts)
  - [other.util.ts](#otherutilts)
- [Cách import](#-cách-import)

---

## �📁 Cấu trúc thư mục

```
src/common/
├── const/             # Hằng số toàn cục (màu sắc, URL app, style, ...)
├── enums/             # Enum dùng chung (status, mode, order type, ...)
├── interfaces/        # Interface/type dùng chung (API, file, ...)
├── utils/             # Utility functions (xử lý chuỗi, mảng, thời gian, ...)
└── index.ts           # Re-export toàn bộ common
```

---

## 📌 const/

Chứa các hằng số cấu hình và giá trị tĩnh dùng xuyên suốt dự án.

### `apps.const.ts`

Định nghĩa thông tin của tất cả các ứng dụng trong hệ thống Sevago.

| Export            | Mô tả                                                                  |
| ----------------- | ---------------------------------------------------------------------- |
| `APP_GROUP_COLOR` | Màu gradient tương ứng với từng nhóm app (`AppGroup`)                  |
| `ACCOUNT`         | URL service Account theo từng môi trường                               |
| `SSO`             | URL service SSO theo từng môi trường                                   |
| `APP_OBJ`         | Object chứa thông tin đầy đủ của từng app (path, icon, content, group) |

```ts
import { APP_OBJ, SSO } from '@/common/const';

// Lấy URL app E-Hiring ở môi trường develop
const url = APP_OBJ.E_HIRING.path.develop;

// Lấy URL SSO production
const ssoUrl = SSO.production;
```

---

### `color.const.ts`

Hệ thống màu sắc theo design system, chia thành các bảng màu (palette) chuẩn.

| Export        | Mô tả                                                           |
| ------------- | --------------------------------------------------------------- |
| `COMMON`      | Màu semantic (error, success, main, warning, ...) và màu cơ bản |
| `BRAND`       | Palette màu thương hiệu (50 → 950)                              |
| `NEUTRAL`     | Palette màu trung tính xám (50 → 950)                           |
| `GRAY`        | Palette màu xám Tailwind-like (50 → 950)                        |
| `ERROR`       | Palette màu đỏ lỗi (50 → 950)                                   |
| `WARNING`     | Palette màu vàng cảnh báo (50 → 950)                            |
| `SUCCESS`     | Palette màu xanh lá thành công (50 → 950)                       |
| `INFO`        | Palette màu xanh dương thông tin (50 → 950)                     |
| `ACCENT`      | Palette màu tím highlight (50 → 950)                            |
| `HIERARCHIAL` | Màu highlight cho bảng/text tìm kiếm                            |
| `MAP`         | Map màu theo trạng thái (success, error, cancel)                |

```ts
import { BRAND, COMMON, ERROR } from '@/common/const';

const primaryColor = BRAND[900]; // '#07554B'
const errorColor = ERROR[500]; // '#EF4444'
const white = COMMON.white; // '#ffffff'
```

---

### `other.const.ts`

Hằng số độ mờ (opacity) dạng hex string dùng để ghép với màu HEX.

| Export    | Mô tả                                                               |
| --------- | ------------------------------------------------------------------- |
| `OPACITY` | Map opacity 0–100 → hex string 2 ký tự (VD: `OPACITY[30]` = `'4D'`) |

```ts
import { OPACITY, COMMON } from '@/common/const';

// Tạo màu divider với opacity 30%
const dividerColor = `${COMMON.gray}${OPACITY[30]}`; // '#F2F2F24D'
```

---

### `icons.const.ts`

Hằng số đường dẫn icon dùng chung cho các app.

| Export  | Mô tả                                           |
| ------- | ----------------------------------------------- |
| `ICONS` | Object chứa các path/URL của icon theo từng app |

---

### `mode.const.ts`

Cấu hình theme MUI cho chế độ sáng/tối (`light`/`dark`).

| Export | Mô tả                                                |
| ------ | ---------------------------------------------------- |
| `MODE` | Object theme palette theo `Mode.LIGHT` / `Mode.DARK` |

---

### `style.const.ts`

Hằng số kích thước, spacing, border-radius... dùng xuyên suốt UI.

| Export  | Mô tả                                                               |
| ------- | ------------------------------------------------------------------- |
| `STYLE` | Object chứa các giá trị CSS: padding, gap, border-radius, height... |

---

## enums/

Chứa các `enum` chuẩn hóa các giá trị cố định trong dự án.

### `api.enum.ts`

```ts
enum HttpStatusSpecial {
  REFRESH_TOKEN = 777, // Trigger refresh token
  LOGOUT = 888, // Trigger logout
}

enum OrderType {
  ASC = 'ASC', // Sắp xếp tăng dần
  DESC = 'DESC', // Sắp xếp giảm dần
}
```

### `system.enum.ts`

```ts
enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
  PENDING = 'PENDING',
}

enum Mode {
  DARK = 'dark',
  LIGHT = 'light',
}

enum Environment {
  DEVELOP = 'develop',
  STAGING = 'staging',
  PRODUCTION = 'production',
  PRODUCTION_VPS = 'production_vps',
}
```

### `other.enum.ts`

```ts
enum SizeProps {
  EXTRA_SMALL = 'extra_small',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRA_LARGE = 'extra_large',
  AVATAR_GROUP = 'avatar_group',
}

enum AppGroup {
  ALL = 'All',
  HRM = 'HRM',
  MANUFACTURING = 'Sản xuất',
  WORKFLOW_ENGINE = 'Workflow Engine',
  PLATFORM_AND_INFO = 'Platform & Info',
  B2B = 'B2B',
  CLIENT = 'Web',
  OTHER = 'Khác',
}

enum SnackbarType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}
```

---

## interfaces/

Chứa các TypeScript interface dùng làm base type hoặc contract chung.

### `api.interface.ts`

| Interface        | Mô tả                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| `BaseEntity<T>`  | Base type cho tất cả entity có `id`, `createdAt`, `updatedAt`, ...    |
| `Error`          | Cấu trúc lỗi API: `{ message, statusCode }`                           |
| `PageOptions<T>` | Tham số phân trang: `{ page, take, orderBy, orderType, search, ... }` |
| `DeleteOptional` | Tùy chọn xóa mềm hay cứng: `{ soft: boolean }`                        |
| `ResList<T>`     | Kết quả danh sách từ API: `{ total, list }`                           |

```ts
import { BaseEntity, ResList, PageOptions } from '@/common/interfaces';

interface User extends BaseEntity<User> {
  name: string;
  email: string;
}

// Gọi API danh sách
const res: ResList<User> = await fetchUsers({ page: 1, take: 10 });
```

### `other.interface.ts`

| Interface              | Mô tả                                                                           |
| ---------------------- | ------------------------------------------------------------------------------- |
| `ChangeEventCustom<T>` | Custom event dùng cho các component controlled: `{ target: { name?, value? } }` |
| `AppInfo`              | Thông tin một app: path theo env, content, color, icon, group                   |

```ts
import { ChangeEventCustom } from '@/common/interfaces';

const handleChange = (e: ChangeEventCustom<string>) => {
  console.log(e.target.name, e.target.value);
};
```

### `file.interface.ts`

Các interface chuẩn hóa kiểu dữ liệu liên quan đến file, phục vụ cả upload và file trả về từ API.

| Interface / Type       | Mô tả                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `FileFromApi`          | File được trả về từ API: `{ url, name, status? }`                                                                                        |
| `FileItem`             | File hợp nhất: hỗ trợ cả file local lẫn file từ API, có thêm `preview` URL                                                               |
| `FileWithPreview`      | Extends `File` của browser, thêm field `preview` (object URL để hiển thị ảnh preview)                                                    |
| `AttachmentDto`        | DTO đơn giản để gửi lên API: `{ url, name }`                                                                                             |
| `FileWithPreviewOrUrl` | Union type: `FileWithPreview \| FileFromApi \| FileItem \| string \| undefined` — dùng khi một field có thể là nhiều kiểu file khác nhau |

```ts
import { FileWithPreview, FileFromApi, FileWithPreviewOrUrl, AttachmentDto } from '@/common/interfaces';

// Upload xong sẽ trả về FileWithPreview (có preview URL để hiển thị ngay)
const handleUpload = (files: FileWithPreview[]) => {
  files.forEach((f) => console.log(f.preview)); // blob:http://...
};

// API trả về danh sách file đã lưu
const savedFiles: FileFromApi[] = response.data.attachments;

// Field chấp nhận cả 2 trường hợp (upload mới hoặc đã có sẵn)
interface FormValues {
  thumbnail: FileWithPreviewOrUrl;
}

// Payload gửi PUT/PATCH
const payload: AttachmentDto = { url: file.url, name: file.name };
```

> [!NOTE]
> Dùng `FileWithPreviewOrUrl` cho các field trong form có thể vừa nhận file mới upload vừa nhận URL string từ dữ liệu cũ.

---

## utils/

Các hàm tiện ích thuần (pure functions), không có side effect, dễ test.

---

### `array.util.ts`

#### `checkArraysMatching(smallArray, bigArray)`

So sánh 2 mảng object xem chúng có chứa **cùng tập phần tử** hay không, bằng cách tổng hợp key từ các field của `smallArray`.

```ts
checkArraysMatching(
  [{ id: '1', name: 'A' }],
  [
    { id: '1', name: 'A' },
    { id: '2', name: 'B' },
  ],
); // false — số lượng khác nhau

checkArraysMatching([{ id: '1' }, { id: '2' }], [{ id: '2' }, { id: '1' }]); // true — khớp dù thứ tự khác
```

> [!NOTE]
> Hàm dùng tất cả key từ phần tử đầu của `smallArray` để tạo composite key. Nếu phần tử `smallArray` có key `id` thì sẽ so theo `id`.

---

#### `chunkArray<T>(array, size)`

Chia mảng thành các mảng con có kích thước tối đa `size`.

```ts
chunkArray([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]

chunkArray(['a', 'b', 'c', 'd'], 3);
// [['a', 'b', 'c'], ['d']]
```

**Dùng khi**: render grid cố định số cột, chia batch API call.

---

#### `convertArrayToObj<T>(array, keys, value?)`

Chuyển mảng thành object tra cứu nhanh `O(1)`. Key được ghép từ 1 hoặc nhiều field.

```ts
// Overload 1: value là toàn bộ object
convertArrayToObj(users, ['id']);
// { 'user-001': User, 'user-002': User, ... }

// Overload 2: value là một field cụ thể
convertArrayToObj(users, ['id'], 'name');
// { 'user-001': 'Nguyễn Văn A', 'user-002': 'Trần Thị B', ... }

// Composite key từ nhiều field
convertArrayToObj(shifts, ['userId', 'date']);
// { 'user-001 2026-02-23': Shift, ... }
```

**Dùng khi**: map dữ liệu từ API thành lookup table để tránh lặp `.find()` trong render.

---

#### `groupBy<T>(array, keys)`

Gom nhóm các phần tử theo 1 hoặc nhiều key.

```ts
const employees = [
  { name: 'A', dept: 'HR', level: 'Senior' },
  { name: 'B', dept: 'HR', level: 'Junior' },
  { name: 'C', dept: 'IT', level: 'Senior' },
];

groupBy(employees, ['dept']);
// { 'HR': [A, B], 'IT': [C] }

groupBy(employees, ['dept', 'level']);
// { 'HRSenior': [A], 'HRJunior': [B], 'ITSenior': [C] }
```

---

#### `trimmedArray(array)`

Trim khoảng trắng đầu/cuối cho mọi phần tử string trong mảng, bỏ qua non-string.

```ts
trimmedArray(['  hello ', 42, ' world  ']);
// ['hello', 42, 'world']
```

---

#### `mapOrder(originalArray, orderArray, key)`

Sắp xếp lại mảng theo thứ tự được định nghĩa trước trong `orderArray`.

```ts
const statuses = ['PENDING', 'ACTIVE', 'INACTIVE'];
const users = [
  { name: 'A', status: 'INACTIVE' },
  { name: 'B', status: 'PENDING' },
  { name: 'C', status: 'ACTIVE' },
];

mapOrder(users, statuses, 'status');
// [{ name: 'B', PENDING }, { name: 'C', ACTIVE }, { name: 'A', INACTIVE }]
```

**Dùng khi**: cần giữ đúng thứ tự tab/filter đã định nghĩa, không phụ thuộc vào thứ tự API trả về.

---

### `object.util.ts`

#### `compareObjectsGetUpdatedProperties<T>(oldObj, newObj, blacklist)`

So sánh 2 object và trả về chỉ các field đã **thay đổi thực sự**, kèm giá trị cũ/mới. Tự động bỏ qua các metadata field (`id`, `createdAt`, `updatedAt`, ...) và các key trong `blacklist`.

```ts
const original = { name: 'A', email: 'a@mail.com', age: 25 };
const updated = { name: 'A', email: 'new@mail.com', age: 30 };

compareObjectsGetUpdatedProperties(original, updated, []);
// {
//   email: { old: 'a@mail.com', new: 'new@mail.com' },
//   age:   { old: 25, new: 30 }
// }

// Loại trừ field 'age' khỏi kết quả
compareObjectsGetUpdatedProperties(original, updated, ['age']);
// { email: { old: 'a@mail.com', new: 'new@mail.com' } }
```

**Dùng khi**: log audit trail, hiển thị diff form trước/sau khi chỉnh sửa.

---

#### `sortObjectByKeyLengthDesc(obj)`

Sắp xếp object theo **độ dài key giảm dần**. Kết quả: key dài nhất ở đầu.

```ts
sortObjectByKeyLengthDesc({ ab: 1, abcde: 2, abc: 3 });
// { abcde: 2, abc: 3, ab: 1 }
```

**Dùng khi**: replace text cần ưu tiên khớp chuỗi dài nhất trước (tránh replace một phần của chuỗi dài hơn).

---

#### `getKeyValuesFromObject(object, keys)`

Ghép tất cả value tương ứng với `keys` thành một string duy nhất.

```ts
getKeyValuesFromObject({ userId: 'u1', date: '2026-02-23', role: 'admin' }, ['userId', 'date']);
// 'u12026-02-23'
```

**Lưu ý**: hàm nội bộ, thường được dùng bởi `checkArraysMatching` và `convertArrayToObj`.

---

#### `omitProperties<T>(obj, keysToOmit)`

Tạo object mới **không có** các key chỉ định. Type-safe, kết quả là `Omit<T, K>`.

```ts
const user = { id: '1', name: 'A', password: 'secret', token: 'xyz' };

omitProperties(user, ['password', 'token']);
// { id: '1', name: 'A' }
```

**Dùng khi**: chuẩn bị payload gửi API, loại bỏ field chỉ dùng ở client.

---

#### `objectToStyleInline(styleObj)`

Chuyển object style (SxProps) thành chuỗi CSS inline.

```ts
objectToStyleInline({ backgroundColor: '#fff', fontSize: '14px' });
// 'background-color:#fff;font-size:14px'
```

---

### `string.util.ts`

#### `stringToColor(str)`

Hash chuỗi thành màu HEX. Cùng một chuỗi luôn ra cùng một màu → dùng cho avatar.

```ts
stringToColor('Nguyễn Văn A'); // luôn ra cùng 1 màu HEX
stringToColor('Trần Thị B'); // màu khác, nhưng nhất quán
```

---

#### `extractNumberAtStartString(str)`

Trích số thực ở đầu chuỗi. Nếu không có số, trả về `0`.

```ts
extractNumberAtStartString('12px'); // 12
extractNumberAtStartString('3.5rem'); // 3.5
extractNumberAtStartString('abc'); // 0
```

---

#### `camelToKebabCase(str)`

```ts
camelToKebabCase('backgroundColor'); // 'background-color'
camelToKebabCase('fontSize'); // 'font-size'
```

---

#### `lightenColorTree(color, percentage)`

Làm nhạt màu HEX bằng cách blend với màu trắng theo tỉ lệ `percentage` (0–100).

```ts
lightenColorTree('#008a77', 40); // màu #008a77 nhạt hơn 40%
```

> [!NOTE]
> Chỉ hoạt động với màu HEX 6 ký tự (`#rrggbb`). Không hỗ trợ `rgba`, CSS variables.

---

#### `stripHtml(html)`

Loại bỏ toàn bộ HTML tag, trả về text thuần. Dùng DOM API (`createElement`).

```ts
stripHtml('<p>Xin <b>chào</b></p>'); // 'Xin chào'
stripHtml('<br/>'); // ''
```

---

#### `truncateText(text, maxLength?)`

Cắt ngắn chuỗi và thêm `...`. Mặc định `maxLength = 27`.

```ts
truncateText('Đây là mô tả rất dài cần cắt bớt', 15);
// 'Đây là mô tả r...'

truncateText('Ngắn', 27); // 'Ngắn' — không cắt
```

---

#### `normalizeText(text)`

Chuyển tiếng Việt có dấu → không dấu, lowercase. Dùng cho **tìm kiếm không phân biệt dấu**.

```ts
normalizeText('Nguyễn Văn Đức'); // 'nguyen van duc'
normalizeText('THÀNH PHỐ HỒ CHÍ MINH'); // 'thanh pho ho chi minh'
```

---

### `time.util.ts`

> Sử dụng **dayjs** với plugin `utc`, `relativeTime` và locale tiếng Việt (`vi.js`).

#### `getTimeAgo(time)`

Hiển thị thời gian dạng **tương đối**. Nếu cách hơn 7 ngày → hiện `DD/MM/YYYY`.

```ts
getTimeAgo(new Date(Date.now() - 60_000)); // '1 phút trước'
getTimeAgo(new Date(Date.now() - 3 * 86_400_000)); // '3 ngày trước'
getTimeAgo(new Date('2024-01-01')); // '01/01/2024'
```

---

#### `getDateTime(time, isGetDay?)`

```ts
getDateTime(date); // '23/02/2026 09:30 AM'
getDateTime(date, true); // '23/02/2026 09:30'   (bỏ AM/PM)
```

#### `getDate(time)` / `getTimeDate(time)`

```ts
getDate(date); // '23/02/2026'
getTimeDate(date); // '09:30 23/02/2026'
```

#### `checkNowYear(date, year)`

```ts
checkNowYear(new Date('2026-06-15'), 2026); // true
checkNowYear(new Date('2025-06-15'), 2026); // false
```

#### `getMonthRangeForYear(startDate, endDate, year)`

Trả về khoảng tháng (`{ start, end }`) của một date range trong năm `year`. Dùng cho component Gantt/Timeline.

```ts
getMonthRangeForYear(new Date('2025-11-01'), new Date('2026-03-31'), 2026);
// { start: 0, end: 2 }  →  tháng 1, 2, 3 của 2026
```

#### `getDayOffsetPx(date, monthWidths, dayWidth)`

Tính pixel offset của 1 ngày trong timeline dạng calendar ngang, dựa trên độ rộng tháng và ngày.

```ts
getDayOffsetPx(dayjs('2026-02-23'), [310, 280, 310, ...], 10);
// 310 + (23 - 1) * 10 = 530 (px)
```

#### `isSameDateTime(created, updated)` / `isDateString(value)`

```ts
isSameDateTime('2026-01-01T00:00:00Z', '2026-01-01T00:00:00Z'); // true

isDateString('2026-02-23'); // true  (YYYY-MM-DD)
isDateString('2026-02-23T09:30:00Z'); // true  (ISO)
isDateString('hello'); // false
```

---

### `number.util.ts`

#### `formatNumber(value, decimalPlaces?)`

Format số với dấu phân cách hàng nghìn kiểu `en-US`. Có thể chỉ định số chữ số thập phân.

```ts
formatNumber(1234567); // '1,234,567'
formatNumber(1234.5678, 2); // '1,234.57'
formatNumber('abc'); // 'abc'  — giá trị không hợp lệ, trả về nguyên
```

#### `round5000(number)`

Làm tròn số đến bội số **10,000** gần nhất, với ngưỡng chia là 5,000.

```ts
round5000(13000); // 10000  (13000 % 10000 = 3000 < 5000 → làm tròn xuống)
round5000(16000); // 20000  (16000 % 10000 = 6000 ≥ 5000 → làm tròn lên)
round5000(15000); // 10000  (đúng bằng 5000 → làm tròn xuống)
```

---

### `delay.util.ts`

#### `debounce<T>(func, delay)`

Trì hoãn thực thi hàm `func` cho đến khi ngừng gọi trong `delay` ms. **Chỉ lần gọi cuối được thực thi**.

```ts
const debouncedSearch = debounce((query: string) => fetchSearch(query), 300);

// Người dùng gõ nhanh → chỉ gọi API sau 300ms kể từ lúc dừng gõ
input.addEventListener('input', (e) => debouncedSearch(e.target.value));
```

#### `throttle<T>(func, delay)`

Giới hạn hàm `func` chỉ chạy **tối đa 1 lần mỗi `delay` ms**, bất kể gọi bao nhiêu lần.

```ts
const throttledScroll = throttle(() => updateStickyHeader(), 100);

// Scroll event kích hoạt liên tục → chỉ chạy mỗi 100ms
window.addEventListener('scroll', throttledScroll);
```

|                   | `debounce`           | `throttle`                     |
| ----------------- | -------------------- | ------------------------------ |
| **Khi nào chạy?** | Sau khi ngừng gọi    | Định kỳ trong khi đang gọi     |
| **Dùng cho**      | Search input, resize | Scroll, mousemove, API polling |

---

### `file.util.ts`

> Phụ thuộc **ExcelJS** và **file-saver**. Chỉ dùng phía client (browser).

#### `exportArrayObjectToExcel<T>(array, fileName, columnNameObj, sheetName?)`

Xuất mảng object ra file `.xlsx` và tự động download.

```ts
await exportArrayObjectToExcel(
  employees, // Dữ liệu
  'danh-sach-nhan-vien', // Tên file (không cần .xlsx)
  {
    // Map field → tên cột tiếng Việt
    name: 'Họ và tên',
    department: 'Phòng ban',
    salary: 'Lương',
  },
  'Nhân viên', // Tên sheet (mặc định: 'SHEET')
);
```

Tự động:

- Style header (font đậm, nền màu, border)
- Style row dữ liệu (border, căn lề)
- Auto-fit chiều rộng cột theo nội dung

---

#### `downloadFileFromBlob(response, fileName?)`

Download file từ **Axios response** (binary). Tự extract tên file từ header `Content-Disposition` nếu có.

```ts
const response = await api.get('/reports/export', { responseType: 'blob' });
downloadFileFromBlob(response, 'bao-cao-thang-2');
//  tạo thẻ <a> giả, trigger click, dọn dẹp DOM sau đó
```

#### `styleDefaultRowExcel` / `styleDefaultHeaderExcel` / `fitColumnWidthHeightExcel`

Helper nội bộ dùng trong `exportArrayObjectToExcel`. Thường không cần gọi trực tiếp trừ khi custom export phức tạp.

---

### `other.util.ts`

Các utility **có side effect** hoặc tương tác với DOM/browser, dùng xuyên suốt ứng dụng.

#### `getTheme(mode?)`

Tạo MUI Theme với các component override toàn cục (Button, TextField, Tooltip, scroll...). Truyền vào `Mode.DARK` hoặc `Mode.LIGHT`.

```ts
import { getTheme } from '@/common/utils';
import { Mode } from '@/common/enums';

// Trong App.tsx
const theme = getTheme(Mode.LIGHT);

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

**Override toàn cục tích hợp sẵn**:

- `MuiStack` → gap mặc định theo `STYLE.PADDING_GAP_LAYOUT`
- `MuiButton` → fullWidth, height cố định, font weight 400
- `MuiTextField` → outlined, small, fullWidth, border-radius theo design
- `MuiTooltip` → nền theo theme, shadow, bo góc
- `MuiDivider` → border color với opacity 30%
- `MuiTableCell` → bo góc đầu/cuối row, không có border
- `MuiCssBaseline` → custom scrollbar mảnh (6px), mờ khi không hover

---

#### `getLimitLineCss(line)`

Trả về `SxProps` cắt text sau `n` dòng bằng `-webkit-line-clamp`. Dùng trực tiếp trong prop `sx` của MUI.

```ts
import { getLimitLineCss } from '@/common/utils';

// Giới hạn tên sản phẩm 2 dòng
<Typography sx={getLimitLineCss(2)}>{product.name}</Typography>

// Caption tối đa 1 dòng
<Typography variant="caption" sx={getLimitLineCss(1)}>{description}</Typography>
```

---

#### `scrollTo(id)`

Scroll mượt (smooth) đến element có `id` chỉ định, căn giữa màn hình.

```ts
import { scrollTo } from '@/common/utils';

// Scroll đến phần lỗi đầu tiên
scrollTo('error-section');

// Scroll đến kết quả tìm kiếm
scrollTo(`result-${item.id}`);
```

---

#### `getCurrentEnvironment()`

Detect môi trường hiện tại từ `window.location.hostname`. Dùng khi cần phân biệt hành vi theo env mà không cần biến môi trường build.

```ts
import { getCurrentEnvironment } from '@/common/utils';
import { Environment } from '@/common/enums';

const env = getCurrentEnvironment();
// hostname có 'dev.' → Environment.DEVELOP
// hostname có 'sta.' → Environment.STAGING
// còn lại         → Environment.PRODUCTION

const apiUrl = APP_OBJ.HR.path[env];
```

---

#### `calculatePageAndIndex(urlIndex, urlPage, urlTake, currentTake)`

Tính lại `page` và `index` khi `take` (số item/trang) thay đổi, nhằm giữ đúng vị trí item đang xem.

```ts
calculatePageAndIndex(
  urlIndex, // index hiện tại trong URL
  urlPage, // page hiện tại trong URL
  urlTake, // take từ URL
  currentTake, // take hiện tại của component
);
//  { page: number, index: number }
```

**Ví dụ**: Đang xem item index `5` của page `2` với take `10` (tổng vị trí = 15), chuyển sang take `5` → page `4`, index `0`.

---

#### `getErrorMessage(e)`

Extract message từ error object bất kỳ. Fallback về chuỗi mặc định nếu không có.

```ts
import { getErrorMessage } from '@/common/utils';

try {
  await apiCall();
} catch (e) {
  const msg = getErrorMessage(e); // e?.message ?? 'Đã xảy ra lỗi không xác định!'
  showSnackbar(msg, SnackbarType.ERROR);
}
```

---

#### `getAppBlackList(user, env, appBlackList)`

Lấy danh sách key app bị ẩn, dựa trên config `appBlackList` theo env và kiểm tra thêm điều kiện theo `user.code`.

```ts
import { getAppBlackList } from '@/common/utils';

const blacklist = getAppBlackList(currentUser, getCurrentEnvironment(), {
  develop: ['LANDING_PAGE'],
  staging: ['LANDING_PAGE', 'FORMULA_PRICE'],
  production: [],
  production_vps: [],
});
// → ['LANDING_PAGE'] hoặc ['LANDING_PAGE', 'MEAL'] tùy user.code ở develop
```

> [!NOTE]
> Ở môi trường `develop`, app `MEAL` tự động bị ẩn trừ các user có code trong whitelist (`01745`, `04285`, `04356`, `CEO79`).

---

## Cách import

Tất cả các module đều được re-export qua `index.ts` của từng thư mục con:

```ts
// Cách 1: Import từ thư mục con
import { BRAND, STYLE } from '@/common/const';
import { Status, Mode } from '@/common/enums';
import { BaseEntity, ResList } from '@/common/interfaces';
import { normalizeText, getDate } from '@/common/utils';

// Cách 2: Import từ common trực tiếp (nếu index.ts re-export tất cả)
import { BRAND, Status, BaseEntity, normalizeText } from '@/common';
```

> [!TIP]
> Luôn ưu tiên dùng các hằng số từ `STYLE`, `BRAND`, `NEUTRAL`... thay vì hardcode giá trị màu sắc hoặc kích thước trực tiếp trong component. Điều này giúp dễ thay đổi design tập trung và nhất quán.

> [!NOTE]
> Khi thêm logic mới vào `utils`, hãy đảm bảo hàm là **pure function** (không có side effect, không trực tiếp gọi API) để dễ test và tái sử dụng.

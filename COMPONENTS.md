# Sevago SSO FE – Hướng dẫn sử dụng Components

> **Package**: `sevago-sso-fe` v1.0.125  
> **Framework**: React + TypeScript + MUI v5  
> Tất cả components / elements đều được export từ `sevago-sso-fe`.

---

## Mục lục

- [Components chính](#components-chính)
  - [AppGrid](#appgrid)
  - [AppGridItem](#appgriditem)
  - [BannerComponent](#bannercomponent)
  - [Breadcrumbs](#breadcrumbs)
  - [EmptyComponent](#emptycomponent)
  - [DefaultLayout](#defaultlayout)
  - [LoadingComponent](#loadingcomponent)
  - [LogoComponent](#logocomponent)
  - [MotionBox](#motionbox)
  - [NoteComponent](#notecomponent)
  - [PriceComponent](#pricecomponent)
  - [ReviewComponent](#reviewcomponent)
  - [AppsSidebar](#appssidebar)
  - [SystemMonitorSidebarPart](#systemmonitorsidebarpart)
  - [SystemMonitorScreen](#systemmonitorscreen)
- [Elements](#elements)
  - [Avatar](#avatar)
  - [Button](#button)
  - [CheckBox](#checkbox)
  - [Dialog](#dialog)
  - [Divider](#divider)
  - [Icon](#icon)
  - [Image](#image)
  - [Link](#link)
  - [Pagination](#pagination)
  - [Radio](#radio)
  - [Switch](#switch)
  - [Tabs](#tabs)
  - [Tag](#tag)
  - [Text Highlight](#text-highlight)
  - [TimeAgo](#timeago)
  - [Tooltip](#tooltip)
  - [Typography](#typography)
  - [User](#user)
  - [Wrapper](#wrapper)
- [Styled Components (Styles)](#styled-components-styles)

---

## Components chính

### AppGrid

**Mô tả**: Hiển thị danh sách ứng dụng dưới dạng lưới (grid) với hỗ trợ phân trang, tuỳ chỉnh số cột/hàng.

**Import**:

```tsx
import { AppGrid } from 'sevago-sso-fe';
```

**Props**:

| Prop              | Kiểu                                  | Mặc định      | Mô tả                            |
| ----------------- | ------------------------------------- | ------------- | -------------------------------- |
| `apps`            | `AppInfo[]`                           | **required**  | Danh sách ứng dụng               |
| `columns`         | `number`                              | `5`           | Số cột trong lưới                |
| `rows`            | `number`                              | `3`           | Số hàng mỗi trang                |
| `iconSize`        | `number`                              | `80`          | Kích thước icon (px)             |
| `iconRadius`      | `number`                              | `7`           | Bo góc icon                      |
| `gap`             | `number \| string`                    | —             | Khoảng cách giữa các item        |
| `titleVariant`    | `'subtitle1' \| 'body1' \| 'caption'` | `'subtitle1'` | Kiểu chữ tên app                 |
| `titleColor`      | `string`                              | —             | Màu chữ tên app                  |
| `showPagination`  | `boolean`                             | `true`        | Hiện/ẩn phân trang               |
| `onClickApp`      | `(appInfo: AppInfo) => void`          | **required**  | Callback khi click vào app       |
| `isShowAppHidden` | `boolean`                             | `false`       | Hiển thị placeholder cho ô trống |

**Ví dụ**:

```tsx
<AppGrid apps={myApps} columns={4} rows={2} iconSize={60} onClickApp={(app) => console.log(app)} />
```

---

### AppGridItem

**Mô tả**: Một item đơn lẻ trong lưới ứng dụng, hiển thị icon và tên app.

**Import**:

```tsx
import { AppGridItem } from 'sevago-sso-fe';
```

**Props**:

| Prop           | Kiểu                                  | Mặc định      | Mô tả              |
| -------------- | ------------------------------------- | ------------- | ------------------ |
| `app`          | `AppInfo`                             | **required**  | Thông tin ứng dụng |
| `iconSize`     | `number`                              | **required**  | Kích thước icon    |
| `iconRadius`   | `number`                              | **required**  | Bo góc icon        |
| `titleVariant` | `'subtitle1' \| 'body1' \| 'caption'` | `'subtitle1'` | Kiểu chữ           |
| `titleColor`   | `string`                              | —             | Màu chữ            |
| `showNameApps` | `boolean`                             | `true`        | Hiển thị tên app   |
| `showIconApps` | `boolean`                             | `true`        | Hiển thị icon app  |
| `direction`    | `'row' \| 'column'`                   | `'column'`    | Hướng layout       |

**Ví dụ**:

```tsx
<AppGridItem app={appInfo} iconSize={60} iconRadius={6} direction="row" showNameApps={true} />
```

---

### BannerComponent

**Mô tả**: Hiển thị ảnh banner full-width với hiệu ứng fade-in.

**Import**:

```tsx
import { BannerComponent } from 'sevago-sso-fe';
```

**Props**:

| Prop  | Kiểu     | Mô tả                         |
| ----- | -------- | ----------------------------- |
| `url` | `string` | **required** – URL ảnh banner |

**Ví dụ**:

```tsx
<BannerComponent url="https://example.com/banner.jpg" />
```

---

### Breadcrumbs

**Mô tả**: Thanh điều hướng breadcrumb với nút back. Tự động navigate(-1) nếu không cung cấp `onBack`.

**Import**:

```tsx
import { Breadcrumbs } from 'sevago-sso-fe';
```

**Props**:

| Prop             | Kiểu                  | Mặc định     | Mô tả                         |
| ---------------- | --------------------- | ------------ | ----------------------------- |
| `content`        | `string`              | **required** | Tiêu đề trang                 |
| `showBackButton` | `boolean`             | `true`       | Hiển thị nút back             |
| `onBack`         | `() => void`          | —            | Custom handler khi click back |
| `sxLabel`        | `React.CSSProperties` | —            | Custom style cho label        |

**Ví dụ**:

```tsx
<Breadcrumbs content="Chi tiết người dùng" onBack={() => navigate('/users')} />
```

---

### EmptyComponent

**Mô tả**: Hiển thị trạng thái rỗng (empty state) với icon minh hoạ. Dùng khi danh sách không có dữ liệu.

**Import**:

```tsx
import { EmptyComponent } from 'sevago-sso-fe';
```

**Ví dụ**:

```tsx
{
  data.length === 0 && <EmptyComponent />;
}
```

---

### DefaultLayout

**Mô tả**: Layout mặc định bao bọc toàn bộ trang, căn giữa nội dung theo chiều dọc và ngang, chiều cao tối thiểu 100vh.

**Import**:

```tsx
import { DefaultLayout } from 'sevago-sso-fe';
```

**Props**:

| Prop       | Kiểu        | Mô tả              |
| ---------- | ----------- | ------------------ |
| `children` | `ReactNode` | Nội dung bên trong |

**Ví dụ**:

```tsx
<DefaultLayout>
  <LoginForm />
</DefaultLayout>
```

---

### LoadingComponent

**Mô tả**: Hiển thị spinner CircularProgress, dùng cho trạng thái đang tải dữ liệu.

**Import**:

```tsx
import { LoadingComponent } from 'sevago-sso-fe';
```

**Props**:

| Prop    | Kiểu                             | Mặc định   | Mô tả              |
| ------- | -------------------------------- | ---------- | ------------------ |
| `color` | `string`                         | —          | Màu spinner        |
| `size`  | `'small' \| 'medium' \| 'large'` | `'medium'` | Kích thước spinner |
| `sx`    | `SxProps<Theme>`                 | —          | Custom styles      |

**Ví dụ**:

```tsx
{
  isLoading && <LoadingComponent size="small" color="#fff" />;
}
```

---

### LogoComponent

**Mô tả**: Hiển thị logo dạng ảnh, có thể click để về trang chủ SSO.

**Import**:

```tsx
import { LogoComponent } from 'sevago-sso-fe';
```

**Props**:

| Prop     | Kiểu      | Mặc định     | Mô tả          |
| -------- | --------- | ------------ | -------------- |
| `url`    | `string`  | **required** | URL ảnh logo   |
| `height` | `number`  | —            | Chiều cao logo |
| `sx`     | `SxProps` | —            | Custom styles  |

**Ví dụ**:

```tsx
<LogoComponent url="/images/logo.png" height={40} />
```

---

### MotionBox

**Mô tả**: Wrapper animation dùng `framer-motion`. Hỗ trợ nhiều preset animation sẵn có.

**Import**:

```tsx
import { MotionBox } from 'sevago-sso-fe';
```

**Props**:

| Prop       | Kiểu                  | Mặc định     | Mô tả                         |
| ---------- | --------------------- | ------------ | ----------------------------- |
| `preset`   | `AnimationPreset`     | `'fadeInUp'` | Preset animation              |
| `delay`    | `number`              | —            | Độ trễ animation (giây)       |
| `index`    | `number`              | —            | Index cho stagger animation   |
| `hover`    | `boolean`             | `false`      | Bật hiệu ứng hover (scale up) |
| `sx`       | `React.CSSProperties` | —            | Custom styles                 |
| `children` | `ReactNode`           | **required** | Nội dung                      |

**Các preset animation**:

| Preset         | Mô tả                                 |
| -------------- | ------------------------------------- |
| `fadeInUp`     | Fadeín từ dưới lên                    |
| `fadeInDown`   | Fade từ trên xuống                    |
| `fadeInLeft`   | Fade từ trái sang                     |
| `fadeInRight`  | Fade từ phải sang                     |
| `scaleIn`      | Scale phóng to dần                    |
| `slideInUp`    | Trượt nhẹ từ dưới lên                 |
| `staggerItem`  | Dùng với `index` – xuất hiện lần lượt |
| `tabContent`   | Dùng cho nội dung tab                 |
| `tabUnderline` | Dùng cho underline của tab            |

**Ví dụ**:

```tsx
<MotionBox preset="fadeInUp" hover>
  <MyCard />
</MotionBox>;

{
  /* Stagger list */
}
{
  items.map((item, i) => (
    <MotionBox key={item.id} preset="staggerItem" index={i}>
      <ItemCard item={item} />
    </MotionBox>
  ));
}
```

---

### NoteComponent

**Mô tả**: Hiển thị hộp ghi chú/thông báo với 4 loại: info, recommend, warning, error. Có border màu theo loại.

**Import**:

```tsx
import { NoteComponent } from 'sevago-sso-fe';
```

**Props**:

| Prop          | Kiểu                                            | Mặc định     | Mô tả              |
| ------------- | ----------------------------------------------- | ------------ | ------------------ |
| `content`     | `string`                                        | **required** | Nội dung thông báo |
| `type`        | `'info' \| 'recommend' \| 'warning' \| 'error'` | `'info'`     | Loại thông báo     |
| `contentHref` | `string`                                        | —            | Text link đính kèm |
| `href`        | `string`                                        | —            | URL của link       |

**Ví dụ**:

```tsx
<NoteComponent type="warning" content="Bạn chưa xác thực email." />
<NoteComponent type="info" content="Xem thêm tại" contentHref="tài liệu" href="/docs" />
```

---

### PriceComponent

**Mô tả**: Hiển thị giá, giá gốc (có gạch ngang) và phần trăm giảm giá.

**Import**:

```tsx
import { PriceComponent } from 'sevago-sso-fe';
```

**Props**:

| Prop              | Kiểu                             | Mặc định     | Mô tả                         |
| ----------------- | -------------------------------- | ------------ | ----------------------------- |
| `price`           | `number`                         | **required** | Giá hiện tại                  |
| `originalPrice`   | `number`                         | —            | Giá gốc (hiển thị gạch ngang) |
| `discountPercent` | `number`                         | —            | Phần trăm giảm giá            |
| `size`            | `'small' \| 'medium' \| 'large'` | `'small'`    | Kích thước chữ                |
| `color`           | `string`                         | Error color  | Màu giá                       |
| `onClick`         | `(e) => void`                    | —            | Callback khi click            |

**Ví dụ**:

```tsx
<PriceComponent price={250000} originalPrice={500000} discountPercent={50} size="medium" />
```

---

### ReviewComponent

**Mô tả**: Hiển thị đánh giá sao với điểm trung bình và số lượt review.

**Import**:

```tsx
import { ReviewComponent } from 'sevago-sso-fe';
```

**Props**:

| Prop            | Kiểu             | Mô tả                          |
| --------------- | ---------------- | ------------------------------ |
| `averageRating` | `number`         | **required** – Điểm trung bình |
| `reviewCount`   | `number`         | **required** – Số lượt review  |
| `onClick`       | `(e) => void`    | Callback khi click             |
| `sx`            | `SxProps<Theme>` | Custom styles                  |

**Ví dụ**:

```tsx
<ReviewComponent averageRating={4.5} reviewCount={128} onClick={() => scrollToReviews()} />
```

---

### AppsSidebar

**Mô tả**: Sidebar trượt ra hiển thị danh sách tất cả ứng dụng trong hệ thống, nhóm theo `AppGroup`. Có overlay backdrop.

**Import**:

```tsx
import { AppsSidebar } from 'sevago-sso-fe';
```

**Props**:

| Prop         | Kiểu                         | Mặc định     | Mô tả                         |
| ------------ | ---------------------------- | ------------ | ----------------------------- |
| `isOpen`     | `boolean`                    | **required** | Trạng thái mở/đóng            |
| `onClose`    | `() => void`                 | **required** | Callback đóng sidebar         |
| `env`        | `Environment`                | **required** | Môi trường (dev/staging/prod) |
| `onClickApp` | `(appInfo: AppInfo) => void` | **required** | Callback khi chọn app         |
| `position`   | `'left' \| 'right'`          | `'left'`     | Vị trí sidebar                |
| `blacklist`  | `string[]`                   | `[]`         | Danh sách app ẩn (theo key)   |

**Ví dụ**:

```tsx
const [open, setOpen] = useState(false);

<AppsSidebar
  isOpen={open}
  onClose={() => setOpen(false)}
  env={Environment.PRODUCTION}
  onClickApp={(app) => window.open(app.path[env])}
/>;
```

---

### SystemMonitorSidebarPart

**Mô tả**: Component nhỏ dùng trong header/navbar – hiển thị icon lưới app để mở `AppsSidebar`, đồng thời tự detect và hiển thị app hiện tại đang dùng.

**Import**:

```tsx
import { SystemMonitorSidebarPart } from 'sevago-sso-fe';
```

**Props**:

| Prop           | Kiểu                         | Mặc định     | Mô tả                      |
| -------------- | ---------------------------- | ------------ | -------------------------- |
| `env`          | `Environment`                | **required** | Môi trường                 |
| `onClickApp`   | `(appInfo: AppInfo) => void` | **required** | Callback chọn app          |
| `position`     | `'left' \| 'right'`          | —            | Vị trí sidebar             |
| `blacklist`    | `string[]`                   | —            | App bị ẩn                  |
| `showNameApps` | `boolean`                    | —            | Hiển thị tên app hiện tại  |
| `showIconApps` | `boolean`                    | —            | Hiển thị icon app hiện tại |
| `direction`    | `'row' \| 'column'`          | `'row'`      | Hướng layout app hiện tại  |

**Ví dụ**:

```tsx
<SystemMonitorSidebarPart
  env={Environment.PRODUCTION}
  onClickApp={(app) => (window.location.href = app.path[env])}
  showNameApps
/>
```

---

### SystemMonitorScreen

**Mô tả**: Màn hình tổng quan hệ thống hiển thị tất cả ứng dụng SSO, có filter theo nhóm (AppGroup) và animation tab.

**Import**:

```tsx
import { SystemMonitorScreen } from 'sevago-sso-fe';
```

**Props**:

| Prop         | Kiểu                         | Mô tả                            |
| ------------ | ---------------------------- | -------------------------------- |
| `env`        | `Environment`                | **required** – Môi trường        |
| `onClickApp` | `(appInfo: AppInfo) => void` | **required** – Callback chọn app |
| `blacklist`  | `string[]`                   | Danh sách app ẩn                 |

**Ví dụ**:

```tsx
<SystemMonitorScreen
  env={Environment.PRODUCTION}
  blacklist={['APP_ADMIN']}
  onClickApp={(app) => navigate(app.path[env])}
/>
```

---

## Elements

### Avatar

#### `AvatarElement`

**Mô tả**: Avatar hiển thị ảnh người dùng. Hỗ trợ tooltip khi hover.

**Import**:

```tsx
import { AvatarElement } from 'sevago-sso-fe';
```

**Props**:

| Prop             | Kiểu             | Mặc định | Mô tả                      |
| ---------------- | ---------------- | -------- | -------------------------- |
| `url`            | `string \| null` | —        | URL ảnh đại diện           |
| `size`           | `SizeProps`      | `MEDIUM` | Kích thước avatar          |
| `tooltipContent` | `ReactNode`      | —        | Nội dung tooltip khi hover |

**Ví dụ**:

```tsx
<AvatarElement url={user.avatar} size={SizeProps.LARGE} tooltipContent={<UserCard user={user} />} />
```

#### `AvatarOnlineStatusElement`

**Mô tả**: Avatar với badge trạng thái online/offline (chấm xanh có animation ripple hoặc chấm xám).

```tsx
<AvatarOnlineStatusElement url={user.avatar} online={user.isOnline} size={SizeProps.EXTRA_LARGE} />
```

#### `AvatarUserInfo`

**Mô tả**: Avatar kết hợp với tên và chức vụ/vị trí người dùng hiển thị dạng hàng ngang.

**Props chính**: `name`, `url`, `positions[]`, `sizeAvatar`, `isTag` (hiển thị vị trí dạng tag badge), `maxWidth`.

```tsx
<AvatarUserInfo name="Nguyễn Văn A" url={user.avatar} positions={['Trưởng phòng', 'Kỹ thuật']} isTag />
```

---

### Button

#### `ButtonElement`

**Mô tả**: Button cơ bản, hỗ trợ loading spinner, icon trái/phải, disable.

**Import**:

```tsx
import { ButtonElement } from 'sevago-sso-fe';
```

| Prop        | Kiểu                     | Mặc định      | Mô tả                                        |
| ----------- | ------------------------ | ------------- | -------------------------------------------- |
| `content`   | `string`                 | —             | Text hiển thị                                |
| `loading`   | `boolean`                | `false`       | Hiển thị spinner                             |
| `startIcon` | `string \| ReactNode`    | —             | Icon bên trái (Material icon name hoặc node) |
| `endIcon`   | `string \| ReactNode`    | —             | Icon bên phải                                |
| `variant`   | `ButtonProps['variant']` | `'contained'` | Dạng button                                  |

```tsx
<ButtonElement content="Lưu" loading={isSaving} startIcon="save" onClick={handleSave} />
```

#### `ButtonIconElement`

**Mô tả**: Button chỉ có icon, không có text.

```tsx
<ButtonIconElement icon="search" onClick={handleSearch} />
```

#### `ButtonIconCircleElement`

**Mô tả**: `IconButton` hình tròn với nền mờ, hover đổi màu primary.

```tsx
<ButtonIconCircleElement icon="edit" onClick={handleEdit} />
```

#### `ButtonIconSquareElement`

**Mô tả**: Button hình vuông chỉ có icon, dùng cho toolbar.

```tsx
<ButtonIconSquareElement icon="filter_list" onClick={openFilter} />
```

#### `ButtonImageElement`

**Mô tả**: Button có ảnh (logo/flag) thay cho Material icon.

| Prop        | Mô tả            |
| ----------- | ---------------- |
| `content`   | Text button      |
| `startIcon` | URL ảnh bên trái |
| `endIcon`   | URL ảnh bên phải |

```tsx
<ButtonImageElement content="Google" startIcon="/icons/google.png" onClick={loginGoogle} />
```

#### `ButtonUploadFileElement`

**Mô tả**: Button upload file, mở file picker, trả về danh sách `FileWithPreview` (có preview URL).

| Prop       | Kiểu                                 | Mặc định     | Mô tả                    |
| ---------- | ------------------------------------ | ------------ | ------------------------ |
| `multiple` | `boolean`                            | `false`      | Cho phép chọn nhiều file |
| `accept`   | `string`                             | `'image/*'`  | Loại file chấp nhận      |
| `onChange` | `(files: FileWithPreview[]) => void` | **required** | Callback nhận file       |

```tsx
<ButtonUploadFileElement multiple accept=".pdf,.docx" onChange={(files) => setAttachments(files)} />
```

#### `ButtonIconContentOpacityElement`

**Mô tả**: Button hiển thị text bình thường, khi hover sẽ ẩn text và hiện icon (transition opacity).

```tsx
<ButtonIconContentOpacityElement icon="delete" content="Xoá" onClick={handleDelete} />
```

---

### CheckBox

#### `CheckboxElement`

**Mô tả**: Checkbox có label, mở rộng từ MUI Checkbox.

```tsx
import { CheckboxElement } from 'sevago-sso-fe';

<CheckboxElement label="Tôi đồng ý điều khoản" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />;
```

---

### Dialog

#### `DialogElement`

**Mô tả**: Modal dialog linh hoạt với tiêu đề, icon, nội dung tuỳ chỉnh, và tối đa 3 nút (left/center/right). Hỗ trợ Formik form bên trong và bảng giúp đỡ (help panel).

**Import**:

```tsx
import { DialogElement } from 'sevago-sso-fe';
```

**Props chính**:

| Prop           | Kiểu                                   | Mô tả                                              |
| -------------- | -------------------------------------- | -------------------------------------------------- |
| `open`         | `boolean`                              | **required** – Trạng thái mở                       |
| `label`        | `string`                               | Tiêu đề dialog                                     |
| `iconLabel`    | `string`                               | Icon phía trước tiêu đề (Material icon name)       |
| `nodeContent`  | `ReactNode`                            | Nội dung chính                                     |
| `buttonLeft`   | `ButtonElementProps & { buttonType? }` | Nút bên trái (thường là Huỷ)                       |
| `buttonRight`  | `ButtonElementProps & { buttonType? }` | Nút bên phải (thường là Xác nhận)                  |
| `buttonCenter` | `ButtonElementProps & { buttonType? }` | Nút giữa                                           |
| `isForm`       | `boolean`                              | Bọc nội dung trong `<Form>` của Formik             |
| `nodeHelp`     | `ReactNode`                            | Nội dung panel giúp đỡ (toggle bằng nút "Giúp đỡ") |
| `closeButton`  | `boolean`                              | Hiển thị nút X đóng (mặc định `true`)              |

**buttonType** nhận một trong: `'success' | 'error' | 'warning' | 'info' | 'cancel'`

```tsx
<DialogElement
  open={isOpen}
  onClose={() => setIsOpen(false)}
  label="Tạo người dùng"
  iconLabel="person_add"
  nodeContent={<CreateUserForm />}
  buttonLeft={{ content: 'Huỷ', onClick: () => setIsOpen(false), buttonType: 'cancel' }}
  buttonRight={{ content: 'Tạo', onClick: handleSubmit, loading: isCreating, buttonType: 'success' }}
/>
```

#### `DialogConfirmActionElement`

**Mô tả**: Dialog xác nhận hành động đơn giản với tiêu đề, mô tả và 2 nút Huỷ/Xác nhận.

```tsx
<DialogConfirmActionElement
  open={isOpen}
  title="Xoá tài khoản"
  description="Bạn có chắc muốn xoá tài khoản này không? Hành động không thể hoàn tác."
  confirmText="Xoá"
  confirmColor={SnackbarType.ERROR}
  onClose={() => setIsOpen(false)}
  onConfirm={handleDelete}
  loading={isDeleting}
/>
```

---

### Divider

#### `DashedDividerElement`

**Mô tả**: Đường phân cách kiểu nét đứt hoặc solid, hỗ trợ chiều ngang và chiều dọc.

```tsx
import { DashedDividerElement } from 'sevago-sso-fe';

// Ngang
<DashedDividerElement />

// Dọc
<DashedDividerElement orientation="vertical" length="100%" />

// Solid
<DashedDividerElement dashed={false} color="#e0e0e0" />
```

---

### Icon

#### `IconElement`

**Mô tả**: Hiển thị Material Symbols icon. Hỗ trợ click handler, disabled state, filled/outline style.

```tsx
import { IconElement } from 'sevago-sso-fe';

<IconElement icon="home" size="medium" />
<IconElement icon="star" fill={1} color="warning" />
<IconElement icon="edit" onClick={handleEdit} />
```

| Prop       | Kiểu                             | Mặc định   | Mô tả                       |
| ---------- | -------------------------------- | ---------- | --------------------------- |
| `icon`     | `string`                         | —          | Tên icon Material Symbols   |
| `size`     | `'small' \| 'medium' \| 'large'` | `'medium'` | Kích thước                  |
| `fill`     | `0 \| 1`                         | `0`        | `0` = outline, `1` = filled |
| `disabled` | `boolean`                        | —          | Vô hiệu hoá icon            |
| `onClick`  | `(e) => void`                    | —          | Handler click               |

#### `IconButtonElement`

**Mô tả**: Icon button nhỏ có vị trí tuyệt đối (thường dùng trong input để clear/toggle).

```tsx
<IconButtonElement icon="close" onClick={() => setValue('')} />
```

#### `IconContentElement`

**Mô tả**: Icon + text hiển thị cùng hàng. Là thành phần cơ bản cho menu, tab, label.

```tsx
<IconContentElement icon="settings" content="Cài đặt" size="medium" onClick={openSettings} />
```

#### `IconContentOpacityElement`

**Mô tả**: Khi hover sẽ ẩn text và hiện icon (transition opacity).

```tsx
<IconContentOpacityElement icon="edit" content="Chỉnh sửa" onClick={handleEdit} />
```

#### `IconContentBadgeElement`

**Mô tả**: `IconContentElement` với badge số đếm (thông báo chưa đọc, v.v).

```tsx
<IconContentBadgeElement icon="notifications" content="Thông báo" badgeCount={5} size="medium" />
```

#### `IconContentSubsElement`

**Mô tả**: `IconContentElement` có dropdown sub-menu khi hover (danh sách tab con).

```tsx
<IconContentSubsElement
  icon="apps"
  content="Sản phẩm"
  subs={[
    { id: 'product-list', name: 'Danh sách', onClick: () => navigate('/products') },
    { id: 'product-add', name: 'Thêm mới', onClick: () => navigate('/products/new') },
  ]}
/>
```

#### `IconContentBadgeSubsElement`

**Mô tả**: Kết hợp badge number + dropdown sub-menu.

```tsx
<IconContentBadgeSubsElement icon="inbox" content="Hộp thư" badgeCount={12} subs={mailSubTabs} />
```

---

### Image

#### `ImageElement`

**Mô tả**: Hiển thị ảnh với skeleton loading, fallback khi lỗi, hỗ trợ các kiểu bo góc.

```tsx
import { ImageElement, ImageSizeType } from 'sevago-sso-fe';

<ImageElement url="/images/avatar.jpg" sizeType={ImageSizeType.CIRCLE} size={SizeProps.LARGE} />
<ImageElement url="/images/product.jpg" sizeType={ImageSizeType.SQUARE} sx={{ width: 120, height: 120 }} />
```

| `ImageSizeType` | Mô tả        |
| --------------- | ------------ |
| `CIRCLE`        | Bo tròn 50%  |
| `SQUARE`        | Bo góc nhỏ   |
| `FULL_WIDTH`    | Không bo góc |

#### `ImageContentCaptionComponent`

**Mô tả**: Avatar + tên chính + caption phụ (thường dùng cho danh sách người dùng).

```tsx
<ImageContentCaptionComponent url={user.avatar} content={user.name} caption={user.email} />
```

#### `ImageContentTimeComponent`

**Mô tả**: Avatar + tên + thời gian tương đối (x phút trước).

```tsx
<ImageContentTimeComponent url={user.avatar} content={user.name} time={new Date(post.createdAt)} />
```

---

### Link

#### `LinkElement`

**Mô tả**: `<a>` tag không có gạch chân, hỗ trợ `onClick` với `preventDefault`.

```tsx
import { LinkElement } from 'sevago-sso-fe';

<LinkElement href="/dashboard">Trang chủ</LinkElement>
<LinkElement onClick={() => navigate('/profile')}>Hồ sơ</LinkElement>
```

#### `LinkInternalElement`

**Mô tả**: Text dạng link nội bộ (không dùng `<a>`), hiện gạch chân khi hover.

```tsx
<LinkInternalElement content="Xem thêm" onClick={handleViewMore} />
```

---

### Pagination

#### `PaginationElement`

**Mô tả**: Component phân trang đầy đủ với nút first/last, và dropdown chọn số hàng mỗi trang.

```tsx
import { PaginationElement } from 'sevago-sso-fe';

<PaginationElement
  total={200}
  page={currentPage}
  take={pageSize}
  onChange={({ page, take }) => {
    setCurrentPage(page);
    setPageSize(take);
  }}
/>;
```

| Prop              | Kiểu      | Mặc định     | Mô tả                      |
| ----------------- | --------- | ------------ | -------------------------- |
| `total`           | `number`  | `0`          | Tổng số bản ghi            |
| `page`            | `number`  | **required** | Trang hiện tại             |
| `take`            | `number`  | `10`         | Số bản ghi mỗi trang       |
| `openRowsPerPage` | `boolean` | `true`       | Hiện dropdown chọn số hàng |

---

### Radio

#### `RadioElement`

**Mô tả**: Radio button đơn lẻ có label.

```tsx
import { RadioElement } from 'sevago-sso-fe';

<RadioElement name="gender" value="male" label="Nam" checked={gender === 'male'} onChange={onGenderChange} />;
```

#### `RadioGroupElement`

**Mô tả**: Nhóm radio có label, icon, hướng row/column, tích hợp sẵn với Formik.

```tsx
<RadioGroupElement name="role" label="Vai trò" iconLabel="admin_panel_settings" value={role} onChange={handleChange}>
  <RadioElement value="admin" label="Admin" />
  <RadioElement value="user" label="User" />
</RadioGroupElement>
```

---

### Switch

#### `SwitchElement`

**Mô tả**: Toggle switch tuỳ chỉnh dùng `framer-motion`, trả về giá trị boolean.

```tsx
import { SwitchElement } from 'sevago-sso-fe';

<SwitchElement name="isActive" value={isActive} onChange={(e) => setIsActive(e.target.value)} />;
```

#### `SwitchContentElement`

**Mô tả**: Switch + label text hiển thị cùng hàng (justify-end).

```tsx
<SwitchContentElement name="notifications" content="Bật thông báo" value={notifications} onChange={handleChange} />
```

---

### Tabs

#### `TabsComponent`

**Mô tả**: Thanh tab với animation trượt (framer-motion layout animation). Hỗ trợ 2 variant: `contained` (nền màu chính) và `outlined` (MUI Tabs).

```tsx
import { TabsComponent } from 'sevago-sso-fe';

const tabs = [
  { id: 'overview', name: 'Tổng quan', icon: 'dashboard' },
  { id: 'settings', name: 'Cài đặt', icon: 'settings' },
];

<TabsComponent tabs={tabs} idSelect="overview" onChange={(id) => setActiveTab(id)} />;
```

| Prop        | Kiểu                        | Mặc định      | Mô tả                |
| ----------- | --------------------------- | ------------- | -------------------- |
| `tabs`      | `TabComponent[]`            | **required**  | Danh sách tab        |
| `idSelect`  | `string`                    | —             | ID tab đang chọn     |
| `variant`   | `'contained' \| 'outlined'` | `'contained'` | Kiểu hiển thị        |
| `direction` | `'row' \| 'column'`         | `'row'`       | Hướng tab            |
| `onChange`  | `(id: string) => void`      | —             | Callback khi đổi tab |

#### `TabsBadgeCountComponent`

**Mô tả**: Tabs có badge số đếm (thông báo, tin nhắn chưa đọc).

```tsx
const tabs: TabBadgeCount[] = [
  { id: 'inbox', name: 'Hộp thư đến', icon: 'inbox', badgeCount: 5 },
  { id: 'sent', name: 'Đã gửi', icon: 'send', badgeCount: 0 },
];

<TabsBadgeCountComponent tabs={tabs} idSelect="inbox" onSelect={(id) => setTab(id)} />;
```

#### `TabsSubsComponent`

**Mô tả**: Tabs có sub-menu dropdown (hover để xem tab con).

```tsx
const tabs: TabSubs[] = [
  {
    id: 'products',
    icon: 'inventory',
    name: 'Sản phẩm',
    subs: [
      { id: 'product-list', name: 'Danh sách', href: '/products' },
      { id: 'product-add', name: 'Thêm mới', href: '/products/new' },
    ],
  },
];

<TabsSubsComponent tabs={tabs} idSelect="products" />;
```

#### `TabsBadgeCountSubsComponent`

**Mô tả**: Kết hợp badge number + sub-menu dropdown cho các tab.

---

### Tag

#### `TagElement`

**Mô tả**: Thẻ nhãn (tag/badge) với 3 variant và nhiều màu tuỳ chỉnh.

```tsx
import { TagElement } from 'sevago-sso-fe';

// Dùng màu hex
<TagElement type="#22c55e" content="Đang hoạt động" size="small" />

// Variant outlined (nền nhạt)
<TagElement type="#ef4444" content="Đã huỷ" variant="outlined" />

// Outlined với border
<TagElement type="#f59e0b" content="Chờ duyệt" variant="outlined-border" />
```

| Prop        | Kiểu                                             | Mặc định      | Mô tả           |
| ----------- | ------------------------------------------------ | ------------- | --------------- |
| `type`      | `string`                                         | **required**  | Màu hex của tag |
| `content`   | `string`                                         | **required**  | Text hiển thị   |
| `size`      | `'small' \| 'medium' \| 'large'`                 | `'medium'`    | Kích thước      |
| `variant`   | `'contained' \| 'outlined' \| 'outlined-border'` | `'contained'` | Kiểu hiển thị   |
| `iconProps` | `ReactNode`                                      | —             | Icon đi kèm     |

#### `TagOnClickElement`

**Mô tả**: Tag có thể click để chọn/bỏ chọn, thay đổi border màu primary khi active.

```tsx
<TagOnClickElement content="React" active={selectedTags.includes('React')} onClick={() => toggleTag('React')} />
```

---

### Text Highlight

**Mô tả**: Utility functions để highlight từ tìm kiếm trong text.

**Import**:

```tsx
import { highlightText, highlightYellow } from 'sevago-sso-fe';
```

```tsx
// Highlight với underline màu đặc biệt
const highlighted = highlightText('Nguyễn Văn An', 'van');

// Highlight màu vàng
const highlighted = highlightYellow('Hello World', 'world', false);

// Dùng trong JSX
<Typography>{highlightText(user.name, searchQuery)}</Typography>;
```

---

### TimeAgo

#### `TimeAgoComponent`

**Mô tả**: Hiển thị thời gian tương đối (vd: "3 phút trước", "2 giờ trước").

```tsx
import { TimeAgoComponent } from 'sevago-sso-fe';

<TimeAgoComponent time={new Date(post.createdAt)} hasText />;
// Output: "Cập nhật lúc 5 phút trước"
```

#### `TimeAgoContentComponent`

**Mô tả**: Tên + thời gian tương đối xếp theo cột.

```tsx
<TimeAgoContentComponent content="Nguyễn Văn A" time={new Date(lastSeen)} />
```

---

### Tooltip

#### `TooltipOnHoverElement`

**Mô tả**: Tooltip hiển thị khi hover, hỗ trợ ReactNode làm content.

```tsx
import { TooltipOnHoverElement } from 'sevago-sso-fe';

<TooltipOnHoverElement content={<UserCard user={user} />} placement="top">
  <AvatarElement url={user.avatar} />
</TooltipOnHoverElement>;
```

#### `TooltipOnClickElement`

**Mô tả**: Tooltip hiển thị khi click (không phải hover), tự đóng khi click ra ngoài (ClickAwayListener).

```tsx
<TooltipOnClickElement content="Đã sao chép!" open={copied} placement="top" onClickAway={() => setCopied(false)}>
  <IconButtonElement icon="content_copy" onClick={handleCopy} />
</TooltipOnClickElement>
```

---

### Typography

#### `TypographyContentCaption`

**Mô tả**: 2 dòng text: tiêu đề chính + phụ đề (caption), có thể thêm dòng userTitleName.

```tsx
import { TypographyContentCaption } from 'sevago-sso-fe';

<TypographyContentCaption content="Nguyễn Văn A" caption="nguyenvana@email.com" userTitleName="Admin" />;
```

#### `TypographyGridInfoRow`

**Mô tả**: Hàng thông tin label–value dạng grid (hỗ trợ layout `horizontal` và `vertical`).

```tsx
import { TypographyGridInfoRow } from 'sevago-sso-fe';

<TypographyGridInfoRow label="Họ và tên" value="Nguyễn Văn A" />
<TypographyGridInfoRow label="Email" value="email@example.com" layout="vertical" />
```

#### `TypographyInfoRow`

**Mô tả**: Hàng thông tin đơn giản `label: value` (row hoặc column).

```tsx
import { TypographyInfoRow } from 'sevago-sso-fe';

<TypographyInfoRow label="Phòng ban" value={user.department} />
<TypographyInfoRow label="Ghi chú" value={user.note} isColumn lineLimit={3} />
```

#### `TypographyInfoUser`

**Mô tả**: Grid nhiều cột hiển thị thông tin người dùng dạng label: value. Hỗ trợ highlight tìm kiếm.

```tsx
import { TypographyInfoUser } from 'sevago-sso-fe';

const items = [
  { label: 'Họ tên', value: user.name },
  { label: 'Email', value: user.email },
  { label: 'Điện thoại', value: user.phone },
  { label: 'Địa chỉ', value: user.address },
];

<TypographyInfoUser items={items} columns={2} highlightQuery={searchQuery} />;
```

#### `TypographyOneLine` (TypographyLimitOneLine)

**Mô tả**: Text giới hạn 1 dòng với ellipsis (...).

```tsx
import { TypographyOneLine } from 'sevago-sso-fe';

<TypographyOneLine content={longTitle} sx={{ maxWidth: 200 }} />;
```

---

### User

#### `UserInfo`

**Mô tả**: Hiển thị tên và phòng ban của người dùng với icon.

```tsx
import { UserInfo } from 'sevago-sso-fe';

<UserInfo name="Nguyễn Văn A" department="Phòng Kỹ thuật" icon="person" />;
```

---

### Wrapper

#### `WrapperElement`

**Mô tả**: Container trang/section với label tiêu đề, actions và loading state. Dùng để bọc một section chính trong trang.

```tsx
import { WrapperElement } from 'sevago-sso-fe';

<WrapperElement
  label="Danh sách người dùng"
  iconLabel="people"
  loading={isLoading}
  nodeAction={<ButtonElement content="Thêm mới" startIcon="add" onClick={openCreate} />}
>
  <UserTable data={users} />
</WrapperElement>;
```

**Props chính**:

| Prop         | Kiểu                | Mô tả                        |
| ------------ | ------------------- | ---------------------------- |
| `label`      | `string`            | Tiêu đề section              |
| `iconLabel`  | `string`            | Icon Material trước tiêu đề  |
| `loading`    | `boolean`           | Hiển thị loading spinner     |
| `nodeAction` | `ReactNode`         | Node action bên phải tiêu đề |
| `height`     | `string \| number`  | Chiều cao container          |
| `direction`  | `'column' \| 'row'` | Hướng layout nội dung        |

#### `WrapperContentElement`

**Mô tả**: Container nhẹ hơn `WrapperElement`, không có padding ngoài, dùng trong panel/card.

```tsx
<WrapperContentElement label="Thông tin chi tiết" iconLabel="info" loading={loading}>
  <DetailPanel data={detail} />
</WrapperContentElement>
```

#### `WrapperChartElement`

**Mô tả**: Container chuyên dùng cho biểu đồ (chart) với tiêu đề giữa và loading state.

```tsx
<WrapperChartElement name="Doanh thu theo tháng" loading={isLoading} chart={<RevenueChart data={chartData} />} />
```

---

## Styled Components (Styles)

Thư viện cung cấp các Styled Components tiện lợi, được export sẵn.

### Stack Styles

```tsx
import {
  StackRow, // flexDirection: row
  StackRowWrap, // row + flex-wrap
  StackRowAlignCenter, // row + alignItems: center
  StackRowAlignCenterJustBetween, // row + center + space-between
  StackRowAlignCenterJustEnd, // row + center + flex-end
  StackRowJustBetween, // row + space-between
  StackRowAlignJustCenter, // row + center + center
  StackAlignJustCenter, // column + center + center
  StackAlignCenter, // column + alignItems: center
  StackBgDefaultBorRadLayCol, // background.default + padding + border-radius
  StackBgPaperBorRadLayCol, // background.paper + padding + border-radius
  StackTabs, // styled container cho tabs
} from 'sevago-sso-fe';
```

### Typography Styles

```tsx
import { TypographyFilter } from 'sevago-sso-fe';
// Typography dạng filter chip, hover đổi màu primary
```

### Paper Styles

```tsx
import { PaperSelect } from 'sevago-sso-fe';
// Paper dùng cho dropdown/autocomplete, hỗ trợ tree-select styling
```

---

## Import tất cả components

Toàn bộ components đều được re-export qua entry point chính:

```tsx
import {
  // Components
  AppGrid,
  AppGridItem,
  BannerComponent,
  Breadcrumbs,
  EmptyComponent,
  DefaultLayout,
  LoadingComponent,
  LogoComponent,
  MotionBox,
  NoteComponent,
  PriceComponent,
  ReviewComponent,
  AppsSidebar,
  SystemMonitorSidebarPart,
  SystemMonitorScreen,

  // Elements - Avatar
  AvatarElement,
  AvatarOnlineStatusElement,
  AvatarUserInfo,

  // Elements - Button
  ButtonElement,
  ButtonIconElement,
  ButtonIconCircleElement,
  ButtonIconSquareElement,
  ButtonImageElement,
  ButtonUploadFileElement,
  ButtonIconContentOpacityElement,

  // Elements - Others
  CheckboxElement,
  DialogElement,
  DialogConfirmActionElement,
  DashedDividerElement,
  IconElement,
  IconButtonElement,
  IconContentElement,
  IconContentOpacityElement,
  IconContentBadgeElement,
  IconContentSubsElement,
  IconContentBadgeSubsElement,
  ImageElement,
  ImageContentCaptionComponent,
  ImageContentTimeComponent,
  LinkElement,
  LinkInternalElement,
  PaginationElement,
  RadioElement,
  RadioGroupElement,
  SwitchElement,
  SwitchContentElement,
  TabsComponent,
  TabsBadgeCountComponent,
  TabsSubsComponent,
  TabsBadgeCountSubsComponent,
  TagElement,
  TagOnClickElement,
  highlightText,
  highlightYellow,
  TimeAgoComponent,
  TimeAgoContentComponent,
  TooltipOnClickElement,
  TooltipOnHoverElement,
  TypographyContentCaption,
  TypographyGridInfoRow,
  TypographyInfoRow,
  TypographyInfoUser,
  TypographyOneLine,
  UserInfo,
  WrapperElement,
  WrapperContentElement,
  WrapperChartElement,

  // Styles
  StackRow,
  StackRowAlignCenter,
  StackRowAlignCenterJustBetween,
  StackBgDefaultBorRadLayCol,
  StackBgPaperBorRadLayCol,
  StackTabs,
  TypographyFilter,
  PaperSelect,
} from 'sevago-sso-fe';
```

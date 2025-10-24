/**
 * Hàm tính toán page và index từ các tham số URL
 * @param urlIndex - index từ URL (vị trí item trong page)
 * @param urlPage - page từ URL
 * @param urlTake - số item mỗi page từ URL
 * @param currentTake - số item mỗi page hiện tại của component (mặc định: 10)
 * @returns {page: number, index: number} - page và index đã được tính toán để phù hợp với currentTake
 */
export const calculatePageAndIndex = (
  urlIndex: number,
  urlPage: number,
  urlTake: number,
  currentTake: number = 10,
): { page: number; index: number } => {
  // Nếu take từ URL bằng take hiện tại, giữ nguyên page và index
  if (urlTake === currentTake) {
    return {
      page: urlPage,
      index: urlIndex,
    };
  }

  // Tính toán vị trí tuyệt đối của item trong danh sách
  // Vị trí = (page - 1) * itemsPerPage + index
  const absolutePosition = (urlPage - 1) * urlTake + urlIndex;

  // Tính toán page mới dựa trên take hiện tại
  const newPage = Math.floor(absolutePosition / currentTake) + 1;

  // Tính toán index mới trong page mới
  const newIndex = absolutePosition % currentTake;

  return {
    page: newPage,
    index: newIndex === 0 ? currentTake : newIndex, // Nếu index = 0 thì là item cuối cùng của page trước
  };
};

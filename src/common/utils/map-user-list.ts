export const mapUserList = (list: Array<Record<string, any>>, key = 'name', valueKey = 'id') =>
  list?.map((item) => ({
    label: item[key],
    value: item[valueKey],
    url: item.url,
  })) || [];

// Chỉ lấy id thôi
export const mapUserIdList = (list: Array<Record<string, any>>, valueKey = 'id') =>
  list?.map((item) => item[valueKey]) || [];



import * as yup from 'yup';

export const ProductSchema = yup.object({
    name: yup.string().required("Vui Lòng Nhập Tên !!!"),
    price: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : Number(value)))
        .nullable()
        .min(10000, "Giá thấp nhất là 10000 !!!")
        .max(1000000, "Giá cao nhất là 1000000 !!!")
        .required("Vui Lòng Nhập giá !!!"),
    status: yup.string().required("Vui Lòng Nhập Tình trạng !!!"),
    description: yup.string().required("Vui Lòng Nhập Mô tả !!!"),
    size: yup.string().required("Vui lòng chọn kích thước !!!"),
    // gender: yup.string().required("Vui lòng chọn một danh mục"),
    // type: yup.string().required("Vui lòng chọn một danh mục"),
    category: yup.string().required("Vui lòng chọn một danh mục !!!"),
    files: yup.string().required("Vui Lòng chọn ảnh !!!")
});

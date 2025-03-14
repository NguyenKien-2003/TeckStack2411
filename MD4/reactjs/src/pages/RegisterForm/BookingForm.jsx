import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    guests: "",
    eventDate: "",
    eventType: "",
    packageConsult: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Họ và tên không được để trống";
    if (!formData.phone) newErrors.phone = "Số điện thoại không được để trống";
    if (!formData.address) newErrors.address = "Địa chỉ không được để trống";
    if (!formData.guests) newErrors.guests = "Số lượng khách không được để trống";
    if (!formData.eventDate) newErrors.eventDate = "Ngày tổ chức không được để trống";
    if (!formData.eventType) newErrors.eventType = "Loại sự kiện không được để trống";
    if (!formData.packageConsult) newErrors.packageConsult = "Bạn phải chọn nhận tư vấn trọn gói";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`
        Ho va ten: ${formData.fullName}
        So dien thoai: ${formData.phone}
        Dia chi: ${formData.address}
        So luong khach: ${formData.guests}
        Ngay to chuc: ${formData.eventDate}
        Loai su kien: ${formData.eventType}
        `)
      console.log("Dữ liệu gửi đi:", formData);
    }
  };

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-8 w-1/2 mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Đặt Bàn Sự Kiện</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="fullName" placeholder="Họ và tên" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

        <input name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <input name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

        <input name="guests" type="number" placeholder="Số lượng khách" value={formData.guests} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}

        <input name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.eventDate && <p className="text-red-500 text-sm">{errors.eventDate}</p>}

        <input name="eventType" placeholder="Loại sự kiện" value={formData.eventType} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType}</p>}

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="packageConsult" name="packageConsult" checked={formData.packageConsult} onChange={handleChange} className="w-4 h-4" />
          <label htmlFor="packageConsult" className="text-sm">Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)</label>
        </div>
        {errors.packageConsult && <p className="text-red-500 text-sm">{errors.packageConsult}</p>}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Gửi thông tin</button>
      </form>
    </div>
  );
}

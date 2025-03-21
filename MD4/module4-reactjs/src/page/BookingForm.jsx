import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgForm from "../assets/img/bg-form.jpg";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function BookingForm() {
  const { order, setOrder } = useOutletContext(); // Nhận order từ MainLayout

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ và tên không được để trống"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
      .required("Số điện thoại không được để trống"),
    address: Yup.string().required("Địa chỉ không được để trống"),
    tables: Yup.number()
      .min(1, "Số lượng bàn đặt phải lớn hơn 0")
      .required("Số lượng bàn đặt không được để trống"),
    eventDate: Yup.date().required("Ngày tổ chức không được để trống"),
    eventType: Yup.string().required("Loại sự kiện không được để trống"),
    packageConsult: Yup.boolean().oneOf(
      [true],
      "Bạn phải chọn nhận tư vấn trọn gói"
    ),
  });

  return (
    <div
      className="relative w-full h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgForm})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity"></div>
      <div className="relative bg-white bg-opacity-80 p-8 w-1/2">
        <div className="flex flex-col text-center pb-4 text-[12px] font-semibold mx-10 ">
          <h1 className="text-2xl mb-4 text-center">LIÊN HỆ ĐẶT TIỆC</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veniam excepturi ut sunt eius tempora aperiam voluptatem cum labore
            dicta nulla sed soluta quibusdam modi quis, ab possimus delectus.
            Veritatis!
          </p>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            phone: "",
            address: "",
            tables: order?.tables || 0,
            eventDate: order?.date ? dayjs(order.date).format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD"),
            eventType: "",
            packageConsult: false,
          }}
          enableReinitialize={true} // Quan trọng! Cập nhật lại form khi order thay đổi
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            console.log("Dữ liệu gửi đi:", values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-4 m-10 flex flex-col items-center">
              <div className="flex space-x-10 text-gray-500 justify-between">
                <div>
                  <div className="relative mb-2">
                    <label>Họ và tên</label>
                    <Field
                      name="fullName"
                      placeholder="Nhập họ và tên"
                      className="w-full border-b-1 border-gray-500 text-black focus:outline-none my-4"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="absolute bottom-[-4px] left-0 text-red-500 text-sm"
                    />
                  </div>

                  <div className="relative mb-2">
                    <label>Số điện thoại</label>
                    <Field
                      name="phone"
                      placeholder="Số điện thoại"
                      className="w-full border-b-1 border-gray-500 text-black focus:outline-none my-4"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="absolute bottom-[-4px] left-0 text-red-500 text-sm"
                    />
                  </div>

                  <div className="relative mb-2">
                    <label>Địa chỉ </label>
                    <Field
                      name="address"
                      placeholder="Địa chỉ"
                      className="w-full border-b-1 border-gray-500 text-black focus:outline-none my-4"
                    />
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="absolute bottom-[-4px] left-0 text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative mb-2">
                    <label>Số lượng bàn đặt</label>
                    <Field
                      name="tables"
                      type="number"
                      className="w-full border-b-1 border-gray-500 text-black focus:outline-none my-4"
                    />
                    <ErrorMessage
                      name="tables"
                      component="p"
                      className="absolute bottom-[-4px] left-0 text-red-500 text-sm"
                    />
                  </div>

                  <div className="relative mb-2">
                    <label>Ngày tổ chức sự kiện</label>
                    <Field
                      name="eventDate"
                      type="date"
                      className="w-full border-b-1 border-gray-500 text-black focus:outline-none my-4"
                      onChange={(e) => {
                        setOrder({ ...order, date: e.target.value });
                        setFieldValue("eventDate", e.target.value);
                      }}
                    />
                    <ErrorMessage
                      name="eventDate"
                      component="p"
                      className="absolute bottom-[-4px] left-0 text-red-500 text-sm"
                    />
                  </div>

                  <div className="relative mb-2">
                    <label>Loại sự kiện</label>
                    <Field
                      name="eventType"
                      placeholder="Loại sự kiện"
                      className="w-full border-b-1 border-gray-500 text-black focus:outline-none my-4"
                    />
                    <ErrorMessage
                      name="eventType"
                      component="p"
                      className="absolute bottom-[-4px] left-0 text-red-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-yellow-700 text-white px-6 py-3 text-m mt-4"
              >
                GỬI THÔNG TIN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

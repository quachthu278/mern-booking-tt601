@echo off
chcp 65001 >nul
echo -------------------------------------------------------------
echo ĐANG KHỞI ĐỘNG HỆ THỐNG BOOKING - VUI LÒNG ĐỢI...
echo -------------------------------------------------------------

echo.
echo [1] Đang khởi động Backend (Thư mục API)...
start "Booking API (Backend)" cmd /k "cd /d %~dp0..\api && title BOOKING API (BACKEND) && echo DANG CHAY BACKEND... && npm start"

echo.
echo [2] Đang khởi động Frontend (Thư mục Admin)...
start "Booking Admin (Frontend)" cmd /k "cd /d %~dp0 && title BOOKING ADMIN (FRONTEND) && echo DANG CHAY ADMIN... && npm start"

echo.
echo =============================================================
echo HOÀN TẤT! Máy chủ đang được chạy trong 2 cửa sổ màu đen mới.
echo Lưu ý: Hãy giữ nguyên 2 cửa sổ đen đó, KHÔNG được tắt đi nhé!
echo Bạn có thể đóng cửa sổ nhỏ này lại.
echo =============================================================
timeout /t 5
exit

<!-- Banner Image -->

<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="64" src="./.github/resources/banner.png">
    <h1 align="center">Expo</h1>
  </a>
</p>

<p align="center">
   <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Chat or ask a question" href="https://chat.expo.dev" target="_blank">
    <img alt="Chat or ask a question" src="https://img.shields.io/discord/695411232856997968.svg?style=flat-square&labelColor=000000&color=4630EB&logo=discord&logoColor=FFFFFF&label=Chat%20with%20us" />
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
  <a aria-label="expo downloads" href="http://www.npmtrends.com/expo" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
  </a>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://snack.expo.dev"><b>Try Expo in the Browser</b></a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://docs.expo.dev">Read the Documentation</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://blog.expo.dev">Learn more on our blog</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.canny.io/feature-requests">Request a feature</a>
</p>

## Giới thiệu

Đây là hướng dẫn cách cài đặt và chạy ứng dụng React Native Expo trên máy tính của bạn. Expo là một nền tảng giúp bạn dễ dàng phát triển và triển khai ứng dụng React Native mà không cần thiết lập cấu hình phức tạp.

## Yêu cầu hệ thống

* Node.js v14 trở lên
* npm v6 trở lên

## Cài đặt

1. Cài đặt Node.js và npm: https://nodejs.org/en/download(https://nodejs.org/en/download)
2. Xác minh cài đặt bằng cách chạy lệnh sau trong terminal:
    ```bash
    node -v
    npm -v
    ```
3. Cài đặt Expo CLI:
    ```bash
    npm install -g expo-cli
    ```

## Tạo ứng dụng Expo

1. Tạo ứng dụng Expo mới bằng lệnh sau:
    ```bash
    expo init my-expo-app
    ```
    Thay thế `my-expo-app` bằng tên ứng dụng mong muốn của bạn.
2. Chuyển đến thư mục dự án:
    ```bash
    cd my-expo-app
    ```

## Chạy ứng dụng

1. Bắt đầu ứng dụng bằng lệnh sau:
    ```bash
    expo start
    ```
2. Ứng dụng sẽ tự động mở trình giả lập Android hoặc mô phỏng iOS trên máy tính của bạn.
3. Bạn cũng có thể quét mã QR được hiển thị trong terminal bằng ứng dụng Expo trên điện thoại thông minh để xem ứng dụng trên thiết bị thực.

## Thay đổi mã

1. Mở trình soạn thảo mã yêu thích của bạn và chỉnh sửa các tệp trong thư mục dự án.
2. Lưu thay đổi của bạn.
3. Ứng dụng sẽ tự động tải lại trong trình giả lập hoặc mô phỏng.

## Triển khai ứng dụng

1. Expo cung cấp nhiều cách để triển khai ứng dụng của bạn, bao gồm:
    * **Expo Go:** Sử dụng ứng dụng Expo Go trên điện thoại thông minh để xem ứng dụng của bạn.
    * **Web:** Triển khai ứng dụng của bạn lên web.
    * **Native:** Xuất bản ứng dụng của bạn lên các cửa hàng ứng dụng như App Store và Google Play.
2. Tham khảo tài liệu Expo để biết thêm thông tin về triển khai: https://docs.expo.dev/(https://docs.expo.dev/)

## Ví dụ

Dưới đây là ví dụ về cách chạy ứng dụng Expo đơn giản:

1. Tạo một ứng dụng Expo mới với tên `MyAwesomeApp`:
    ```bash
    expo init MyAwesomeApp
    ```
2. Chuyển đến thư mục dự án:
    ```bash
    cd MyAwesomeApp
    ```
3. Bắt đầu ứng dụng:
    ```bash
    expo start
    ```
4. Ứng dụng sẽ tự động mở trình giả lập Android hoặc mô phỏng iOS trên máy tính của bạn.

## Kết luận

Chạy ứng dụng React Native Expo tương đối đơn giản. Chỉ cần cài đặt một số công cụ cần thiết và thực hiện theo các bước trên, bạn có thể dễ dàng tạo và chạy ứng dụng Expo của riêng mình.

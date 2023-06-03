# Hướng dẫn làm bài và unit test
- ### Khởi tạo node project:

```shell
npm init
```
- ### Cài đặt jest

```shell
npm i -D jest
```

- ### Thêm jest script vào file package.json ( tham khảo: https://github.com/thangpqtechlead/test-node-example/blob/master/package.json )
```shell
"scripts": {
    "test": "jest --verbose"
},
```
- ### với mỗi bài tập tạo ra 2 file: ``` tên_bài_tập.js ``` và ``` tên_bàitập.test.js ```
- ### Chạy test:
```shell
npm run jest // run test all project
npm run jest tên_file // run test 1 file
```


# Hướng dẫn submit bài tập

- ### Checkout sang nhánh mới khi bắt đầu làm bài ( cần checkout lại nhánh chính nếu đang ở nhánh khác trước )

```shell
git checkout -b ten_bai
```

- ### Sau khi hoàn thành commit và push lên git

```shell
git add .
git commit -m "đề bài"
git push origin tên_nhánh_đã_tạo
```

- ### Tạo Pull Request vào nhánh chính
![image](https://user-images.githubusercontent.com/126770350/230262624-5691c58b-157e-4704-8ec8-f0e4b765a8b1.png)
![image](https://user-images.githubusercontent.com/126770350/230262722-d7ae4c2f-1739-4745-b0f9-2e0016c96973.png)

- ### Request review

![image](https://user-images.githubusercontent.com/126770350/230262807-66737d3e-69f7-4315-82a8-956f1d4d9378.png)

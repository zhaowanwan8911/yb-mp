import { get, post, put, upload } from './apiConfig.js';

// const baseUrl = 'https://www.yibiankeji.com';
const baseUrl = 'http://localhost:8000';

export default {
  getOptions(callback) {
    return get(`${baseUrl}/api/base/options`, callback);
  },
  register(params, callback) { // 注册新用户
    return post(`${baseUrl}/api/user/register`, params, callback);
  },
  login(params, callback) { // 登录
    return post(`${baseUrl}/api/user/login`, params, callback);
  },
  updateUser(id, params, callback) {
    return put(`${baseUrl}/api/user/${id}`, params, callback);
  },
  updatePassword(id, params, callback) { //修改密码
    return put(`${baseUrl}/api/user/${id}/password`, params, callback);
  },
  updateMobile(id, params, callback) { //修改手机号码
    return put(`${baseUrl}/api/user/${id}/mobile`, params, callback);
  },
  sendSms(params, callback) { // 发送短信验证码
    return post(`${baseUrl}/api/base/sendsms`, params, callback);
  },
  uploadPhoto(params, callback) {
    return upload(`${baseUrl}/api/v1/profile/upload`, params, callback);
  }
};

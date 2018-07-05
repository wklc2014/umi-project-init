import api from '../../src/config/api.js';

module.exports = {
  open: true,
  url: api.example,
  mock: (req, res) => {
    res.status(200).json({
      success: 'ok',
      data: [
        { id: 1, name: '成都', sex: '男' },
        { id: 2, name: '绵阳', sex: '女' },
        { id: 3, name: '南充', sex: '男' },
        { id: 4, name: '乐山', sex: '女' },
        { id: 5, name: '广元', sex: '女' },
        { id: 6, name: '西昌', sex: '男' },
      ],
    });
  },
}

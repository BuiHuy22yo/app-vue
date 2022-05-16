export default {
  data() {
    const DEFAULT_MSG = "ABC";

    const messageList = [
        {
            code : 'CREATE_RECORD_SUCCESS',
            value: "データ登録が成功しました。"
        },
        {
            code : 'CREATE_DATA_FAIL',
            value: "マスタデータの登録に失敗しました。"
        },
        {
            code : 'UPDATE_RECORD_SUCCESS',
            value: "マスタデータの登録に失敗しました。"
        },
        {
          code : 'DELETE_RECORD_FAIL',
          value: "xóa thất bại"
        },
        {
          code : 'DELETE_RECORD_SUCCESS',
          value: "データ削除が成功しました。"
        },
        {
          code : 'DATA_EMPTY',
          value: "データが空です"
        },

        
      ]
    return {
        messageList,
        DEFAULT_MSG
    };
  },

  methods: {
    getMessage(code) {
      const messageObj = this.messageList.find(item => item.code === code);
      return messageObj.value ?? this.DEFAULT_MSG;
    },
  },
};

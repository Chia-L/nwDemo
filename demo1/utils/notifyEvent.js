import SubPub from "./SubPub";


/**
 * 发布打开单个安全事件的通知弹窗
 * @param params
 */
function emitShowSingleSecNotify(params) {
  SubPub.emit('showSingleSecNotify', params)
}

/**
 * 订阅打开单个安全事件的通知弹窗
 * @param params
 */
function onShowSingleSecNotify(callback) {
  SubPub.on('showSingleSecNotify', function (params) {
    callback(params)
  })
}

/**
 * 发布关闭单个安全事件的通知弹窗
 * @param params
 */
function emitHideSingleSecNotify(params) {
  SubPub.emit('hideSingleSecNotify', params)
}

/**
 * 订阅关闭单个安全事件的通知弹窗
 * @param params
 */
function onHideSingleSecNotify(params) {
  SubPub.on('hideSingleSecNotify', params)
}


export {
  emitShowSingleSecNotify,
  onShowSingleSecNotify,
  emitHideSingleSecNotify,
  onHideSingleSecNotify
}

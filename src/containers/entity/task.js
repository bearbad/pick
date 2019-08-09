export default class Task {
  constructor (goodsName, goodsSkuNo, pickingShouldCount, pickingCount, lessCount, status) {
    this.model = {
      goodsName: goodsName,
      goodsSkuNo: goodsSkuNo,
      pickingShouldCount: pickingShouldCount,
      pickingCount: pickingCount,
      lessCount: lessCount,
      status: status
    }
  }
}

import request from '@/utils/request';
import { montiorUrl } from '@/utils/url';

/**
 * 获取热点数据
 * @returns {Promise<*>}
 */
export function fetchHotEvent() {
  const { HotEvent } = montiorUrl;
  return request(`${HotEvent}?timeType=0`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchHotEvent1() {
  const { HotEvent } = montiorUrl;
  return request(`${HotEvent}?timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取热点数据详情
 * @param typeId
 * @returns {Promise<*>}
 */
export function fetHotEventDetail(typeId) {
  const { HotEventDetail } = montiorUrl;
  return request(`${HotEventDetail}?typeId=${typeId}&timeType=0`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetHotEventDetail1(typeId) {
  const { HotEventDetail } = montiorUrl;
  return request(`${HotEventDetail}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 实时坐席状态
 * @returns {Promise<*>}
 */
export function fetchInTimeSum() {
  const { InTimeSum } = montiorUrl;
  let form = new FormData();
  form.append('token', '1');
  return request(InTimeSum, {
    method: 'POST',
    body: form,
  });
}

/**
 * 接通率等数据
 * @returns {Promise<*>}
 */
export function fetchHistoryVdn() {
  const { HistoryVdn } = montiorUrl;
  let form = new FormData();
  form.append('token', '1');
  return request(HistoryVdn, {
    method: 'POST',
    body: form,
  });
}

/**
 * 上月数据统计
 * @returns {Promise<*>}
 */
export function fetchCaseTypeCount() {
  const { CaseTypeCount } = montiorUrl;
  return request(CaseTypeCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取区县实时数据
 * @returns {Promise<*>}
 */
export function fetchInTimeHandle() {
  const { InTimeHandle } = montiorUrl;
  return request(InTimeHandle, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchCityEventByType() {
  const { CityEventByType } = montiorUrl;
  return request(CityEventByType, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchUpdate(deptId) {
  const { Update } = montiorUrl;
  return request(`${Update}?deptId=${deptId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//在线办结率
export function fetchOnLineFinish() {
  const { OnLineFinish } = montiorUrl;
  return request(OnLineFinish, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//满意度
export function fetchSatisfaction() {
  const { Satisfaction } = montiorUrl;
  return request(Satisfaction, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//信息库
export function fetchMessageLib() {
  const { messageLib } = montiorUrl;
  return request(messageLib, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//工单对比
export function fetchWorkOrder() {
  const { WorkOrder } = montiorUrl;
  return request(WorkOrder, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//话务类型统计
export function fetchCallType() {
  const { CallType } = montiorUrl;
  return request(CallType, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//专席受理业务量
export function fetchHandleBusiness() {
  const { HandleBusiness } = montiorUrl;
  return request(HandleBusiness, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//本月在线办结相关情况
export function fetchOnlineFinishThis() {
  const { OnlineFinishThis } = montiorUrl;
  return request(OnlineFinishThis, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

// 上月在线办结相关情况
export function fetchOnlineFinishLast() {
  const { OnlineFinishLast } = montiorUrl;
  return request(OnlineFinishLast, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//转办办结工单
export function fetchDistributeByMonth() {
  const { DistributeByMonth } = montiorUrl;
  return request(DistributeByMonth, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchDistributeLastMonth() {
  const { DistributeLastMonth } = montiorUrl;
  return request(DistributeLastMonth, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//微建议
export function fetchAdviceHandleDept() {
  const { AdviceHandleDept } = montiorUrl;
  return request(AdviceHandleDept, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//市长信箱
export function fetchAdviceHandleDept1() {
  const { AdviceHandleDept1 } = montiorUrl;
  return request(AdviceHandleDept1, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//年度工单总数
//市长信箱
export function fetchCaseTotal() {
  const { CaseTotal } = montiorUrl;
  return request(CaseTotal, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

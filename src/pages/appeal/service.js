import request from '@/utils/request';
import { appealOnlineFinish } from '@/utils/url';

/**
 * 获取诉求工单第一部分的在线办结图
 * @returns {Promise<*>}
 */
export function fetchOnLineEvent() {
  const { OnLineEvent } = appealOnlineFinish;
  return request(OnLineEvent, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取分类的详情数据
 * @param typeId 时间的id
 * @returns {Promise<*>}
 */

/**
 * 获取蓝天保卫战的数据
 * @returns {Promise<*>}
 */
export function fetchBlueSkyCount() {
  const { BlueSkyCount } = appealOnlineFinish;
  return request(BlueSkyCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
//微建议
export function fetchAdviceHandleDept() {
  const { AdviceHandleDept } = appealOnlineFinish;
  return request(AdviceHandleDept, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//最多跑一次
export function fetchMoreOneCaseTypeResult() {
  const { MoreOneCaseTypeResult } = appealOnlineFinish;
  return request(MoreOneCaseTypeResult, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}


/**
 * 获取营商环境数据
 * @returns {Promise<*>}
 */
export function fetchBusinessCount() {
  const { BusinessCount } = appealOnlineFinish;
  return request(BusinessCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取转办工单案件
 * @returns {Promise<*>}
 */
export function fetchDistributeEvent() {
  const { DistributeEvent } = appealOnlineFinish;
  return request(DistributeEvent, {
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
  const { InTimeHandle } = appealOnlineFinish;
  return request(InTimeHandle, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchCityEventByType() {
  const { CityEventByType } = appealOnlineFinish;
  return request(CityEventByType, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchUpdate(deptId) {
  const { Update } = appealOnlineFinish;
  return request(`${Update}?deptId=${deptId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

/**
 * 获取监察数据
 * @returns {Promise<*>}
 */
export function fetchMonitorCount() {
  const { MonitorCount } = appealOnlineFinish;
  return request(MonitorCount, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}


//各案件大类数据统计
export function fetchCaseTypeStatistics() {
  const { CaseTypeStatistics } = appealOnlineFinish;
  return request(CaseTypeStatistics, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//各案件大类数据统计详情
export function fetchCaseTypeStatisticsDetail(typeId) {
  const { CaseTypeStatisticsDetail } = appealOnlineFinish;
  return request(`${CaseTypeStatisticsDetail}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}


// 实时区县办结案件
export function fetchTimeHandle() {
  const { TimeHandle } = appealOnlineFinish;
  return request(TimeHandle, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//噪音案件
export function fetchnoisyEvent1(typeId) {
  const { noisyEvent1 } = appealOnlineFinish;
  return request(`${noisyEvent1}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchnoisyEvent2(typeId) {
  const { noisyEvent2 } = appealOnlineFinish;
  return request(`${noisyEvent2}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchnoisyEvent3(typeId) {
  const { noisyEvent3 } = appealOnlineFinish;
  return request(`${noisyEvent3}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchnoisyEvent4(typeId) {
  const { noisyEvent4 } = appealOnlineFinish;
  return request(`${noisyEvent4}?typeId=${typeId}`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//历史数据
export function fetchHistoryData1(typeId) {
  const { HistoryData1 } = appealOnlineFinish;
  return request(`${HistoryData1}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchHistoryData2(typeId) {
  const { HistoryData2 } = appealOnlineFinish;
  return request(`${HistoryData2}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchHistoryData3(typeId) {
  const { HistoryData3 } = appealOnlineFinish;
  return request(`${HistoryData3}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}
export function fetchHistoryData4(typeId) {
  const { HistoryData4 } = appealOnlineFinish;
  return request(`${HistoryData4}?typeId=${typeId}&timeType=1`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}


//信息库
export function fetchMessageLib() {
  const { messageLib } = appealOnlineFinish;
  return request(messageLib, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

//机关部门
export function fetchAreaDept(deptId) {
  const { AreaDept } = appealOnlineFinish;
  return request(`${AreaDept}?deptId=${deptId}&deptType=5`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

export function fetchAreaDeptDetail(areaId) {
  const { AreaDeptDetail } = appealOnlineFinish;
  return request(`${AreaDeptDetail}?deptId=${areaId}&deptType=5`, {
    header: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  });
}

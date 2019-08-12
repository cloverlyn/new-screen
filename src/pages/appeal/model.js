import {
  fetchBlueSkyCount,
  fetchBusinessCount,
  fetchDistributeEvent,
  fetchInTimeHandle,
  fetchMonitorCount,
  fetchCityEventByType,
  fetchUpdate,
  fetchCaseTypeStatistics,
  fetchCaseTypeStatisticsDetail,
  fetchAdviceHandleDept,
  fetchTimeHandle,
  fetchnoisyEvent1,
  fetchnoisyEvent2,
  fetchnoisyEvent3,
  fetchnoisyEvent4,
  fetchHistoryData1,
  fetchHistoryData2,
  fetchHistoryData3,
  fetchHistoryData4,
  fetchMessageLib,
  fetchMoreOneCaseTypeResult,
  fetchAreaDept,
  fetchAreaDeptDetail,
  fetchAreaStreet,
  fetchAreaStreetDetail,
} from '@/pages/appeal/service';
import { firstDataMap } from '@/utils/config';

export default {
  namespace: 'appeal',
  state: {
    typeId: '145273',
    deptId:'',
    areaId: '051',
    areaName: '区县机关部门',
    name: '规划房地',
    deptName: '长沙市',
    caseName: '规划房地',
    partName: '区县街道',
    onLineEvent: [],
    blueSkyCount: [],
    businessCount: [],
    adviceHandleDept: [],
    distributeEvent: [],
    inTimeHandle: [],
    monitorCount: [],
    cityEventByType: [],
    update: [],
    caseTypeStatistics: [],
    caseTypeStatisticsDetail: [],
    TimeHandle: [],
    noisyEvent1: [],
    noisyEvent2: [],
    noisyEvent3: [],
    noisyEvent4: [],
    HistoryData1: [],
    HistoryData2: [],
    HistoryData3: [],
    HistoryData4: [],
    messageLib: [],
    moreOneCaseTypeResult: [],
    areaDept: [],
    areaDeptDetail: [],
    areaStreet: [],
    areaStreetDetail: [],
  },
  reducers: {
    save(state, { payload: data }) {
      return {
        ...state,
        ...data,
      };
    },
  },
  effects: {
    * fetch(_, { all, put }) {
      yield all([
        put({ type: 'handleArea' }),
        put({ type: 'handleLeftTop' }),
        put({ type: 'handleLeftBottom' }),
        put({ type: 'handleRightTop' }),
        put({ type: 'handleRightBottom' }),
        put({ type: 'handlemessageLib' }),
      ]);
    },

    * handleLeftTop(_, { all, call, put, select }) {
      const { typeId } = yield select(state => state.appeal);
      //获取左上数据
      const res = yield all({
        CaseTypeStatistics: call(fetchCaseTypeStatistics),
        // noisyEvent1: call(fetchnoisyEvent1),
        // noisyEvent2: call(fetchnoisyEvent2),
        // noisyEvent3: call(fetchnoisyEvent3),
        // noisyEvent4: call(fetchnoisyEvent4),
      });

      const tempCaseTypeStatistics = res.CaseTypeStatistics.data.map((item) => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      //const caseTypeStatisticsDetail = yield call(fetchCaseTypeStatisticsDetail, typeId);
      const tempnoisyEvent1 = yield call(fetchnoisyEvent1, typeId);
      const tempnoisyEvent2 = yield call(fetchnoisyEvent2, typeId);
      const tempnoisyEvent3 = yield call(fetchnoisyEvent3, typeId);
      const tempnoisyEvent4 = yield call(fetchnoisyEvent4, typeId);


      yield put({
        type: 'save',
        payload: {
          caseTypeStatistics: tempCaseTypeStatistics,
          //caseTypeStatisticsDetail: caseTypeStatisticsDetail.data,
          noisyEvent1: tempnoisyEvent1.data[0],
          noisyEvent2: tempnoisyEvent2.data[1],
          noisyEvent3: tempnoisyEvent3.data[2],
          noisyEvent4: tempnoisyEvent4.data[3],
        },
      });
    },
    * handlenoisyEvent1({ payload: { typeId } }, { call, put }) {
      const noisyEvent1 = yield call(fetchnoisyEvent1, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent1: noisyEvent1.data[0],
        },
      });
    },
    * handlenoisyEvent2({ payload: { typeId } }, { call, put }) {
      const noisyEvent2 = yield call(fetchnoisyEvent2, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent2: noisyEvent2.data[1],
        },
      });
    },
    * handlenoisyEvent3({ payload: { typeId } }, { call, put }) {
      const noisyEvent3 = yield call(fetchnoisyEvent3, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent3: noisyEvent3.data[2],
        },
      });
    },
    * handlenoisyEvent4({ payload: { typeId } }, { call, put }) {
      const noisyEvent4 = yield call(fetchnoisyEvent4, typeId);
      yield put({
        type: 'save',
        payload: {
          noisyEvent4: noisyEvent4.data[3],
        },
      });
    },

    * handleLeftBottom(_, { all, call, put, select }) {
      const res = yield all({
        BlueSkyCount: call(fetchBlueSkyCount),
        BusinessCount: call(fetchBusinessCount),
        AdviceHandleDept: call(fetchAdviceHandleDept),
        inTimeHandle: call(fetchInTimeHandle),
        cityEventByType: call(fetchCityEventByType),
        moreOneCaseTypeResult: call(fetchMoreOneCaseTypeResult),
      });

      const tempBlue = res.BlueSkyCount.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempBusiness = res.BusinessCount.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });
      const tempAdviceHandle = res.AdviceHandleDept.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.deptName],
        };
      });
      const tempCity = res.cityEventByType.data.map(item => {
        return {
          ...item,
          name: firstDataMap[item.name],
        };
      });

      yield put({
        type: 'save',
        payload: {
          blueSkyCount: tempBlue,
          businessCount: tempBusiness,
          adviceHandleDept: tempAdviceHandle,
          inTimeHandle: res.inTimeHandle.data,
          cityEventByType: tempCity,
          moreOneCaseTypeResult: res.moreOneCaseTypeResult.data,
        }
      })
    },

    * handleRightTop(_, { all, call, put, select }) {
      const { typeId } = yield select(state => state.appeal);
      const res = yield all({
        distributeEvent: call(fetchDistributeEvent),
        monitorCount: call(fetchMonitorCount),
        messageLib: call(fetchMessageLib),
        //moreOneCaseTypeResult: call(fetchMoreOneCaseTypeResult),
      });
      const tempDis = res.distributeEvent.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });
      const HistoryData1 = yield call(fetchHistoryData1, typeId);
      const HistoryData2 = yield call(fetchHistoryData2, typeId);
      const HistoryData3 = yield call(fetchHistoryData3, typeId);
      const HistoryData4 = yield call(fetchHistoryData4, typeId);

      yield put({
        type: 'save',
        payload: {
          monitorCount: res.monitorCount.data,
          messageLib: res.messageLib.data,
          //moreOneCaseTypeResult: res.moreOneCaseTypeResult.data,
          distributeEvent: tempDis,
          // historyDetail: historyDetail.data,
          HistoryData1: HistoryData1.data[0],
          HistoryData2: HistoryData2.data[1],
          HistoryData3: HistoryData3.data[2],
          HistoryData4: HistoryData4.data[3],
        },
      });


    },

    * handleHistoryDetail1({ payload: { typeId } }, { call, put }) {
      const HistoryDetail1 = yield call(fetchHistoryData1, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData1: HistoryDetail1.data[0],
        },
      });
    },
    * handleHistoryDetail2({ payload: { typeId } }, { call, put }) {
      const HistoryDetail2 = yield call(fetchHistoryData2, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData2: HistoryDetail2.data[1],
        },
      });
    },
    * handleHistoryDetail3({ payload: { typeId } }, { call, put }) {
      const HistoryDetail3 = yield call(fetchHistoryData3, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData3: HistoryDetail3.data[2],
        },
      });
    },
    * handleHistoryDetail4({ payload: { typeId } }, { call, put }) {
      const HistoryDetail4 = yield call(fetchHistoryData4, typeId);
      yield put({
        type: 'save',
        payload: {
          HistoryData4: HistoryDetail4.data[3],
        },
      });
    },

    * handleRightBottom(_, { all, call, put, select}) {
      const { typeId } = yield select(state => state.appeal);
      const res = yield all({
        TimeHandle: call(fetchTimeHandle),
      });
      const caseTypeDetail = yield call(fetchCaseTypeStatisticsDetail, typeId);
      const tempTimeHandle = res.TimeHandle.data.map(item => {
        return {
          ...item,
          caseName: firstDataMap[item.caseName],
        };
      });

      yield put({
        type: 'save',
        payload: {
          caseTypeStatisticsDetail: caseTypeDetail.data,
          TimeHandle: tempTimeHandle, 
        },
      });
    },

    * handleCaseTypeStatisticsDetail({ payload: { typeId } }, { call, put }) {

      const res = yield call(fetchCaseTypeStatisticsDetail, typeId);
      yield put({
        type: 'save',
        payload: {
          caseTypeStatisticsDetail: res.data,
        },
      });
    },

    * handleAreaDept({ payload: { deptId } }, { call, put }) {
      const res = yield call(fetchAreaDept, deptId);
      const temp = res.data.map((item) =>{
        return item.deptId;
      })
      const areaDeptDetail = yield call(fetchAreaDeptDetail, temp[0]);

      const tempAreaDeptDetail = areaDeptDetail.data.map(item => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      yield put({
        type: 'save',
        payload: {
          areaDept: res.data,
          areaDeptDetail: tempAreaDeptDetail,
        },
      });
    },

    * handleAreaDeptDetail({ payload: { areaId } }, { call, put }) {

      const res = yield call(fetchAreaDeptDetail, areaId);

      const tempAreaDeptDetail = res.data.map(item => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      yield put({
        type: 'save',
        payload: {
          areaDeptDetail: tempAreaDeptDetail,
        },
      });
    },

    * handleAreaStreet({ payload: { deptId } }, { call, put }) {
      const res = yield call(fetchAreaStreet, deptId);
      const temp = res.data.map((item) =>{
        return item.deptId;
      })
      const areaStreetDetail = yield call(fetchAreaStreetDetail, temp[0]);

      const tempAreaStreetDetail = areaStreetDetail.data.map(item => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      yield put({
        type: 'save',
        payload: {
          areaStreet: res.data,
          areaStreetDetail: tempAreaStreetDetail,
        },
      });
    },

    * handleAreaStreetDetail({ payload: { areaId } }, { call, put }) {

      const res = yield call(fetchAreaStreetDetail, areaId);

      const tempAreaStreetDetail = res.data.map(item => {
        return {
          ...item,
          caseTypeName: firstDataMap[item.caseTypeName],
        };
      });

      yield put({
        type: 'save',
        payload: {
          areaStreetDetail: tempAreaStreetDetail,
        },
      });
    },

    * handleArea(_, { all, call, put, select }) {
      const { deptId } = yield select(state => state.appeal);
      const update = yield call(fetchUpdate,deptId);

      yield put({
        type: 'save',
        payload: {
          update: update,
        },
      });
    },

    * handleUpdate({ payload: { deptId } }, { call, put }) {
      const update = yield call(fetchUpdate, deptId);

      yield put({
        type: 'save',
        payload: {
          update: update,
        },
      });
    },
  },
};

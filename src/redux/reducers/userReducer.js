let initState = {
  isUserAuthenticated: false,
  userWalletAddress: "",
  contract: {},
  tronWeb: {},
  bStation1: null,
  bStation2: null,
  bStation3: null,
  bStation4: null,
  bStation5: null,
  bStation6: null,
  bStation7: null,
  smartMLevelOne: null,
  smartMLevelTwo: null,
  silverMLevelOne: null,
  silverMLevelTwo: null,
  goldMLevelOne: null,
  goldMLevelTwo: null,
  royalMLevelOne: null,
  royalMLevelTwo: null,
  crownMLevelOne: null,
  crownMLevelTwo: null,
  checkAuth: null,
  matrixIncome: "",
  levelIncome: "",
  directReferrals: "",
  isClickedForTrue: false,
  levelReward: "",
  usersID: "",
  downlineCount: [],
  userIdForIncome: "",
  binaryTree: null,
  withdrawAble: "",
  bussinessCounter:""
};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "WITHDRAW_ABLE":
      return {
        ...state,
        withdrawAble: payload,
      };
    case "BINARY_TREE":
      return {
        ...state,
        binaryTree: payload,
      };
    case "USERS_ID_FOR_INCOME":
      return {
        ...state,
        userIdForIncome: payload,
      };
    case "DOWNLINE_COUNT":
      return {
        ...state,
        downlineCount: payload,
      };
    case "USERS_ID":
      return {
        ...state,
        usersID: payload,
      };
    case "LEVEL_REWARD":
      return {
        ...state,
        levelReward: payload,
      };
    case "CLICKED_FOR_VIEW":
      return {
        ...state,
        isClickedForTrue: true,
      };
    case "DIRECT_REFERRALS":
      return {
        ...state,
        directReferrals: payload,
      };
    case "LEVEL_INCOME":
      return {
        ...state,
        levelIncome: payload,
      };

    case "MATRIX_INCOME":
      return {
        ...state,
        matrixIncome: payload,
      };

    case "GET_USERDOWNLINE":
      return {
        ...state,
        getUserDownLine: payload,
      };
    case "UPLINE_INCOME":
      return {
        ...state,
        uplineIncome: payload,
      };
    case "TOTAL_INCOME":
      return {
        ...state,
        totalIncome: payload,
      };
    case "DIRECT_SPONSOR":
      return {
        ...state,
        directSponsor: payload,
      };

    case "REF_INCOME":
      return {
        ...state,
        refIncome: payload,
      };

    case "AUTH_FAILED":
      return {
        ...state,
        checkAuth: false,
        isUserAuthenticated: false,
      };
    case "CROWN_MATRIX_LEVEL_ONE":
      return {
        ...state,
        crownMLevelOne: payload,
      };
    case "CROWN_MATRIX_LEVEL_TWO":
      return {
        ...state,
        crownMLevelTwo: payload,
      };

    case "ROYAL_MATRIX_LEVEL_ONE":
      return {
        ...state,
        royalMLevelOne: payload,
      };
    case "ROYAL_MATRIX_LEVEL_TWO":
      return {
        ...state,
        royalMLevelTwo: payload,
      };

    case "GOLD_MATRIX_LEVEL_ONE":
      return {
        ...state,
        goldMLevelOne: payload,
      };
    case "GOLD_MATRIX_LEVEL_TWO":
      return {
        ...state,
        goldMLevelTwo: payload,
      };

    case "SILVER_MATRIX_LEVEL_ONE":
      return {
        ...state,
        silverMLevelOne: payload,
      };
    case "SILVER_MATRIX_LEVEL_TWO":
      return {
        ...state,
        silverMLevelTwo: payload,
      };
    case "SMART_MATRIX_LEVEL_ONE":
      return {
        ...state,
        smartMLevelOne: payload,
      };
    case "SMART_MATRIX_LEVEL_TWO":
      return {
        ...state,
        smartMLevelTwo: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isUserAuthenticated: false,
      };

    case "AUTH":
      // console.log("here is the payload in the reducer====>",payload);
      return {
        ...state,
        checkAuth: payload,
        isUserAuthenticated: payload,
      };

    case "STATION_1":
      return {
        ...state,
        bStation1: payload,
      };

    case "STATION_2":
      return {
        ...state,
        bStation2: payload,
      };

    case "STATION_3":
      return {
        ...state,
        bStation3: payload,
      };

    case "STATION_4":
      return {
        ...state,
        bStation4: payload,
      };

    case "STATION_5":
      return {
        ...state,
        bStation5: payload,
      };

    case "STATION_6":
      return {
        ...state,
        bStation6: payload,
      };

    case "STATION_7":
      return {
        ...state,
        bStation7: payload,
      };

    case "TRONWEB":
      return {
        ...state,
        tronWeb: payload,
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        isUserAuthenticated: true,
      };
    case "BUSSINESS_COUNTER":
      return {
        ...state,
        bussinessCounter: payload,
      };

    case "USER_WALLET_ADDRESS":
      let isClickForView = localStorage.getItem("clickedForView");

      return {
        ...state,
        userWalletAddress: isClickForView ? isClickForView : payload,
        isClickedForTrue: isClickForView ? true : false,
      };

    case "CONTRACT":
      return {
        ...state,
        contract: payload,
      };

    default:
      return state;
  }
};

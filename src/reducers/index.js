import {
  FETCH_LANGUAGES,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAIL,
  FETCH_CONTENTS,
  FETCH_CONTENTS_SUCCESS,
  FETCH_CONTENTS_FAIL,
  FETCH_ADVERTISEMENTS,
  FETCH_ADVERTISEMENTS_SUCCESS,
  FETCH_ADVERTISEMENTS_FAIL,
} from "../constants";

export const languagesReducers = (
  state = { loading: false, languages: [] },
  action
) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.payload,
        loading: false,
      };
    case FETCH_LANGUAGES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const contentsReducers = (
  state = { loading: true, contents: {} },
  action
) => {
  switch (action.type) {
    case FETCH_CONTENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTENTS_SUCCESS:
      return {
        ...state,
        contents: action.payload,
        loading: false,
      };
    case FETCH_CONTENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const advertisementsReducers = (
  state = { loading: false, advertisements: [] },
  action
) => {
  switch (action.type) {
    case FETCH_ADVERTISEMENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERTISEMENTS_SUCCESS:
      return {
        ...state,
        advertisements: action.payload,
        loading: false,
      };
    case FETCH_ADVERTISEMENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// export const auxiliarySectionsReducers = (
//   state = { loading: false, auxiliarySections: [] },
//   action
// ) => {
//   switch (action.type) {
//     case FETCH_AUXILIARY_SECTIONS:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_AUXILIARY_SECTIONS_SUCCESS:
//       return {
//         ...state,
//         auxiliarySections: action.payload,
//         loading: false,
//       };
//     case FETCH_AUXILIARY_SECTIONS_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export const authenticationsReducers = (
//   state = { loading: false, authentications: [] },
//   action
// ) => {
//   switch (action.type) {
//     case FETCH_AUTHENTICATIONS:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_AUTHENTICATIONS_SUCCESS:
//       return {
//         ...state,
//         authentications: action.payload,
//         loading: false,
//       };
//     case FETCH_AUTHENTICATIONS_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export const sectionsReducers = (
//   state = { loading: false, sections: [] },
//   action
// ) => {
//   switch (action.type) {
//     case FETCH_SECTIONS:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_SECTIONS_SUCCESS:
//       return {
//         ...state,
//         sections: action.payload,
//         loading: false,
//       };
//     case FETCH_SECTIONS_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export const orderReducers = (
//   state = { loading: false, order: {} },
//   action
// ) => {
//   switch (action.type) {
//     case FETCH_ORDER:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_ORDER_SUCCESS:
//       return {
//         ...state,
//         order: action.payload,
//         loading: false,
//       };
//     case FETCH_ORDER_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

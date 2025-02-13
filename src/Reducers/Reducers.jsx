import { produce } from "immer";


function Reducers(state = {
  widthTela: window.innerWidth < 1050 ? true : false,
  menu: false,
  night: false,
  observation: { obsOne: false, obsTwo: false },
  widthCarousel: 0,
  timer: false,
  show: "",
  closed: false,

}, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case "MENU":
        draftState.menu = action.payload;
        break;
      case "NIGHT":
        draftState.night = action.payload;
        break;
      case "OBSERVATION":
        draftState.observation.obsOne = action.payload;
        break;
      case "OBSERVATIONTWO":
        draftState.observation.obsTwo = action.payload;
        break;
      case "CAROUSEL":
        draftState.widthCarousel = action.payload;
        break;
      case "TIMER":
        draftState.timer = action.payload;
        break;
      case "SHOW":
        draftState.show = action.payload;
        break;
      case "CLOSED":
        draftState.closed = action.payload;
      break;
      default:
        return state;
    }
  });
}

export default Reducers;

type clickType = {
  totalValue: number;
  increment: number;
};
const defaultClickType: clickType = {
  totalValue: 0,
  increment: 1,
};

export default function clickReducer(state: clickType = defaultClickType, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, totalValue: state.totalValue + state.increment };
    case 'UPDATE_INCREMENT':
      return { ...state, increment: state.increment + action.value };
    case 'RESET':
      return { ...state, totalValue: 0 };
    default:
      return state;
  }
}

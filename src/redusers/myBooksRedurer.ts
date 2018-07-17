const initialState: object[] = [];

export default function myBooks(state = initialState, action: any) {
  if (action.type === 'ADD') {
    return [
      ...state,
      {}
    ];
  } else if (action.type === 'REMOVE') {
    const temp = [...state];
    temp.pop();
    return [
      ...temp
    ]
  }
  return state;
}
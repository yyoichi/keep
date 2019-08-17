import { Action } from 'redux';

export interface Keep {
  id: string;
  value: string;
  isOpen: boolean;
  isEditing: boolean;
}

interface KeepAddAction extends Action {
  type: '@@keep/add';
  payload: {
    keeps: Keep | Keep[];
  };
}

interface KeepDeleteAction extends Action {
  type: '@@keep/delete';
  payload: {
    id: string;
  };
}

interface KeepUpdateAction extends Action {
  type: '@@keep/update';
  payload: {
    id: string;
    value: string;
  };
}

interface KeepOpenAction extends Action {
  type: '@@keep/open';
  payload: {
    id: string;
  };
}

interface KeepCloseAction extends Action {
  type: '@@keep/close';
  payload: {
    id: string;
  };
}

interface KeepEditAction extends Action {
  type: '@@keep/edit';
  payload: {
    id: string;
  };
}

interface KeepPreviewAction extends Action {
  type: '@@keep/preview';
  payload: {
    id: string;
  };
}

interface KeepSaveAction extends Action {
  type: '@@keep/save';
}

export type KeepActionTypes =
  | KeepAddAction
  | KeepDeleteAction
  | KeepUpdateAction
  | KeepOpenAction
  | KeepCloseAction
  | KeepEditAction
  | KeepPreviewAction
  | KeepSaveAction;

export const keepActions = {
  add: (keeps: Keep | Keep[]): KeepActionTypes => ({
    type: '@@keep/add',
    payload: {
      keeps
    }
  }),
  delete: (id: string): KeepActionTypes => ({
    type: '@@keep/delete',
    payload: {
      id
    }
  }),
  update: (id: string, value: string): KeepActionTypes => ({
    type: '@@keep/update',
    payload: {
      id,
      value
    }
  }),
  open: (id: string): KeepActionTypes => ({
    type: '@@keep/open',
    payload: {
      id
    }
  }),
  close: (id: string): KeepActionTypes => ({
    type: '@@keep/close',
    payload: {
      id
    }
  }),
  edit: (id: string): KeepActionTypes => ({
    type: '@@keep/edit',
    payload: {
      id
    }
  }),
  preview: (id: string): KeepActionTypes => ({
    type: '@@keep/preview',
    payload: {
      id
    }
  }),
  save: (keeps: Keep[]): KeepActionTypes => {
    localStorage.setItem('keeps', JSON.stringify(keeps));
    return { type: '@@keep/save' };
  }
};

export interface KeepsState {
  items: Keep[];
}

export const keepsReducer = (state: KeepsState = { items: [] }, action: KeepActionTypes): KeepsState => {
  switch (action.type) {
    case '@@keep/add':
      if (Array.isArray(action.payload.keeps)) {
        return {
          ...state,
          items: [...state.items, ...action.payload.keeps]
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload.keeps]
        };
      }
    case '@@keep/delete':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case '@@keep/update':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            item.value = action.payload.value;
          }
          return item;
        })
      };
    case '@@keep/open':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            item.isOpen = true;
          }
          return item;
        })
      };
    case '@@keep/close':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            item.isOpen = false;
          }
          return item;
        })
      };
    case '@@keep/edit':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            item.isEditing = true;
          }
          return item;
        })
      };
    case '@@keep/preview':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            item.isEditing = false;
          }
          return item;
        })
      };
    default:
      return state;
  }
};

import news from '../apis/news';
import history from '../history';
import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_NEW,
  EDIT_NEW,
  DELETE_NEW,
  FETCH_NEW, 
  FETCH_NEWS
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};


export const createNew = (formValues) => {
  return async(dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await news.post('/news', {...formValues, userId});

    dispatch({ type: CREATE_NEW, payload: response.data })
    history.push('/')
  };
};

export const fetchNews = () => {
  return async(dispatch) => {
    const response = await news.get('/news');

    dispatch({ type: FETCH_NEWS, payload: response.data })
  };
};

export const fetchNew = (id) => {
  return async(dispatch) => {
    const response = await news.get(`/news/${id}`);

    dispatch({ type: FETCH_NEW, payload: response.data })
  };
};

export const editNew = (id, formValues) => {
  return async(dispatch) => {
    const response = await news.patch(`/news/${id}`, formValues);

    dispatch({ type: EDIT_NEW, payload: response.data })
    history.push('/')
  };
};

export const deleteNew = (id) => {
  return async(dispatch) => {
    await news.delete(`/news/${id}`);

    dispatch({ type: DELETE_NEW, payload: id })
    history.push('/')

  };
};
// @flow
import { AssistantDirection, RepeatOneSharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

type State = {
  loading: boolean;
  data: any;
  error: unknown;
};

type Action = { type: string; data?: []; error?: unknown };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: {},
        error: false,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: false,
      };
    case 'ERROR':
      return {
        loading: false,
        data: {},
        error: action.error,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  loading: false,
  data: {},
  error: false,
};

export const Users = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
};

import React from 'react';
import { mapStateToProps } from './App';

it('testing mapStateToProps', () => {
  const dummyProfileState = {
    data: [
      {
        profile: 'linkedin',
        userid: 'user1',
        queuedPost: 10,
        ErrorPost: 0,
      }],
    error: null,
  };

  const dummyPostState = {
      data:[
          {
            { id: 1, text: 5, images: 0, videos: 0, date: date(0) },
          }
      ]
  }
  const componentState = mapStateToProps(appState);
  console.log(componentState);
  expect(componentState).toEqual(appState);
});
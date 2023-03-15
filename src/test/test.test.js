import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider, useDispatch } from 'react-redux';
import TestRenderer, { act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Home from '../components/Home';
import store from '../redux/store';
import Card from '../components/Card';
import Header from '../components/Header';
// import { changeCat } from '../redux/slices/categorySlice';
import { replaceClimate } from '../redux/slices/weatherSlice';

describe('Air Climate', () => {
  const climate = [{
    country: 'Germany',
    description: 'clear sky',
    humidity: 88,
    icon: 'https://openweathermap.org/img/wn/01d@2x.png',
    id: 2644210,
    name: 'Liverpool',
    temperature: 4.36,
    wind: 3.6,
  }];

  it('Snapshot of Home Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot of Header Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    console.log(store);
    expect(tree).toMatchSnapshot();
  });
  // dispatch: [Function (anonymous)],
  // subscribe: [Function: subscribe],
  // getState: [Function: getState],
  // replaceReducer: [Function: replaceReducer],
  // '@@observable': [Function: observable]
  it('Navbar card exist in the Header', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    console.log(store.getState());
    const navElement = screen.getByText(/avera/i);
    expect(navElement).toBeInTheDocument();
  });

  it('Snapshot of Header+Home Component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Category changes base on store', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    act(() => {
      const dispatch = useDispatch();
      dispatch(replaceClimate(climate));
    });
    const category = await screen.getByText(/STATS BY ALL/i);
    expect(category).toBeInTheDocument();
  });

  // it('Status exist', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Missions />
  //     </Provider>,
  //   );
  //   const leaveBtn = await screen.findAllByText('NOT A MEMBER');
  //   expect(leaveBtn).toHaveLength(10);
  // });

  // it('Click on Join button', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Missions />
  //     </Provider>,
  //   );

  //   act(() => {
  //     const joinBtns = screen.getAllByText('Join Mission');
  //     joinBtns[0].click();
  //   });

  //   const status = await screen.getAllByText('Active Member');
  //   expect(status).toHaveLength(1);
  // });

  // it('Click on Leave button', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Missions />
  //     </Provider>,
  //   );

  //   act(() => {
  //     const leaveBtn = screen.getAllByText('Leave Mission');
  //     leaveBtn[0].click();
  //   });
  //   const status = await screen.getAllByText('NOT A MEMBER');
  //   expect(status).toHaveLength(10);
  // });

  // it('Click more than one Join button', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Missions />
  //     </Provider>,
  //   );

  //   act(() => {
  //     const joinBtns = screen.getAllByText('Join Mission');
  //     joinBtns[0].click();
  //   });

  //   act(() => {
  //     const joinBtns = screen.getAllByText('Join Mission');
  //     joinBtns[0].click();
  //   });

  //   const status = await screen.getAllByText('Active Member');
  //   expect(status).toHaveLength(2);
  // });

  // it('Click on more than one Leave button', async () => {
  //   render(
  //     <Provider store={store}>
  //       <Missions />
  //     </Provider>,
  //   );

  //   act(() => {
  //     const leaveBtn = screen.getAllByText('Leave Mission');
  //     leaveBtn[0].click();
  //   });

  //   act(() => {
  //     const leaveBtn = screen.getAllByText('Leave Mission');
  //     leaveBtn[0].click();
  //   });

  //   const status = await screen.getAllByText('NOT A MEMBER');
  //   expect(status).toHaveLength(10);
  // });
});

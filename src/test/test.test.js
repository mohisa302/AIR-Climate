/* eslint-disable  import/no-duplicates */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TestRenderer, { act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import store from '../redux/store';
import Card from '../components/Card';
import Header from '../components/Header';

describe('Air Climate', () => {
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
    expect(tree).toMatchSnapshot();
  });

  it('Navbar card exist in the Header', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
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

  it('Category is all by default on home', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const category = await screen.getByText(/ALL/i);
    expect(category).toBeInTheDocument();
  });

  it('Gear icon opens selector in the Header', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    act(() => {
      const joinBtns = screen.getAllByRole('tab');
      fireEvent.click(joinBtns[0]);
    });
    const selectElement = document.querySelector('#All');
    expect(selectElement).toBeInTheDocument();
  });

  it('Gear icon closes selector in the Header', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    act(() => {
      const joinBtns = screen.getAllByRole('tab');
      fireEvent.click(joinBtns[0]);
    });

    act(() => {
      const joinBtns = screen.getAllByRole('tab');
      fireEvent.click(joinBtns[0]);
    });
    const selectElement = document.querySelector('#All');
    expect(selectElement).toBeNull();
  });

  it('Snapshot of Card Component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Card name="London" />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/*
 * Copyright (c) 2017. Helmetrex Ltd.
 */

// import { createSelector, createStructuredSelector } from 'reselect';
import { createSelector } from 'reselect';

/**
 * Direct selector to the domain
 */
const selectPanel = () => state => state.panel;

/**
 * Other specific selectors
 */
export const selectPanelData = () =>
  createSelector(selectPanel(), state => state.data);
export const selectPanelSomeTestMethodResult = () =>
  createSelector(selectPanel(), state => state.someTestMethodResult);

export default selectPanel;

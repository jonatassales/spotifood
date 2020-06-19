import React from 'react'
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup } from "@testing-library/react"
import { Playlists } from '../../src/Playlists'
import { TestProviders } from '../utils'
import { querySearchedPlaylists } from '../mocks';

describe('Playlists', () => {

  afterEach(cleanup) 

  it('should render a playlist and its songs from search', () => {
    const { findByText } = render(
      <TestProviders>
        <MockedProvider mocks={[querySearchedPlaylists]}>
          <Playlists search="HardRock" />
        </MockedProvider>
      </TestProviders>
    )

    expect(findByText('HardRock')).toBeDefined();
    expect(findByText("We're Not Gonna Take It")).toBeDefined();
    expect(findByText("Thunderstruck")).toBeDefined();
    expect(findByText("Rock And Roll All Nite")).toBeDefined();
    expect(findByText("You Shook Me All Night Long")).toBeDefined();
  })
})

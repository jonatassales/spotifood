import React, { ReactElement, useCallback } from 'react'
import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import Bugsnag from '@bugsnag/js'
import { useMediaQuery } from 'react-responsive'
import { useQuery, gql } from '@apollo/client'
import { Text, ErrorBoundary } from '@spotifood/ui'
import { SearchBox, FilterBox, Loader } from './components'
import { FilterType } from './types'
import { GlobalConstants } from './utils'

const GET_FILTERS = gql(`
  {
    filters {
      id
      name
      values {
        value,
        name
      }
      validation {
        primitiveType
        entityType
        pattern
        min
        max
      }
    }
  }
`)

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.filter.breakpoints.large}) {
    flex-direction: column;
  }
`

const FiltersBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.large}) {
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
    justify-content: center;
    flex-direction: column;
    width: auto;
  }
`

const FilterText = styled(Text)`
  margin-right: 10px;
`

export default function Filters(): ReactElement {
  const { loading, error, data, refetch } = useQuery(GET_FILTERS, { pollInterval: GlobalConstants.refetchInterval })
  const theme = useTheme()
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.filter.breakpoints.small})` })
  const onError = useCallback(() => Bugsnag.notify(new Error(error?.message)), [error])
  const onAction = useCallback(() => refetch(), [refetch])
  const { t } = useTranslation('filter')

  if (loading) return <Loader />
  if (error) return (
    <ErrorBoundary
      buttonText={t('retry')}
      onAction={onAction}
      onError={onError}
    >
      {t('errorboudaryfetch')}
    </ErrorBoundary>
  )

  return (
    <Container>
      <SearchBox />
      <FiltersBox>
        {!isMobile && <FilterText>{t('filterby')}</FilterText>}
        {data.filters.map((filter: FilterType) => (
          <FilterBox key={filter.id} filter={filter} />
        ))}
      </FiltersBox>
    </Container>
  )
}

import React from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

function People() {

  const data = React.useMemo(
    () => [

      {
        col1: 'Ilyes Batatia',
        col2: 'University of Cambridge',
        col3: 'TBD',
        col4: 'TBD',
      },

      {
        col1: 'Jörg Behler',
        col2: 'Ruhr University Bochum',
        col3: 'TBD',
        col4: 'TBD',
      },
      {
        col1: 'Gábor Csányi',
        col2: 'University of Cambridge',
        col3: 'TBD',
        col4: 'TBD',
      },
      {
        col1: 'Felix Andreas Faber',
        col2: 'University of Cambridge',
        col3: 'TBD',
        col4: 'TBD',
      },
      {
        col1: 'Gianni De Fabritiis',
        col2: 'Pompeu Fabra University of Barcelona',
        col3: 'TBD',
        col4: 'TBD',
      },
      {
        col1: 'Thorben Frank',
        col2: 'TU Berlin',
        col3: 'TBD',
        col4: 'TBD',
      },
      {
        col1: 'Tsz Wai Ko',
        col2: 'University of San Diego',
        col3: 'TBD',
        col4: 'TBD',
      },
      {
        col1: 'O. Anatole von Lilienfeld',
        col2: 'University of Toronto',
        col3: 'TBD',
        col4: 'TBD',
      },
      
      {
        col1: 'Johannes Margraf',
        col2: 'Fritz Haber Institute',
        col3: 'TBD',
        col4: 'TBD',
      },
      

      {
        col1: 'Markus Meuwly',
        col2: 'University of Basel',
        col3: 'TBD',
        col4: 'TBD',
      },

      {
        col1: 'Klaus-Robert Müller',
        col2: 'TU Berlin',
        col3: 'TBD',
        col4: 'TBD',
      },

      {
        col1: 'Igor Poltavskyi',
        col2: 'University of Luxembourg',
        col3: 'TBD',
        col4: 'TBD',
      },

      {
        col1: 'Matthias Rupp',
        col2: ' Luxembourg Institute of Science and Technology',
        col3: 'TBD',
        col4: 'TBD',
      },

      {
        col1: 'Alexandre Tkatchenko',
        col2: 'University of Luxembourg',
        col3: 'TBD',
        col4: 'TBD',
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Participant',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Affiliation',
        accessor: 'col2',
      },
      {
        Header: 'ML model used',
        accessor: 'col3',
      },
      {
        Header: 'Programme slot',
        accessor: 'col4',
      },
    ],
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 3px blue',
                    color: 'black',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '🔽'
                        : '🔼'
                      : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default People;
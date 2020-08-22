import React, {useState} from 'react'; 
import { useTable, useSortBy, useFilters } from 'react-table';
import { columns, data } from './data';
import Navbar from './Navbar'
import '../styles/Table.css'

function EmpTable () {

    const [filterInput,setFilterInput] = useState("");

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
    } = useTable ({
        columns,
        data,
    },
    useFilters,
    useSortBy
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("firstName", value);
        setFilterInput(value);
    };

    return (
        <div>
        <Navbar />
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search by First Name"}
        />
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row,i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    );
};

export default EmpTable;